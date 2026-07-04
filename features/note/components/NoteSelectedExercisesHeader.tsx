import { type NoteEditColors } from "@/features/note/utils/editSection";
import { useTranslation } from "@/hooks/useTranslation";
import { StyleSheet, View } from "react-native";
import { Icon, Text, TouchableRipple } from "react-native-paper";

type NoteSelectedExercisesHeaderProps = {
  colors: NoteEditColors;
  onAddExercise: () => void;
  secondaryColor: string;
};

export function NoteSelectedExercisesHeader({
  colors,
  onAddExercise,
  secondaryColor,
}: NoteSelectedExercisesHeaderProps) {
  const { t } = useTranslation();

  return (
    <View style={styles.selectedHeader}>
      <View style={styles.sectionLabelRow}>
        <View style={[styles.sectionAccent, { backgroundColor: secondaryColor }]} />
        <Text style={[styles.sectionLabel, { color: colors.muted }]}>
          {t("dayExercises")}
        </Text>
      </View>
      <TouchableRipple
        onPress={onAddExercise}
        borderless
        style={[
          styles.addCustomBtn,
          { borderColor: colors.border, backgroundColor: colors.surface },
        ]}
      >
        <View style={styles.addCustomBtnInner}>
          <Icon source="plus" size={14} color={secondaryColor} />
          <Text style={[styles.addCustomText, { color: secondaryColor }]}>
            {t("custom")}
          </Text>
        </View>
      </TouchableRipple>
    </View>
  );
}

const styles = StyleSheet.create({
  addCustomBtn: {
    borderRadius: 8,
    borderWidth: 1,
    flexShrink: 0,
    overflow: "hidden",
  },
  addCustomBtnInner: {
    alignItems: "center",
    flexDirection: "row",
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  addCustomText: {
    fontSize: 12,
    fontWeight: "800",
  },
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
    flexDirection: "row",
    gap: 8,
  },
  selectedHeader: {
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
    justifyContent: "space-between",
  },
});
