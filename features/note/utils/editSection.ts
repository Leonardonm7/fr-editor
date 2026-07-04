import { type ExerciseLibraryItem } from "@/assets/exercises/data/exerciseLibrary";
import type { MD3Theme } from "react-native-paper";

export const LIBRARY_PAGE_SIZE = 20;

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

export const formatExerciseTag = (value?: string) => {
  if (!value) return "";
  const normalizedValue = value.trim().toLocaleLowerCase("pt-BR");
  return (
    bodyPartLabels[normalizedValue] ??
    normalizedValue.replace(/(^|[\s-])(\p{L})/gu, (_, separator, letter) => {
      return `${separator}${letter.toLocaleUpperCase("pt-BR")}`;
    })
  );
};

export const buildExerciseLibrarySearchText = (exercise: ExerciseLibraryItem) =>
  `${exercise.name} ${exercise.bodyPart} ${exercise.target} ${exercise.equipment}`.toLowerCase();

export const getNoteEditColors = (theme: MD3Theme) => ({
  accent: theme.colors.primary,
  border: theme.dark ? "#303744" : "#C7CEC1",
  ink: theme.dark ? "#F4F1E8" : "#121511",
  muted: theme.dark ? "#A7AFBA" : "#5E665C",
  panel: theme.dark ? "#121821" : "#FAFAF3",
  selected: theme.dark ? "#481300" : "#FFDBCE",
  surface: theme.dark ? "#171E28" : "#FFFFFF",
  thumb: theme.dark ? "#202938" : "#E0E5DA",
});

export type NoteEditColors = ReturnType<typeof getNoteEditColors>;
