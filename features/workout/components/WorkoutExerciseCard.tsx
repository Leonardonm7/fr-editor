import {
  ExercisePreviewModal,
  type ExercisePreview,
} from "@/features/exercise/components/ExercisePreviewModal";
import { WorkoutExerciseCardHeader } from "@/features/workout/components/WorkoutExerciseCardHeader";
import { WorkoutExerciseDescriptionPanel } from "@/features/workout/components/WorkoutExerciseDescriptionPanel";
import { WorkoutExercisePreviewStrip } from "@/features/workout/components/WorkoutExercisePreviewStrip";
import { WorkoutRestPresetPicker } from "@/features/workout/components/WorkoutRestPresetPicker";
import { WorkoutSeriesPanel } from "@/features/workout/components/WorkoutSeriesPanel";
import {
  getWorkoutAccentColor,
  getWorkoutCardColors,
  getWorkoutCardSubtitle,
  getWorkoutCardTitle,
  getWorkoutSeriesKeys,
  getWorkoutSeriesNumbers,
} from "@/features/workout/utils/card";
import { type IndexedExercise, type SeriesDetail } from "@/features/note/utils/note";
import { getExerciseLibraryItem } from "@/features/exercise/utils/library";
import { useTranslation } from "@/hooks/useTranslation";
import { useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, useTheme } from "react-native-paper";

export type RestState = { endsAt: number; remaining: number; total: number };

type WorkoutExerciseCardProps = {
  blockId: string;
  completedSeries: Record<string, number>;
  exercises: IndexedExercise[];
  expanded: boolean;
  groupKey: string;
  methodology: string;
  onAddSeries: (uids: string[]) => void;
  onRemoveSeries: (blockId: string, uids: string[], seriesNum: number) => void;
  onRestTimeChange: (value: number) => void;
  onSeriesDetailChange: (
    uid: string,
    seriesNum: number,
    key: keyof SeriesDetail,
    value: string,
  ) => void;
  onSeriesTap: (
    blockId: string,
    exercises: IndexedExercise[],
    seriesNum: number,
  ) => void;
  onToggleExpanded: () => void;
  orderIndex: number;
  restTime: number;
};

export function WorkoutExerciseCard({
  blockId,
  completedSeries,
  exercises,
  expanded,
  groupKey,
  methodology,
  onAddSeries,
  onRemoveSeries,
  onRestTimeChange,
  onSeriesDetailChange,
  onSeriesTap,
  onToggleExpanded,
  orderIndex,
  restTime,
}: WorkoutExerciseCardProps) {
  const theme = useTheme();
  const { language, t } = useTranslation();
  const colors = useMemo(() => getWorkoutCardColors(theme), [theme]);
  const [exercisePreview, setExercisePreview] =
    useState<ExercisePreview | null>(null);

  const isLinkedBlock = exercises.length > 1;
  const exerciseUids = useMemo(
    () => exercises.map((exercise) => exercise.uid),
    [exercises],
  );
  const seriesNumbers = useMemo(
    () => getWorkoutSeriesNumbers(exercises),
    [exercises],
  );
  const totalSeries = seriesNumbers.length;
  const completedBlockSeries = seriesNumbers.filter((seriesNum) => {
    const keys = getWorkoutSeriesKeys(exercises, seriesNum);
    return keys.length > 0 && keys.every((key) => completedSeries[key]);
  }).length;
  const nextSeries = seriesNumbers.find((seriesNum) => {
    const keys = getWorkoutSeriesKeys(exercises, seriesNum);
    return keys.some((key) => !completedSeries[key]);
  });
  const allDone = !nextSeries;
  const accentColor = getWorkoutAccentColor(groupKey, colors);
  const displayExercises = useMemo(
    () =>
      exercises.map((exercise) => ({
        ...exercise,
        name:
          getExerciseLibraryItem(exercise.libraryId, language)?.name ||
          exercise.name,
      })),
    [exercises, language],
  );
  const title = getWorkoutCardTitle({
    blockLabel: t("block"),
    exercises: displayExercises,
    fallbackName: t("customExercise"),
    groupKey,
    methodology,
  });
  const subtitle = getWorkoutCardSubtitle(
    displayExercises,
    t("customExercise"),
  );

  return (
    <>
      <ExercisePreviewModal
        preview={exercisePreview}
        onClose={() => setExercisePreview(null)}
      />
      <View
        style={[
          styles.card,
          {
            backgroundColor: colors.surface,
            borderColor: allDone ? theme.colors.secondary : colors.border,
          },
        ]}
      >
        <View style={[styles.orderRail, { borderColor: colors.border }]}>
          <Text style={[styles.orderText, { color: colors.muted }]}>
            {String(orderIndex).padStart(2, "0")}
          </Text>
          <View style={[styles.orderMark, { backgroundColor: accentColor }]} />
        </View>

        <View style={styles.cardBody}>
          <WorkoutExerciseCardHeader
            accentColor={accentColor}
            allDone={allDone}
            colors={colors}
            completedBlockSeries={completedBlockSeries}
            expanded={expanded}
            exercises={exercises}
            groupKey={groupKey}
            isLinkedBlock={isLinkedBlock}
            methodology={methodology}
            onPreview={setExercisePreview}
            onToggleExpanded={onToggleExpanded}
            secondaryColor={theme.colors.secondary}
            secondaryContainerColor={theme.colors.secondaryContainer}
            subtitle={subtitle}
            title={title}
            totalSeries={totalSeries}
          />

          {expanded && (
            <>
              {isLinkedBlock && (
                <WorkoutExercisePreviewStrip
                  colors={colors}
                  exercises={exercises}
                  onPreview={setExercisePreview}
                />
              )}

              <WorkoutExerciseDescriptionPanel
                colors={colors}
                exercises={exercises}
                isLinkedBlock={isLinkedBlock}
              />

              <WorkoutSeriesPanel
                accentColor={accentColor}
                allDone={allDone}
                blockId={blockId}
                colors={colors}
                completedBlockSeries={completedBlockSeries}
                completedSeries={completedSeries}
                exerciseUids={exerciseUids}
                exercises={exercises}
                isLinkedBlock={isLinkedBlock}
                nextSeries={nextSeries}
                onAddSeries={onAddSeries}
                onRemoveSeries={onRemoveSeries}
                onSeriesDetailChange={onSeriesDetailChange}
                onSeriesTap={onSeriesTap}
                secondaryColor={theme.colors.secondary}
                seriesNumbers={seriesNumbers}
                totalSeries={totalSeries}
              />

              <WorkoutRestPresetPicker
                colors={colors}
                restTime={restTime}
                onRestTimeChange={onRestTimeChange}
              />
            </>
          )}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    overflow: "hidden",
  },
  cardBody: {
    flex: 1,
    gap: 14,
    paddingHorizontal: 12,
    paddingVertical: 14,
  },
  orderMark: {
    height: 26,
    marginTop: 10,
    width: 3,
  },
  orderRail: {
    alignItems: "center",
    alignSelf: "stretch",
    borderRightWidth: 1,
    justifyContent: "center",
    width: 38,
  },
  orderText: {
    fontSize: 12,
    fontWeight: "900",
  },
});
