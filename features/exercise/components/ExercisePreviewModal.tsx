import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { IconButton } from "@/components/ui/IconButton";
import { Text } from "@/components/ui/Text";
import { useTheme } from "@/components/ui/theme";

import { AppModal } from "@/components/ui/AppModal";
import { useTranslation } from "@/hooks/useTranslation";

export type ExercisePreview = {
  instructions?: string[];
  meta: string;
  name: string;
  source: number;
};

type ExercisePreviewModalProps = {
  onClose: () => void;
  preview: ExercisePreview | null;
};

export const ExercisePreviewModal = ({
  onClose,
  preview,
}: ExercisePreviewModalProps) => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <AppModal
      visible={!!preview}
      onDismiss={onClose}
      contentStyle={styles.modalContent}
      scrollContentStyle={styles.scrollContent}
      header={
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View style={styles.headerCopy}>
              <Text style={[styles.eyebrow, { color: theme.colors.primary }]}>
                {t("preview")}
              </Text>
              <Text
                style={[styles.title, { color: theme.colors.onSurface }]}
                numberOfLines={2}
              >
                {preview?.name.toUpperCase()}
              </Text>
              {!!preview?.meta && (
                <Text
                  style={[
                    styles.meta,
                    { color: theme.colors.onSurfaceVariant },
                  ]}
                  numberOfLines={2}
                >
                  {preview.meta}
                </Text>
              )}
            </View>

            <IconButton
              icon="close"
              size={20}
              iconColor={theme.colors.onSurfaceVariant}
              onPress={onClose}
              style={[
                styles.closeButton,
                {
                  backgroundColor: theme.colors.elevation.level2,
                  borderColor: theme.colors.outlineVariant,
                },
              ]}
            />
          </View>

          <View style={styles.titleRuleRow}>
            <View
              style={[
                styles.titleRuleStrong,
                { backgroundColor: theme.colors.primary },
              ]}
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
    >
      <View style={styles.content}>
        <View
          style={[
            styles.imageShell,
            {
              backgroundColor: theme.colors.elevation.level2,
              borderColor: theme.colors.outlineVariant,
            },
          ]}
        >
          {preview && (
            <Image
              source={preview.source}
              style={styles.image}
              contentFit="contain"
              transition={150}
            />
          )}
        </View>

        {!!preview?.instructions?.length && (
          <View style={styles.instructionsSection}>
            <Text
              style={[
                styles.instructionsTitle,
                { color: theme.colors.onSurface },
              ]}
            >
              {t("howTo")}
            </Text>

            <View style={styles.instructionsList}>
              {preview.instructions.map((instruction, index) => (
                <View key={`${index}-${instruction}`} style={styles.stepRow}>
                  <View
                    style={[
                      styles.stepNumber,
                      { backgroundColor: theme.colors.primary },
                    ]}
                  >
                    <Text style={styles.stepNumberText}>{index + 1}</Text>
                  </View>
                  <Text
                    style={[
                      styles.stepText,
                      { color: theme.colors.onSurfaceVariant },
                    ]}
                  >
                    {instruction}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        )}
      </View>
    </AppModal>
  );
};

const styles = StyleSheet.create({
  closeButton: {
    borderRadius: 8,
    borderWidth: 1,
    margin: 0,
  },
  content: {
    paddingBottom: 20,
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  eyebrow: {
    fontSize: 11,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  header: {
    paddingBottom: 4,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerCopy: {
    flex: 1,
    gap: 2,
    minWidth: 0,
  },
  headerTop: {
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  imageShell: {
    aspectRatio: 1,
    borderRadius: 8,
    borderWidth: 1,
    overflow: "hidden",
    width: "100%",
  },
  instructionsList: {
    gap: 10,
  },
  instructionsSection: {
    gap: 12,
    marginTop: 18,
  },
  instructionsTitle: {
    fontSize: 16,
    fontWeight: "900",
  },
  meta: {
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 17,
  },
  modalContent: {
    maxWidth: 560,
  },
  scrollContent: {
    flexGrow: 1,
  },
  stepNumber: {
    alignItems: "center",
    borderRadius: 8,
    height: 24,
    justifyContent: "center",
    marginTop: 1,
    width: 24,
  },
  stepNumberText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "900",
  },
  stepRow: {
    alignItems: "flex-start",
    flexDirection: "row",
    gap: 10,
  },
  stepText: {
    flex: 1,
    fontSize: 13,
    fontWeight: "600",
    lineHeight: 19,
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
});
