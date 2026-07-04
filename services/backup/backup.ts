import {
  type Exercise,
  type Note,
  type AppSettingRecord,
  type WorkoutStateRecord,
} from "@/database/types";
import {
  getAllAppSettings,
  restFinishedSoundPreferenceKey,
} from "@/database/repositories/settingsRepository";
import {
  getWorkoutStates,
} from "@/database/repositories/workoutRepository";
import { buildSeriesDetails, createExerciseUid } from "@/features/note/utils/note";

const BACKUP_APP_NAME = "FR Editor";
const BACKUP_VERSION = 2;

type BackupNote = {
  id: number;
  title: string;
  payload: {
    createdAt: string;
    exercises: Exercise[];
    updatedAt: string;
  };
};

export type BackupFile = {
  app: typeof BACKUP_APP_NAME;
  exportedAt: string;
  version: typeof BACKUP_VERSION;
  data: {
    appSettings: AppSettingRecord[];
    notes: BackupNote[];
    workoutStates: WorkoutStateRecord[];
  };
};

export type ParsedBackup = BackupFile["data"];

const normalizeExercise = (exercise: unknown): Exercise => {
  if (!exercise || typeof exercise !== "object") {
    throw new Error("Exercício inválido no backup.");
  }

  const item = exercise as Partial<Exercise>;
  const series = String(item.series ?? "");
  const reps = String(item.reps ?? "");
  const load = String(item.load ?? "");

  return {
    bodyPart: item.bodyPart ? String(item.bodyPart) : undefined,
    connectionGroup: String(item.connectionGroup ?? ""),
    day: String(item.day ?? ""),
    description: String(item.description ?? ""),
    equipment: item.equipment ? String(item.equipment) : undefined,
    gifUrl: item.gifUrl ? String(item.gifUrl) : undefined,
    libraryId: item.libraryId ? String(item.libraryId) : undefined,
    load,
    methodology: String(item.methodology ?? ""),
    name: String(item.name ?? ""),
    reps,
    series,
    seriesDetails: buildSeriesDetails(series, { reps, load }, item.seriesDetails),
    target: item.target ? String(item.target) : undefined,
    uid: String(item.uid ?? createExerciseUid()),
  };
};

const normalizeNote = (note: unknown): BackupNote => {
  if (!note || typeof note !== "object") {
    throw new Error("Treino inválido no backup.");
  }

  const item = note as Partial<BackupNote>;
  const payload = item.payload;
  if (!payload || typeof payload !== "object") {
    throw new Error("Payload de treino inválido no backup.");
  }

  const exercises = Array.isArray(payload.exercises)
    ? payload.exercises.map(normalizeExercise)
    : [];

  return {
    id: Number(item.id),
    payload: {
      createdAt: String(payload.createdAt ?? ""),
      exercises,
      updatedAt: String(payload.updatedAt ?? ""),
    },
    title: String(item.title ?? "Treino").trim() || "Treino",
  };
};

const normalizeAppSettingList = (value: unknown) => {
  if (!Array.isArray(value)) {
    throw new Error("Configurações inválidas no backup.");
  }

  return value.map((record) => {
    if (!record || typeof record !== "object") {
      throw new Error("Configurações inválidas no backup.");
    }

    const item = record as Partial<AppSettingRecord>;
    if (typeof item.key !== "string" || typeof item.value !== "string") {
      throw new Error("Configurações inválidas no backup.");
    }

    return {
      key: item.key,
      value: item.value,
    };
  });
};

const normalizeWorkoutStateList = (value: unknown) => {
  if (!Array.isArray(value)) {
    throw new Error("Estados de treino inválidos no backup.");
  }

  return value.map((record) => {
    if (!record || typeof record !== "object") {
      throw new Error("Estados de treino inválidos no backup.");
    }

    const item = record as Partial<WorkoutStateRecord>;
    if (typeof item.key !== "string" || typeof item.data !== "string") {
      throw new Error("Estados de treino inválidos no backup.");
    }

    return {
      data: item.data,
      key: item.key,
    };
  });
};

export const createBackupPayload = async (notes: Note[]): Promise<BackupFile> => {
  const appSettings = (await getAllAppSettings()).filter(
    (setting) => setting.key !== restFinishedSoundPreferenceKey,
  );

  return {
    app: BACKUP_APP_NAME,
    data: {
      appSettings,
      notes: notes.map((note) => ({
        id: note.id,
        payload: {
          createdAt: note.createdAt,
          exercises: note.exercises,
          updatedAt: note.updatedAt,
        },
        title: note.title,
      })),
      workoutStates: await getWorkoutStates(),
    },
    exportedAt: new Date().toISOString(),
    version: BACKUP_VERSION,
  };
};

export const parseBackupJson = (value: string): ParsedBackup => {
  const parsed = JSON.parse(value) as Partial<BackupFile>;

  if (
    parsed.app !== BACKUP_APP_NAME ||
    parsed.version !== BACKUP_VERSION ||
    !parsed.data ||
    typeof parsed.data !== "object"
  ) {
    throw new Error("Backup inválido ou versão não suportada.");
  }

  return {
    appSettings: normalizeAppSettingList(parsed.data.appSettings),
    notes: Array.isArray(parsed.data.notes)
      ? parsed.data.notes.map(normalizeNote)
      : [],
    workoutStates: normalizeWorkoutStateList(parsed.data.workoutStates),
  };
};
