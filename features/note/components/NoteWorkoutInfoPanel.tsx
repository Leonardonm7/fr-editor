import { NoteTextField } from "@/features/note/components/NoteTextField";
import { type NoteEditColors } from "@/features/note/utils/editSection";
import { StyleSheet, View } from "react-native";
import { Icon, Text, TextInput } from "react-native-paper";

type NoteWorkoutInfoPanelProps = {
  colors: NoteEditColors;
  onChangeWorkoutName: (value: string) => void;
  workoutName: string;
};

export function NoteWorkoutInfoPanel({
  colors,
  onChangeWorkoutName,
  workoutName,
}: NoteWorkoutInfoPanelProps) {
  return (
    <View
      style={[
        styles.workoutPanel,
        { backgroundColor: colors.panel, borderColor: colors.border },
      ]}
    >
      <View style={[styles.workoutRail, { backgroundColor: colors.accent }]} />
      <View style={styles.workoutHeader}>
        <View>
          <Text style={[styles.panelKicker, { color: colors.accent }]}>
            Treino
          </Text>
          <Text style={[styles.panelTitle, { color: colors.ink }]}>
            Dados do treino
          </Text>
        </View>
        <View style={[styles.workoutBadge, { borderColor: colors.border }]}>
          <Icon source="clipboard-text-outline" size={18} color={colors.accent} />
        </View>
      </View>
      <NoteTextField
        label="Nome do treino"
        placeholder="Ex.: Hipertrofia 4x na semana"
        value={workoutName}
        onChangeText={onChangeWorkoutName}
        left={<TextInput.Icon icon="clipboard-text-outline" />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  panelKicker: {
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 0,
    textTransform: "uppercase",
  },
  panelTitle: {
    fontSize: 20,
    fontWeight: "900",
    lineHeight: 24,
  },
  workoutBadge: {
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    height: 38,
    justifyContent: "center",
    width: 38,
  },
  workoutHeader: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  workoutPanel: {
    borderRadius: 8,
    borderWidth: 1,
    gap: 14,
    overflow: "hidden",
    padding: 14,
  },
  workoutRail: {
    height: 4,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },
});
