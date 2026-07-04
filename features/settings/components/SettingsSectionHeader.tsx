import type { GlobalContainerColors } from "@/components/ui/GlobalContainer";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

type SettingsSectionHeaderProps = {
  colors: GlobalContainerColors;
  meta: string;
  title: string;
};

export function SettingsSectionHeader({
  colors,
  meta,
  title,
}: SettingsSectionHeaderProps) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={[styles.sectionTitle, { color: colors.ink }]}>
        {title}
      </Text>
      <Text style={[styles.sectionMeta, { color: colors.muted }]}>{meta}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sectionMeta: {
    fontSize: 12,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  sectionTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "900",
  },
});
