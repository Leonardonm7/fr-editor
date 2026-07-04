import { type ExerciseLibraryItem } from "@/features/exercise/utils/library";
import {
  addNote,
  getNoteById,
  updateNote,
} from "@/database/repositories/notesRepository";
import {
  getAppSetting,
  setAppSetting,
} from "@/database/repositories/settingsRepository";
import {
  clearWorkoutState,
  loadWorkoutState,
} from "@/database/repositories/workoutRepository";
import { useFocusCallback } from "@/hooks/useFocusCallback";
import { useTranslation } from "@/hooks/useTranslation";
import {
  buildSeriesDetails,
  connectionGroups,
  createExerciseUid,
  days,
  getExerciseVolume,
  getStoredExerciseLoad,
  sortExercisesByLinkedBlocks,
  type ExerciseForm,
  type IndexedExercise,
} from "@/features/note/utils/note";
import { router, useLocalSearchParams } from "expo-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { BackHandler } from "react-native";

type LoadedNote = Awaited<ReturnType<typeof getNoteById>>;
const LOAD_SAVE_DEBOUNCE_MS = 500;
const getLastSelectedDayKey = (noteId: number) =>
  `note:${noteId}:lastSelectedDay`;

const isWorkoutDay = (value: string | null): value is (typeof days)[number] =>
  !!value && days.includes(value as (typeof days)[number]);

const toEditableExercises = (note: NonNullable<LoadedNote>): ExerciseForm[] =>
  note.exercises.map((exercise) => ({
    uid: exercise.uid || createExerciseUid(),
    name: exercise.name,
    description: exercise.description || "",
    series: exercise.series,
    reps: exercise.reps,
    load: exercise.load,
    seriesDetails: buildSeriesDetails(
      exercise.series,
      { reps: exercise.reps, load: exercise.load },
      exercise.seriesDetails,
    ),
    day: exercise.day || "",
    methodology: exercise.methodology || "",
    connectionGroup: exercise.connectionGroup || "",
    libraryId: exercise.libraryId,
    bodyPart: exercise.bodyPart,
    equipment: exercise.equipment,
    target: exercise.target,
    gifUrl: exercise.gifUrl,
  }));

