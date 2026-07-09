import { ConfirmDialog } from "@/components/ui/ConfirmDialog";
import {
  getGlobalContainerColors,
  GlobalContainer,
} from "@/components/ui/GlobalContainer";
import { useTheme } from "@/components/ui/theme";
import { DaySelectorCard } from "@/features/note/components/DaySelectorCard";
import { NoteEditSection } from "@/features/note/components/NoteEditSection";
import { NoteHeader } from "@/features/note/components/NoteHeader";
import { NoteSaveBar } from "@/features/note/components/NoteSaveBar";
import { NoteViewSection } from "@/features/note/components/NoteViewSection";
import { useNoteScreen } from "@/features/note/hooks/useNoteScreen";
import { useTranslation } from "@/hooks/useTranslation";
import { useMemo } from "react";
import { StyleSheet } from "react-native";

const Note = () => {
  const theme = useTheme();
  const { t } = useTranslation();
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
        title={t("removeExercise")}
        message={t("removeExerciseMessage")}
        confirmLabel={t("delete")}
        cancelLabel={t("cancel")}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />

      <ConfirmDialog
        visible={saveVisible}
        title={t("saveWorkout")}
        message={t("saveWorkoutMessage", {
          count: totalExercises,
          name: workoutName,
        })}
        confirmLabel={t("save")}
        cancelLabel={t("cancel")}
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
};

export default Note;

const styles = StyleSheet.create({
  scrollContent: {
    gap: 16,
  },
});
