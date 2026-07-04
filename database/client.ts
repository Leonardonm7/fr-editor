import * as SQLite from "expo-sqlite";

export const db = SQLite.openDatabaseSync("notes.db");

export const parseStoredJson = (value: string) => {
  try {
    return JSON.parse(value || "{}") as Record<string, unknown>;
  } catch {
    return null;
  }
};
