import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Icon, Text, TouchableRipple, useTheme } from "react-native-paper";
import { useTranslation } from "@/hooks/useTranslation";

import { AppModal } from "./AppModal";

type ImportJsonDialogProps = {
  visible: boolean;
  onCancel: () => void;
  onImport: (rawJson: string) => Promise<void> | void;
};

export function ImportJsonDialog({
  visible,
  onCancel,
  onImport,
}: ImportJsonDialogProps) {
  const [rawJson, setRawJson] = useState("");
  const theme = useTheme();
  const { t } = useTranslation();

  const handleCancel = () => {
    setRawJson("");
    onCancel();
  };

  const handleImport = async () => {
    await onImport(rawJson);
    setRawJson("");
  };

  const canImport = rawJson.trim().length > 0;

  return (
    <AppModal
      visible={visible}
      onDismiss={handleCancel}
      keyboardAvoiding
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
              <Icon
                source="database-import-outline"
                size={20}
                color={theme.colors.primary}
              />
            </View>
            <View style={styles.headerCopy}>
              <Text style={[styles.eyebrow, { color: theme.colors.primary }]}>
                {t("importBackup")}
              </Text>
              <Text style={[styles.title, { color: theme.colors.onSurface }]}>
                {t("importJson")}
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
            onPress={handleCancel}
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
              {t("cancel")}
            </Text>
          </TouchableRipple>

          <TouchableRipple
            onPress={handleImport}
            disabled={!canImport}
            borderless
            style={[
              styles.btn,
              {
                backgroundColor: canImport
                  ? theme.colors.primary
                  : theme.colors.elevation.level3,
                borderColor: canImport
                  ? theme.colors.primary
                  : theme.colors.outlineVariant,
              },
            ]}
          >
            <Text
              style={[
                styles.btnText,
                {
                  color: canImport
                    ? theme.colors.onPrimary
                    : theme.colors.onSurfaceVariant,
                },
              ]}
            >
              {t("import")}
            </Text>
          </TouchableRipple>
        </View>
      }
    >
      <View style={styles.content}>
        <Text style={[styles.hint, { color: theme.colors.onSurfaceVariant }]}>
          {t("importJsonHint")}
        </Text>

        <View
          style={[
          styles.inputWrapper,
          {
              backgroundColor: theme.colors.elevation.level2,
              borderColor: rawJson
                ? theme.colors.primary
                : theme.colors.outlineVariant,
            },
          ]}
        >
          <TextInput
            multiline
            numberOfLines={10}
            value={rawJson}
            onChangeText={setRawJson}
            placeholder="{ … }"
            placeholderTextColor={theme.colors.outline}
            style={[
              styles.input,
              {
                color: theme.colors.onSurface,
              },
            ]}
          />
        </View>
      </View>
    </AppModal>
  );
}

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
    gap: 14,
  },
  hint: {
    fontSize: 14,
    lineHeight: 20,
  },
  inputWrapper: {
    borderRadius: 8,
    borderWidth: 1,
    minHeight: 220,
    overflow: "hidden",
  },
  input: {
    fontSize: 13,
    fontFamily: "monospace",
    paddingHorizontal: 14,
    paddingVertical: 12,
    textAlignVertical: "top",
    minHeight: 220,
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
