import type { GlobalContainerColors } from "@/components/ui/GlobalContainer";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

type HomeListHeaderProps = {
  colors: GlobalContainerColors;
  count: number;
};

const pluralize = (count: number, singular: string, plural: string) =>
  count === 1 ? singular : plural;

export function HomeListHeader({ colors, count }: HomeListHeaderProps) {
  return (
    <View style={styles.listHeader}>
      <Text style={[styles.listTitle, { color: colors.ink }]}>
        Arquivo de treinos
      </Text>
      <Text style={[styles.listCount, { color: colors.muted }]}>
        {count} {pluralize(count, "registro", "registros")}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listCount: {
    fontSize: 12,
    fontWeight: "800",
  },
  listHeader: {
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  },
  listTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "900",
  },
});
