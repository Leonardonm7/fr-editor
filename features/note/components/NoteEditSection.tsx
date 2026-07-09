import { type ExerciseLibraryItem } from "@/features/exercise/utils/library";
import {
  ExercisePreviewModal,
  type ExercisePreview,
} from "@/features/exercise/components/ExercisePreviewModal";
import { NoteActiveDaySummary } from "@/features/note/components/NoteActiveDaySummary";
import { NoteDaySwapPanel } from "@/features/note/components/NoteDaySwapPanel";
import { NoteEmptyExerciseState } from "@/features/note/components/NoteEmptyExerciseState";
import { NoteExerciseLibrarySection } from "@/features/note/components/NoteExerciseLibrarySection";
import { NoteSelectedExercisesHeader } from "@/features/note/components/NoteSelectedExercisesHeader";
import { NoteWorkoutExerciseCard } from "@/features/note/components/NoteWorkoutExerciseCard";
import { NoteWorkoutInfoPanel } from "@/features/note/components/NoteWorkoutInfoPanel";
import { type ExerciseForm, type IndexedExercise } from "@/features/note/utils/note";
import { getNoteEditColors } from "@/features/note/utils/editSection";
import { useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "@/components/ui/theme";

type NoteEditSectionProps = {
  activeDay: string;
  dayExercises: IndexedExercise[];
  onAddExercise: () => void;
  onAddExerciseFromLibrary: (exercise: ExerciseLibraryItem) => void;
  onChangeExercise: (
    index: number,
    key: keyof ExerciseForm,
    value: string | ExerciseForm["seriesDetails"],
  ) => void;
  onChangeWorkoutName: (value: string) => void;
  onDeleteExercise: (index: number) => void;
  onMoveExercise: (index: number, direction: "up" | "down") => void;
  onSwapDayExercises: (sourceDay: string, targetDay: string) => void;
  countByDay: (day: string) => number;
  workoutName: string;
};

export const NoteEditSection = ({
  activeDay,
  dayExercises,
  onAddExercise,
  onAddExerciseFromLibrary,
  onChangeExercise,
  onChangeWorkoutName,
  onDeleteExercise,
  onMoveExercise,
  onSwapDayExercises,
  countByDay,
  workoutName,
}: NoteEditSectionProps) => {
  const theme = useTheme();
  const colors = useMemo(() => getNoteEditColors(theme), [theme]);
  const [linkPickerUid, setLinkPickerUid] = useState<string | null>(null);
  const [dayPickerUid, setDayPickerUid] = useState<string | null>(null);
  const [editingNameUid, setEditingNameUid] = useState<string | null>(null);
  const [exercisePreview, setExercisePreview] =
    useState<ExercisePreview | null>(null);

  return (
    <>
      <ExercisePreviewModal
        preview={exercisePreview}
        onClose={() => setExercisePreview(null)}
      />

      <NoteWorkoutInfoPanel
        colors={colors}
        workoutName={workoutName}
        onChangeWorkoutName={onChangeWorkoutName}
      />

      <NoteDaySwapPanel
        activeDay={activeDay}
        colors={colors}
        countByDay={countByDay}
        onSwapDayExercises={onSwapDayExercises}
      />

      <NoteActiveDaySummary
        activeDay={activeDay}
        colors={colors}
        exerciseCount={dayExercises.length}
      />

      <NoteExerciseLibrarySection
        colors={colors}
        onAddExerciseFromLibrary={onAddExerciseFromLibrary}
        onPreview={setExercisePreview}
      />

      <NoteSelectedExercisesHeader
        colors={colors}
        onAddExercise={onAddExercise}
        secondaryColor={theme.colors.secondary}
      />

      {dayExercises.length === 0 ? (
        <NoteEmptyExerciseState colors={colors} />
      ) : (
        <View style={styles.workoutList}>
          {dayExercises.map((exercise, index) => (
            <NoteWorkoutExerciseCard
              key={exercise.uid}
              activeDay={activeDay}
              colors={colors}
              countByDay={countByDay}
              dayExerciseCount={dayExercises.length}
              dayPickerOpen={dayPickerUid === exercise.uid}
              editingName={editingNameUid === exercise.uid}
              exercise={exercise}
              index={index}
              linkOpen={linkPickerUid === exercise.uid}
              onChangeExercise={onChangeExercise}
              onCloseDayPicker={() => setDayPickerUid(null)}
              onCloseLinkPicker={() => setLinkPickerUid(null)}
              onDeleteExercise={onDeleteExercise}
              onEditName={() =>
                setEditingNameUid((current) =>
                  current === exercise.uid ? null : exercise.uid,
                )
              }
              onMoveExercise={onMoveExercise}
              onPreview={setExercisePreview}
              onToggleDayPicker={() => {
                setDayPickerUid((current) =>
                  current === exercise.uid ? null : exercise.uid,
                );
                setLinkPickerUid(null);
              }}
              onToggleLinkPicker={() => {
                setLinkPickerUid((current) =>
                  current === exercise.uid ? null : exercise.uid,
                );
                setDayPickerUid(null);
              }}
            />
          ))}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  workoutList: {
    gap: 12,
  },
});
