import {
  exerciseLibrary,
  getExerciseGifSource,
  type ExerciseLibraryItem,
} from "@/assets/exercises/data/exerciseLibrary";
import { exerciseLibrary as englishExerciseLibrary } from "@/assets/exercises/data/exerciseLibrary.en";
import type { AppLanguagePreference } from "@/database/types";
import { buildExerciseLibrarySearchText } from "@/features/exercise/utils/tags";

export { getExerciseGifSource };
export type { ExerciseLibraryItem };

type ExerciseLibraryIndex = {
  bodyParts: string[];
  byBodyPart: Record<string, ExerciseLibraryItem[]>;
  searchIndex: Map<string, string>;
};

const libraries: Record<AppLanguagePreference, ExerciseLibraryItem[]> = {
  en: englishExerciseLibrary,
  "pt-BR": exerciseLibrary,
};

const libraryMaps = new Map<AppLanguagePreference, Map<string, ExerciseLibraryItem>>();
const libraryIndexes = new Map<AppLanguagePreference, ExerciseLibraryIndex>();

export const getExerciseLibrary = (language: AppLanguagePreference) =>
  libraries[language] ?? libraries["pt-BR"];

const getExerciseLibraryMap = (language: AppLanguagePreference) => {
  const cached = libraryMaps.get(language);
  if (cached) return cached;

  const next = new Map(
    getExerciseLibrary(language).map((exercise) => [exercise.id, exercise]),
  );
  libraryMaps.set(language, next);
  return next;
};

export const getExerciseLibraryIndex = (
  language: AppLanguagePreference,
): ExerciseLibraryIndex => {
  const cached = libraryIndexes.get(language);
  if (cached) return cached;

  const library = getExerciseLibrary(language);
  const index = {
    bodyParts: Array.from(new Set(library.map((item) => item.bodyPart))).sort(),
    byBodyPart: library.reduce<Record<string, ExerciseLibraryItem[]>>(
      (groups, exercise) => {
        (groups[exercise.bodyPart] ??= []).push(exercise);
        return groups;
      },
      {},
    ),
    searchIndex: new Map(
      library.map((exercise) => [
        exercise.id,
        buildExerciseLibrarySearchText(exercise),
      ]),
    ),
  };

  libraryIndexes.set(language, index);
  return index;
};

export const getExerciseLibraryItem = (
  libraryId?: string,
  language: AppLanguagePreference = "pt-BR",
): ExerciseLibraryItem | undefined => {
  if (!libraryId) return undefined;
  return getExerciseLibraryMap(language).get(libraryId);
};

export const getExerciseLibraryInstructions = (
  libraryId?: string,
  language: AppLanguagePreference = "pt-BR",
) => getExerciseLibraryItem(libraryId, language)?.instructions ?? [];
