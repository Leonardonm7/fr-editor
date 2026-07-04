import {
  getExerciseGifSource,
  type ExerciseLibraryItem,
} from "@/assets/exercises/data/exerciseLibrary";
import { ExerciseGifPreviewButton } from "@/features/exercise/components/ExerciseGifPreviewButton";
import { type ExercisePreview } from "@/features/exercise/components/ExercisePreviewModal";
import {
  formatExerciseTag,
  type NoteEditColors,
} from "@/features/note/utils/editSection";
import { memo, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Icon, Text, TouchableRipple } from "react-native-paper";

type NoteLibraryExerciseCardProps = {
  colors: NoteEditColors;
  exercise: ExerciseLibraryItem;
  onAdd: (exercise: ExerciseLibraryItem) => void;
  onPreview: (preview: ExercisePreview) => void;
};

export const NoteLibraryExerciseCard = memo(function NoteLibraryExerciseCard({
  colors,
  exercise,
  onAdd,
  onPreview,
}: NoteLibraryExerciseCardProps) {
  const gifSource = getExerciseGifSource(exercise.id);
  const exerciseMeta = useMemo(
    () =>
      [
        formatExerciseTag(exercise.bodyPart),
        exercise.target,
        exercise.equipment,
      ]
        .filter(Boolean)
        .join(" · "),
    [exercise.bodyPart, exercise.equipment, exercise.target],
  );

  return (
    <View
      style={[
        styles.libraryCardPressable,
        {
          backgroundColor: colors.surface,
          borderColor: colors.border,
        },
      ]}
    >
      <View style={styles.libraryCardContent}>
        <View style={[styles.libraryRail, { backgroundColor: colors.accent }]} />
        {gifSource ? (
          <ExerciseGifPreviewButton
            source={gifSource}
            imageStyle={styles.libraryGif}
            badgeBackgroundColor={colors.surface}
            iconColor={colors.accent}
            onPress={() =>
              onPreview({
                instructions: exercise.instructions,
                meta: exerciseMeta,
                name: exercise.name,
                source: gifSource,
              })
            }
          />
        ) : (
          <View
            style={[
              styles.libraryGif,
              styles.gifPlaceholder,
              { backgroundColor: colors.thumb },
            ]}
          >
            <Icon source="dumbbell" size={20} color={colors.accent} />
          </View>
        )}

        <TouchableRipple
          onPress={() => onAdd(exercise)}
          borderless
          style={styles.libraryAddArea}
        >
          <View style={styles.libraryAddAreaContent}>
            <View style={styles.libraryInfo}>
              <Text
                style={[styles.libraryName, { color: colors.ink }]}
                numberOfLines={2}
              >
                {exercise.name}
              </Text>
              <Text
                style={[styles.libraryMeta, { color: colors.muted }]}
                numberOfLines={1}
              >
                {exerciseMeta}
              </Text>
            </View>

            <View style={[styles.libraryAddBtn, { backgroundColor: colors.accent }]}>
              <Icon source="plus" size={18} color="#FFFFFF" />
            </View>
          </View>
        </TouchableRipple>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  gifPlaceholder: {
    alignItems: "center",
    justifyContent: "center",
  },
  libraryAddArea: {
    alignSelf: "stretch",
    borderRadius: 8,
    flex: 1,
    justifyContent: "center",
    minWidth: 0,
    overflow: "hidden",
  },
  libraryAddAreaContent: {
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
    paddingVertical: 4,
  },
  libraryAddBtn: {
    alignItems: "center",
    borderRadius: 8,
    height: 34,
    justifyContent: "center",
    width: 34,
  },
  libraryCardContent: {
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
    height: 84,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  libraryCardPressable: {
    borderRadius: 8,
    borderWidth: 1,
    height: 84,
    overflow: "hidden",
  },
  libraryGif: {
    borderRadius: 8,
    height: 64,
    width: 64,
  },
  libraryInfo: {
    flex: 1,
    gap: 3,
  },
  libraryMeta: {
    fontSize: 11,
    fontWeight: "700",
    lineHeight: 15,
  },
  libraryName: {
    fontSize: 14,
    fontWeight: "900",
    lineHeight: 18,
  },
  libraryRail: {
    alignSelf: "stretch",
    width: 4,
  },
});
