import { db } from "@/database/client";
import { mapStoredNoteRow } from "@/database/noteMappers";
import { type Note } from "@/database/types";

export const getNotes = async (): Promise<Note[]> => {
  const rows = await db.getAllAsync<{
    id: number;
    title: string;
    text: string;
  }>("SELECT * FROM notes;");

  return rows.map(mapStoredNoteRow);
};

export const addNote = async (title: string, payload: object) => {
  const text = JSON.stringify(payload);
  const result = await db.runAsync("INSERT INTO notes (title, text) VALUES (?, ?);", [
    title,
    text,
  ]);
  return result.lastInsertRowId;
};

export const updateNote = async (
  id: number,
  title: string,
  payload: object,
) => {
  const text = JSON.stringify(payload);
  await db.runAsync("UPDATE notes SET title = ?, text = ? WHERE id = ?;", [
    title,
    text,
    id,
  ]);
};

export const getNoteById = async (id: number): Promise<Note | null> => {
  const row = await db.getFirstAsync<{
    id: number;
    title: string;
    text: string;
  }>("SELECT * FROM notes WHERE id = ?;", [id]);

  if (!row) return null;

  return mapStoredNoteRow(row);
};

export const deleteManyNotes = async (ids: number[]) => {
  if (ids.length === 0) return;
  const placeholders = ids.map(() => "?").join(",");
  await db.runAsync(`DELETE FROM notes WHERE id IN (${placeholders});`, ids);
};
