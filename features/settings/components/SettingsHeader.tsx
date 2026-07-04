import type { GlobalContainerColors } from "@/components/ui/GlobalContainer";
import {
  HeaderSignalPlate,
  HeaderTitleBlock,
} from "@/components/ui/ScreenHeaderParts";
import { useTranslation } from "@/hooks/useTranslation";
import { StyleSheet, View } from "react-native";

type SettingsHeaderProps = {
  colors: GlobalContainerColors;
};

export function SettingsHeader({ colors }: SettingsHeaderProps) {
  const { t } = useTranslation();

  return (
    <>
      <HeaderSignalPlate colors={colors} label={t("preferences")} />

      <View style={styles.heroRow}>
        <HeaderTitleBlock
          colors={colors}
          eyebrow={t("appearanceCalibration")}
          title={t("appearanceSettings")}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  heroRow: {
    alignItems: "flex-end",
    flexDirection: "row",
    gap: 16,
    justifyContent: "space-between",
    marginTop: 12,
  },
});
