import { ExerciseGifPreviewButton } from "@/features/exercise/components/ExerciseGifPreviewButton";
import { type ExercisePreview } from "@/features/exercise/components/ExercisePreviewModal";
import {
  getExerciseGifSource,
  getExerciseLibraryInstructions,
  getExerciseLibraryItem,
} from "@/features/exercise/utils/library";
import { formatExerciseTag } from "@/features/exercise/utils/tags";
import { type IndexedExercise } from "@/features/note/utils/note";
import { type WorkoutCardColors } from "@/features/workout/utils/card";
import { useTranslation } from "@/hooks/useTranslation";
import { useMemo } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "@/components/ui/Text";

type WorkoutExercisePreviewStripProps = {
  colors: WorkoutCardColors;
  exercises: IndexedExercise[];
  onPreview: (preview: ExercisePreview) => void;
};

export const WorkoutExercisePreviewStrip = ({
  colors,
  exercises,
  onPreview,
}: WorkoutExercisePreviewStripProps) => {
  const { language, t } = useTranslation();
  const exercisePreviews = useMemo(
    () =>
      exercises.flatMap((exercise) => {
        const source = getExerciseGifSource(exercise.libraryId);
        return source ? [{ exercise, source }] : [];
      }),
    [exercises],
  );

  if (exercisePreviews.length === 0) return null;

  return (
    <ScrollView
      contentContainerStyle={styles.previewStrip}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {exercisePreviews.map(({ exercise, source }) => {
        const libraryExercise = getExerciseLibraryItem(exercise.libraryId, language);
        const displayName =
          libraryExercise?.name || exercise.name || t("customExercise");

        return (
          <View
            key={exercise.uid}
            style={[
              styles.previewItem,
              {
                backgroundColor: colors.thumb,
                borderColor: colors.border,
              },
            ]}
          >
            <ExerciseGifPreviewButton
              source={source}
              imageStyle={styles.previewGif}
              badgeBackgroundColor={colors.surface}
              iconColor={colors.accent}
              onPress={() =>
                onPreview({
                  instructions: getExerciseLibraryInstructions(
                    exercise.libraryId,
                    language,
                  ),
                  name: displayName,
                  source,
                  meta: [
                    formatExerciseTag(
                      libraryExercise?.bodyPart ?? exercise.bodyPart,
                      language,
                    ),
                    libraryExercise?.target ?? exercise.target,
                    libraryExercise?.equipment ?? exercise.equipment,
                  ]
                    .filter(Boolean)
                    .join(" / "),
                })
              }
            />
            <Text
              numberOfLines={1}
              style={[styles.previewLabel, { color: colors.ink }]}
            >
              {displayName}
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  previewGif: {
    height: 58,
    width: 58,
  },
  previewItem: {
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    gap: 5,
    overflow: "hidden",
    padding: 6,
    width: 84,
  },
  previewLabel: {
    fontSize: 10,
    fontWeight: "800",
    maxWidth: "100%",
  },
  previewStrip: {
    gap: 8,
    paddingRight: 4,
  },
});
