import type { MD3Theme } from "@/theme";

export const LIBRARY_PAGE_SIZE = 20;

export const getNoteEditColors = (theme: MD3Theme) => ({
  accent: theme.colors.primary,
  border: theme.dark ? "#303744" : "#C7CEC1",
  ink: theme.dark ? "#F4F1E8" : "#121511",
  muted: theme.dark ? "#A7AFBA" : "#5E665C",
  panel: theme.dark ? "#121821" : "#FAFAF3",
  selected: theme.dark ? "#481300" : "#FFDBCE",
  surface: theme.dark ? "#171E28" : "#FFFFFF",
  thumb: theme.dark ? "#202938" : "#E0E5DA",
});

export type NoteEditColors = ReturnType<typeof getNoteEditColors>;
