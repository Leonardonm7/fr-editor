import { type IndexedExercise } from "@/features/note/utils/note";
import type { MD3Theme } from "@/theme";
import { connectionColors } from "@/utils/workoutConnections";
import { parseSeriesCount } from "@/utils/workoutSeries";

export type RestState = { endsAt: number; remaining: number; total: number };

export const REST_PRESETS = [
  { value: 0, label: "0" },
  { value: 30, label: "30s" },
  { value: 60, label: "1min" },
  { value: 90, label: "1:30" },
  { value: 120, label: "2min" },
  { value: 180, label: "3min" },
];

export const getWorkoutCardColors = (theme: MD3Theme) => ({
  accent: theme.colors.primary,
  border: theme.dark ? "#303744" : "#C7CEC1",
  ink: theme.dark ? "#F4F1E8" : "#121511",
  muted: theme.dark ? "#A7AFBA" : "#5E665C",
  panel: theme.dark ? "#121821" : "#FAFAF3",
  selected: theme.dark ? "#481300" : "#FFDBCE",
  surface: theme.dark ? "#171E28" : "#FFFFFF",
  thumb: theme.dark ? "#202938" : "#E0E5DA",
});

export type WorkoutCardColors = ReturnType<typeof getWorkoutCardColors>;

export const getWorkoutAccentColor = (
  groupKey: string,
  colors: WorkoutCardColors,
) => (groupKey ? connectionColors[groupKey] || colors.accent : colors.accent);

export const getWorkoutCardTitle = ({
  exercises,
  groupKey,
  methodology,
  blockLabel = "Bloco",
  fallbackName = "Sem nome",
}: {
  blockLabel?: string;
  exercises: IndexedExercise[];
  fallbackName?: string;
  groupKey: string;
  methodology: string;
}) => {
  if (exercises.length > 1) {
    return methodology
      ? `${methodology} / ${blockLabel} ${groupKey}`
      : `${blockLabel} ${groupKey}`;
  }

  return exercises[0]?.name || fallbackName;
};

export const getWorkoutCardSubtitle = (
  exercises: IndexedExercise[],
  fallbackName = "Sem nome",
) =>
  exercises.length > 1
    ? exercises.map((exercise) => exercise.name || fallbackName).join(" + ")
    : "";

export const getWorkoutSeriesNumbers = (exercises: IndexedExercise[]) => {
  const totalSeries = Math.max(
    ...exercises.map((exercise) => parseSeriesCount(exercise.series)),
    1,
  );

  return Array.from({ length: totalSeries }, (_, index) => index + 1);
};

export const getWorkoutSeriesKeys = (
  exercises: IndexedExercise[],
  seriesNum: number,
) =>
  exercises
    .filter((exercise) => seriesNum <= parseSeriesCount(exercise.series))
    .map((exercise) => `${exercise.uid}-${seriesNum}`);
