import { db } from "@/database/client";
import { ensureAppSettingsTable } from "@/database/repositories/settingsRepository";

export const initDB = async () => {
  await db.execAsync(
    "CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, text TEXT);",
  );
  await db.execAsync(
    "CREATE TABLE IF NOT EXISTS workout_state (key TEXT PRIMARY KEY, data TEXT);",
  );
  await ensureAppSettingsTable();
};
