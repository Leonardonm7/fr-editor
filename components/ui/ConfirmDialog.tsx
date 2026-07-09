import { StyleSheet, View } from "react-native";
import { Icon } from "@/components/ui/Icon";
import { Text } from "@/components/ui/Text";
import { TouchableRipple } from "@/components/ui/TouchableRipple";
import { useTheme } from "@/theme";
import { useTranslation } from "@/hooks/useTranslation";

import { AppModal } from "./AppModal";

type ConfirmDialogProps = {
  visible: boolean;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export const ConfirmDialog = ({
  visible,
  title,
  message,
  confirmLabel,
  cancelLabel,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <AppModal
      visible={visible}
      onDismiss={onCancel}
      header={
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View
              style={[
                styles.iconFrame,
                {
                  borderColor: theme.colors.outlineVariant,
                  backgroundColor: theme.colors.elevation.level2,
                },
              ]}
            >
              <Icon source="alert-outline" size={20} color={theme.colors.primary} />
            </View>
            <View style={styles.headerCopy}>
              <Text style={[styles.eyebrow, { color: theme.colors.primary }]}>
                {t("attention")}
              </Text>
              <Text style={[styles.title, { color: theme.colors.onSurface }]}>
                {title}
              </Text>
            </View>
          </View>
          <View style={styles.titleRuleRow}>
            <View
              style={[styles.titleRuleStrong, { backgroundColor: theme.colors.primary }]}
            />
            <View
              style={[
                styles.titleRule,
                { backgroundColor: theme.colors.outlineVariant },
              ]}
            />
          </View>
        </View>
      }
      actions={
        <View
          style={[
            styles.actions,
            { borderTopColor: theme.colors.outlineVariant },
          ]}
        >
          <TouchableRipple
            onPress={onCancel}
            borderless
            style={[
              styles.btn,
              {
                borderColor: theme.colors.outlineVariant,
                backgroundColor: theme.colors.elevation.level2,
              },
            ]}
          >
            <Text
              style={[styles.btnText, { color: theme.colors.onSurfaceVariant }]}
            >
              {cancelLabel ?? t("cancel")}
            </Text>
          </TouchableRipple>

          <TouchableRipple
            onPress={onConfirm}
            borderless
            style={[styles.btn, { backgroundColor: theme.colors.primary }]}
          >
            <Text style={[styles.btnText, { color: theme.colors.onPrimary }]}>
              {confirmLabel ?? t("confirm")}
            </Text>
          </TouchableRipple>
        </View>
      }
    >
      <View style={styles.content}>
        <Text
          style={[styles.message, { color: theme.colors.onSurfaceVariant }]}
        >
          {message}
        </Text>
      </View>
    </AppModal>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingBottom: 4,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerCopy: {
    flex: 1,
    gap: 2,
  },
  headerTop: {
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
  },
  eyebrow: {
    fontSize: 11,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  iconFrame: {
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    height: 44,
    justifyContent: "center",
    width: 44,
  },
  title: {
    fontSize: 22,
    fontWeight: "900",
    lineHeight: 28,
  },
  titleRule: {
    flex: 1,
    height: 2,
  },
  titleRuleRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: 7,
    marginTop: 14,
    maxWidth: 180,
  },
  titleRuleStrong: {
    height: 5,
    width: 40,
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  message: {
    fontSize: 15,
    lineHeight: 22,
  },
  actions: {
    flexDirection: "row",
    gap: 10,
    paddingBottom: 20,
    paddingHorizontal: 20,
    paddingTop: 16,
    borderTopWidth: 1,
  },
  btn: {
    flex: 1,
    borderRadius: 8,
    borderWidth: 1,
    paddingVertical: 13,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  btnText: {
    fontSize: 14,
    fontWeight: "900",
    textTransform: "uppercase",
  },
});
