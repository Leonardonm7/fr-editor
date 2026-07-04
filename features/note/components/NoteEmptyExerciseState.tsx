import { type NoteEditColors } from "@/features/note/utils/editSection";
import { StyleSheet, View } from "react-native";
import { Icon, Text } from "react-native-paper";

type NoteEmptyExerciseStateProps = {
  colors: NoteEditColors;
};

export function NoteEmptyExerciseState({ colors }: NoteEmptyExerciseStateProps) {
  return (
    <View
      style={[
        styles.emptyState,
        { backgroundColor: colors.panel, borderColor: colors.border },
      ]}
    >
      <View style={[styles.emptyStateShell, { borderColor: colors.border }]}>
        <Icon source="dumbbell" size={32} color={colors.accent} />
      </View>
      <Text style={[styles.emptyText, { color: colors.muted }]}>
        Toque em um exercício para adicionar.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  emptyState: {
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: "center",
    minHeight: 220,
    padding: 24,
  },
  emptyStateShell: {
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    height: 72,
    justifyContent: "center",
    width: 72,
  },
  emptyText: {
    fontSize: 14,
    fontWeight: "700",
    marginTop: 14,
    textAlign: "center",
  },
});
