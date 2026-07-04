import type { GlobalContainerColors } from "@/components/ui/GlobalContainer";
import {
  HeaderSignalPlate,
  HeaderTitleBlock,
} from "@/components/ui/ScreenHeaderParts";
import { StyleSheet, View } from "react-native";

type SettingsHeaderProps = {
  colors: GlobalContainerColors;
};

export function SettingsHeader({ colors }: SettingsHeaderProps) {
  return (
    <>
      <HeaderSignalPlate colors={colors} label="Preferências" />

      <View style={styles.heroRow}>
        <HeaderTitleBlock
          colors={colors}
          eyebrow="Calibração visual"
          title="Aparência"
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
