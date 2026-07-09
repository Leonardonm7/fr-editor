import { ExerciseGifPreviewButton } from "@/features/exercise/components/ExerciseGifPreviewButton";
import { type ExercisePreview } from "@/features/exercise/components/ExercisePreviewModal";
import {
  getExerciseGifSource,
  getExerciseLibraryInstructions,
  getExerciseLibraryItem,
} from "@/features/exercise/utils/library";
import { formatExerciseTag } from "@/features/exercise/utils/tags";
import { type IndexedExercise } from "@/features/note/utils/note";
import { type WorkoutCardColors } from "@/features/workout/utils/card";
import { useTranslation } from "@/hooks/useTranslation";
import { StyleSheet, View } from "react-native";
import { Icon } from "@/components/ui/Icon";
import { Text } from "@/components/ui/Text";
import { TouchableRipple } from "@/components/ui/TouchableRipple";

type WorkoutExerciseCardHeaderProps = {
  accentColor: string;
  allDone: boolean;
  colors: WorkoutCardColors;
  completedBlockSeries: number;
  expanded: boolean;
  exercises: IndexedExercise[];
  groupKey: string;
  isLinkedBlock: boolean;
  methodology: string;
  onPreview: (preview: ExercisePreview) => void;
  onToggleExpanded: () => void;
  secondaryColor: string;
  secondaryContainerColor: string;
  subtitle: string;
  title: string;
  totalSeries: number;
};

export const WorkoutExerciseCardHeader = ({
  accentColor,
  allDone,
  colors,
  completedBlockSeries,
  expanded,
  exercises,
  groupKey,
  isLinkedBlock,
  methodology,
  onPreview,
  onToggleExpanded,
  secondaryColor,
  secondaryContainerColor,
  subtitle,
  title,
  totalSeries,
}: WorkoutExerciseCardHeaderProps) => {
  const { language, methodologyName, t } = useTranslation();
  const firstExercise = exercises[0];
  const firstLibraryExercise = getExerciseLibraryItem(
    firstExercise?.libraryId,
    language,
  );
  const firstExerciseName =
    firstLibraryExercise?.name || firstExercise?.name || t("customExercise");
  const methodologyLabel = methodologyName(methodology.trim());
  const gifSource =
    !isLinkedBlock && firstExercise
      ? getExerciseGifSource(firstExercise.libraryId)
      : null;

  return (
    <TouchableRipple
      borderless
      onPress={onToggleExpanded}
      style={styles.headerPressable}
    >
      <View style={styles.headerRow}>
        {gifSource && firstExercise && (
          <View style={[styles.mediaFrame, { backgroundColor: colors.thumb }]}>
            <ExerciseGifPreviewButton
              source={gifSource}
              imageStyle={styles.gif}
              badgeBackgroundColor={colors.surface}
              iconColor={colors.accent}
              onPress={() =>
                onPreview({
                  instructions: getExerciseLibraryInstructions(
                    firstExercise.libraryId,
                    language,
                  ),
                  name: firstExerciseName,
                  source: gifSource,
                  meta: [
                    formatExerciseTag(
                      firstLibraryExercise?.bodyPart ?? firstExercise.bodyPart,
                      language,
                    ),
                    firstLibraryExercise?.target ?? firstExercise.target,
                    firstLibraryExercise?.equipment ?? firstExercise.equipment,
                  ]
                    .filter(Boolean)
                    .join(" / "),
                })
              }
            />
          </View>
        )}

        <View style={styles.nameCol}>
          <Text numberOfLines={2} style={[styles.exerciseName, { color: colors.ink }]}>
            {title}
          </Text>
          {!!subtitle && (
            <Text numberOfLines={2} style={[styles.blockSubtitle, { color: colors.muted }]}>
              {subtitle}
            </Text>
          )}
          <View style={styles.pillRow}>
            {!!methodologyLabel && (
              <View
                style={[
                  styles.pill,
                  {
                    backgroundColor: `${colors.accent}1A`,
                    borderColor: `${colors.accent}66`,
                  },
                ]}
              >
                <Icon source="clipboard-pulse-outline" size={11} color={colors.accent} />
                <Text style={[styles.pillText, { color: colors.accent }]}>
                  {methodologyLabel}
                </Text>
              </View>
            )}
            {isLinkedBlock && (
              <View
                style={[
                  styles.pill,
                  {
                    backgroundColor: `${accentColor}22`,
                    borderColor: accentColor,
                  },
                ]}
              >
                <Icon source="link-variant" size={11} color={accentColor} />
                <Text style={[styles.pillText, { color: accentColor }]}>
                  {t("linked")}
                </Text>
              </View>
            )}
            {allDone && (
              <View
                style={[
                  styles.pill,
                  {
                    backgroundColor: secondaryContainerColor,
                    borderColor: secondaryColor,
                  },
                ]}
              >
                <Icon source="check" size={11} color={secondaryColor} />
                <Text style={[styles.pillText, { color: secondaryColor }]}>
                  {t("done")}
                </Text>
              </View>
            )}
          </View>
        </View>

        <View style={styles.compactSide}>
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
          <Icon
            source={expanded ? "chevron-up" : "chevron-down"}
            size={18}
            color={colors.muted}
          />
        </View>
      </View>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  blockSubtitle: {
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 16,
  },
  compactSide: {
    alignItems: "center",
    gap: 6,
    justifyContent: "center",
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 22,
  },
  gif: {
    height: 78,
    width: 78,
  },
  headerPressable: {
    borderRadius: 8,
    overflow: "hidden",
  },
  headerRow: {
    alignItems: "flex-start",
    flexDirection: "row",
    gap: 12,
  },
  mediaFrame: {
    alignItems: "center",
    borderRadius: 8,
    height: 78,
    justifyContent: "center",
    overflow: "hidden",
    width: 78,
  },
  nameCol: {
    flex: 1,
    gap: 6,
    minWidth: 0,
    paddingTop: 2,
  },
  pill: {
    alignItems: "center",
    alignSelf: "flex-start",
    borderRadius: 6,
    borderWidth: 1,
    flexDirection: "row",
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  pillRow: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  pillText: {
    fontSize: 10,
    fontWeight: "900",
    textTransform: "uppercase",
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
});
