import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Icon } from "@/components/ui/Icon";
import { Text } from "@/components/ui/Text";
import { TouchableRipple } from "@/components/ui/TouchableRipple";
import { useTheme } from "@/components/ui/theme";
import type { MD3Theme } from "@/components/ui/theme";
import { useTranslation } from "@/hooks/useTranslation";

type WorkoutFinishedPhaseProps = {
  onFinish: () => void;
  totalCompletedSeries: number;
  totalExercises: number;
};

const getFinishedColors = (theme: MD3Theme) => ({
  accent: theme.colors.secondary,
  border: theme.dark ? "#303744" : "#C7CEC1",
  ink: theme.dark ? "#F4F1E8" : "#121511",
  muted: theme.dark ? "#A7AFBA" : "#5E665C",
  panel: theme.dark ? "#121821" : "#FAFAF3",
  surface: theme.dark ? "#171E28" : "#FFFFFF",
});

export const WorkoutFinishedPhase = ({
  onFinish,
  totalCompletedSeries,
  totalExercises,
}: WorkoutFinishedPhaseProps) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const colors = useMemo(() => getFinishedColors(theme), [theme]);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.panel, borderColor: colors.accent },
      ]}
    >
      <View style={[styles.rail, { backgroundColor: colors.accent }]} />

      <View style={styles.body}>
        <View style={[styles.iconFrame, { borderColor: colors.accent }]}>
          <Icon source="check" size={34} color={colors.accent} />
        </View>

        <View style={styles.titleBlock}>
          <Text style={[styles.eyebrow, { color: colors.accent }]}>
            {t("workoutCompleted")}
          </Text>
          <Text style={[styles.title, { color: colors.ink }]}>
            {t("finished")}
          </Text>
        </View>

        <View style={[styles.statsRow, { borderColor: colors.border }]}>
          <View style={styles.statCell}>
            <Text style={[styles.statValue, { color: colors.ink }]}>
              {totalExercises}
            </Text>
            <Text style={[styles.statLabel, { color: colors.muted }]}>
              {t("exercises")}
            </Text>
          </View>
          <View style={[styles.statDivider, { backgroundColor: colors.border }]} />
          <View style={styles.statCell}>
            <Text style={[styles.statValue, { color: colors.ink }]}>
              {totalCompletedSeries}
            </Text>
            <Text style={[styles.statLabel, { color: colors.muted }]}>
              {t("series")}
            </Text>
          </View>
        </View>

        <TouchableRipple
          borderless
          onPress={onFinish}
          style={[styles.finishBtn, { backgroundColor: colors.accent }]}
        >
          <View style={styles.finishBtnInner}>
            <Icon source="check" size={18} color="#FFFFFF" />
            <Text style={styles.finishBtnText}>{t("finishWorkout")}</Text>
          </View>
        </TouchableRipple>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    alignItems: "center",
    gap: 16,
    padding: 22,
  },
  container: {
    borderRadius: 8,
    borderWidth: 1,
    overflow: "hidden",
  },
  eyebrow: {
    fontSize: 11,
    fontWeight: "900",
    textAlign: "center",
    textTransform: "uppercase",
  },
  finishBtn: {
    borderRadius: 8,
    overflow: "hidden",
    width: "100%",
  },
  finishBtnInner: {
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    paddingVertical: 14,
  },
  finishBtnText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  iconFrame: {
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    height: 76,
    justifyContent: "center",
    width: 76,
  },
  rail: {
    height: 4,
  },
  statCell: {
    alignItems: "center",
    flex: 1,
    gap: 4,
    paddingVertical: 14,
  },
  statDivider: {
    marginVertical: 12,
    width: 1,
  },
  statLabel: {
    fontSize: 10,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  statValue: {
    fontSize: 28,
    fontWeight: "900",
  },
  statsRow: {
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    overflow: "hidden",
    width: "100%",
  },
  title: {
    fontSize: 30,
    fontWeight: "900",
    lineHeight: 34,
    textAlign: "center",
    textTransform: "uppercase",
  },
  titleBlock: {
    gap: 2,
  },
});
