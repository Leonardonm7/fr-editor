import { type NoteEditColors } from "@/features/note/utils/editSection";
import { useTranslation } from "@/hooks/useTranslation";
import { StyleSheet, View } from "react-native";
import { Text } from "@/components/ui/Text";

type NoteActiveDaySummaryProps = {
  activeDay: string;
  colors: NoteEditColors;
  exerciseCount: number;
};

export const NoteActiveDaySummary = ({
  activeDay,
  colors,
  exerciseCount,
}: NoteActiveDaySummaryProps) => {
  const { dayName, t } = useTranslation();

  return (
    <View
      style={[
        styles.dayTitleRow,
        {
          backgroundColor: colors.surface,
          borderColor: colors.border,
        },
      ]}
    >
      <View style={[styles.dayTitleAccent, { backgroundColor: colors.accent }]} />
      <View style={styles.dayTitleCopy}>
        <Text style={[styles.panelKicker, { color: colors.accent }]}>
          {t("activeDay")}
        </Text>
        <Text style={[styles.dayTitleText, { color: colors.ink }]}>
          {dayName(activeDay)}
        </Text>
      </View>
      <View
        style={[
          styles.dayCountBadge,
          { backgroundColor: colors.selected, borderColor: colors.border },
        ]}
      >
        <Text style={[styles.dayCountText, { color: colors.ink }]}>
          {exerciseCount} {t("exercise")}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dayCountBadge: {
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  dayCountText: {
    fontSize: 12,
    fontWeight: "900",
  },
  dayTitleAccent: {
    alignSelf: "stretch",
    width: 4,
  },
  dayTitleCopy: {
    flex: 1,
    gap: 2,
    paddingVertical: 10,
  },
  dayTitleRow: {
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    gap: 12,
    overflow: "hidden",
    paddingRight: 14,
  },
  dayTitleText: {
    fontSize: 22,
    fontWeight: "900",
    lineHeight: 26,
    textTransform: "uppercase",
  },
  panelKicker: {
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 0,
    textTransform: "uppercase",
  },
});
