import {
  getNoteById,
} from "@/database/repositories/notesRepository";
import {
  clearWorkoutState,
  loadWorkoutState,
  saveWorkoutState,
} from "@/database/repositories/workoutRepository";
import {
  buildSeriesDetails,
  sortExercisesByLinkedBlocks,
  type IndexedExercise,
  type SeriesDetail,
} from "@/features/note/utils/note";
import { getExerciseLibraryItem } from "@/features/exercise/utils/library";
import { useTranslation } from "@/hooks/useTranslation";
import {
  clearRestNotifications,
  clearRestTimerNotification,
  setupRestNotifications,
  showRestFinishedNotification,
  showRestTimerNotification,
  vibrateRestFinished,
} from "@/features/workout/services/restNotificationService";
import { playRestFinishedSound } from "@/features/workout/services/restSoundService";
import { type RestState } from "@/features/workout/utils/card";
import { parseSeriesCount } from "@/utils/workoutSeries";
import { router, useLocalSearchParams } from "expo-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { BackHandler } from "react-native";

const TIMER_TICK_MS = 100;

type WorkoutProgressState = {
  completedSeries?: Record<string, number>;
  restTime?: number;
};

export type WorkoutExerciseBlock = {
  exercises: IndexedExercise[];
  groupKey: string;
  id: string;
  methodology: string;
};

const getWorkoutBlockKey = (exercise: IndexedExercise) => {
  const group = exercise.connectionGroup.trim().toUpperCase();

  return group;
};

const buildWorkoutBlocks = (exercises: IndexedExercise[]) => {
  const linkedBlocks = new Map<string, IndexedExercise[]>();

  exercises.forEach((exercise) => {
    const key = getWorkoutBlockKey(exercise);
    if (!key) return;

    linkedBlocks.set(key, [...(linkedBlocks.get(key) ?? []), exercise]);
  });

  const addedLinkedBlocks = new Set<string>();
  const blocks: WorkoutExerciseBlock[] = [];

  exercises.forEach((exercise) => {
    const key = getWorkoutBlockKey(exercise);

    if (!key) {
      blocks.push({
        exercises: [exercise],
        groupKey: "",
        id: exercise.uid,
        methodology: exercise.methodology.trim(),
      });
      return;
    }

    if (addedLinkedBlocks.has(key)) return;

    const blockExercises = linkedBlocks.get(key) ?? [exercise];
    const methodologies = Array.from(
      new Set(
        blockExercises
          .map((item) => item.methodology.trim())
          .filter(Boolean),
      ),
    );

    blocks.push({
      exercises: blockExercises,
      groupKey: exercise.connectionGroup.trim().toUpperCase(),
      id: `linked-${exercise.day}-${key}`,
      methodology: methodologies.join(" + "),
    });
    addedLinkedBlocks.add(key);
  });

  return blocks;
};

const getWorkoutBlockLabel = (
  block: WorkoutExerciseBlock,
  options: {
    blockLabel: string;
    fallbackName: string;
    language: "en" | "pt-BR";
    methodologyName: (value: string) => string;
  },
) => {
  if (block.exercises.length > 1) {
    if (block.methodology)
      return `${options.methodologyName(block.methodology)} / ${options.blockLabel} ${block.groupKey}`;
    return `${options.blockLabel} ${block.groupKey}`;
  }

  const exercise = block.exercises[0];
  return (
    getExerciseLibraryItem(exercise?.libraryId, options.language)?.name ||
    exercise?.name ||
    options.fallbackName
  );
};

