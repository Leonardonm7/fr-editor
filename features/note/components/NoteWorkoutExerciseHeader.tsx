import { getExerciseGifSource } from "@/assets/exercises/data/exerciseLibrary";
import { ExerciseGifPreviewButton } from "@/features/exercise/components/ExerciseGifPreviewButton";
import { type ExercisePreview } from "@/features/exercise/components/ExercisePreviewModal";
import { getExerciseLibraryInstructions } from "@/features/exercise/utils/library";
import { type ExerciseForm, type IndexedExercise } from "@/features/note/utils/note";
import {
  formatExerciseTag,
  type NoteEditColors,
} from "@/features/note/utils/editSection";
import { StyleSheet, View } from "react-native";
import {
  Icon,
  IconButton,
  Text,
  TextInput,
  TouchableRipple,
  useTheme,
} from "react-native-paper";

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

export function NoteWorkoutExerciseHeader({
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
}: NoteWorkoutExerciseHeaderProps) {
  const theme = useTheme();
  const gifSource = getExerciseGifSource(exercise.libraryId);
  const instructions = getExerciseLibraryInstructions(exercise.libraryId);
  const isCustomExercise = !exercise.libraryId;

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
              name: exercise.name || "Exercício personalizado",
              source: gifSource,
              meta: [
                formatExerciseTag(exercise.bodyPart),
                exercise.target,
                exercise.equipment,
              ]
                .filter(Boolean)
                .join(" · "),
            })
          }
        />
      )}

      <View style={styles.workoutInfo}>
        {isCustomExercise && editingName ? (
          <TextInput
            mode="flat"
            dense
            value={exercise.name}
            autoFocus
            placeholder="Nome do exercício"
            onChangeText={(value) =>
              onChangeExercise(exercise.index, "name", value)
            }
            onBlur={onEditName}
            style={[
              styles.customExerciseNameInput,
              { backgroundColor: "transparent" },
            ]}
            contentStyle={[
              styles.customExerciseNameInputContent,
              { color: colors.ink },
            ]}
            underlineColor={colors.border}
            activeUnderlineColor={colors.accent}
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
              {exercise.name || "Exercício personalizado"}
            </Text>
          </TouchableRipple>
        ) : (
          <Text
            style={[styles.workoutName, { color: colors.ink }]}
            numberOfLines={2}
          >
            {exercise.name || "Exercício personalizado"}
          </Text>
        )}
        {!!(exercise.target || exercise.equipment || exercise.bodyPart) && (
          <Text
            style={[styles.workoutMeta, { color: colors.muted }]}
            numberOfLines={1}
          >
            {[
              formatExerciseTag(exercise.bodyPart),
              exercise.target,
              exercise.equipment,
            ]
              .filter(Boolean)
              .join(" · ")}
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
              Bloco {group}
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
              {currentMethodology}
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
}

const styles = StyleSheet.create({
  actionIconButton: {
    margin: 0,
  },
  customExerciseNameInput: {
    height: 38,
  },
  customExerciseNameInputContent: {
    fontSize: 15,
    fontWeight: "900",
    lineHeight: 19,
    paddingHorizontal: 0,
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
