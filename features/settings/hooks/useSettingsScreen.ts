import { getRestFinishedSoundPreference } from "@/database/repositories/settingsRepository";
import { type RestFinishedSoundPreference } from "@/database/types";
import {
  importRestFinishedSoundFile,
  resetRestFinishedSoundFile,
} from "@/features/settings/utils/restSound";
import { reloadRestFinishedSound } from "@/features/workout/services/restSoundService";
import { useAppTheme } from "@/hooks/useAppTheme";
import { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";

export const useSettingsScreen = () => {
  const [restSound, setRestSound] =
    useState<RestFinishedSoundPreference | null>(null);
  const [restSoundBusy, setRestSoundBusy] = useState(false);
  const {
    fontPreference,
    fontSizePreference,
    languagePreference,
    preference,
    setFontPreference,
    setFontSizePreference,
    setLanguagePreference,
    setPreference,
  } = useAppTheme();

  useEffect(() => {
    let mounted = true;

    getRestFinishedSoundPreference().then((sound) => {
      if (mounted) setRestSound(sound);
    });

    return () => {
      mounted = false;
    };
  }, []);

  const handleImportRestSound = useCallback(async () => {
    setRestSoundBusy(true);

    try {
      const sound = await importRestFinishedSoundFile();
      if (!sound) return;

      reloadRestFinishedSound();
      setRestSound(sound);
    } catch (error) {
      Alert.alert(
        "Não foi possível importar",
        error instanceof Error ? error.message : "Tente outro arquivo de áudio.",
      );
    } finally {
      setRestSoundBusy(false);
    }
  }, []);

  const handleResetRestSound = useCallback(async () => {
    setRestSoundBusy(true);

    try {
      await resetRestFinishedSoundFile();
      reloadRestFinishedSound();
      setRestSound(null);
    } catch {
      Alert.alert("Não foi possível restaurar", "Tente novamente em instantes.");
    } finally {
      setRestSoundBusy(false);
    }
  }, []);

  return {
    fontPreference,
    fontSizePreference,
    handleImportRestSound,
    handleResetRestSound,
    languagePreference,
    preference,
    restSound,
    restSoundBusy,
    setFontPreference,
    setFontSizePreference,
    setLanguagePreference,
    setPreference,
  };
};
