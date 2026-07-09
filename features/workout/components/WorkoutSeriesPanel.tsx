import {
  getSeriesDetailForIndex,
  type IndexedExercise,
  type SeriesDetail,
} from "@/features/note/utils/note";
import { type WorkoutCardColors } from "@/features/workout/utils/card";
import {
  getExerciseLibraryItem,
} from "@/features/exercise/utils/library";
import { useTranslation } from "@/hooks/useTranslation";
import { useState } from "react";
import {
  StyleSheet,
  TextInput as NativeTextInput,
  View,
} from "react-native";
import { Icon } from "@/components/ui/Icon";
import { IconButton } from "@/components/ui/IconButton";
import { Text } from "@/components/ui/Text";
import { TouchableRipple } from "@/components/ui/TouchableRipple";
import { getAppFontStyle } from "@/theme/fonts";
import { parseSeriesCount } from "@/utils/workoutSeries";

type WorkoutSeriesPanelProps = {
  accentColor: string;
  allDone: boolean;
  blockId: string;
  colors: WorkoutCardColors;
  completedBlockSeries: number;
  completedSeries: Record<string, number>;
  exerciseUids: string[];
  exercises: IndexedExercise[];
  isLinkedBlock: boolean;
  nextSeries?: number;
  onAddSeries: (uids: string[]) => void;
  onRemoveSeries: (blockId: string, uids: string[], seriesNum: number) => void;
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
  secondaryColor: string;
  totalSeries: number;
  seriesNumbers: number[];
};

