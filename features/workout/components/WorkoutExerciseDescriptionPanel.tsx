import { type WorkoutCardColors } from "@/features/workout/utils/card";
import { getExerciseLibraryItem } from "@/features/exercise/utils/library";
import { type IndexedExercise } from "@/features/note/utils/note";
import { useTranslation } from "@/hooks/useTranslation";
import { StyleSheet, View } from "react-native";
import { Icon } from "@/components/ui/Icon";
import { Text } from "@/components/ui/Text";

type WorkoutExerciseDescriptionPanelProps = {
  colors: WorkoutCardColors;
  exercises: IndexedExercise[];
  isLinkedBlock: boolean;
};

export const WorkoutExerciseDescriptionPanel = ({
  colors,
  exercises,
  isLinkedBlock,
}: WorkoutExerciseDescriptionPanelProps) => {
  const { language, t } = useTranslation();
  const describedExercises = exercises.filter((exercise) =>
    exercise.description.trim(),
  );

  if (describedExercises.length === 0) return null;

  return (
    <View
      style={[
        styles.descPanel,
        {
          backgroundColor: colors.panel,
          borderColor: colors.border,
        },
      ]}
    >
      <Icon source="note-text-outline" size={14} color={colors.accent} />
      <View style={styles.descriptionList}>
        {describedExercises.map((exercise) => {
          const libraryExercise = getExerciseLibraryItem(
            exercise.libraryId,
            language,
          );
          const exerciseName =
            libraryExercise?.name || exercise.name || t("customExercise");

          return (
            <Text
              key={exercise.uid}
              style={[styles.descText, { color: colors.muted }]}
            >
              {isLinkedBlock ? `${exerciseName}: ` : ""}
              {exercise.description}
            </Text>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  descPanel: {
    alignItems: "flex-start",
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    gap: 8,
    padding: 10,
  },
  descText: {
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 18,
  },
  descriptionList: {
    flex: 1,
    gap: 4,
  },
});
