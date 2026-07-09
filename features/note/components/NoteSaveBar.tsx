import { type GlobalContainerColors } from "@/components/ui/GlobalContainer";
import { useTranslation } from "@/hooks/useTranslation";
import { StyleSheet, View } from "react-native";
import { Icon } from "@/components/ui/Icon";
import { Text } from "@/components/ui/Text";
import { TouchableRipple } from "@/components/ui/TouchableRipple";
import { useTheme } from "@/theme";

type NoteSaveBarProps = {
  canSave: boolean;
  colors: GlobalContainerColors;
  daysWithExercisesCount: number;
  onSave: () => void;
  totalExercises: number;
};

export const NoteSaveBar = ({
  canSave,
  colors,
  daysWithExercisesCount,
  onSave,
  totalExercises,
}: NoteSaveBarProps) => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <View
      style={[
        styles.bottomBar,
        {
          backgroundColor: colors.panel,
          borderTopColor: colors.border,
        },
      ]}
    >
      <View style={styles.bottomBarContent}>
        <View style={styles.bottomBarStats}>
          <View style={styles.statChip}>
            <Icon source="dumbbell" size={14} color={colors.accent} />
            <Text style={[styles.statNum, { color: colors.ink }]}>
              {totalExercises}
            </Text>
            <Text style={[styles.statLabel, { color: colors.muted }]}>
              {t("exercise")}
            </Text>
          </View>
          <View style={[styles.statDivider, { backgroundColor: colors.border }]} />
          <View style={styles.statChip}>
            <Icon
              source="calendar-week"
              size={14}
              color={theme.colors.secondary}
            />
            <Text style={[styles.statNum, { color: colors.ink }]}>
              {daysWithExercisesCount}
            </Text>
            <Text style={[styles.statLabel, { color: colors.muted }]}>
              {t("daysCountShort")}
            </Text>
          </View>
        </View>

        <TouchableRipple
          onPress={onSave}
          disabled={!canSave}
          borderless
          style={[
            styles.saveBtn,
            {
              backgroundColor: canSave ? colors.accent : colors.surface,
              borderColor: canSave ? colors.accent : colors.border,
            },
          ]}
        >
          <View style={styles.saveBtnInner}>
            <Icon
              source="content-save-outline"
              size={16}
              color={canSave ? theme.colors.onPrimary : theme.colors.outline}
            />
            <Text
              style={[
                styles.saveBtnText,
                {
                  color: canSave
                    ? theme.colors.onPrimary
                    : theme.colors.outline,
                },
              ]}
            >
              {t("save")}
            </Text>
          </View>
        </TouchableRipple>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    borderTopWidth: 1,
    paddingBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  bottomBarContent: {
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
    justifyContent: "space-between",
  },
  bottomBarStats: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  saveBtn: {
    borderRadius: 8,
    borderWidth: 1,
    overflow: "hidden",
  },
  saveBtnInner: {
    alignItems: "center",
    flexDirection: "row",
    gap: 6,
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  saveBtnText: {
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 1,
  },
  statChip: {
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
  },
  statDivider: {
    height: 18,
    width: 1,
  },
  statLabel: {
    fontSize: 12,
  },
  statNum: {
    fontSize: 15,
    fontWeight: "800",
  },
});
