import type { GlobalContainerColors } from "@/components/ui/GlobalContainer";
import {
  HeaderIconAction,
  HeaderSignalPlate,
  HeaderStatPlate,
  HeaderTitleBlock,
} from "@/components/ui/ScreenHeaderParts";
import { StyleSheet, View } from "react-native";
import { Icon, Text, TouchableRipple } from "react-native-paper";
import { formatRestTime } from "@/features/workout/services/workout";
import { useTranslation } from "@/hooks/useTranslation";

type WorkoutHeaderProps = {
  colors: GlobalContainerColors;
  completedCount: number;
  day: string;
  onBack: () => void;
  onSkipRest?: () => void;
  overallProgress: number;
  restLabel?: string;
  restRemaining?: number;
  restTotal?: number;
  totalSeries: number;
};

export function WorkoutHeader({
  colors,
  completedCount,
  day,
  onBack,
  onSkipRest,
  overallProgress,
  restLabel,
  restRemaining,
  restTotal,
  totalSeries,
}: WorkoutHeaderProps) {
  const { dayName, t } = useTranslation();
  const restActive =
    typeof restRemaining === "number" && restRemaining > 0 && !!onSkipRest;
  const restProgress =
    restActive && restTotal && restTotal > 0 ? restRemaining / restTotal : 0;

  return (
    <>
      <View style={styles.topBar}>
        <HeaderIconAction
          colors={colors}
          icon="arrow-left"
          iconColor={colors.ink}
          onPress={onBack}
        />
        <HeaderSignalPlate colors={colors} label={t("trainingSession")} />
      </View>

      <View style={styles.heroRow}>
        <HeaderTitleBlock
          colors={colors}
          eyebrow={t("activeSession")}
          title={dayName(day)}
        />
        <HeaderStatPlate
          colors={colors}
          label={`/${totalSeries}`}
          minWidth={88}
          value={completedCount}
        />
      </View>

      <View style={[styles.progressTrack, { backgroundColor: colors.surface }]}>
        <View
          style={[
            styles.progressFill,
            {
              backgroundColor: colors.accent,
              width: `${Math.max(overallProgress * 100, 0)}%`,
            },
          ]}
        />
      </View>

      {restActive && (
        <View
          style={[
            styles.restBar,
            { backgroundColor: colors.panel, borderColor: colors.border },
          ]}
        >
          <View style={styles.restInfo}>
            <Icon source="timer-sand" size={16} color={colors.accent} />
            <View style={styles.restTextBlock}>
              <Text style={[styles.restKicker, { color: colors.accent }]}>
                {t("resting")}
              </Text>
              <Text
                numberOfLines={1}
                style={[styles.restLabel, { color: colors.muted }]}
              >
                {restLabel || t("nextSeries")}
              </Text>
            </View>
          </View>
          <Text style={[styles.restTimer, { color: colors.ink }]}>
            {formatRestTime(restRemaining)}
          </Text>
          <TouchableRipple
            borderless
            onPress={onSkipRest}
            style={[styles.skipBtn, { borderColor: colors.border }]}
          >
            <Text style={[styles.skipText, { color: colors.muted }]}>
              {t("skip")}
            </Text>
          </TouchableRipple>
          <View
            pointerEvents="none"
            style={[
              styles.restProgressTrack,
              { backgroundColor: colors.surface },
            ]}
          >
            <View
              style={[
                styles.restProgressFill,
                {
                  backgroundColor: colors.accent,
                  width: `${Math.max(restProgress * 100, 0)}%`,
                },
              ]}
            />
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  heroRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: 16,
    justifyContent: "space-between",
    marginTop: 12,
  },
  progressFill: {
    height: 7,
  },
  progressTrack: {
    borderRadius: 999,
    height: 7,
    marginTop: 16,
    overflow: "hidden",
  },
  restBar: {
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    gap: 10,
    marginTop: 12,
    minHeight: 56,
    overflow: "hidden",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  restInfo: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    gap: 8,
    minWidth: 0,
  },
  restKicker: {
    fontSize: 10,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  restLabel: {
    fontSize: 12,
    fontWeight: "700",
  },
  restProgressFill: {
    height: 3,
  },
  restProgressTrack: {
    bottom: 0,
    height: 3,
    left: 0,
    position: "absolute",
    right: 0,
  },
  restTextBlock: {
    flex: 1,
    minWidth: 0,
  },
  restTimer: {
    fontSize: 18,
    fontWeight: "900",
  },
  skipBtn: {
    borderRadius: 7,
    borderWidth: 1,
    overflow: "hidden",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  skipText: {
    fontSize: 11,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  topBar: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
