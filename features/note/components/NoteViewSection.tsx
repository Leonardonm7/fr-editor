import { ExerciseViewCard } from "@/features/note/components/ExerciseViewCard";
import { type IndexedExercise } from "@/features/note/utils/note";
import { useTranslation } from "@/hooks/useTranslation";
import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import type { MD3Theme } from "react-native-paper";
import { Icon, Text, TouchableRipple, useTheme } from "react-native-paper";

type NoteViewSectionProps = {
  activeDay: string;
  dayExercises: IndexedExercise[];
  onOpenWorkout: () => void;
  onRestartWorkout: () => void;
  viewDayExercises: IndexedExercise[];
  workoutActionPending: boolean;
  workoutName: string;
  workoutSavedState: boolean;
};

const getViewColors = (theme: MD3Theme) => ({
  accent: theme.colors.primary,
  border: theme.dark ? "#303744" : "#C7CEC1",
  ink: theme.dark ? "#F4F1E8" : "#121511",
  muted: theme.dark ? "#A7AFBA" : "#5E665C",
  panel: theme.dark ? "#121821" : "#FAFAF3",
  selected: theme.dark ? "#481300" : "#FFDBCE",
  surface: theme.dark ? "#171E28" : "#FFFFFF",
  thumb: theme.dark ? "#202938" : "#E0E5DA",
});

export function NoteViewSection({
  activeDay,
  dayExercises,
  onOpenWorkout,
  onRestartWorkout,
  viewDayExercises,
  workoutActionPending,
  workoutName,
  workoutSavedState,
}: NoteViewSectionProps) {
  const theme = useTheme();
  const { dayName, t } = useTranslation();
  const colors = useMemo(() => getViewColors(theme), [theme]);
  const initial = (workoutName || "T").charAt(0).toUpperCase();

  return (
    <>
      <View
        style={[
          styles.sessionPanel,
          { backgroundColor: colors.panel, borderColor: colors.border },
        ]}
      >
        <View
          style={[styles.sessionRail, { backgroundColor: colors.accent }]}
        />

        <View style={styles.sessionTopRow}>
          <View
            style={[
              styles.workoutBadge,
              { backgroundColor: colors.selected, borderColor: colors.accent },
            ]}
          >
            <Text style={[styles.avatarLetter, { color: colors.ink }]}>
              {initial}
            </Text>
          </View>

          <View style={styles.sessionTitleBlock}>
            <Text style={[styles.panelKicker, { color: colors.accent }]}>
              {t("selectedSession")}
            </Text>
            <Text
              numberOfLines={1}
              style={[styles.workoutName, { color: colors.muted }]}
            >
              {workoutName || t("workout")}
            </Text>
            <Text style={[styles.dayName, { color: colors.ink }]}>
              {dayName(activeDay)}
            </Text>
          </View>
        </View>

        {dayExercises.length > 0 && (
          <View style={styles.workoutActionGroup}>
            <TouchableRipple
              borderless
              disabled={workoutActionPending}
              onPress={onOpenWorkout}
              style={[
                styles.primaryAction,
                {
                  backgroundColor: colors.accent,
                  opacity: workoutActionPending ? 0.6 : 1,
                },
              ]}
            >
              <View style={styles.actionBtnInner}>
                <Icon
                  color="#FFFFFF"
                  size={18}
                  source={workoutSavedState ? "play-pause" : "play"}
                />
                <Text style={styles.primaryActionText}>
                  {workoutSavedState ? t("resumeWorkout") : t("startWorkout")}
                </Text>
              </View>
            </TouchableRipple>

            {workoutSavedState && (
              <TouchableRipple
                borderless
                disabled={workoutActionPending}
                onPress={onRestartWorkout}
                style={[
                  styles.secondaryAction,
                  {
                    borderColor: colors.border,
                    opacity: workoutActionPending ? 0.6 : 1,
                  },
                ]}
              >
                <View style={styles.actionBtnInner}>
                  <Icon color={colors.muted} size={18} source="restart" />
                  <Text
                    style={[
                      styles.secondaryActionText,
                      { color: colors.muted },
                    ]}
                  >
                    {t("restart")}
                  </Text>
                </View>
              </TouchableRipple>
            )}
          </View>
        )}
      </View>

      {dayExercises.length === 0 ? (
        <View
          style={[
            styles.emptyState,
            { backgroundColor: colors.panel, borderColor: colors.border },
          ]}
        >
          <View style={[styles.emptyFrame, { borderColor: colors.border }]}>
            <Icon source="dumbbell" size={40} color={colors.accent} />
          </View>
          <Text style={[styles.emptyTitle, { color: colors.ink }]}>
            {t("noExercisesThisDay")}
          </Text>
          <Text style={[styles.emptyHint, { color: colors.muted }]}>
            {t("switchToEditToAdd")}
          </Text>
        </View>
      ) : (
        <>
          <View style={styles.listHeader}>
            <Text style={[styles.listTitle, { color: colors.ink }]}>
              {t("trainingRoute")}
            </Text>
            <Text style={[styles.listLabel, { color: colors.muted }]}>
              {t("exercisesCount", { count: dayExercises.length })}
            </Text>
          </View>

          <View style={styles.exerciseList}>
            {viewDayExercises.map((exercise, index) => (
              <ExerciseViewCard
                key={exercise.uid}
                exercise={exercise}
                order={index + 1}
              />
            ))}
          </View>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  actionBtnInner: {
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    paddingHorizontal: 12,
    paddingVertical: 14,
  },
  avatarLetter: {
    fontSize: 21,
    fontWeight: "900",
  },
  dayName: {
    fontSize: 30,
    fontWeight: "900",
    lineHeight: 34,
    textTransform: "uppercase",
  },
  emptyFrame: {
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    height: 88,
    justifyContent: "center",
    width: 88,
  },
  emptyHint: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 2,
    textAlign: "center",
  },
  emptyState: {
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: "center",
    minHeight: 260,
    padding: 24,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: "900",
    marginTop: 12,
    textAlign: "center",
  },
  exerciseList: {
    gap: 10,
  },
  listHeader: {
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listLabel: {
    fontSize: 12,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  listTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "900",
  },
  panelKicker: {
    fontSize: 11,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  workoutBadge: {
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    height: 56,
    justifyContent: "center",
    width: 56,
  },
  workoutName: {
    fontSize: 13,
    fontWeight: "800",
  },
  primaryAction: {
    borderRadius: 8,
    flex: 1,
    overflow: "hidden",
  },
  primaryActionText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 0.7,
  },
  secondaryAction: {
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    overflow: "hidden",
  },
  secondaryActionText: {
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 0.7,
  },
  sessionPanel: {
    borderRadius: 8,
    borderWidth: 1,
    gap: 14,
    overflow: "hidden",
    padding: 14,
  },
  sessionRail: {
    bottom: 14,
    left: 0,
    position: "absolute",
    top: 14,
    width: 4,
  },
  sessionTitleBlock: {
    flex: 1,
    gap: 2,
  },
  sessionTopRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
    paddingLeft: 4,
  },
  workoutActionGroup: {
    flexDirection: "row",
    gap: 10,
    paddingLeft: 4,
  },
});
