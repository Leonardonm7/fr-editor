import { db, parseStoredJson } from "@/database/client";
import {
  type AppFontPreference,
  type AppFontSizePreference,
  type AppLanguagePreference,
  type AppSettingRecord,
  type AppThemePreference,
  type RestFinishedSoundPreference,
} from "@/database/types";

export const themePreferenceKey = "themePreference";
export const fontPreferenceKey = "fontPreference";
export const fontSizePreferenceKey = "fontSizePreference";
export const languagePreferenceKey = "languagePreference";
export const restFinishedSoundPreferenceKey = "restFinishedSoundPreference";

export const ensureAppSettingsTable = async () => {
  await db.execAsync(
    "CREATE TABLE IF NOT EXISTS app_settings (key TEXT PRIMARY KEY, value TEXT);",
  );
};

export const getAppSetting = async (key: string): Promise<string | null> => {
  await ensureAppSettingsTable();
  const row = await db.getFirstAsync<{ value: string }>(
    "SELECT value FROM app_settings WHERE key = ?;",
    [key],
  );

  return row?.value ?? null;
};

export const getAllAppSettings = async (): Promise<AppSettingRecord[]> => {
  await ensureAppSettingsTable();
  return db.getAllAsync<AppSettingRecord>(
    "SELECT key, value FROM app_settings ORDER BY key;",
  );
};

export const setAppSetting = async (key: string, value: string) => {
  await ensureAppSettingsTable();
  await db.runAsync(
    "INSERT OR REPLACE INTO app_settings (key, value) VALUES (?, ?);",
    [key, value],
  );
};

export const deleteAppSetting = async (key: string) => {
  await ensureAppSettingsTable();
  await db.runAsync("DELETE FROM app_settings WHERE key = ?;", [key]);
};

export const getThemePreference = async (): Promise<AppThemePreference> => {
  const value = await getAppSetting(themePreferenceKey);
  return value === "light" || value === "dark" ? value : "dark";
};

export const setThemePreference = async (value: AppThemePreference) => {
  await setAppSetting(themePreferenceKey, value);
};

export const getFontPreference = async (): Promise<AppFontPreference> => {
  const value = await getAppSetting(fontPreferenceKey);
  return value === "barlow" ||
    value === "fredoka" ||
    value === "inter" ||
    value === "kanit" ||
    value === "lato" ||
    value === "poppins" ||
    value === "ubuntu"
    ? value
    : "inter";
};

export const setFontPreference = async (value: AppFontPreference) => {
  await setAppSetting(fontPreferenceKey, value);
};

export const getFontSizePreference =
  async (): Promise<AppFontSizePreference> => {
    const value = await getAppSetting(fontSizePreferenceKey);
    return value === "compact" || value === "default" || value === "large"
      ? value
      : "default";
  };

export const setFontSizePreference = async (
  value: AppFontSizePreference,
) => {
  await setAppSetting(fontSizePreferenceKey, value);
};

export const getLanguagePreference =
  async (): Promise<AppLanguagePreference> => {
    const value = await getAppSetting(languagePreferenceKey);
    return value === "en" || value === "pt-BR" ? value : "pt-BR";
  };

export const setLanguagePreference = async (
  value: AppLanguagePreference,
) => {
  await setAppSetting(languagePreferenceKey, value);
};

export const getRestFinishedSoundPreference =
  async (): Promise<RestFinishedSoundPreference | null> => {
    const value = await getAppSetting(restFinishedSoundPreferenceKey);
    if (!value) return null;

    const parsed = parseStoredJson(value);
    if (
      !parsed ||
      typeof parsed.uri !== "string" ||
      typeof parsed.name !== "string" ||
      typeof parsed.updatedAt !== "string"
    ) {
      return null;
    }

    return {
      mimeType:
        typeof parsed.mimeType === "string" ? parsed.mimeType : undefined,
      name: parsed.name,
      updatedAt: parsed.updatedAt,
      uri: parsed.uri,
    };
  };

export const setRestFinishedSoundPreference = async (
  value: RestFinishedSoundPreference,
) => {
  await setAppSetting(restFinishedSoundPreferenceKey, JSON.stringify(value));
};

export const clearRestFinishedSoundPreference = async () => {
  await deleteAppSetting(restFinishedSoundPreferenceKey);
};
