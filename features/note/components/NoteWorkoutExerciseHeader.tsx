import { ExerciseGifPreviewButton } from "@/features/exercise/components/ExerciseGifPreviewButton";
import { type ExercisePreview } from "@/features/exercise/components/ExercisePreviewModal";
import { NoteCompactTextField } from "@/features/note/components/NoteCompactTextField";
import {
  getExerciseGifSource,
  getExerciseLibraryInstructions,
  getExerciseLibraryItem,
} from "@/features/exercise/utils/library";
import { formatExerciseTag } from "@/features/exercise/utils/tags";
import { type ExerciseForm, type IndexedExercise } from "@/features/note/utils/note";
import { type NoteEditColors } from "@/features/note/utils/editSection";
import { useTranslation } from "@/hooks/useTranslation";
import { StyleSheet, View } from "react-native";
import { Icon } from "@/components/ui/Icon";
import { IconButton } from "@/components/ui/IconButton";
import { Text } from "@/components/ui/Text";
import { TouchableRipple } from "@/components/ui/TouchableRipple";
import { useTheme } from "@/components/ui/theme";

type NoteWorkoutExerciseHeaderProps = {
  accentColor: string;
  colors: NoteEditColors;
  currentMethodology: string;
  dayExerciseCount: number;
  editingName: boolean;
  exercise: IndexedExercise;
  group: string;
  index: number;
  onChangeExercise: (
    index: number,
    key: keyof ExerciseForm,
    value: string | ExerciseForm["seriesDetails"],
  ) => void;
  onDeleteExercise: (index: number) => void;
  onEditName: () => void;
  onMoveExercise: (index: number, direction: "up" | "down") => void;
  onPreview: (preview: ExercisePreview) => void;
};

export const NoteWorkoutExerciseHeader = ({
  accentColor,
  colors,
  currentMethodology,
  dayExerciseCount,
  editingName,
  exercise,
  group,
  index,
  onChangeExercise,
  onDeleteExercise,
  onEditName,
  onMoveExercise,
  onPreview,
}: NoteWorkoutExerciseHeaderProps) => {
  const theme = useTheme();
  const { language, methodologyName, t } = useTranslation();
  const gifSource = getExerciseGifSource(exercise.libraryId);
  const libraryExercise = getExerciseLibraryItem(exercise.libraryId, language);
  const instructions = getExerciseLibraryInstructions(
    exercise.libraryId,
    language,
  );
  const isCustomExercise = !exercise.libraryId;
  const displayName =
    libraryExercise?.name || exercise.name || t("customExercise");
  const displayMeta = [
    formatExerciseTag(libraryExercise?.bodyPart ?? exercise.bodyPart, language),
    libraryExercise?.target ?? exercise.target,
    libraryExercise?.equipment ?? exercise.equipment,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <View style={styles.workoutTopRow}>
      {gifSource && (
        <ExerciseGifPreviewButton
          source={gifSource}
          imageStyle={styles.workoutGif}
          badgeBackgroundColor={colors.surface}
          iconColor={colors.accent}
          onPress={() =>
            onPreview({
              instructions,
              name: displayName,
              source: gifSource,
              meta: displayMeta,
            })
          }
        />
      )}

      <View style={styles.workoutInfo}>
        {isCustomExercise && editingName ? (
          <NoteCompactTextField
            colors={colors}
            strong
            value={exercise.name}
            autoFocus
            placeholder={t("exerciseName")}
            onChangeText={(value) =>
              onChangeExercise(exercise.index, "name", value)
            }
            onBlur={onEditName}
            fieldStyle={styles.customExerciseNameInput}
          />
        ) : isCustomExercise ? (
          <TouchableRipple
            borderless
            onPress={onEditName}
            style={styles.customExerciseNamePressable}
          >
            <Text
              style={[styles.workoutName, { color: colors.ink }]}
              numberOfLines={2}
            >
              {exercise.name || t("customExercise")}
            </Text>
          </TouchableRipple>
        ) : (
          <Text
            style={[styles.workoutName, { color: colors.ink }]}
            numberOfLines={2}
          >
            {displayName}
          </Text>
        )}
        {!!displayMeta && (
          <Text
            style={[styles.workoutMeta, { color: colors.muted }]}
            numberOfLines={1}
          >
            {displayMeta}
          </Text>
        )}
        {group ? (
          <View
            style={[
              styles.linkBadge,
              {
                backgroundColor: `${accentColor}22`,
                borderColor: accentColor,
              },
            ]}
          >
            <Icon source="link-variant" size={10} color={accentColor} />
            <Text style={[styles.linkBadgeText, { color: accentColor }]}>
              {t("block")} {group}
            </Text>
          </View>
        ) : null}
        {!!currentMethodology && (
          <View
            style={[
              styles.methodologyBadge,
              {
                backgroundColor: colors.selected,
                borderColor: colors.border,
              },
            ]}
          >
            <Icon source="playlist-check" size={10} color={colors.accent} />
            <Text
              style={[styles.methodologyBadgeText, { color: colors.ink }]}
              numberOfLines={1}
            >
              {methodologyName(currentMethodology)}
            </Text>
          </View>
        )}
      </View>

      <View style={styles.workoutActions}>
        <IconButton
          icon="arrow-up"
          size={18}
          iconColor={colors.muted}
          onPress={() => onMoveExercise(exercise.index, "up")}
          disabled={index === 0}
          style={styles.actionIconButton}
        />
        <IconButton
          icon="arrow-down"
          size={18}
          iconColor={colors.muted}
          onPress={() => onMoveExercise(exercise.index, "down")}
          disabled={index === dayExerciseCount - 1}
          style={styles.actionIconButton}
        />
        <IconButton
          icon="trash-can-outline"
          size={18}
          iconColor={theme.colors.error}
          onPress={() => onDeleteExercise(exercise.index)}
          style={styles.actionIconButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  actionIconButton: {
    margin: 0,
  },
  customExerciseNameInput: {
    height: 38,
  },
  customExerciseNamePressable: {
    alignSelf: "stretch",
    borderRadius: 6,
    overflow: "hidden",
  },
  linkBadge: {
    alignItems: "center",
    alignSelf: "flex-start",
    borderRadius: 6,
    borderWidth: 1,
    flexDirection: "row",
    gap: 3,
    paddingHorizontal: 7,
    paddingVertical: 3,
  },
  linkBadgeText: {
    fontSize: 10,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  methodologyBadge: {
    alignItems: "center",
    alignSelf: "flex-start",
    borderRadius: 6,
    borderWidth: 1,
    flexDirection: "row",
    gap: 3,
    maxWidth: "100%",
    paddingHorizontal: 7,
    paddingVertical: 3,
  },
  methodologyBadgeText: {
    flexShrink: 1,
    fontSize: 10,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  workoutActions: {
    flexDirection: "row",
    marginRight: -10,
  },
  workoutGif: {
    borderRadius: 8,
    height: 72,
    width: 72,
  },
  workoutInfo: {
    flex: 1,
    gap: 3,
    minWidth: 0,
  },
  workoutMeta: {
    fontSize: 11,
    fontWeight: "700",
    lineHeight: 15,
  },
  workoutName: {
    fontSize: 15,
    fontWeight: "900",
    lineHeight: 19,
  },
  workoutTopRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
});
