import {
  translate,
  translateDay,
  translateDayAbbrev,
  translateMethodology,
  type TranslationKey,
} from "@/features/i18n/translations";
import { useAppTheme } from "@/hooks/useAppTheme";
import { useCallback, useMemo } from "react";

type TranslationParams = Record<string, number | string>;

export function useTranslation() {
  const { languagePreference } = useAppTheme();

  const t = useCallback(
    (key: TranslationKey, params?: TranslationParams) =>
      translate(languagePreference, key, params),
    [languagePreference],
  );

  const dayName = useCallback(
    (day: string) => translateDay(languagePreference, day),
    [languagePreference],
  );

  const dayShort = useCallback(
    (day: string) => translateDayAbbrev(languagePreference, day),
    [languagePreference],
  );

  const methodologyName = useCallback(
    (value: string) => translateMethodology(languagePreference, value),
    [languagePreference],
  );

  return useMemo(
    () => ({
      dayName,
      dayShort,
      language: languagePreference,
      methodologyName,
      t,
    }),
    [dayName, dayShort, languagePreference, methodologyName, t],
  );
}
