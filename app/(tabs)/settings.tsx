import { FontSizeChoice } from "@/features/settings/components/FontSizeChoice";
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
import { fontSizeOptions, themeOptions } from "@/features/settings/utils/options";
import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";

export default function SettingsTab() {
  const theme = useTheme();
  const colors = useMemo(() => getGlobalContainerColors(theme), [theme]);
  const {
    fontSizePreference,
    handleImportRestSound,
    handleResetRestSound,
    preference,
    restSound,
    restSoundBusy,
    setFontSizePreference,
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
        meta="02 opções"
        title="Modo de exibição"
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
        meta="03 níveis"
        title="Tamanho da fonte"
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
        meta={restSound ? "Personalizado" : "Padrão"}
        title="Áudio do descanso"
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
