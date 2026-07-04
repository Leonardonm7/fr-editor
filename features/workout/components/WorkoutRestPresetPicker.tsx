import { REST_PRESETS, type WorkoutCardColors } from "@/features/workout/utils/card";
import { formatRestTime } from "@/features/workout/services/workout";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Icon, Text, TouchableRipple } from "react-native-paper";
import { useTranslation } from "@/hooks/useTranslation";

type WorkoutRestPresetPickerProps = {
  colors: WorkoutCardColors;
  onRestTimeChange: (value: number) => void;
  restTime: number;
};

export function WorkoutRestPresetPicker({
  colors,
  onRestTimeChange,
  restTime,
}: WorkoutRestPresetPickerProps) {
  const { t } = useTranslation();
  const [showRestPresets, setShowRestPresets] = useState(false);

  return (
    <View style={styles.restPresetSection}>
      <TouchableRipple
        borderless
        onPress={() => setShowRestPresets((value) => !value)}
        style={[styles.restToggle, { borderColor: colors.border }]}
      >
        <View style={styles.restToggleInner}>
          <Icon source="timer-outline" size={14} color={colors.muted} />
          <Text style={[styles.restToggleText, { color: colors.muted }]}>
            {t("rest")}:{" "}
            {restTime === 0 ? t("noRest") : formatRestTime(restTime * 1000)}
          </Text>
          <Icon
            source={showRestPresets ? "chevron-up" : "chevron-down"}
            size={14}
            color={colors.muted}
          />
        </View>
      </TouchableRipple>

      {showRestPresets && (
        <ScrollView
          contentContainerStyle={styles.presetsRow}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {REST_PRESETS.map((preset) => {
            const isActive = restTime === preset.value;
            return (
              <TouchableRipple
                borderless
                key={preset.value}
                onPress={() => {
                  onRestTimeChange(preset.value);
                  setShowRestPresets(false);
                }}
                style={[
                  styles.presetPill,
                  {
                    backgroundColor: isActive ? colors.selected : colors.panel,
                    borderColor: isActive ? colors.accent : colors.border,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.presetPillText,
                    { color: isActive ? colors.ink : colors.muted },
                  ]}
                >
                  {preset.value === 0 ? t("noRest") : preset.label}
                </Text>
              </TouchableRipple>
            );
          })}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  presetPill: {
    borderRadius: 8,
    borderWidth: 1,
    overflow: "hidden",
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  presetPillText: {
    fontSize: 11,
    fontWeight: "900",
  },
  presetsRow: {
    gap: 8,
    paddingRight: 4,
  },
  restPresetSection: {
    gap: 8,
  },
  restToggle: {
    borderRadius: 8,
    borderWidth: 1,
    overflow: "hidden",
  },
  restToggleInner: {
    alignItems: "center",
    flexDirection: "row",
    gap: 7,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  restToggleText: {
    flex: 1,
    fontSize: 12,
    fontWeight: "800",
  },
});
