import { FontSizeChoice } from "@/features/settings/components/FontSizeChoice";
import { LanguageChoice } from "@/features/settings/components/LanguageChoice";
import { PreviewPanel } from "@/features/settings/components/PreviewPanel";
import { RestSoundOption } from "@/features/settings/components/RestSoundOption";
import { SettingsHeader } from "@/features/settings/components/SettingsHeader";
import { SettingsSectionHeader } from "@/features/settings/components/SettingsSectionHeader";
import { ThemeChoice } from "@/features/settings/components/ThemeChoice";
import {
  getGlobalContainerColors,
  GlobalContainer,
} from "@/components/ui/GlobalContainer";
import { useSettingsScreen } from "@/features/settings/hooks/useSettingsScreen";
import {
  getFontSizeOptions,
  getLanguageOptions,
  getThemeOptions,
} from "@/features/settings/utils/options";
import { useTranslation } from "@/hooks/useTranslation";
import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";

export default function SettingsTab() {
  const theme = useTheme();
  const { language, t } = useTranslation();
  const colors = useMemo(() => getGlobalContainerColors(theme), [theme]);
  const themeOptions = useMemo(() => getThemeOptions(language), [language]);
  const fontSizeOptions = useMemo(
    () => getFontSizeOptions(language),
    [language],
  );
  const languageOptions = useMemo(
    () => getLanguageOptions(language),
    [language],
  );
  const {
    fontSizePreference,
    handleImportRestSound,
    handleResetRestSound,
    languagePreference,
    preference,
    restSound,
    restSoundBusy,
    setFontSizePreference,
    setLanguagePreference,
    setPreference,
  } = useSettingsScreen();

  return (
    <GlobalContainer
      applyBottomInset={false}
      colors={colors}
      contentContainerStyle={styles.content}
      header={<SettingsHeader colors={colors} />}
      scroll
    >
      <PreviewPanel colors={colors} preference={preference} />

      <SettingsSectionHeader
        colors={colors}
        meta={t("optionsCount", { count: 2 })}
        title={t("displayMode")}
      />

      <View style={styles.optionsGrid}>
        {themeOptions.map((option) => (
          <ThemeChoice
            colors={colors}
            isActive={preference === option.value}
            key={option.value}
            onPress={() => setPreference(option.value)}
            option={option}
          />
        ))}
      </View>

      <SettingsSectionHeader
        colors={colors}
        meta={t("levelsCount", { count: 3 })}
        title={t("fontSize")}
      />

      <View style={styles.fontOptionsGrid}>
        {fontSizeOptions.map((option) => (
          <FontSizeChoice
            colors={colors}
            isActive={fontSizePreference === option.value}
            key={option.value}
            onPress={() => setFontSizePreference(option.value)}
            option={option}
          />
        ))}
      </View>

      <SettingsSectionHeader
        colors={colors}
        meta={t("optionsCount", { count: 2 })}
        title={t("language")}
      />

      <View style={styles.optionsGrid}>
        {languageOptions.map((option) => (
          <LanguageChoice
            colors={colors}
            isActive={languagePreference === option.value}
            key={option.value}
            onPress={() => setLanguagePreference(option.value)}
            option={option}
          />
        ))}
      </View>

      <SettingsSectionHeader
        colors={colors}
        meta={restSound ? t("custom") : t("reset")}
        title={t("restAudio")}
      />

      <RestSoundOption
        colors={colors}
        isBusy={restSoundBusy}
        onImport={handleImportRestSound}
        onReset={handleResetRestSound}
        sound={restSound}
      />
    </GlobalContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: 16,
    paddingBottom: 16,
  },
  fontOptionsGrid: {
    flexDirection: "row",
    gap: 10,
  },
  optionsGrid: {
    flexDirection: "row",
    gap: 10,
  },
});
