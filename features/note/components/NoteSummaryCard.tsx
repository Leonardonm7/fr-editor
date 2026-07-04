import { formatNoteDate } from "@/features/note/utils/note";
import { useTranslation } from "@/hooks/useTranslation";
import { StyleSheet, View } from "react-native";
import { Card, Divider, Icon, Text, useTheme } from "react-native-paper";

type NoteSummaryCardProps = {
  createdAt: string;
  daysWithExercisesCount: number;
  exercisesWithDescriptionCount: number;
  linkedBlockCount: number;
  totalExercises: number;
  totalVolume: number;
  updatedAt: string;
  workoutName: string;
};

export function NoteSummaryCard({
  createdAt,
  daysWithExercisesCount,
  exercisesWithDescriptionCount,
  linkedBlockCount,
  totalExercises,
  totalVolume,
  updatedAt,
  workoutName,
}: NoteSummaryCardProps) {
  const theme = useTheme();
  const { language, t } = useTranslation();
  const locale = language === "en" ? "en-US" : "pt-BR";

  return (
    <Card
      mode="contained"
      style={[styles.card, { backgroundColor: theme.colors.elevation.level1 }]}
    >
      <Card.Content style={styles.content}>
        <View style={styles.summaryRow}>
          <View style={styles.summaryItem}>
            <Icon
              source="clipboard-text-outline"
              size={22}
              color={theme.colors.primary}
            />
            <Text
              variant="labelSmall"
              style={{ color: theme.colors.onSurfaceVariant }}
            >
              {t("workout")}
            </Text>
            <Text variant="titleSmall">{workoutName}</Text>
          </View>
          <View
            style={[
              styles.summaryDivider,
              { backgroundColor: theme.colors.outlineVariant },
            ]}
          />
          <View style={styles.summaryItem}>
            <Icon source="dumbbell" size={22} color={theme.colors.secondary} />
            <Text
              variant="labelSmall"
              style={{ color: theme.colors.onSurfaceVariant }}
            >
              {t("exercises")}
            </Text>
            <Text variant="titleSmall">{totalExercises}</Text>
          </View>
          <View
            style={[
              styles.summaryDivider,
              { backgroundColor: theme.colors.outlineVariant },
            ]}
          />
          <View style={styles.summaryItem}>
            <Icon
              source="calendar-week"
              size={22}
              color={theme.colors.tertiary}
            />
            <Text
              variant="labelSmall"
              style={{ color: theme.colors.onSurfaceVariant }}
            >
              {t("days")}
            </Text>
            <Text variant="titleSmall">{daysWithExercisesCount}</Text>
          </View>
        </View>

        {totalVolume > 0 && (
          <View style={styles.infoRow}>
            <Icon
              source="weight-kilogram"
              size={16}
              color={theme.colors.onSurfaceVariant}
            />
            <Text
              variant="bodySmall"
              style={{ color: theme.colors.onSurfaceVariant }}
            >
              {t("totalVolume", { value: totalVolume.toLocaleString(locale) })}
            </Text>
          </View>
        )}

        {linkedBlockCount > 0 && (
          <View style={styles.infoRow}>
            <Icon
              source="link-variant"
              size={16}
              color={theme.colors.onSurfaceVariant}
            />
            <Text
              variant="bodySmall"
              style={{ color: theme.colors.onSurfaceVariant }}
            >
              {t("connectedBlocksCount", { count: linkedBlockCount })}
            </Text>
          </View>
        )}

        {exercisesWithDescriptionCount > 0 && (
          <View style={styles.infoRow}>
            <Icon
              source="note-text-outline"
              size={16}
              color={theme.colors.onSurfaceVariant}
            />
            <Text
              variant="bodySmall"
              style={{ color: theme.colors.onSurfaceVariant }}
            >
              {t("exercisesWithNotesCount", {
                count: exercisesWithDescriptionCount,
              })}
            </Text>
          </View>
        )}

        <Divider />

        <View style={styles.dateGrid}>
          <View style={styles.dateItem}>
            <Icon
              source="calendar-plus-outline"
              size={16}
              color={theme.colors.onSurfaceVariant}
            />
            <View style={styles.dateTextBlock}>
              <Text
                variant="labelSmall"
                style={{ color: theme.colors.onSurfaceVariant }}
              >
                {t("createdAt")}
              </Text>
              <Text variant="bodyMedium">
                {formatNoteDate(createdAt, locale)}
              </Text>
            </View>
          </View>
          <View style={styles.dateItem}>
            <Icon
              source="history"
              size={16}
              color={theme.colors.onSurfaceVariant}
            />
            <View style={styles.dateTextBlock}>
              <Text
                variant="labelSmall"
                style={{ color: theme.colors.onSurfaceVariant }}
              >
                {t("lastUpdate")}
              </Text>
              <Text variant="bodyMedium">
                {formatNoteDate(updatedAt, locale)}
              </Text>
            </View>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
  },
  content: {
    paddingVertical: 18,
    gap: 14,
  },
  summaryRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  summaryItem: {
    alignItems: "center",
    gap: 6,
    flex: 1,
  },
  summaryDivider: {
    width: 1.5,
    height: 48,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  dateGrid: {
    gap: 12,
    paddingTop: 4,
  },
  dateItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  dateTextBlock: {
    flex: 1,
    gap: 3,
  },
});
