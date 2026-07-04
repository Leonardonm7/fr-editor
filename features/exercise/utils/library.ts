import {
  exerciseLibrary,
  type ExerciseLibraryItem,
} from "@/assets/exercises/data/exerciseLibrary";

const exerciseLibraryById = new Map(
  exerciseLibrary.map((exercise) => [exercise.id, exercise]),
);

export const getExerciseLibraryItem = (
  libraryId?: string,
): ExerciseLibraryItem | undefined => {
  if (!libraryId) return undefined;
  return exerciseLibraryById.get(libraryId);
};

export const getExerciseLibraryInstructions = (libraryId?: string) =>
  getExerciseLibraryItem(libraryId)?.instructions ?? [];
