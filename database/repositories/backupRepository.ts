import { db } from "@/database/client";
import { ensureAppSettingsTable } from "@/database/repositories/settingsRepository";
import {
  type AppSettingRecord,
  type BackupNoteRecord,
  type WorkoutStateRecord,
} from "@/database/types";

export const replaceDatabaseBackup = async ({
  appSettings,
  notes,
  workoutStates,
}: {
  appSettings: AppSettingRecord[];
  notes: BackupNoteRecord[];
  workoutStates: WorkoutStateRecord[];
}) => {
  await ensureAppSettingsTable();
  await db.withTransactionAsync(async () => {
    await db.runAsync("DELETE FROM workout_state;");
    await db.runAsync("DELETE FROM notes;");
    await db.runAsync("DELETE FROM app_settings;");

    for (const note of notes) {
      await db.runAsync(
        "INSERT INTO notes (id, title, text) VALUES (?, ?, ?);",
        [note.id, note.title, JSON.stringify(note.payload)],
      );
    }

    for (const state of workoutStates) {
      await db.runAsync(
        "INSERT OR REPLACE INTO workout_state (key, data) VALUES (?, ?);",
        [state.key, state.data],
      );
    }

    for (const setting of appSettings) {
      await db.runAsync(
        "INSERT OR REPLACE INTO app_settings (key, value) VALUES (?, ?);",
        [setting.key, setting.value],
      );
    }
  });
};