export const useWorkout = () => {
  const { language, methodologyName, t } = useTranslation();
  const { noteId, day } = useLocalSearchParams<{
    noteId: string;
    day: string;
  }>();
  const numericId = Number(noteId);
  const selectedDay = day ?? "";

  const [exercises, setExercises] = useState<IndexedExercise[]>([]);
  const [ready, setReady] = useState(false);
  const [completedSeries, setCompletedSeries] = useState<
    Record<string, number>
  >({});
  const [activeRests, setActiveRests] = useState<Record<string, RestState>>({});
  const [expandedBlockId, setExpandedBlockId] = useState<string | null>(null);
  const [restTime, setRestTime] = useState(60);
  const previousActiveRestsRef = useRef<Record<string, RestState>>({});
  const canceledRestIdsRef = useRef(new Set<string>());
  const notificationRestKeyRef = useRef<string | null>(null);
  const pendingNotificationRestKeyRef = useRef<string | null>(null);

  useEffect(() => {
    (async () => {
      const note = await getNoteById(numericId);
      if (!note) {
        router.back();
        return;
      }

      const indexed: IndexedExercise[] = note.exercises.map((ex, i) => ({
        uid: ex.uid,
        name: ex.name,
        description: ex.description,
        series: ex.series,
        reps: ex.reps,
        load: ex.load,
        seriesDetails: ex.seriesDetails,
        day: ex.day,
        methodology: ex.methodology,
        connectionGroup: ex.connectionGroup,
        libraryId: ex.libraryId,
        bodyPart: ex.bodyPart,
        equipment: ex.equipment,
        target: ex.target,
        gifUrl: ex.gifUrl,
        index: i,
      }));
      const dayExercises = indexed.filter((ex) => ex.day === selectedDay);
      const sorted = sortExercisesByLinkedBlocks(dayExercises);
      const state = (await loadWorkoutState(
        numericId,
        selectedDay,
      )) as WorkoutProgressState | null;

      setExercises(sorted);
      setCompletedSeries(state?.completedSeries ?? {});
      setRestTime(state?.restTime ?? 60);
      setReady(true);
    })();
  }, [numericId, selectedDay]);

  const workoutBlocks = useMemo(() => buildWorkoutBlocks(exercises), [exercises]);
  const blockSeries = useMemo(
    () =>
      workoutBlocks.flatMap((block) => {
        const total = Math.max(
          ...block.exercises.map((exercise) =>
            parseSeriesCount(exercise.series),
          ),
          1,
        );

        return Array.from({ length: total }, (_, index) => {
          const series = index + 1;
          const keys = block.exercises
            .filter((exercise) => series <= parseSeriesCount(exercise.series))
            .map((exercise) => `${exercise.uid}-${series}`);

          return { keys };
        });
      }),
    [workoutBlocks],
  );
  const totalSeries = blockSeries.length;
  const completedCount = blockSeries.filter(
    (series) =>
      series.keys.length > 0 &&
      series.keys.every((key) => completedSeries[key]),
  ).length;
  const finished = totalSeries > 0 && completedCount === totalSeries;
  const overallProgress = totalSeries > 0 ? completedCount / totalSeries : 0;
  const hasActiveRest = Object.keys(activeRests).length > 0;
  const activeRest = useMemo(() => {
    const [blockId, restState] = Object.entries(activeRests).find(
      ([, rest]) => rest.remaining > 0,
    ) ?? [null, null];

    if (!blockId || !restState) return null;

    const block = workoutBlocks.find((item) => item.id === blockId);

    return {
      blockId,
      endsAt: restState.endsAt,
      label: block
        ? getWorkoutBlockLabel(block, {
            blockLabel: t("block"),
            fallbackName: t("customExercise"),
            language,
            methodologyName,
          })
        : t("nextSeries"),
      remaining: restState.remaining,
      total: restState.total,
    };
  }, [activeRests, language, methodologyName, t, workoutBlocks]);

  const getBlockLabel = useCallback(
    (blockId: string) => {
      const block = workoutBlocks.find((item) => item.id === blockId);
      return block
        ? getWorkoutBlockLabel(block, {
            blockLabel: t("block"),
            fallbackName: t("customExercise"),
            language,
            methodologyName,
          })
        : t("nextSeries");
    },
    [language, methodologyName, t, workoutBlocks],
  );

  const saveProgress = useCallback(async () => {
    if (!ready) return;

    await saveWorkoutState(numericId, selectedDay, {
      completedSeries,
      restTime,
    });
  }, [completedSeries, numericId, ready, restTime, selectedDay]);

  useEffect(() => {
    if (!ready) return;
    void saveProgress();
  }, [ready, saveProgress]);

  useEffect(() => {
    if (!ready) return;
    void setupRestNotifications();
  }, [ready]);

  useEffect(() => {
    if (!ready || !hasActiveRest) return;

    const timer = setInterval(() => {
      setActiveRests((currentRests) => {
        let changed = false;
        const nextRests: Record<string, RestState> = {};

        Object.entries(currentRests).forEach(([uid, rest]) => {
          const remaining = Math.max(0, rest.endsAt - Date.now());
          if (remaining !== rest.remaining) changed = true;
          if (remaining > 0) {
            nextRests[uid] = { ...rest, remaining };
          } else {
            changed = true;
          }
        });

        return changed ? nextRests : currentRests;
      });
    }, TIMER_TICK_MS);

    return () => clearInterval(timer);
  }, [hasActiveRest, ready]);

  useEffect(() => {
    const previousRests = previousActiveRestsRef.current;

    Object.entries(previousRests).forEach(([blockId, previousRest]) => {
      const isStillActive = !!activeRests[blockId];
      if (isStillActive || previousRest.remaining <= 0) return;

      const wasCanceled = canceledRestIdsRef.current.has(blockId);
      if (wasCanceled) {
        canceledRestIdsRef.current.delete(blockId);
        return;
      }

      const label = getBlockLabel(blockId);
      void (async () => {
        await playRestFinishedSound(`${label}:${previousRest.endsAt}`);
        vibrateRestFinished();
        await showRestFinishedNotification(label, {
          body: t("restFinishedBody", { label }),
          title: t("restFinished"),
        });
      })();
    });

    previousActiveRestsRef.current = activeRests;
  }, [activeRests, getBlockLabel, t]);

  useEffect(() => {
    if (!activeRest) {
      notificationRestKeyRef.current = null;
      pendingNotificationRestKeyRef.current = null;
      void clearRestTimerNotification();
      return;
    }

    const restKey = `${activeRest.blockId}:${activeRest.endsAt}`;
    if (
      notificationRestKeyRef.current === restKey ||
      pendingNotificationRestKeyRef.current === restKey
    ) {
      return;
    }

    pendingNotificationRestKeyRef.current = restKey;
    void showRestTimerNotification({
      endsAt: activeRest.endsAt,
      finishedBody: t("restFinishedBody", { label: activeRest.label }),
      finishedTitle: t("restFinished"),
      label: activeRest.label,
      remainingMs: activeRest.remaining,
      remainingSuffix: t("restRemaining"),
      title: t("restRunning"),
    }).then((shown) => {
      if (pendingNotificationRestKeyRef.current !== restKey) return;
      if (shown) notificationRestKeyRef.current = restKey;
      pendingNotificationRestKeyRef.current = null;
    });
  }, [activeRest, t]);

  useEffect(
    () => () => {
      void clearRestNotifications();
    },
    [],
  );

  const handleSeriesTap = useCallback(
    (blockId: string, blockExercises: IndexedExercise[], seriesNum: number) => {
      const seriesKeys = blockExercises
        .filter((exercise) => seriesNum <= parseSeriesCount(exercise.series))
        .map((exercise) => `${exercise.uid}-${seriesNum}`);
      const alreadyDone =
        seriesKeys.length > 0 &&
        seriesKeys.every((key) => !!completedSeries[key]);

      setCompletedSeries((currentCompleted) => {
        const nextCompleted = { ...currentCompleted };

        if (alreadyDone) {
          seriesKeys.forEach((key) => {
            delete nextCompleted[key];
          });
          return nextCompleted;
        }

        seriesKeys.forEach((key) => {
          nextCompleted[key] = 1;
        });
        return nextCompleted;
      });

      if (alreadyDone) {
        void clearRestNotifications();
      }

      const shouldStartRest = !alreadyDone && restTime > 0;
      const total = restTime * 1000;
      const endsAt = Date.now() + total;

      if (shouldStartRest && !hasActiveRest) {
        const restKey = `${blockId}:${endsAt}`;
        const label = getBlockLabel(blockId);
        pendingNotificationRestKeyRef.current = restKey;
        void showRestTimerNotification({
          endsAt,
          finishedBody: t("restFinishedBody", { label }),
          finishedTitle: t("restFinished"),
          label,
          remainingMs: total,
          remainingSuffix: t("restRemaining"),
          title: t("restRunning"),
        }).then((shown) => {
          if (pendingNotificationRestKeyRef.current !== restKey) return;
          if (shown) notificationRestKeyRef.current = restKey;
          pendingNotificationRestKeyRef.current = null;
        });
      }

      setActiveRests((currentRests) => {
        if (alreadyDone) {
          const nextRests = { ...currentRests };
          canceledRestIdsRef.current.add(blockId);
          delete nextRests[blockId];
          return nextRests;
        }

        if (restTime <= 0) return currentRests;

        return {
          ...currentRests,
          [blockId]: {
            endsAt,
            remaining: total,
            total,
          },
        };
      });
    },
    [completedSeries, getBlockLabel, hasActiveRest, restTime, t],
  );

  const handleSkipRest = useCallback((blockId: string) => {
    void clearRestNotifications();
    setActiveRests((currentRests) => {
      const nextRests = { ...currentRests };
      canceledRestIdsRef.current.add(blockId);
      delete nextRests[blockId];
      return nextRests;
    });
  }, []);

  const handleToggleBlock = useCallback((blockId: string) => {
    setExpandedBlockId((currentId) => (currentId === blockId ? null : blockId));
  }, []);

  const handleSeriesDetailChange = useCallback(
    (
      uid: string,
      seriesNum: number,
      key: keyof SeriesDetail,
      value: string,
    ) => {
      setExercises((currentExercises) =>
        currentExercises.map((exercise) => {
          if (exercise.uid !== uid) return exercise;

          const seriesDetails = buildSeriesDetails(
            exercise.series,
            { reps: exercise.reps, load: exercise.load },
            exercise.seriesDetails,
          );
          const detailIndex = seriesNum - 1;
          const currentDetail = seriesDetails[detailIndex] ?? {
            reps: exercise.reps,
            load: exercise.load,
          };
          const nextSeriesDetails = [...seriesDetails];
          nextSeriesDetails[detailIndex] = {
            ...currentDetail,
            [key]: value,
          };

          return {
            ...exercise,
            reps:
              key === "reps" && detailIndex === 0
                ? value
                : (nextSeriesDetails[0]?.reps ?? exercise.reps),
            load:
              key === "load" && detailIndex === 0
                ? value
                : (nextSeriesDetails[0]?.load ?? exercise.load),
            seriesDetails: nextSeriesDetails,
          };
        }),
      );
    },
    [],
  );

  const handleAddSeries = useCallback((uids: string[]) => {
    setExercises((currentExercises) =>
      currentExercises.map((exercise) => {
        if (!uids.includes(exercise.uid)) return exercise;

        const seriesCount = parseInt(exercise.series, 10) || 1;
        const seriesDetails = buildSeriesDetails(
          exercise.series,
          { reps: exercise.reps, load: exercise.load },
          exercise.seriesDetails,
        );
        const lastDetail = seriesDetails[seriesDetails.length - 1] ?? {
          reps: exercise.reps,
          load: exercise.load,
        };

        return {
          ...exercise,
          series: String(seriesCount + 1),
          seriesDetails: [...seriesDetails, { ...lastDetail }],
        };
      }),
    );
  }, []);

  const handleRemoveSeries = useCallback(
    (blockId: string, uids: string[], seriesNum: number) => {
      void clearRestNotifications();

      setExercises((currentExercises) =>
        currentExercises.map((exercise) => {
          if (!uids.includes(exercise.uid)) return exercise;

          const seriesCount = parseInt(exercise.series, 10) || 1;
          if (seriesCount <= 1) return exercise;
          if (seriesNum > seriesCount) return exercise;

          const nextSeriesDetails = buildSeriesDetails(
            exercise.series,
            { reps: exercise.reps, load: exercise.load },
            exercise.seriesDetails,
          ).filter((_, index) => index !== seriesNum - 1);

          return {
            ...exercise,
            series: String(seriesCount - 1),
            reps: nextSeriesDetails[0]?.reps ?? exercise.reps,
            load: nextSeriesDetails[0]?.load ?? exercise.load,
            seriesDetails: nextSeriesDetails,
          };
        }),
      );

      setCompletedSeries((currentCompleted) => {
        const nextCompleted: Record<string, number> = {};

        Object.entries(currentCompleted).forEach(([key, value]) => {
          const uid = uids.find((item) => key.startsWith(`${item}-`));
          if (!uid) {
            nextCompleted[key] = value;
            return;
          }

          const series = parseInt(key.slice(uid.length + 1), 10);
          if (!Number.isFinite(series) || series === seriesNum) return;

          const nextSeries = series > seriesNum ? series - 1 : series;
          nextCompleted[`${uid}-${nextSeries}`] = value;
        });

        return nextCompleted;
      });

      setActiveRests((currentRests) => {
        const nextRests = { ...currentRests };
        canceledRestIdsRef.current.add(blockId);
        delete nextRests[blockId];
        return nextRests;
      });
    },
    [],
  );

  const handleDismiss = useCallback(async () => {
    await clearRestNotifications();
    await saveProgress();
    router.back();
  }, [saveProgress]);

  const handleFinish = useCallback(async () => {
    await clearRestNotifications();
    await clearWorkoutState(numericId, selectedDay);
    router.back();
  }, [numericId, selectedDay]);

  useEffect(() => {
    const sub = BackHandler.addEventListener("hardwareBackPress", () => {
      void handleDismiss();
      return true;
    });
    return () => sub.remove();
  }, [handleDismiss]);

  return {
    activeRest,
    completedCount,
    completedSeries,
    day: selectedDay,
    exercises,
    expandedBlockId,
    finished,
    handleAddSeries,
    handleDismiss,
    handleFinish,
    handleRemoveSeries,
    handleSeriesDetailChange,
    handleSeriesTap,
    handleSkipRest,
    handleToggleBlock,
    overallProgress,
    ready,
    restTime,
    setRestTime,
    totalSeries,
    workoutBlocks,
  };
};
