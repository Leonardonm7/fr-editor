import type { GlobalContainerColors } from "@/components/ui/GlobalContainer";
import { useTranslation } from "@/hooks/useTranslation";
import { StyleSheet, View } from "react-native";
import { Text } from "@/components/ui/Text";

type HomeListHeaderProps = {
  colors: GlobalContainerColors;
  count: number;
};

export const HomeListHeader = ({ colors, count }: HomeListHeaderProps) => {
  const { t } = useTranslation();

  return (
    <View style={styles.listHeader}>
      <Text style={[styles.listTitle, { color: colors.ink }]}>
        {t("trainingArchive")}
      </Text>
      <Text style={[styles.listCount, { color: colors.muted }]}>
        {t("recordsCount", { count })}
      </Text>
    </View>
  );
};

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
