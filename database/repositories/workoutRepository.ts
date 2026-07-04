import { db } from "@/database/client";
import { type WorkoutStateRecord } from "@/database/types";

export const getWorkoutStates = async (): Promise<WorkoutStateRecord[]> =>
  db.getAllAsync<WorkoutStateRecord>(
    "SELECT key, data FROM workout_state ORDER BY key;",
  );

export const saveWorkoutState = async (
  noteId: number,
  day: string,
  state: object,
) => {
  const key = `${noteId}:${day}`;
  const data = JSON.stringify(state);
  await db.runAsync(
    "INSERT OR REPLACE INTO workout_state (key, data) VALUES (?, ?);",
    [key, data],
  );
};

export const loadWorkoutState = async (
  noteId: number,
  day: string,
): Promise<unknown | null> => {
  const key = `${noteId}:${day}`;
  const row = await db.getFirstAsync<{ data: string }>(
    "SELECT data FROM workout_state WHERE key = ?;",
    [key],
  );
  if (!row) return null;
  try {
    return JSON.parse(row.data);
  } catch {
    return null;
  }
};

export const clearWorkoutState = async (noteId: number, day: string) => {
  const key = `${noteId}:${day}`;
  await db.runAsync("DELETE FROM workout_state WHERE key = ?;", [key]);
};
