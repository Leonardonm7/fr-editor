import type { GlobalContainerColors } from "@/components/ui/GlobalContainer";
import { useTranslation } from "@/hooks/useTranslation";
import { StyleSheet, View } from "react-native";
import { Icon } from "@/components/ui/Icon";
import { Text } from "@/components/ui/Text";

type HomeEmptyStateProps = {
  colors: GlobalContainerColors;
  hasQuery: boolean;
};

export const HomeEmptyState = ({ colors, hasQuery }: HomeEmptyStateProps) => {
  const { t } = useTranslation();

  return (
    <View
      style={[
        styles.emptyState,
        { backgroundColor: colors.panel, borderColor: colors.border },
      ]}
    >
      <View style={[styles.emptyIconFrame, { borderColor: colors.border }]}>
        <Icon source="dumbbell" size={40} color={colors.accent} />
      </View>
      <Text style={[styles.emptyTitle, { color: colors.ink }]}>
        {hasQuery ? t("noResults") : t("noWorkoutsYet")}
      </Text>
      <Text style={[styles.emptySubtitle, { color: colors.muted }]}>
        {hasQuery ? t("searchAnotherWorkout") : t("firstWorkoutHint")}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  emptyIconFrame: {
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    height: 88,
    justifyContent: "center",
    width: 88,
  },
  emptyState: {
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    gap: 8,
    justifyContent: "center",
    marginTop: 8,
    minHeight: 260,
    padding: 24,
  },
  emptySubtitle: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
  emptyTitle: {
    fontSize: 22,
    fontWeight: "900",
    textAlign: "center",
  },
});
