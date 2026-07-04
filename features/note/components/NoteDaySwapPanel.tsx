import { dayAbbrev, days } from "@/features/note/utils/note";
import { type NoteEditColors } from "@/features/note/utils/editSection";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Icon, Text, TouchableRipple } from "react-native-paper";

type NoteDaySwapPanelProps = {
  activeDay: string;
  colors: NoteEditColors;
  countByDay: (day: string) => number;
  onSwapDayExercises: (sourceDay: string, targetDay: string) => void;
};

export function NoteDaySwapPanel({
  activeDay,
  colors,
  countByDay,
  onSwapDayExercises,
}: NoteDaySwapPanelProps) {
  const [swapPickerOpen, setSwapPickerOpen] = useState(false);

  return (
    <View
      style={[
        styles.swapPanel,
        { backgroundColor: colors.panel, borderColor: colors.border },
      ]}
    >
      <View style={styles.swapHeader}>
        <View style={styles.sectionLabelRow}>
          <View style={[styles.sectionAccent, { backgroundColor: colors.accent }]} />
          <Text numberOfLines={1} style={[styles.sectionLabel, { color: colors.muted }]}>
            TROCAR DIA
          </Text>
        </View>

        <TouchableRipple
          borderless
          onPress={() => setSwapPickerOpen((current) => !current)}
          style={[
            styles.swapToggle,
            { backgroundColor: colors.surface, borderColor: colors.border },
          ]}
        >
          <View style={styles.swapToggleInner}>
            <Icon source="swap-horizontal" size={15} color={colors.accent} />
            <Text style={[styles.swapToggleText, { color: colors.muted }]}>
              {swapPickerOpen ? "Ocultar" : "Escolher"}
            </Text>
            <Icon
              source={swapPickerOpen ? "chevron-up" : "chevron-down"}
              size={15}
              color={colors.muted}
            />
          </View>
        </TouchableRipple>
      </View>

      <Text style={[styles.swapHint, { color: colors.muted }]}>
        Troca todos os exercícios de {activeDay} com outro dia.
      </Text>

      {swapPickerOpen && (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.swapDaysRow}
        >
          {days
            .filter((day) => day !== activeDay)
            .map((day) => {
              const count = countByDay(day);

              return (
                <TouchableRipple
                  borderless
                  key={day}
                  onPress={() => {
                    onSwapDayExercises(activeDay, day);
                    setSwapPickerOpen(false);
                  }}
                  style={[
                    styles.swapDayPill,
                    {
                      backgroundColor:
                        count > 0 ? colors.selected : colors.surface,
                      borderColor: count > 0 ? colors.accent : colors.border,
                    },
                  ]}
                >
                  <View style={styles.swapDayInner}>
                    <Text style={[styles.swapDayText, { color: colors.ink }]}>
                      {dayAbbrev[day]}
                    </Text>
                    <Text style={[styles.swapDayCount, { color: colors.muted }]}>
                      {count} ex.
                    </Text>
                  </View>
                </TouchableRipple>
              );
            })}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  sectionAccent: {
    borderRadius: 2,
    height: 14,
    width: 3,
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 0,
  },
  sectionLabelRow: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    gap: 8,
    minWidth: 0,
  },
  swapDayCount: {
    fontSize: 10,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  swapDayInner: {
    alignItems: "center",
    gap: 2,
    justifyContent: "center",
    minHeight: 46,
    paddingHorizontal: 12,
  },
  swapDayPill: {
    borderRadius: 8,
    borderWidth: 1,
    minWidth: 64,
    overflow: "hidden",
  },
  swapDayText: {
    fontSize: 12,
    fontWeight: "900",
  },
  swapDaysRow: {
    gap: 8,
    paddingRight: 12,
  },
  swapHeader: {
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
    justifyContent: "space-between",
  },
  swapHint: {
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 17,
  },
  swapPanel: {
    borderRadius: 8,
    borderWidth: 1,
    gap: 10,
    padding: 12,
  },
  swapToggle: {
    borderRadius: 8,
    borderWidth: 1,
    flexShrink: 0,
    overflow: "hidden",
  },
  swapToggleInner: {
    alignItems: "center",
    flexDirection: "row",
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  swapToggleText: {
    fontSize: 12,
    fontWeight: "800",
  },
});
