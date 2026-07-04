import type { GlobalContainerColors } from "@/components/ui/GlobalContainer";
import {
  HeaderIconAction,
  HeaderSignalPlate,
  HeaderStatPlate,
  HeaderTitleBlock,
} from "@/components/ui/ScreenHeaderParts";
import { StyleSheet, View } from "react-native";

type NoteHeaderProps = {
  colors: GlobalContainerColors;
  isNew: boolean;
  onBack: () => void;
  onToggleViewMode: () => void;
  screenTitle: string;
  totalExercises: number;
  viewMode: boolean;
};

export function NoteHeader({
  colors,
  isNew,
  onBack,
  onToggleViewMode,
  screenTitle,
  totalExercises,
  viewMode,
}: NoteHeaderProps) {
  return (
    <>
      <View style={styles.topBar}>
        <HeaderIconAction
          colors={colors}
          icon="arrow-left"
          iconColor={colors.ink}
          onPress={onBack}
        />
        <HeaderSignalPlate
          background={colors.panel}
          colors={colors}
          label={viewMode ? "VISUALIZAR" : "EDITAR"}
        />
        {!isNew && (
          <HeaderIconAction
            colors={colors}
            icon={viewMode ? "pencil-outline" : "eye-outline"}
            iconColor={colors.muted}
            onPress={onToggleViewMode}
          />
        )}
      </View>

      <View style={styles.headerTitleRow}>
        <HeaderTitleBlock
          colors={colors}
          eyebrow="Plano de treino"
          numberOfLines={1}
          size="compact"
          title={screenTitle}
        />

        <HeaderStatPlate
          colors={colors}
          label="ex."
          minWidth={82}
          value={totalExercises}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  headerTitleRow: {
    alignItems: "flex-end",
    flexDirection: "row",
    gap: 16,
    justifyContent: "space-between",
    marginTop: 12,
  },
  topBar: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
