import type { GlobalContainerColors } from "@/components/ui/GlobalContainer";
import type { Note } from "@/database/types";
import { formatNoteDate } from "@/features/note/utils/note";
import { useTranslation } from "@/hooks/useTranslation";
import { StyleSheet, View } from "react-native";
import { Icon } from "@/components/ui/Icon";
import { Text } from "@/components/ui/Text";
import { TouchableRipple } from "@/components/ui/TouchableRipple";

type WorkoutMeta = {
  days: string[];
};

type HomeWorkoutCardProps = {
  colors: GlobalContainerColors;
  index: number;
  note: Note;
  onLongPress: () => void;
  onPress: () => void;
  selected: boolean;
};

const visibleDayLimit = 5;

const getWorkoutMeta = (note: Note): WorkoutMeta => {
  const days = Array.from(
    new Set(
      note.exercises
        .map((exercise) => exercise.day)
        .filter((day) => day && day.trim().length > 0),
    ),
  );

  return {
    days,
  };
};

export const HomeWorkoutCard = ({
  colors,
  index,
  note,
  onLongPress,
  onPress,
  selected,
}: HomeWorkoutCardProps) => {
  const { dayShort, language, t } = useTranslation();
  const meta = getWorkoutMeta(note);
  const workoutName = note.title || t("unnamedWorkout");
  const formattedDate = formatNoteDate(
    note.updatedAt,
    language === "en" ? "en-US" : "pt-BR",
  );
  const cardBackground = selected ? colors.selected : colors.surface;
  const cardText = selected ? colors.selectedText : colors.ink;
  const supportingText = selected ? colors.selectedText : colors.muted;

  return (
    <TouchableRipple
      borderless
      onLongPress={onLongPress}
      onPress={onPress}
      style={styles.cardRipple}
    >
      <View
        style={[
          styles.workoutCard,
          {
            backgroundColor: cardBackground,
            borderColor: selected ? colors.accent : colors.border,
          },
        ]}
      >
        <View style={[styles.cardIndexRail, { borderColor: colors.border }]}>
          <Text style={[styles.cardIndex, { color: colors.muted }]}>
            {String(index + 1).padStart(2, "0")}
          </Text>
          <View
            style={[
              styles.cardIndexMark,
              { backgroundColor: selected ? colors.ink : colors.accent },
            ]}
          />
        </View>

        <View style={styles.cardBody}>
          <Text
            numberOfLines={1}
            style={[styles.workoutName, { color: cardText }]}
          >
            {workoutName}
          </Text>

          <Text
            numberOfLines={1}
            style={[styles.dateText, { color: supportingText }]}
          >
            {formattedDate
              ? t("updatedAt", { date: formattedDate })
              : t("unavailable")}
          </Text>

          {meta.days.length > 0 && (
            <View style={styles.daysRow}>
              {meta.days.slice(0, visibleDayLimit).map((day) => (
                <View
                  key={day}
                  style={[
                    styles.dayPill,
                    {
                      backgroundColor: selected ? colors.accent : "transparent",
                      borderColor: selected ? colors.accent : colors.border,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.dayPillText,
                      { color: selected ? "#FFFFFF" : colors.muted },
                    ]}
                  >
                    {dayShort(day)}
                  </Text>
                </View>
              ))}
              {meta.days.length > visibleDayLimit && (
                <View style={[styles.dayPill, { borderColor: colors.border }]}>
                  <Text style={[styles.dayPillText, { color: colors.muted }]}>
                    +{meta.days.length - visibleDayLimit}
                  </Text>
                </View>
              )}
            </View>
          )}
        </View>

        <View style={styles.trailingArea}>
          <Icon
            source={selected ? "check-circle" : "chevron-right"}
            size={selected ? 23 : 21}
            color={selected ? colors.accent : colors.muted}
          />
        </View>
      </View>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  cardBody: {
    flex: 1,
    gap: 5,
    paddingLeft: 12,
    paddingRight: 4,
    paddingVertical: 12,
  },
  cardIndex: {
    fontSize: 12,
    fontWeight: "900",
  },
  cardIndexMark: {
    height: 26,
    marginTop: 10,
    width: 3,
  },
  cardIndexRail: {
    alignItems: "center",
    alignSelf: "stretch",
    borderRightWidth: 1,
    justifyContent: "center",
    width: 38,
  },
  cardRipple: {
    borderRadius: 8,
    overflow: "hidden",
  },
  dateText: {
    fontSize: 11,
    fontWeight: "600",
  },
  dayPill: {
    borderRadius: 6,
    borderWidth: 1,
    minHeight: 24,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  dayPillText: {
    fontSize: 10,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  daysRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    paddingTop: 3,
  },
  workoutName: {
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 22,
  },
  trailingArea: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 4,
    paddingRight: 12,
  },
  workoutCard: {
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    minHeight: 108,
    overflow: "hidden",
  },
});
