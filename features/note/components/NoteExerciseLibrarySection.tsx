import {
  exerciseLibrary,
  type ExerciseLibraryItem,
} from "@/assets/exercises/data/exerciseLibrary";
import { type ExercisePreview } from "@/features/exercise/components/ExercisePreviewModal";
import { NoteLibraryExerciseCard } from "@/features/note/components/NoteLibraryExerciseCard";
import { NoteTextField } from "@/features/note/components/NoteTextField";
import {
  buildExerciseLibrarySearchText,
  formatExerciseTag,
  LIBRARY_PAGE_SIZE,
  type NoteEditColors,
} from "@/features/note/utils/editSection";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  View,
  type ListRenderItem,
} from "react-native";
import { Text, TextInput, TouchableRipple } from "react-native-paper";

type NoteExerciseLibrarySectionProps = {
  colors: NoteEditColors;
  onAddExerciseFromLibrary: (exercise: ExerciseLibraryItem) => void;
  onPreview: (preview: ExercisePreview) => void;
};

const EXERCISE_LIBRARY_BODY_PARTS = Array.from(
  new Set(exerciseLibrary.map((item) => item.bodyPart)),
).sort();

const EXERCISE_LIBRARY_BY_BODY_PART = exerciseLibrary.reduce<
  Record<string, ExerciseLibraryItem[]>
>((groups, exercise) => {
  (groups[exercise.bodyPart] ??= []).push(exercise);
  return groups;
}, {});

const EXERCISE_LIBRARY_SEARCH_INDEX = new Map(
  exerciseLibrary.map((exercise) => [
    exercise.id,
    buildExerciseLibrarySearchText(exercise),
  ]),
);

const LIBRARY_ROW_HEIGHT = 92;

export const NoteExerciseLibrarySection = memo(function NoteExerciseLibrarySection({
  colors,
  onAddExerciseFromLibrary,
  onPreview,
}: NoteExerciseLibrarySectionProps) {
  const [query, setQuery] = useState("");
  const [selectedBodyPart, setSelectedBodyPart] = useState<string | null>(null);
  const [libraryVisibleCount, setLibraryVisibleCount] =
    useState(LIBRARY_PAGE_SIZE);

  const bodyParts = EXERCISE_LIBRARY_BODY_PARTS;

  const filteredExercises = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const baseExercises = selectedBodyPart
      ? EXERCISE_LIBRARY_BY_BODY_PART[selectedBodyPart] ?? []
      : exerciseLibrary;

    if (!normalizedQuery) return baseExercises;

    return baseExercises.filter((exercise) => {
      const matchesQuery =
        EXERCISE_LIBRARY_SEARCH_INDEX.get(exercise.id)?.includes(
          normalizedQuery,
        ) ?? false;
      return matchesQuery;
    });
  }, [query, selectedBodyPart]);

  useEffect(() => {
    setLibraryVisibleCount(LIBRARY_PAGE_SIZE);
  }, [query, selectedBodyPart]);

  const visibleLibraryExercises = useMemo(
    () => filteredExercises.slice(0, libraryVisibleCount),
    [filteredExercises, libraryVisibleCount],
  );

  const loadMoreLibraryExercises = useCallback(() => {
    setLibraryVisibleCount((current) => {
      if (current >= filteredExercises.length) return current;
      return Math.min(current + LIBRARY_PAGE_SIZE, filteredExercises.length);
    });
  }, [filteredExercises.length]);

  const keyExtractor = useCallback((item: ExerciseLibraryItem) => item.id, []);

  const renderLibraryExercise = useCallback<ListRenderItem<ExerciseLibraryItem>>(
    ({ item }) => (
      <NoteLibraryExerciseCard
        colors={colors}
        exercise={item}
        onAdd={onAddExerciseFromLibrary}
        onPreview={onPreview}
      />
    ),
    [colors, onAddExerciseFromLibrary, onPreview],
  );

  const getLibraryItemLayout = useCallback(
    (_: ArrayLike<ExerciseLibraryItem> | null | undefined, index: number) => ({
      index,
      length: LIBRARY_ROW_HEIGHT,
      offset: LIBRARY_ROW_HEIGHT * index,
    }),
    [],
  );

  return (
    <View
      style={[
        styles.librarySection,
        { backgroundColor: colors.panel, borderColor: colors.border },
      ]}
    >
      <View style={styles.sectionLabelRow}>
        <View style={[styles.sectionAccent, { backgroundColor: colors.accent }]} />
        <Text style={[styles.sectionLabel, { color: colors.muted }]}>
          BIBLIOTECA
        </Text>
      </View>

      <NoteTextField
        label="Buscar exercício"
        placeholder="Nome, músculo, equipamento..."
        value={query}
        onChangeText={setQuery}
        left={<TextInput.Icon icon="magnify" />}
        right={
          query.trim() ? (
            <TextInput.Icon icon="close" onPress={() => setQuery("")} />
          ) : undefined
        }
      />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filterRow}
      >
        {[null, ...bodyParts].map((bodyPart) => {
          const isActive = bodyPart === selectedBodyPart;
          return (
            <TouchableRipple
              key={bodyPart ?? "__all"}
              onPress={() => setSelectedBodyPart(bodyPart)}
              borderless
              style={[
                styles.filterPill,
                {
                  backgroundColor: isActive ? colors.selected : colors.surface,
                  borderColor: isActive ? colors.accent : colors.border,
                },
              ]}
            >
              <Text
                style={[
                  styles.filterPillText,
                  { color: isActive ? colors.ink : colors.muted },
                ]}
              >
                {bodyPart === null ? "Todos" : formatExerciseTag(bodyPart)}
              </Text>
            </TouchableRipple>
          );
        })}
      </ScrollView>

      <FlatList
        data={visibleLibraryExercises}
        renderItem={renderLibraryExercise}
        keyExtractor={keyExtractor}
        getItemLayout={getLibraryItemLayout}
        ItemSeparatorComponent={LibraryListSeparator}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}
        style={styles.libraryListScroll}
        contentContainerStyle={styles.libraryList}
        keyboardShouldPersistTaps="handled"
        onEndReached={loadMoreLibraryExercises}
        onEndReachedThreshold={0.35}
        initialNumToRender={8}
        maxToRenderPerBatch={8}
        removeClippedSubviews
        updateCellsBatchingPeriod={32}
        windowSize={5}
      />
    </View>
  );
});

const LibraryListSeparator = () => <View style={styles.libraryListSeparator} />;

const styles = StyleSheet.create({
  filterPill: {
    borderRadius: 8,
    borderWidth: 1,
    overflow: "hidden",
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  filterPillText: {
    fontSize: 11,
    fontWeight: "900",
  },
  filterRow: {
    gap: 8,
    paddingRight: 16,
  },
  libraryList: {
    paddingBottom: 2,
  },
  libraryListSeparator: {
    height: 8,
  },
  libraryListScroll: {
    maxHeight: 340,
  },
  librarySection: {
    borderRadius: 8,
    borderWidth: 1,
    gap: 12,
    padding: 12,
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
});
