import type { GlobalContainerColors } from "@/components/ui/GlobalContainer";
import type { Note } from "@/database/types";
import { StyleSheet, View } from "react-native";
import { HomeEmptyState } from "./HomeEmptyState";
import { HomeListHeader } from "./HomeListHeader";
import { HomeWorkoutCard } from "./HomeWorkoutCard";

type HomeWorkoutListProps = {
  colors: GlobalContainerColors;
  hasQuery: boolean;
  onLongPressItem: (id: number) => void;
  onPressItem: (id: number) => void;
  selectedIds: number[];
  workouts: Note[];
};

export const HomeWorkoutList = ({
  colors,
  hasQuery,
  onLongPressItem,
  onPressItem,
  selectedIds,
  workouts,
}: HomeWorkoutListProps) => {
  if (workouts.length === 0) {
    return <HomeEmptyState colors={colors} hasQuery={hasQuery} />;
  }

  return (
    <>
      <HomeListHeader colors={colors} count={workouts.length} />

      <View style={styles.cardList}>
        {workouts.map((item, index) => (
          <HomeWorkoutCard
            colors={colors}
            index={index}
            key={item.id}
            note={item}
            onLongPress={() => onLongPressItem(item.id)}
            onPress={() => onPressItem(item.id)}
            selected={selectedIds.includes(item.id)}
          />
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  cardList: {
    gap: 10,
  },
});
