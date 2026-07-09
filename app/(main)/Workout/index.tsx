import {
  getGlobalContainerColors,
  GlobalContainer,
} from "@/components/ui/GlobalContainer";
import { WorkoutExerciseCard } from "@/features/workout/components/WorkoutExerciseCard";
import { WorkoutFinishedPhase } from "@/features/workout/components/WorkoutFinishedPhase";
import { WorkoutHeader } from "@/features/workout/components/WorkoutHeader";
import { useWorkout } from "@/features/workout/hooks/useWorkout";
import { useMemo } from "react";
import { StyleSheet } from "react-native";
import { useTheme } from "@/components/ui/theme";

const WorkoutScreen = () => {
  const theme = useTheme();
  const colors = useMemo(() => getGlobalContainerColors(theme), [theme]);
  const {
    activeRest,
    completedCount,
    completedSeries,
    day,
    exercises,
    expandedBlockId,
    finished,
    handleAddSeries,
    handleDismiss,
    handleFinish,
    handleRemoveSeries,
    handleSeriesDetailChange,
    handleSeriesTap,
    handleSkipRest,
    handleToggleBlock,
    overallProgress,
    ready,
    restTime,
    setRestTime,
    totalSeries,
    workoutBlocks,
  } = useWorkout();

  if (!ready || exercises.length === 0) return null;

  return (
    <GlobalContainer
      colors={colors}
      keyboardAvoiding
      contentContainerStyle={styles.listContent}
      header={
        <WorkoutHeader
          colors={colors}
          completedCount={completedCount}
          day={day}
          onBack={handleDismiss}
          onSkipRest={
            activeRest ? () => handleSkipRest(activeRest.blockId) : undefined
          }
          overallProgress={overallProgress}
          restLabel={activeRest?.label}
          restRemaining={activeRest?.remaining}
          restTotal={activeRest?.total}
          totalSeries={totalSeries}
        />
      }
      scroll
    >
      {finished && (
        <WorkoutFinishedPhase
          onFinish={handleFinish}
          totalCompletedSeries={completedCount}
          totalExercises={exercises.length}
        />
      )}

      {workoutBlocks.map((block, index) => (
        <WorkoutExerciseCard
          key={block.id}
          blockId={block.id}
          completedSeries={completedSeries}
          exercises={block.exercises}
          expanded={expandedBlockId === block.id}
          groupKey={block.groupKey}
          methodology={block.methodology}
          orderIndex={index + 1}
          restTime={restTime}
          onAddSeries={handleAddSeries}
          onRemoveSeries={handleRemoveSeries}
          onRestTimeChange={setRestTime}
          onSeriesDetailChange={handleSeriesDetailChange}
          onSeriesTap={handleSeriesTap}
          onToggleExpanded={() => handleToggleBlock(block.id)}
        />
      ))}
    </GlobalContainer>
  );
};

export default WorkoutScreen;

const styles = StyleSheet.create({
  listContent: {
    gap: 14,
    padding: 16,
  },
});
