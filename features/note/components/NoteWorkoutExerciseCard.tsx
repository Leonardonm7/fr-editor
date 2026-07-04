import { type ExercisePreview } from "@/features/exercise/components/ExercisePreviewModal";
import { NoteTextField } from "@/features/note/components/NoteTextField";
import { NoteWorkoutExerciseHeader } from "@/features/note/components/NoteWorkoutExerciseHeader";
import { NoteWorkoutLinkControls } from "@/features/note/components/NoteWorkoutLinkControls";
import { NoteWorkoutMethodologyPicker } from "@/features/note/components/NoteWorkoutMethodologyPicker";
import { NoteWorkoutSeriesEditor } from "@/features/note/components/NoteWorkoutSeriesEditor";
import {
  connectionColors,
  type ExerciseForm,
  type IndexedExercise,
} from "@/features/note/utils/note";
import { type NoteEditColors } from "@/features/note/utils/editSection";
import { StyleSheet, View } from "react-native";
import { Text, TextInput } from "react-native-paper";

type NoteWorkoutExerciseCardProps = {
  activeDay: string;
  colors: NoteEditColors;
  countByDay: (day: string) => number;
  dayExerciseCount: number;
  dayPickerOpen: boolean;
  editingName: boolean;
  exercise: IndexedExercise;
  index: number;
  linkOpen: boolean;
  onChangeExercise: (
    index: number,
    key: keyof ExerciseForm,
    value: string | ExerciseForm["seriesDetails"],
  ) => void;
  onCloseDayPicker: () => void;
  onCloseLinkPicker: () => void;
  onDeleteExercise: (index: number) => void;
  onEditName: () => void;
  onMoveExercise: (index: number, direction: "up" | "down") => void;
  onPreview: (preview: ExercisePreview) => void;
  onToggleDayPicker: () => void;
  onToggleLinkPicker: () => void;
};

export function NoteWorkoutExerciseCard({
  activeDay,
  colors,
  countByDay,
  dayExerciseCount,
  dayPickerOpen,
  editingName,
  exercise,
  index,
  linkOpen,
  onChangeExercise,
  onCloseDayPicker,
  onCloseLinkPicker,
  onDeleteExercise,
  onEditName,
  onMoveExercise,
  onPreview,
  onToggleDayPicker,
  onToggleLinkPicker,
}: NoteWorkoutExerciseCardProps) {
  const orderNum = String(index + 1).padStart(2, "0");
  const group = exercise.connectionGroup.trim().toUpperCase();
  const accentColor = group
    ? (connectionColors[group] ?? colors.accent)
    : colors.accent;
  const currentMethodology = exercise.methodology.trim();

  return (
    <View
      style={[
        styles.workoutCard,
        {
          backgroundColor: colors.surface,
          borderColor: group ? `${accentColor}66` : colors.border,
        },
      ]}
    >
      <View style={[styles.workoutOrderRail, { borderColor: colors.border }]}>
        <Text style={[styles.orderNum, { color: colors.muted }]}>
          {orderNum}
        </Text>
        <View style={[styles.workoutAccentBar, { backgroundColor: accentColor }]} />
      </View>

      <View style={styles.workoutCardContent}>
        <NoteWorkoutExerciseHeader
          accentColor={accentColor}
          colors={colors}
          currentMethodology={currentMethodology}
          dayExerciseCount={dayExerciseCount}
          editingName={editingName}
          exercise={exercise}
          group={group}
          index={index}
          onChangeExercise={onChangeExercise}
          onDeleteExercise={onDeleteExercise}
          onEditName={onEditName}
          onMoveExercise={onMoveExercise}
          onPreview={onPreview}
        />

        <NoteWorkoutSeriesEditor
          colors={colors}
          exercise={exercise}
          onChangeExercise={onChangeExercise}
        />

        <NoteWorkoutMethodologyPicker
          colors={colors}
          currentMethodology={currentMethodology}
          onChangeMethodology={(value) =>
            onChangeExercise(exercise.index, "methodology", value)
          }
        />

        <NoteTextField
          label="Descrição"
          placeholder="Observações, ajuste de execução, drop, pausa..."
          value={exercise.description}
          onChangeText={(value) =>
            onChangeExercise(exercise.index, "description", value)
          }
          multiline
          numberOfLines={3}
          left={<TextInput.Icon icon="note-text-outline" />}
          style={styles.exerciseDescriptionInput}
          contentStyle={styles.exerciseDescriptionContent}
        />

        <NoteWorkoutLinkControls
          accentColor={accentColor}
          activeDay={activeDay}
          colors={colors}
          countByDay={countByDay}
          dayPickerOpen={dayPickerOpen}
          exercise={exercise}
          group={group}
          linkOpen={linkOpen}
          onChangeExercise={onChangeExercise}
          onCloseDayPicker={onCloseDayPicker}
          onCloseLinkPicker={onCloseLinkPicker}
          onToggleDayPicker={onToggleDayPicker}
          onToggleLinkPicker={onToggleLinkPicker}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  exerciseDescriptionContent: {
    minHeight: 86,
    paddingTop: 10,
    textAlignVertical: "top",
  },
  exerciseDescriptionInput: {
    minHeight: 96,
  },
  orderNum: {
    fontSize: 12,
    fontWeight: "900",
  },
  workoutAccentBar: {
    height: 26,
    marginTop: 10,
    width: 3,
  },
  workoutCard: {
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    overflow: "hidden",
  },
  workoutCardContent: {
    flex: 1,
    gap: 12,
    paddingHorizontal: 12,
    paddingVertical: 14,
  },
  workoutOrderRail: {
    alignItems: "center",
    alignSelf: "stretch",
    borderRightWidth: 1,
    justifyContent: "center",
    width: 38,
  },
});
