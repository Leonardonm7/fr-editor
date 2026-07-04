export type Exercise = {
  uid: string;
  name: string;
  description: string;
  series: string;
  reps: string;
  load: string;
  seriesDetails?: { load: string; reps: string }[];
  day: string;
  methodology: string;
  connectionGroup: string;
  libraryId?: string;
  bodyPart?: string;
  equipment?: string;
  target?: string;
  gifUrl?: string;
};

export type Note = {
  id: number;
  title: string;
  exercises: Exercise[];
  createdAt: string;
  updatedAt: string;
};

export type AppThemePreference = "dark" | "light";
export type AppFontSizePreference = "compact" | "default" | "large";

export type RestFinishedSoundPreference = {
  mimeType?: string;
  name: string;
  updatedAt: string;
  uri: string;
};

export type AppSettingRecord = {
  key: string;
  value: string;
};

export type WorkoutStateRecord = {
  data: string;
  key: string;
};

export type BackupNoteRecord = {
  id: number;
  payload: {
    createdAt: string;
    exercises: Exercise[];
    updatedAt: string;
  };
  title: string;
};
