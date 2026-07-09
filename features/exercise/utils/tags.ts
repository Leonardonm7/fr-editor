import { type ExerciseLibraryItem } from "@/assets/exercises/data/exerciseLibrary";
import type { AppLanguagePreference } from "@/database/types";

const bodyPartLabels: Record<string, string> = {
  "abdômen": "Abdômen",
  "antebraços": "Antebraços",
  "braços": "Braços",
  cardio: "Cardio",
  costas: "Costas",
  ombros: "Ombros",
  panturrilhas: "Panturrilhas",
  peito: "Peito",
  pernas: "Pernas",
  "pescoço": "Pescoço",
};

const englishBodyPartLabels: Record<string, string> = {
  back: "Back",
  cardio: "Cardio",
  chest: "Chest",
  "lower arms": "Lower arms",
  "lower legs": "Lower legs",
  neck: "Neck",
  shoulders: "Shoulders",
  "upper arms": "Upper arms",
  "upper legs": "Upper legs",
  waist: "Waist",
};

export const formatExerciseTag = (
  value?: string,
  language: AppLanguagePreference = "pt-BR",
) => {
  if (!value) return "";
  const normalizedValue = value
    .trim()
    .toLocaleLowerCase(language === "en" ? "en-US" : "pt-BR");
  const labels = language === "en" ? englishBodyPartLabels : bodyPartLabels;
  return (
    labels[normalizedValue] ??
    normalizedValue.replace(/(^|[\s-])(\p{L})/gu, (_, separator, letter) => {
      return `${separator}${letter.toLocaleUpperCase(
        language === "en" ? "en-US" : "pt-BR",
      )}`;
    })
  );
};

export const buildExerciseLibrarySearchText = (exercise: ExerciseLibraryItem) =>
  `${exercise.name} ${exercise.bodyPart} ${exercise.target} ${exercise.equipment}`.toLowerCase();
