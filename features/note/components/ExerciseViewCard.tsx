import { ExerciseGifPreviewButton } from "@/features/exercise/components/ExerciseGifPreviewButton";
import {
  ExercisePreviewModal,
  type ExercisePreview,
} from "@/features/exercise/components/ExercisePreviewModal";
import {
  getExerciseGifSource,
  getExerciseLibraryInstructions,
  getExerciseLibraryItem,
} from "@/features/exercise/utils/library";
import {
  buildSeriesDetails,
  connectionColors,
  formatLoadDisplay,
  type IndexedExercise,
} from "@/features/note/utils/note";
import { formatExerciseTag } from "@/features/note/utils/editSection";
import { useTranslation } from "@/hooks/useTranslation";
import { useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import type { MD3Theme } from "react-native-paper";
import { Icon, Text, useTheme } from "react-native-paper";

type ExerciseViewCardProps = {
  exercise: IndexedExercise;
  order: number;
};

const getCardColors = (theme: MD3Theme) => ({
  accent: theme.colors.primary,
  border: theme.dark ? "#303744" : "#C7CEC1",
  ink: theme.dark ? "#F4F1E8" : "#121511",
  muted: theme.dark ? "#A7AFBA" : "#5E665C",
  panel: theme.dark ? "#121821" : "#FAFAF3",
  selected: theme.dark ? "#481300" : "#FFDBCE",
  surface: theme.dark ? "#171E28" : "#FFFFFF",
  thumb: theme.dark ? "#202938" : "#E0E5DA",
});

export function ExerciseViewCard({ exercise, order }: ExerciseViewCardProps) {
  const theme = useTheme();
  const { language, methodologyName, t } = useTranslation();
  const colors = useMemo(() => getCardColors(theme), [theme]);
  const [exercisePreview, setExercisePreview] =
    useState<ExercisePreview | null>(null);
  const gifSource = getExerciseGifSource(exercise.libraryId);
  const libraryExercise = getExerciseLibraryItem(exercise.libraryId, language);
  const instructions = getExerciseLibraryInstructions(
    exercise.libraryId,
    language,
  );
  const displayName =
    libraryExercise?.name || exercise.name || t("customExercise");
  const groupKey = exercise.connectionGroup?.trim().toUpperCase() ?? "";
  const accentColor = groupKey
    ? (connectionColors[groupKey] ?? colors.accent)
    : colors.accent;
  const metadata = [
    formatExerciseTag(libraryExercise?.bodyPart ?? exercise.bodyPart, language),
    libraryExercise?.target ?? exercise.target,
    libraryExercise?.equipment ?? exercise.equipment,
  ].filter(Boolean);
  const seriesDetails = buildSeriesDetails(
    exercise.series,
    { reps: exercise.reps, load: exercise.load },
    exercise.seriesDetails,
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
            borderColor: groupKey ? `${accentColor}66` : colors.border,
          },
        ]}
      >
        <View style={[styles.orderRail, { borderColor: colors.border }]}>
          <Text style={[styles.orderText, { color: colors.muted }]}>
            {String(order).padStart(2, "0")}
          </Text>
          <View style={[styles.orderMark, { backgroundColor: accentColor }]} />
        </View>

        <View style={styles.cardBody}>
          <View style={styles.topRow}>
            {gifSource && (
              <View
                style={[styles.mediaFrame, { backgroundColor: colors.thumb }]}
              >
                <ExerciseGifPreviewButton
                  source={gifSource}
                  imageStyle={styles.gif}
                  badgeBackgroundColor={colors.surface}
                  iconColor={colors.accent}
                  onPress={() =>
                    setExercisePreview({
                      instructions,
                      name: displayName,
                      source: gifSource,
                      meta: metadata.join(" / "),
                    })
                  }
                />
              </View>
            )}

            <View style={styles.titleBlock}>
              <View style={styles.titleTopRow}>
                {!!groupKey && (
                  <View
                    style={[
                      styles.linkBadge,
                      {
                        backgroundColor: `${accentColor}22`,
                        borderColor: accentColor,
                      },
                    ]}
                  >
                    <Icon source="link-variant" size={12} color={accentColor} />
                    <Text
                      style={[styles.linkBadgeText, { color: accentColor }]}
                    >
                      {t("block")} {groupKey}
                    </Text>
                  </View>
                )}
              </View>

              <Text
                numberOfLines={2}
                style={[styles.exerciseName, { color: colors.ink }]}
              >
                {displayName}
              </Text>

              {metadata.length > 0 && (
                <Text
                  numberOfLines={1}
                  style={[styles.metaText, { color: colors.muted }]}
                >
                  {metadata.join(" / ")}
                </Text>
              )}

              {!!exercise.methodology?.trim() && (
                <View
                  style={[
                    styles.methodologyTag,
                    {
                      backgroundColor: colors.selected,
                      borderColor: colors.border,
                    },
                  ]}
                >
                  <Text style={[styles.methodologyText, { color: colors.ink }]}>
                    {methodologyName(exercise.methodology)}
                  </Text>
                </View>
              )}
            </View>
          </View>

          {!!exercise.description?.trim() && (
            <View
              style={[
                styles.descriptionBox,
                { backgroundColor: colors.panel, borderColor: colors.border },
              ]}
            >
              <Icon
                source="note-text-outline"
                size={14}
                color={colors.accent}
              />
              <Text style={[styles.descriptionText, { color: colors.muted }]}>
                {exercise.description}
              </Text>
            </View>
          )}

          {seriesDetails.length > 0 && (
            <View
              style={[
                styles.seriesPanel,
                { backgroundColor: colors.panel, borderColor: colors.border },
              ]}
            >
              <View style={styles.seriesPanelHeader}>
                <View
                  style={[
                    styles.seriesPanelAccent,
                    { backgroundColor: accentColor },
                  ]}
                />
                <Text
                  style={[styles.seriesPanelLabel, { color: colors.muted }]}
                >
                  {t("series")}
                </Text>
                <View
                  style={[
                    styles.seriesCountBadge,
                    {
                      backgroundColor: `${accentColor}22`,
                      borderColor: `${accentColor}44`,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.seriesCountBadgeText,
                      { color: accentColor },
                    ]}
                  >
                    {seriesDetails.length}
                  </Text>
                </View>
              </View>

              {seriesDetails.map((detail, seriesIndex) => (
                <View
                  key={`${exercise.uid}-${seriesIndex}`}
                  style={[
                    styles.seriesRow,
                    seriesIndex < seriesDetails.length - 1 && {
                      borderBottomWidth: StyleSheet.hairlineWidth,
                      borderBottomColor: colors.border,
                    },
                  ]}
                >
                  <Text style={[styles.seriesIdx, { color: colors.muted }]}>
                    {seriesIndex + 1}
                  </Text>
                  <View style={styles.seriesMetric}>
                    <Text
                      style={[styles.seriesMetricVal, { color: colors.ink }]}
                    >
                      {detail.reps || "—"}
                    </Text>
                    <Text
                      style={[styles.seriesMetricUnit, { color: colors.muted }]}
                    >
                      reps
                    </Text>
                  </View>
                  <Text style={[styles.seriesCross, { color: colors.border }]}>
                    ×
                  </Text>
                  <View style={styles.seriesMetric}>
                    <Text
                      style={[styles.seriesMetricVal, { color: colors.ink }]}
                    >
                      {formatLoadDisplay(detail.load)}
                    </Text>
                    <Text
                      style={[styles.seriesMetricUnit, { color: colors.muted }]}
                    >
                      kg
                    </Text>
                  </View>
                </View>
              ))}
            </View>
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
    gap: 12,
    padding: 12,
  },
  descriptionBox: {
    alignItems: "flex-start",
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    gap: 8,
    paddingHorizontal: 11,
    paddingVertical: 10,
  },
  descriptionText: {
    flex: 1,
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 18,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 22,
  },
  gif: {
    height: 92,
    width: 92,
  },
  linkBadge: {
    alignItems: "center",
    alignSelf: "flex-start",
    borderRadius: 6,
    borderWidth: 1,
    flexDirection: "row",
    gap: 4,
    paddingHorizontal: 7,
    paddingVertical: 3,
  },
  linkBadgeText: {
    fontSize: 10,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  mediaFrame: {
    alignItems: "center",
    borderRadius: 8,
    height: 92,
    justifyContent: "center",
    overflow: "hidden",
    width: 92,
  },
  metaText: {
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 16,
  },
  methodologyTag: {
    alignSelf: "flex-start",
    borderRadius: 6,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  methodologyText: {
    fontSize: 11,
    fontWeight: "900",
  },
  metricCopy: {
    flex: 1,
    minWidth: 0,
  },
  metricLabel: {
    fontSize: 9,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  metricValue: {
    fontSize: 14,
    fontWeight: "900",
    marginTop: 1,
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
  titleBlock: {
    flex: 1,
    gap: 5,
    minWidth: 0,
  },
  titleTopRow: {
    minHeight: 24,
  },
  topRow: {
    alignItems: "flex-start",
    flexDirection: "row",
    gap: 12,
  },
  seriesPanel: {
    borderRadius: 8,
    borderWidth: 1,
    overflow: "hidden",
  },
  seriesPanelHeader: {
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  seriesPanelAccent: {
    borderRadius: 2,
    height: 14,
    width: 3,
  },
  seriesPanelLabel: {
    flex: 1,
    fontSize: 11,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  seriesCountBadge: {
    borderRadius: 6,
    borderWidth: 1,
    paddingHorizontal: 7,
    paddingVertical: 2,
  },
  seriesCountBadgeText: {
    fontSize: 11,
    fontWeight: "900",
  },
  seriesRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  seriesIdx: {
    fontSize: 11,
    fontWeight: "900",
    minWidth: 16,
    textAlign: "center",
  },
  seriesMetric: {
    alignItems: "baseline",
    flex: 1,
    flexDirection: "row",
    gap: 3,
  },
  seriesMetricVal: {
    fontSize: 20,
    fontWeight: "900",
    lineHeight: 24,
  },
  seriesMetricUnit: {
    fontSize: 11,
    fontWeight: "700",
    paddingBottom: 1,
  },
  seriesCross: {
    fontSize: 14,
    fontWeight: "400",
  },
});
