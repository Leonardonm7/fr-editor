import { days } from "@/features/note/utils/note";
import { useTranslation } from "@/hooks/useTranslation";
import { useMemo } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import type { MD3Theme } from "react-native-paper";
import { Text, TouchableRipple, useTheme } from "react-native-paper";

type DaySelectorCardProps = {
  activeDay: string;
  countByDay: (day: string) => number;
  onSelectDay: (day: string) => void;
  viewMode: boolean;
};

const getDaySelectorColors = (theme: MD3Theme) => ({
  accent: theme.colors.primary,
  border: theme.dark ? "#303744" : "#C7CEC1",
  ink: theme.dark ? "#F4F1E8" : "#121511",
  muted: theme.dark ? "#A7AFBA" : "#5E665C",
  panel: theme.dark ? "#121821" : "#FAFAF3",
  selected: theme.dark ? "#481300" : "#FFDBCE",
});

export function DaySelectorCard({
  activeDay,
  countByDay,
  onSelectDay,
  viewMode,
}: DaySelectorCardProps) {
  const theme = useTheme();
  const { dayShort } = useTranslation();
  const colors = useMemo(() => getDaySelectorColors(theme), [theme]);

  return (
    <ScrollView
      contentContainerStyle={styles.content}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {days.map((day) => {
        const count = countByDay(day);
        const isActive = activeDay === day;
        if (viewMode && count === 0) return null;

        return (
          <View key={day} style={styles.pillWrap}>
            <TouchableRipple
              onPress={() => onSelectDay(day)}
              borderless
              style={[
                styles.pill,
                {
                  backgroundColor: isActive ? colors.selected : colors.panel,
                  borderColor: isActive ? colors.accent : colors.border,
                },
              ]}
            >
              <View style={styles.pillInner}>
                <Text
                  style={[
                    styles.pillText,
                    { color: isActive ? colors.ink : colors.muted },
                  ]}
                >
                  {dayShort(day)}
                </Text>
                {isActive && (
                  <View
                    style={[
                      styles.activeMark,
                      { backgroundColor: colors.accent },
                    ]}
                  />
                )}
              </View>
            </TouchableRipple>

            {count > 0 && (
              <View
                style={[
                  styles.badge,
                  {
                    backgroundColor: isActive ? colors.accent : colors.selected,
                    borderColor: isActive ? colors.accent : colors.border,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.badgeText,
                    { color: isActive ? "#FFFFFF" : colors.ink },
                  ]}
                >
                  {count}
                </Text>
              </View>
            )}
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: 8,
    paddingBottom: 2,
    paddingHorizontal: 2,
    paddingTop: 2,
  },
  activeMark: {
    bottom: 0,
    height: 3,
    left: 10,
    position: "absolute",
    right: 10,
  },
  pillWrap: {
    position: "relative",
    paddingRight: 4,
    paddingTop: 4,
  },
  pill: {
    borderRadius: 8,
    borderWidth: 1,
    minHeight: 38,
    minWidth: 58,
    overflow: "hidden",
  },
  pillInner: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 38,
    paddingHorizontal: 12,
  },
  pillText: {
    fontSize: 11,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  badge: {
    position: "absolute",
    right: 0,
    top: 0,
    minWidth: 18,
    height: 18,
    borderRadius: 6,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: "800",
    lineHeight: 12,
  },
});
