import type { AppThemePreference } from "@/database/types";
import type { GlobalContainerColors } from "@/components/ui/GlobalContainer";
import { useTranslation } from "@/hooks/useTranslation";
import { StyleSheet, View } from "react-native";
import { Text } from "@/components/ui/Text";

type PreviewPanelProps = {
  colors: GlobalContainerColors;
  preference: AppThemePreference;
};

export const PreviewPanel = ({ colors, preference }: PreviewPanelProps) => {
  const { language, t } = useTranslation();
  const isLight = preference === "light";

  return (
    <View
      style={[
        styles.previewPanel,
        { backgroundColor: colors.panel, borderColor: colors.border },
      ]}
    >
      <View style={styles.previewHeader}>
        <View>
          <Text style={[styles.panelKicker, { color: colors.accent }]}>
            {t("activeTheme")}
          </Text>
          <Text style={[styles.previewTitle, { color: colors.ink }]}>
            {isLight
              ? language === "en"
                ? "Light"
                : "Claro"
              : language === "en"
                ? "Dark"
                : "Escuro"}
          </Text>
        </View>
      </View>

      <View
        style={[styles.previewStage, { backgroundColor: colors.background }]}
      >
        <View
          style={[styles.previewRail, { backgroundColor: colors.accent }]}
        />
        <View style={styles.previewBlocks}>
          <View
            style={[
              styles.previewMainBlock,
              { backgroundColor: colors.surface },
            ]}
          >
            <View
              style={[
                styles.previewLineStrong,
                { backgroundColor: colors.ink },
              ]}
            />
            <View
              style={[styles.previewLine, { backgroundColor: colors.border }]}
            />
            <View
              style={[
                styles.previewLineShort,
                { backgroundColor: colors.accent },
              ]}
            />
          </View>
          <View style={styles.previewSideBlocks}>
            <View
              style={[
                styles.previewMiniBlock,
                { backgroundColor: colors.thumb },
              ]}
            />
            <View
              style={[
                styles.previewMiniBlock,
                { backgroundColor: colors.selected },
              ]}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  panelKicker: {
    fontSize: 11,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  previewBlocks: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    padding: 12,
  },
  previewHeader: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  previewLine: {
    borderRadius: 99,
    height: 8,
    width: "78%",
  },
  previewLineShort: {
    borderRadius: 99,
    height: 8,
    width: "46%",
  },
  previewLineStrong: {
    borderRadius: 99,
    height: 10,
    width: "62%",
  },
  previewMainBlock: {
    borderRadius: 8,
    flex: 1,
    gap: 10,
    justifyContent: "center",
    padding: 14,
  },
  previewMiniBlock: {
    borderRadius: 8,
    flex: 1,
  },
  previewPanel: {
    borderRadius: 8,
    borderWidth: 1,
    gap: 14,
    padding: 14,
  },
  previewRail: {
    alignSelf: "stretch",
    width: 4,
  },
  previewSideBlocks: {
    gap: 10,
    width: 58,
  },
  previewStage: {
    borderRadius: 8,
    flexDirection: "row",
    minHeight: 126,
    overflow: "hidden",
  },
  previewTitle: {
    fontSize: 28,
    fontWeight: "900",
    lineHeight: 32,
    textTransform: "uppercase",
  },
});
