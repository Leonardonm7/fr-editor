export const days = [
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
  "Domingo",
] as const;

export const dayAbbrev: Record<string, string> = {
  Segunda: "SEG",
  Terça: "TER",
  Quarta: "QUA",
  Quinta: "QUI",
  Sexta: "SEX",
  Sábado: "SÁB",
  Domingo: "DOM",
};

export const getTodayWorkoutDay = () => {
  const jsDay = new Date().getDay();
  return days[jsDay === 0 ? 6 : jsDay - 1];
};

export const methodologies = [
  "Biset",
  "Triset",
  "Drop-set",
  "Rest-pause",
  "Super-set",
  "Pirâmide",
  "FST-7",
];

export const connectionGroups = ["A", "B", "C", "D", "E"];

export const connectionColors: Record<string, string> = {
  A: "#4FC3F7",
  B: "#81C784",
  C: "#FFB74D",
  D: "#F06292",
  E: "#BA68C8",
};

export const createExerciseUid = () =>
  `ex-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

export type SeriesDetail = {
  load: string;
  reps: string;
};

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

export const parseSeriesCount = (value: string) => {
  const parsed = parseInt(value, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 1;
};

export const buildSeriesDetails = (
  series: string,
  fallback: Partial<SeriesDetail> = {},
  source?: unknown,
) => {
  const count = parseSeriesCount(series);
  const sourceItems = Array.isArray(source) ? source : [];

  return Array.from({ length: count }, (_, index) => {
    const item = sourceItems[index] as Partial<SeriesDetail> | undefined;

    return {
      reps: String(item?.reps ?? fallback.reps ?? ""),
      load: String(item?.load ?? fallback.load ?? ""),
    };
  });
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

export const parseLoadValue = (value: string) => {
  const normalized = value.replace(",", ".").trim();
  if (!normalized) return null;

  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : null;
};

export const normalizeLoadValue = (value: string) => {
  const parsed = parseLoadValue(value);
  return parsed === null ? value.trim() : parsed.toString();
};

export const formatNoteDate = (value: string) => {
  if (!value) return "Não disponível";

  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return "Não disponível";

  return parsed.toLocaleString("pt-BR", {
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
