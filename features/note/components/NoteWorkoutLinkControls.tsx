import {
  connectionColors,
  connectionGroups,
  days,
  type ExerciseForm,
  type IndexedExercise,
} from "@/features/note/utils/note";
import { type NoteEditColors } from "@/features/note/utils/editSection";
import { useTranslation } from "@/hooks/useTranslation";
import { ScrollView, StyleSheet, View } from "react-native";
import { Icon } from "@/components/ui/Icon";
import { Text } from "@/components/ui/Text";
import { TouchableRipple } from "@/components/ui/TouchableRipple";

type NoteWorkoutLinkControlsProps = {
  accentColor: string;
  activeDay: string;
  colors: NoteEditColors;
  countByDay: (day: string) => number;
  dayPickerOpen: boolean;
  exercise: IndexedExercise;
  group: string;
  linkOpen: boolean;
  onChangeExercise: (
    index: number,
    key: keyof ExerciseForm,
    value: string | ExerciseForm["seriesDetails"],
  ) => void;
  onCloseDayPicker: () => void;
  onCloseLinkPicker: () => void;
  onToggleDayPicker: () => void;
  onToggleLinkPicker: () => void;
};

export const NoteWorkoutLinkControls = ({
  accentColor,
  activeDay,
  colors,
  countByDay,
  dayPickerOpen,
  exercise,
  group,
  linkOpen,
  onChangeExercise,
  onCloseDayPicker,
  onCloseLinkPicker,
  onToggleDayPicker,
  onToggleLinkPicker,
}: NoteWorkoutLinkControlsProps) => {
  const { dayShort, t } = useTranslation();
  const exerciseDay = exercise.day || activeDay;

  return (
    <>
      <View style={styles.linkRow}>
        <TouchableRipple
          onPress={onToggleLinkPicker}
          borderless
          style={[
            styles.linkToggleBtn,
            {
              borderColor: linkOpen ? accentColor : colors.border,
              backgroundColor: linkOpen ? `${accentColor}22` : colors.panel,
            },
          ]}
        >
          <View style={styles.linkToggleBtnInner}>
            <Icon
              source="link-variant"
              size={13}
              color={linkOpen ? accentColor : colors.muted}
            />
            <Text
              style={[
                styles.linkToggleText,
                { color: linkOpen ? accentColor : colors.muted },
              ]}
            >
              {group ? `${t("block")} ${group}` : t("link")}
            </Text>
            <Icon
              source={linkOpen ? "chevron-up" : "chevron-down"}
              size={13}
              color={linkOpen ? accentColor : colors.muted}
            />
          </View>
        </TouchableRipple>

        <TouchableRipple
          onPress={onToggleDayPicker}
          borderless
          style={[
            styles.moveDayBtn,
            {
              borderColor: dayPickerOpen ? colors.accent : colors.border,
              backgroundColor: dayPickerOpen ? colors.selected : colors.panel,
            },
          ]}
        >
          <View style={styles.moveDayBtnInner}>
            <Icon
              source="calendar-arrow-right"
              size={13}
              color={dayPickerOpen ? colors.accent : colors.muted}
            />
            <Text
              style={[
                styles.moveDayText,
                { color: dayPickerOpen ? colors.ink : colors.muted },
              ]}
            >
              {t("move")}
            </Text>
            <Icon
              source={dayPickerOpen ? "chevron-up" : "chevron-down"}
              size={13}
              color={dayPickerOpen ? colors.accent : colors.muted}
            />
          </View>
        </TouchableRipple>
      </View>

      {linkOpen && (
        <View
          style={[
            styles.linkPicker,
            { backgroundColor: colors.panel, borderColor: colors.border },
          ]}
        >
          <Text style={[styles.linkPickerLabel, { color: colors.muted }]}>
            {t("selectBlockToLink")}
          </Text>
          <View style={styles.linkPickerRow}>
            <TouchableRipple
              onPress={() => {
                onChangeExercise(exercise.index, "connectionGroup", "");
                onCloseLinkPicker();
              }}
              borderless
              style={[
                styles.groupPill,
                {
                  backgroundColor: !group ? colors.accent : colors.surface,
                  borderColor: !group ? colors.accent : colors.border,
                },
              ]}
            >
              <Text
                style={[
                  styles.groupPillText,
                  { color: !group ? "#FFFFFF" : colors.muted },
                ]}
              >
                {t("noLink")}
              </Text>
            </TouchableRipple>

            {connectionGroups.map((connectionGroup) => {
              const color = connectionColors[connectionGroup];
              const isActive = group === connectionGroup;
              return (
                <TouchableRipple
                  key={connectionGroup}
                  onPress={() => {
                    onChangeExercise(
                      exercise.index,
                      "connectionGroup",
                      isActive ? "" : connectionGroup,
                    );
                    onCloseLinkPicker();
                  }}
                  borderless
                  style={[
                    styles.groupPill,
                    {
                      backgroundColor: isActive ? color : `${color}22`,
                      borderColor: color,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.groupPillText,
                      { color: isActive ? "#101318" : color },
                    ]}
                  >
                    {t("block")} {connectionGroup}
                  </Text>
                </TouchableRipple>
              );
            })}
          </View>
          <Text style={[styles.linkHint, { color: colors.muted }]}>
            {t("linkedBlockHint")}
          </Text>
        </View>
      )}

      {dayPickerOpen && (
        <View
          style={[
            styles.dayPicker,
            { backgroundColor: colors.panel, borderColor: colors.border },
          ]}
        >
          <Text style={[styles.dayPickerLabel, { color: colors.muted }]}>
            {t("moveOnlyExerciseTo")}
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.exerciseDayRow}
          >
            {days
              .filter((day) => day !== exerciseDay)
              .map((day) => {
                const count = countByDay(day);

                return (
                  <TouchableRipple
                    borderless
                    key={day}
                    onPress={() => {
                      onChangeExercise(exercise.index, "day", day);
                      onCloseDayPicker();
                    }}
                    style={[
                      styles.exerciseDayPill,
                      {
                        backgroundColor:
                          count > 0 ? colors.selected : colors.surface,
                        borderColor: count > 0 ? colors.accent : colors.border,
                      },
                    ]}
                  >
                    <View style={styles.exerciseDayInner}>
                      <Text style={[styles.exerciseDayText, { color: colors.ink }]}>
                        {dayShort(day)}
                      </Text>
                      <Text
                        style={[
                          styles.exerciseDayCount,
                          { color: colors.muted },
                        ]}
                      >
                        {count} {t("exercise")}
                      </Text>
                    </View>
                  </TouchableRipple>
                );
              })}
          </ScrollView>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  dayPicker: {
    borderRadius: 8,
    borderWidth: 1,
    gap: 10,
    padding: 12,
  },
  dayPickerLabel: {
    fontSize: 11,
    fontWeight: "800",
  },
  exerciseDayCount: {
    fontSize: 10,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  exerciseDayInner: {
    alignItems: "center",
    gap: 2,
    justifyContent: "center",
    minHeight: 46,
    paddingHorizontal: 12,
  },
  exerciseDayPill: {
    borderRadius: 8,
    borderWidth: 1,
    minWidth: 64,
    overflow: "hidden",
  },
  exerciseDayRow: {
    gap: 8,
    paddingRight: 12,
  },
  exerciseDayText: {
    fontSize: 12,
    fontWeight: "900",
  },
  groupPill: {
    borderRadius: 8,
    borderWidth: 1,
    overflow: "hidden",
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  groupPillText: {
    fontSize: 12,
    fontWeight: "900",
  },
  linkHint: {
    fontSize: 11,
    fontWeight: "600",
    lineHeight: 16,
    opacity: 0.8,
  },
  linkPicker: {
    borderRadius: 8,
    borderWidth: 1,
    gap: 10,
    padding: 12,
  },
  linkPickerLabel: {
    fontSize: 11,
    fontWeight: "800",
  },
  linkPickerRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  linkRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  linkToggleBtn: {
    borderRadius: 8,
    borderWidth: 1,
    flexShrink: 0,
    overflow: "hidden",
  },
  linkToggleBtnInner: {
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  linkToggleText: {
    fontSize: 11,
    fontWeight: "900",
  },
  moveDayBtn: {
    borderRadius: 8,
    borderWidth: 1,
    flexShrink: 0,
    overflow: "hidden",
  },
  moveDayBtnInner: {
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  moveDayText: {
    fontSize: 11,
    fontWeight: "900",
    textTransform: "uppercase",
  },
});
