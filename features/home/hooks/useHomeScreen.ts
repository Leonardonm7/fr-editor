import { deleteManyNotes, getNotes } from "@/database/repositories/notesRepository";
import { replaceDatabaseBackup } from "@/database/repositories/backupRepository";
import { type Note } from "@/database/types";
import { useFocusCallback } from "@/hooks/useFocusCallback";
import { createBackupPayload, parseBackupJson } from "@/services/backup/backup";
import { useTranslation } from "@/hooks/useTranslation";
import { router } from "expo-router";
import { useState } from "react";
import { Share } from "react-native";

export function useHomeScreen() {
  const { t } = useTranslation();
  const [notes, setNotes] = useState<Note[]>([]);
  const [filtered, setFiltered] = useState<Note[]>([]);
  const [query, setQuery] = useState("");
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [importVisible, setImportVisible] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);

  const filterWithQuery = (data: Note[], text: string) => {
    const normalizedQuery = text.trim().toLowerCase();
    setFiltered(
      normalizedQuery
        ? data.filter((note) =>
            note.title.toLowerCase().includes(normalizedQuery),
          )
        : data,
    );
  };

  const loadNotes = async () => {
    const data = await getNotes();
    setNotes(data);
    filterWithQuery(data, query);
  };

  const filterNotes = (text: string) => {
    setQuery(text);
    filterWithQuery(notes, text);
  };

  useFocusCallback(() => {
    loadNotes();
  });

  const toggleSelection = (id: number) => {
    setSelectedIds((current) =>
      current.includes(id) ? current.filter((x) => x !== id) : [...current, id],
    );
  };

  const handlePressItem = (id: number) => {
    if (selectedIds.length > 0) toggleSelection(id);
    else router.push({ pathname: "/Note", params: { id: id.toString() } });
  };

  const handleLongPressItem = (id: number) => {
    toggleSelection(id);
  };

  const confirmDelete = async () => {
    if (selectedIds.length > 0) {
      await deleteManyNotes(selectedIds);
      setSelectedIds([]);
      loadNotes();
    }
    setDeleteVisible(false);
  };

  const handleExportBackup = async () => {
    const backupPayload = await createBackupPayload(notes);
    await Share.share({
      title: "Backup FR Editor",
      message: JSON.stringify(backupPayload, null, 2),
    });
  };

  const handleImportJson = async (rawJson: string) => {
    try {
      const backupData = parseBackupJson(rawJson);
      await replaceDatabaseBackup(backupData);

      setImportVisible(false);
      setSelectedIds([]);
      setQuery("");
      setFeedbackMessage(
        t("importSuccess", { count: backupData.notes.length }),
      );
      await loadNotes();
    } catch {
      setFeedbackMessage(t("importJsonFallback"));
    }
  };

  return {
    confirmDelete,
    deleteVisible,
    feedbackMessage,
    filterNotes,
    filtered,
    handleExportBackup,
    handleImportJson,
    handleLongPressItem,
    handlePressItem,
    importVisible,
    isSelecting: selectedIds.length > 0,
    notes,
    query,
    searchFocused,
    selectedIds,
    setDeleteVisible,
    setFeedbackMessage,
    setImportVisible,
    setSearchFocused,
    setSelectedIds,
  };
}
