import type { Exercise, Note } from "@/database/types";
import { buildSeriesDetails } from "@/utils/workoutSeries";

type StoredNoteRow = {
  id: number;
  title: string;
  text: string;
};

const safeParseNotePayload = (text: string) => {
  try {
    return JSON.parse(text || "{}") as Record<string, unknown>;
  } catch {
    return {};
  }
};

const mapStoredExercise = (ex: Partial<Exercise>): Exercise => ({
  uid: String(ex?.uid ?? ""),
  name: String(ex?.name ?? ""),
  description: String(ex?.description ?? ""),
  series: String(ex?.series ?? ""),
  reps: String(ex?.reps ?? ""),
  load: String(ex?.load ?? ""),
  seriesDetails: buildSeriesDetails(
    String(ex?.series ?? ""),
    {
      reps: String(ex?.reps ?? ""),
      load: String(ex?.load ?? ""),
    },
    ex?.seriesDetails,
  ),
  day: String(ex?.day ?? ""),
  methodology: String(ex?.methodology ?? ""),
  connectionGroup: String(ex?.connectionGroup ?? ""),
  libraryId: ex?.libraryId ? String(ex.libraryId) : undefined,
  bodyPart: ex?.bodyPart ? String(ex.bodyPart) : undefined,
  equipment: ex?.equipment ? String(ex.equipment) : undefined,
  target: ex?.target ? String(ex.target) : undefined,
  gifUrl: ex?.gifUrl ? String(ex.gifUrl) : undefined,
});

export const mapStoredNoteRow = (row: StoredNoteRow): Note => {
  const parsed = safeParseNotePayload(row.text);
  const rawExercises = Array.isArray(parsed.exercises) ? parsed.exercises : [];

  return {
    id: row.id,
    title: row.title,
    exercises: rawExercises.map(mapStoredExercise),
    createdAt: String(parsed.createdAt ?? ""),
    updatedAt: String(parsed.updatedAt ?? ""),
  };
};
