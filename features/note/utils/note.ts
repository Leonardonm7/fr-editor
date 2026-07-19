import { createExerciseUid } from "@/utils/exerciseUid";
import {
  buildSeriesDetails,
  type SeriesDetail,
} from "@/utils/workoutSeries";

export { connectionColors, connectionGroups } from "@/utils/workoutConnections";
export { createExerciseUid };
export {
  buildSeriesDetails,
  parseSeriesCount,
  type SeriesDetail,
} from "@/utils/workoutSeries";

export const days = [
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
  "Domingo",
] as const;

export const methodologies = [
  "Biset",
  "Triset",
  "Drop-set",
  "Rest-pause",
  "Super-set",
  "Pirâmide",
  "FST-7",
];

export type ExerciseForm = {
  uid: string;
  name: string;
  description: string;
  series: string;
  reps: string;
  load: string;
  seriesDetails?: SeriesDetail[];
  day: string;
  methodology: string;
  connectionGroup: string;
  libraryId?: string;
  bodyPart?: string;
  equipment?: string;
  target?: string;
  gifUrl?: string;
};

export type IndexedExercise = ExerciseForm & {
  index: number;
};

export const getSeriesDetailForIndex = (
  exercise: Pick<ExerciseForm, "load" | "reps" | "series" | "seriesDetails">,
  seriesNumber: number,
) => {
  const detail = exercise.seriesDetails?.[seriesNumber - 1];

  return {
    reps: detail?.reps ?? exercise.reps,
    load: detail?.load ?? exercise.load,
  };
};

export const getSeriesDetails = (
  exercise: Pick<ExerciseForm, "load" | "reps" | "series" | "seriesDetails">,
) =>
  buildSeriesDetails(
    exercise.series,
    { reps: exercise.reps, load: exercise.load },
    exercise.seriesDetails,
  );

export const getStoredExerciseLoad = (
  exercise: Pick<ExerciseForm, "load" | "seriesDetails">,
) => {
  const details = exercise.seriesDetails ?? [];

  for (let index = details.length - 1; index >= 0; index -= 1) {
    const detailLoad = details[index]?.load?.trim();
    if (detailLoad) return detailLoad;
  }

  return exercise.load;
};

const getLinkedBlockKey = (
  exercise: Pick<ExerciseForm, "day" | "connectionGroup">,
) => {
  const connectionGroup = exercise.connectionGroup.trim().toUpperCase();
  const day = exercise.day.trim();

  if (!day || !connectionGroup) return "";

  return `${day}|${connectionGroup}`;
};

export const sortExercisesByLinkedBlocks = <
  T extends Pick<ExerciseForm, "day" | "connectionGroup">,
>(
  exercises: T[],
) => {
  const blocks = new Map<string, T[]>();

  exercises.forEach((exercise) => {
    const blockKey = getLinkedBlockKey(exercise);
    if (!blockKey) return;

    const current = blocks.get(blockKey) ?? [];
    current.push(exercise);
    blocks.set(blockKey, current);
  });

  const addedBlocks = new Set<string>();
  const ordered: T[] = [];

  exercises.forEach((exercise) => {
    const blockKey = getLinkedBlockKey(exercise);

    if (!blockKey) {
      ordered.push(exercise);
      return;
    }

    if (addedBlocks.has(blockKey)) return;

    ordered.push(...(blocks.get(blockKey) ?? [exercise]));
    addedBlocks.add(blockKey);
  });

  return ordered;
};

const parseLoadValue = (value: string) => {
  const normalized = value.replace(",", ".").trim();
  if (!normalized) return null;

  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : null;
};

export const formatNoteDate = (value: string, locale = "pt-BR") => {
  if (!value) return "";

  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return "";

  return parsed.toLocaleString(locale, {
    dateStyle: "short",
    timeStyle: "short",
  });
};

export const getExerciseVolume = (
  exercise: Pick<ExerciseForm, "load" | "reps" | "series" | "seriesDetails">,
) => {
  if (exercise.seriesDetails?.length) {
    return exercise.seriesDetails.reduce((sum, detail) => {
      const reps = parseInt(detail.reps, 10) || 0;
      const load = parseLoadValue(detail.load) || 0;
      return sum + reps * load;
    }, 0);
  }

  const series = parseInt(exercise.series, 10) || 0;
  const reps = parseInt(exercise.reps, 10) || 0;
  const load = parseLoadValue(exercise.load) || 0;

  return series * reps * load;
};

export const formatLoadDisplay = (value: string) => {
  const parsed = parseLoadValue(value);
  if (parsed === null) return value || "0";

  return Number.isInteger(parsed)
    ? parsed.toLocaleString("pt-BR")
    : parsed.toLocaleString("pt-BR", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      });
};
