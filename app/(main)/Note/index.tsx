import { DaySelectorCard } from "@/features/note/components/DaySelectorCard";
import { NoteHeader } from "@/features/note/components/NoteHeader";
import { NoteEditSection } from "@/features/note/components/NoteEditSection";
import { NoteSaveBar } from "@/features/note/components/NoteSaveBar";
import { NoteViewSection } from "@/features/note/components/NoteViewSection";
import { ConfirmDialog } from "@/components/ui/ConfirmDialog";
import {
  getGlobalContainerColors,
  GlobalContainer,
} from "@/components/ui/GlobalContainer";
import { useNoteScreen } from "@/features/note/hooks/useNoteScreen";
import { useMemo } from "react";
import { StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";

export default function Note() {
  const theme = useTheme();
  const colors = useMemo(() => getGlobalContainerColors(theme), [theme]);
  const {
    activeDay,
    addExercise,
    addExerciseFromLibrary,
    askDelete,
    canSave,
    cancelDelete,
    confirmDelete,
    confirmSave,
    countByDay,
    dayExercises,
    daysWithExercises,
    deleteVisible,
    handleBack,
    handleSelectDay,
    isNew,
    moveExercise,
    openWorkout,
    ready,
    restartWorkout,
    saveVisible,
    screenTitle,
    setWorkoutName,
    setSaveVisible,
    swapDayExercises,
    toggleViewMode,
    totalExercises,
    updateExercise,
    viewDayExercises,
    viewMode,
    workoutActionPending,
    workoutName,
    workoutSavedState,
  } = useNoteScreen();

  if (!ready) return null;

  return (
    <>
      <ConfirmDialog
        visible={deleteVisible}
        title="Remover exercício?"
        message="Deseja realmente excluir este exercício?"
        confirmLabel="Excluir"
        cancelLabel="Cancelar"
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />

      <ConfirmDialog
        visible={saveVisible}
        title="Salvar treino?"
        message={`Salvar "${workoutName}" com ${totalExercises} exercício(s)?`}
        confirmLabel="Salvar"
        cancelLabel="Cancelar"
        onConfirm={confirmSave}
        onCancel={() => setSaveVisible(false)}
      />

      <GlobalContainer
        bottomOverlay={
          !viewMode && (
            <NoteSaveBar
              canSave={canSave}
              colors={colors}
              daysWithExercisesCount={daysWithExercises.length}
              onSave={() => setSaveVisible(true)}
              totalExercises={totalExercises}
            />
          )
        }
        bottomInsetColor={!viewMode ? colors.panel : undefined}
        colors={colors}
        contentContainerStyle={styles.scrollContent}
        header={
          <NoteHeader
            colors={colors}
            isNew={isNew}
            onBack={handleBack}
            onToggleViewMode={toggleViewMode}
            screenTitle={screenTitle}
            totalExercises={totalExercises}
            viewMode={viewMode}
          />
        }
        keyboardAvoiding
        scroll
        scrollViewProps={{ keyboardShouldPersistTaps: "handled" }}
      >
        <DaySelectorCard
          activeDay={activeDay}
          countByDay={countByDay}
          onSelectDay={handleSelectDay}
          viewMode={viewMode}
        />

        {viewMode ? (
          <NoteViewSection
            activeDay={activeDay}
            dayExercises={dayExercises}
            onOpenWorkout={openWorkout}
            onRestartWorkout={restartWorkout}
            workoutName={workoutName}
            viewDayExercises={viewDayExercises}
            workoutActionPending={workoutActionPending}
            workoutSavedState={workoutSavedState}
          />
        ) : (
          <NoteEditSection
            activeDay={activeDay}
            dayExercises={dayExercises}
            onAddExercise={addExercise}
            onAddExerciseFromLibrary={addExerciseFromLibrary}
            onChangeExercise={updateExercise}
            onChangeWorkoutName={setWorkoutName}
            onDeleteExercise={askDelete}
            onMoveExercise={moveExercise}
            onSwapDayExercises={swapDayExercises}
            countByDay={countByDay}
            workoutName={workoutName}
          />
        )}
      </GlobalContainer>
    </>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    gap: 16,
  },
});