export const WorkoutSeriesPanel = ({
  accentColor,
  allDone,
  blockId,
  colors,
  completedBlockSeries,
  completedSeries,
  exerciseUids,
  exercises,
  isLinkedBlock,
  nextSeries,
  onAddSeries,
  onRemoveSeries,
  onSeriesDetailChange,
  onSeriesTap,
  secondaryColor,
  seriesNumbers,
  totalSeries,
}: WorkoutSeriesPanelProps) => {
  const { language, t } = useTranslation();
  const [focusedLoadKey, setFocusedLoadKey] = useState<string | null>(null);

  return (
    <View style={[styles.seriesPanel, { borderColor: colors.border }]}>
      <View style={[styles.seriesPanelHeader, { borderColor: colors.border }]}>
        <View
          style={[styles.seriesPanelAccent, { backgroundColor: accentColor }]}
        />
        <Text style={[styles.seriesPanelLabel, { color: colors.muted }]}>
          {t("series")}
        </Text>
        <View
          style={[
            styles.seriesCountBadge,
            {
              backgroundColor: allDone
                ? `${secondaryColor}22`
                : `${accentColor}22`,
              borderColor: allDone
                ? `${secondaryColor}44`
                : `${accentColor}44`,
            },
          ]}
        >
          <Text
            style={[
              styles.seriesCountText,
              { color: allDone ? secondaryColor : accentColor },
            ]}
          >
            {completedBlockSeries}/{totalSeries}
          </Text>
        </View>
        <IconButton
          icon="plus"
          size={16}
          iconColor={accentColor}
          onPress={() => onAddSeries(exerciseUids)}
          style={[
            styles.seriesHeaderButton,
            {
              backgroundColor: `${accentColor}18`,
              borderColor: `${accentColor}55`,
            },
          ]}
        />
        <IconButton
          icon="minus"
          size={16}
          disabled={totalSeries <= 1}
          iconColor={totalSeries <= 1 ? colors.muted : "#D04444"}
          onPress={() => onRemoveSeries(blockId, exerciseUids, totalSeries)}
          style={[
            styles.seriesHeaderButton,
            {
              backgroundColor:
                totalSeries <= 1 ? colors.panel : "rgba(208, 68, 68, 0.08)",
              borderColor:
                totalSeries <= 1 ? colors.border : "rgba(208, 68, 68, 0.34)",
              opacity: totalSeries <= 1 ? 0.42 : 1,
            },
          ]}
        />
      </View>

      {seriesNumbers.map((seriesNum) => {
        const activeExercises = exercises.filter(
          (exercise) => seriesNum <= parseSeriesCount(exercise.series),
        );
        const seriesKeys = activeExercises.map(
          (exercise) => `${exercise.uid}-${seriesNum}`,
        );
        const isDone =
          seriesKeys.length > 0 &&
          seriesKeys.every((key) => !!completedSeries[key]);
        const isCurrent = seriesNum === nextSeries;
        const isLast = seriesNum === totalSeries;
        const canToggleSeries = isCurrent || isDone;

        return (
          <TouchableRipple
            borderless
            disabled={!canToggleSeries}
            key={seriesNum}
            onPress={() => onSeriesTap(blockId, activeExercises, seriesNum)}
          >
            <View
              style={[
                styles.seriesRow,
                !isLast && {
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  borderBottomColor: colors.border,
                },
                isCurrent && { backgroundColor: `${accentColor}0D` },
              ]}
            >
              <View
                style={[
                  styles.seriesCheck,
                  {
                    backgroundColor: isDone
                      ? accentColor
                      : isCurrent
                        ? `${accentColor}33`
                        : colors.panel,
                    borderColor: isDone
                      ? accentColor
                      : isCurrent
                        ? accentColor
                        : colors.border,
                    opacity: canToggleSeries ? 1 : 0.5,
                  },
                ]}
              >
                {isDone ? (
                  <Icon source="check" size={14} color="#FFFFFF" />
                ) : (
                  <Text
                    style={[
                      styles.seriesCheckNum,
                      { color: isCurrent ? accentColor : colors.muted },
                    ]}
                  >
                    {seriesNum}
                  </Text>
                )}
              </View>

              <View style={styles.seriesExerciseList}>
                {activeExercises.map((exercise) => {
                  const detail = getSeriesDetailForIndex(exercise, seriesNum);
                  const libraryExercise = getExerciseLibraryItem(
                    exercise.libraryId,
                    language,
                  );
                  const exerciseName =
                    libraryExercise?.name || exercise.name || t("customExercise");
                  const loadInputKey = `${exercise.uid}-${seriesNum}`;
                  const isLoadFocused = focusedLoadKey === loadInputKey;

                  return (
                    <View key={exercise.uid} style={styles.exerciseSeriesLine}>
                      {isLinkedBlock && (
                        <Text
                          numberOfLines={1}
                          style={[styles.seriesExerciseName, { color: colors.ink }]}
                        >
                          {exerciseName}
                        </Text>
                      )}
                      <View style={styles.seriesRowData}>
                        <View style={styles.seriesMetric}>
                          <Text
                            numberOfLines={1}
                            style={[
                              styles.seriesMetricVal,
                              {
                                color: isDone
                                  ? colors.muted
                                  : isCurrent
                                    ? colors.ink
                                    : colors.muted,
                              },
                            ]}
                          >
                            {detail.reps || "-"}
                          </Text>
                          <Text
                            style={[
                              styles.seriesMetricUnit,
                              { color: colors.muted },
                            ]}
                          >
                            reps
                          </Text>
                        </View>
                        <Text style={[styles.seriesCross, { color: colors.border }]}>
                          x
                        </Text>
                        <View
                          style={[
                            styles.seriesMetric,
                            styles.seriesLoadMetric,
                            {
                              borderBottomColor: isLoadFocused
                                ? accentColor
                                : colors.border,
                            },
                          ]}
                        >
                          <NativeTextInput
                            value={detail.load}
                            keyboardType="decimal-pad"
                            onBlur={() =>
                              setFocusedLoadKey((current) =>
                                current === loadInputKey ? null : current,
                              )
                            }
                            onChangeText={(value) =>
                              onSeriesDetailChange(
                                exercise.uid,
                                seriesNum,
                                "load",
                                value,
                              )
                            }
                            onFocus={() => setFocusedLoadKey(loadInputKey)}
                            cursorColor={accentColor}
                            selectionColor={accentColor}
                            style={[
                              getAppFontStyle(styles.seriesLoadInput),
                              styles.seriesLoadInput,
                              {
                                color: isDone
                                  ? colors.muted
                                  : isCurrent
                                    ? colors.ink
                                    : colors.muted,
                              },
                            ]}
                          />
                          <Text
                            style={[
                              styles.seriesMetricUnit,
                              { color: colors.muted },
                            ]}
                          >
                            kg
                          </Text>
                        </View>
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>
          </TouchableRipple>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  exerciseSeriesLine: {
    gap: 4,
    minWidth: 0,
  },
  seriesCheck: {
    alignItems: "center",
    borderRadius: 7,
    borderWidth: 1,
    height: 32,
    justifyContent: "center",
    width: 32,
  },
  seriesCheckNum: {
    fontSize: 13,
    fontWeight: "900",
  },
  seriesCountBadge: {
    borderRadius: 6,
    borderWidth: 1,
    paddingHorizontal: 7,
    paddingVertical: 2,
  },
  seriesCountText: {
    fontSize: 11,
    fontWeight: "900",
  },
  seriesCross: {
    fontSize: 13,
    fontWeight: "400",
  },
  seriesExerciseList: {
    flex: 1,
    gap: 6,
    minWidth: 0,
  },
  seriesExerciseName: {
    fontSize: 12,
    fontWeight: "900",
    lineHeight: 16,
    width: "100%",
  },
  seriesHeaderButton: {
    borderRadius: 7,
    borderWidth: 1,
    height: 30,
    margin: 0,
    width: 30,
  },
  seriesLoadInput: {
    flex: 1,
    fontSize: 18,
    fontWeight: "900",
    height: 26,
    includeFontPadding: false,
    lineHeight: 22,
    minWidth: 0,
    padding: 0,
  },
  seriesLoadMetric: {
    borderBottomWidth: 1,
    paddingBottom: 1,
  },
  seriesMetric: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    gap: 3,
    minWidth: 0,
  },
  seriesMetricUnit: {
    flexShrink: 0,
    fontSize: 10,
    fontWeight: "700",
    paddingBottom: 1,
  },
  seriesMetricVal: {
    flexShrink: 1,
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 22,
    minWidth: 0,
  },
  seriesPanel: {
    borderRadius: 8,
    borderWidth: 1,
    overflow: "hidden",
  },
  seriesPanelAccent: {
    borderRadius: 2,
    height: 14,
    width: 3,
  },
  seriesPanelHeader: {
    alignItems: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  seriesPanelLabel: {
    flex: 1,
    fontSize: 11,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  seriesRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  seriesRowData: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    gap: 8,
    minWidth: 0,
  },
});