export function useNoteScreen() {
  const { t } = useTranslation();
  const { id } = useLocalSearchParams<{ id?: string | string[] }>();
  const rawId = Array.isArray(id) ? id[0] : id;
  const isNew = rawId === "new";
  const numericId = isNew || !rawId ? null : Number(rawId);

  const [viewMode, setViewMode] = useState(!isNew);
  const [workoutName, setWorkoutName] = useState("");
  const [exercises, setExercises] = useState<ExerciseForm[]>([]);
  const [ready, setReady] = useState(false);
  const [activeDay, setActiveDay] = useState<string>(days[0]);
  const [createdAt, setCreatedAt] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [saveVisible, setSaveVisible] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [workoutSavedState, setWorkoutSavedState] = useState(false);
  const [workoutActionPending, setWorkoutActionPending] = useState(false);
  const loadedNoteRef = useRef<NonNullable<LoadedNote> | null>(null);
  const exercisesRef = useRef<ExerciseForm[]>([]);
  const hasPendingLoadChangesRef = useRef(false);
  const persistTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const persistQueueRef = useRef<Promise<void>>(Promise.resolve());
  const isMountedRef = useRef(true);

  const refreshWorkoutSavedState = useCallback(async () => {
    if (!numericId) {
      setWorkoutSavedState(false);
      return;
    }

    const state = await loadWorkoutState(numericId, activeDay);
    setWorkoutSavedState(!!state);
  }, [activeDay, numericId]);

  const normalizeExerciseForSave = useCallback((exercise: ExerciseForm) => {
    const seriesDetails = buildSeriesDetails(
      exercise.series,
      { reps: exercise.reps, load: exercise.load },
      exercise.seriesDetails,
    );

    return {
      ...exercise,
      reps: seriesDetails[0]?.reps ?? exercise.reps,
      load: getStoredExerciseLoad({
        load: exercise.load,
        seriesDetails,
      }),
      seriesDetails,
    };
  }, []);

  useFocusCallback(() => {
    refreshWorkoutSavedState();
  }, [refreshWorkoutSavedState]);

  const askDelete = useCallback((index: number) => {
    setDeleteIndex(index);
    setDeleteVisible(true);
  }, []);

  const confirmDelete = useCallback(() => {
    setExercises((current) =>
      deleteIndex === null
        ? current
        : current.filter((_, index) => index !== deleteIndex),
    );
    setDeleteIndex(null);
    setDeleteVisible(false);
  }, [deleteIndex]);

  const cancelDelete = useCallback(() => {
    setDeleteIndex(null);
    setDeleteVisible(false);
  }, []);

  const handleBack = useCallback(() => {
    if (saveVisible) {
      setSaveVisible(false);
      return true;
    }

    if (deleteVisible) {
      setDeleteIndex(null);
      setDeleteVisible(false);
      return true;
    }

    if (!viewMode && isNew && !workoutName.trim() && exercises.length === 0) {
      router.back();
      return true;
    }

    if (!viewMode) {
      setViewMode(true);
      setExpandedIndex(null);
      return true;
    }

    router.back();
    return true;
  }, [deleteVisible, exercises.length, isNew, saveVisible, viewMode, workoutName]);

  useFocusCallback(() => {
    const subscription = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBack,
    );

    return () => subscription.remove();
  }, [handleBack]);

  const openWorkout = useCallback(() => {
    if (!numericId || workoutActionPending) return;

    setWorkoutActionPending(true);
    router.push({
      pathname: "/(main)/Workout",
      params: { noteId: numericId, day: activeDay },
    });
    setWorkoutActionPending(false);
  }, [activeDay, numericId, workoutActionPending]);

  const restartWorkout = useCallback(async () => {
    if (!numericId || workoutActionPending) return;

    setWorkoutActionPending(true);
    await clearWorkoutState(numericId, activeDay);
    setWorkoutSavedState(false);
    router.push({
      pathname: "/(main)/Workout",
      params: { noteId: numericId, day: activeDay },
    });
    setWorkoutActionPending(false);
  }, [activeDay, numericId, workoutActionPending]);

  const loadData = useCallback(async () => {
    if (!isNew && numericId) {
      const result = await getNoteById(numericId);
      if (result) {
        loadedNoteRef.current = result;
        setWorkoutName(result.title || "");
        setCreatedAt(result.createdAt || "");
        setUpdatedAt(result.updatedAt || "");
        setExercises(toEditableExercises(result));

        const availableDays = days.filter((day) =>
          result.exercises.some((exercise) => exercise.day === day),
        );
        const storedDay = await getAppSetting(getLastSelectedDayKey(numericId));
        const preferredDay = isWorkoutDay(storedDay)
          ? storedDay
          : (availableDays[0] ?? days[0]);

        setActiveDay(preferredDay);
      } else {
        loadedNoteRef.current = null;
      }
    } else {
      loadedNoteRef.current = null;
      setActiveDay(days[0]);
    }

    setReady(true);
  }, [isNew, numericId]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  useEffect(
    () => () => {
      isMountedRef.current = false;
    },
    [],
  );

  useEffect(() => {
    exercisesRef.current = exercises;
  }, [exercises]);

  const persistExerciseLoads = useCallback(async () => {
    if (
      isNew ||
      !numericId ||
      !loadedNoteRef.current ||
      !hasPendingLoadChangesRef.current
    ) {
      return;
    }

    persistQueueRef.current = persistQueueRef.current
      .catch(() => undefined)
      .then(async () => {
        const currentNote = loadedNoteRef.current;
        if (!currentNote || !hasPendingLoadChangesRef.current) return;

        const loadsByUid = new Map(
          exercisesRef.current.map((exercise) => [exercise.uid, exercise.load]),
        );
        const mergedExercises = currentNote.exercises.map((exercise) => {
          const currentSeriesDetails = exercisesRef.current.find(
            (item) => item.uid === exercise.uid,
          )?.seriesDetails;
          const seriesDetails = buildSeriesDetails(
            exercise.series,
            { reps: exercise.reps, load: exercise.load },
            currentSeriesDetails ?? exercise.seriesDetails,
          );

          return {
            ...exercise,
            reps: seriesDetails[0]?.reps ?? exercise.reps,
            load:
              loadsByUid.get(exercise.uid) ??
              getStoredExerciseLoad({ load: exercise.load, seriesDetails }),
            seriesDetails,
          };
        });
        const storedExercises = mergedExercises.filter((exercise) =>
          exercise.day.trim(),
        );
        const now = new Date().toISOString();
        const title =
          workoutName.trim() ||
          currentNote.title ||
          t("workout");
        const payload = {
          exercises: storedExercises,
          createdAt: currentNote.createdAt || now,
          updatedAt: now,
        };

        await updateNote(numericId, title, payload);

        loadedNoteRef.current = {
          ...currentNote,
          title,
          exercises: mergedExercises,
          updatedAt: now,
        };
        if (isMountedRef.current) {
          setUpdatedAt(now);
        }
        hasPendingLoadChangesRef.current = false;
      });

    await persistQueueRef.current;
  }, [isNew, numericId, t, workoutName]);

  const flushExerciseLoadPersist = useCallback(async () => {
    if (persistTimeoutRef.current) {
      clearTimeout(persistTimeoutRef.current);
      persistTimeoutRef.current = null;
    }

    await persistExerciseLoads();
  }, [persistExerciseLoads]);

  const scheduleExerciseLoadPersist = useCallback(() => {
    if (persistTimeoutRef.current) {
      clearTimeout(persistTimeoutRef.current);
    }

    persistTimeoutRef.current = setTimeout(() => {
      persistTimeoutRef.current = null;
      void persistExerciseLoads();
    }, LOAD_SAVE_DEBOUNCE_MS);
  }, [persistExerciseLoads]);

  const handleViewExerciseLoadChange = useCallback(
    (exerciseUid: string, value: string) => {
      setExercises((current) =>
        current.map((exercise) =>
          exercise.uid === exerciseUid
            ? { ...exercise, load: value }
            : exercise,
        ),
      );
      hasPendingLoadChangesRef.current = true;
      scheduleExerciseLoadPersist();
    },
    [scheduleExerciseLoadPersist],
  );

  const handleViewExerciseLoadBlur = useCallback(() => {
    void flushExerciseLoadPersist();
  }, [flushExerciseLoadPersist]);

  useEffect(
    () => () => {
      if (persistTimeoutRef.current) {
        clearTimeout(persistTimeoutRef.current);
        persistTimeoutRef.current = null;
      }

      void persistExerciseLoads();
    },
    [persistExerciseLoads],
  );

  const save = useCallback(async () => {
    const validExercises = exercises
      .map(normalizeExerciseForSave)
      .filter((exercise) => exercise.day.trim());
    const title = workoutName.trim();
    if (!title || validExercises.length === 0) return;

    const now = new Date().toISOString();
    const payload = {
      exercises: validExercises,
      createdAt: createdAt || now,
      updatedAt: now,
    };

    if (isNew) {
      const createdNoteId = await addNote(title, payload);
      router.replace({
        pathname: "/Note",
        params: { id: String(createdNoteId) },
      });
      return;
    } else if (numericId) {
      await updateNote(numericId, title, payload);
      loadedNoteRef.current = {
        id: numericId,
        title,
        exercises: validExercises,
        createdAt: createdAt || now,
        updatedAt: now,
      };
      setUpdatedAt(now);
    }

    setViewMode(true);
    setExpandedIndex(null);
  }, [
    createdAt,
    exercises,
    isNew,
    normalizeExerciseForSave,
    numericId,
    workoutName,
  ]);

  const confirmSave = useCallback(async () => {
    setSaveVisible(false);
    await save();
  }, [save]);

  const updateExercise = useCallback(
    (
      index: number,
      key: keyof ExerciseForm,
      value: string | ExerciseForm["seriesDetails"],
    ) => {
      setExercises((current) => {
        const updated = [...current];
        const currentExercise = updated[index];
        if (!currentExercise) return current;

        const next = { ...currentExercise, [key]: value } as ExerciseForm;

        if (key === "series" && typeof value === "string") {
          next.seriesDetails = buildSeriesDetails(
            value,
            { reps: next.reps, load: next.load },
            next.seriesDetails,
          );
          next.series = value;
        }

        if (key === "seriesDetails" && Array.isArray(value)) {
          next.seriesDetails = value;
          next.series = String(value.length || next.series);
          next.reps = value[0]?.reps ?? next.reps;
          next.load = getStoredExerciseLoad({
            load: next.load,
            seriesDetails: value,
          });
        }

        updated[index] = next;
        return updated;
      });
    },
    [],
  );

  const addExercise = useCallback(() => {
    const nextIndex = exercises.length;

    setExercises((current) => [
      ...current,
      {
        uid: createExerciseUid(),
        name: t("customExercise"),
        description: "",
        series: "3",
        reps: "12",
        load: "0",
        seriesDetails: buildSeriesDetails("3", { reps: "12", load: "0" }),
        day: activeDay,
        methodology: "",
        connectionGroup: "",
      },
    ]);

    setTimeout(() => setExpandedIndex(nextIndex), 50);
  }, [activeDay, exercises.length, t]);

  const addExerciseFromLibrary = useCallback(
    (libraryExercise: ExerciseLibraryItem) => {
      setExercises((current) => [
        ...current,
        {
          uid: createExerciseUid(),
          name: libraryExercise.name,
          description: "",
          series: "3",
          reps: "12",
          load: "0",
          seriesDetails: buildSeriesDetails("3", { reps: "12", load: "0" }),
          day: activeDay,
          methodology: "",
          connectionGroup: "",
          libraryId: libraryExercise.id,
          bodyPart: libraryExercise.bodyPart,
          equipment: libraryExercise.equipment,
          target: libraryExercise.target,
        },
      ]);
      setExpandedIndex(null);
    },
    [activeDay],
  );

  const duplicateExercise = useCallback(
    (index: number) => {
      const exercise = exercises[index];
      if (!exercise) return;

      const newExercise = {
        ...exercise,
        uid: createExerciseUid(),
        seriesDetails: exercise.seriesDetails?.map((detail) => ({ ...detail })),
      };
      const dayExercises = exercises
        .map((item, currentIndex) => ({ item, currentIndex }))
        .filter(({ item }) => item.day === exercise.day);
      const lastIndex =
        dayExercises[dayExercises.length - 1]?.currentIndex ?? index;

      setExercises((current) => {
        const updated = [...current];
        updated.splice(lastIndex + 1, 0, newExercise);
        return updated;
      });
    },
    [exercises],
  );

  const moveExercise = useCallback(
    (index: number, direction: "up" | "down") => {
      const currentExercise = exercises[index];
      if (!currentExercise) return;

      const sameDayExercises = exercises
        .map((exercise, currentIndex) => ({ ...exercise, currentIndex }))
        .filter((exercise) => exercise.day === currentExercise.day);

      const position = sameDayExercises.findIndex(
        (exercise) => exercise.currentIndex === index,
      );

      if (direction === "up" && position === 0) return;
      if (direction === "down" && position === sameDayExercises.length - 1) {
        return;
      }

      const swapIndex =
        direction === "up"
          ? sameDayExercises[position - 1].currentIndex
          : sameDayExercises[position + 1].currentIndex;

      setExercises((current) => {
        const updated = [...current];
        const temp = updated[index];
        updated[index] = updated[swapIndex];
        updated[swapIndex] = temp;
        return updated;
      });
    },
    [exercises],
  );

  const swapDayExercises = useCallback(
    (sourceDay: string, targetDay: string) => {
      if (!sourceDay || !targetDay || sourceDay === targetDay) return;

      setExercises((current) =>
        current.map((exercise) => {
          if (exercise.day === sourceDay)
            return { ...exercise, day: targetDay };
          if (exercise.day === targetDay)
            return { ...exercise, day: sourceDay };
          return exercise;
        }),
      );
      setActiveDay(targetDay);
      if (numericId) {
        void setAppSetting(getLastSelectedDayKey(numericId), targetDay);
      }
      setExpandedIndex(null);
    },
    [numericId],
  );

  const moveToPrevDay = useCallback(
    (index: number) => {
      const dayIndex = days.indexOf(
        exercises[index].day as (typeof days)[number],
      );
      if (dayIndex <= 0) return;
      updateExercise(index, "day", days[dayIndex - 1]);
    },
    [exercises, updateExercise],
  );

  const moveToNextDay = useCallback(
    (index: number) => {
      const dayIndex = days.indexOf(
        exercises[index].day as (typeof days)[number],
      );
      if (dayIndex >= days.length - 1) return;
      updateExercise(index, "day", days[dayIndex + 1]);
    },
    [exercises, updateExercise],
  );

  const toggleExpand = useCallback((index: number) => {
    setExpandedIndex((current) => (current === index ? null : index));
  }, []);

  const toggleViewMode = useCallback(() => {
    setViewMode((current) => !current);
    setExpandedIndex(null);
  }, []);

  const handleSelectDay = useCallback((day: string) => {
    setActiveDay(day);
    if (numericId) {
      void setAppSetting(getLastSelectedDayKey(numericId), day);
    }
    setExpandedIndex(null);
  }, [numericId]);

  const indexedExercises = useMemo<IndexedExercise[]>(
    () =>
      exercises.map((exercise, index) => ({
        ...exercise,
        index,
      })),
    [exercises],
  );

  const dayExercises = useMemo(
    () => indexedExercises.filter((exercise) => exercise.day === activeDay),
    [activeDay, indexedExercises],
  );

  const viewDayExercises = useMemo(
    () => sortExercisesByLinkedBlocks(dayExercises),
    [dayExercises],
  );

  const getLinkedExercises = useCallback(
    (exerciseIndex: number) => {
      const target = exercises[exerciseIndex];
      if (!target) return [];
      if (!target.connectionGroup.trim()) {
        return [];
      }

      return indexedExercises.filter(
        (exercise) =>
          exercise.index !== exerciseIndex &&
          exercise.day === target.day &&
          exercise.connectionGroup.trim().toUpperCase() ===
            target.connectionGroup.trim().toUpperCase(),
      );
    },
    [exercises, indexedExercises],
  );

  const countByDay = useCallback(
    (day: string) =>
      exercises.filter((exercise) => exercise.day === day).length,
    [exercises],
  );

  const totalExercises = useMemo(
    () => exercises.filter((exercise) => exercise.day.trim()).length,
    [exercises],
  );

  const exercisesWithDescriptionCount = useMemo(
    () => exercises.filter((exercise) => exercise.description.trim()).length,
    [exercises],
  );

  const daysWithExercises = useMemo(
    () =>
      days.filter((day) => exercises.some((exercise) => exercise.day === day)),
    [exercises],
  );

  const linkedBlockCount = useMemo(
    () =>
      new Set(
        exercises
          .filter(
            (exercise) => exercise.day.trim() && exercise.connectionGroup.trim(),
          )
          .map(
            (exercise) =>
              `${exercise.day}|${exercise.connectionGroup
                .trim()
                .toUpperCase()}`,
          ),
      ).size,
    [exercises],
  );

  const totalVolume = useMemo(
    () =>
      exercises.reduce((sum, exercise) => sum + getExerciseVolume(exercise), 0),
    [exercises],
  );

  const activeDayVolume = useMemo(
    () =>
      dayExercises.reduce(
        (sum, exercise) => sum + getExerciseVolume(exercise),
        0,
      ),
    [dayExercises],
  );

  const activeDayConnectionGroups = useMemo(
    () =>
      connectionGroups.filter((group) =>
        dayExercises.some(
          (exercise) => exercise.connectionGroup.trim().toUpperCase() === group,
        ),
      ),
    [dayExercises],
  );

  const activeDayDescriptionsCount = useMemo(
    () => dayExercises.filter((exercise) => exercise.description.trim()).length,
    [dayExercises],
  );

  const canSave = useMemo(
    () =>
      workoutName.trim().length > 0 &&
      totalExercises > 0 &&
      exercises.every((exercise) =>
        exercise.day.trim()
          ? exercise.name.trim() &&
            exercise.series.trim() &&
            exercise.reps.trim() &&
            exercise.load.trim()
          : true,
      ),
    [exercises, totalExercises, workoutName],
  );

  const screenTitle =
    workoutName.trim() || (isNew ? t("newWorkout") : t("workout"));

  return {
    activeDay,
    activeDayConnectionGroups,
    activeDayDescriptionsCount,
    activeDayVolume,
    addExercise,
    addExerciseFromLibrary,
    askDelete,
    canSave,
    cancelDelete,
    confirmDelete,
    confirmSave,
    countByDay,
    createdAt,
    dayExercises,
    deleteVisible,
    duplicateExercise,
    exercises,
    exercisesWithDescriptionCount,
    expandedIndex,
    getLinkedExercises,
    handleSelectDay,
    handleBack,
    handleViewExerciseLoadBlur,
    handleViewExerciseLoadChange,
    isNew,
    moveExercise,
    moveToNextDay,
    moveToPrevDay,
    numericId,
    openWorkout,
    ready,
    restartWorkout,
    save,
    saveVisible,
    screenTitle,
    setWorkoutName,
    setSaveVisible,
    swapDayExercises,
    toggleExpand,
    toggleViewMode,
    totalExercises,
    totalVolume,
    updatedAt,
    updateExercise,
    viewDayExercises,
    viewMode,
    workoutActionPending,
    workoutName,
    workoutSavedState,
    daysWithExercises,
    linkedBlockCount,
  };
}
