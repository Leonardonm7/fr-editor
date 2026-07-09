import type { GlobalContainerColors } from "@/components/ui/GlobalContainer";
import {
  HeaderIconAction,
  HeaderSignalPlate,
  HeaderStatPlate,
  HeaderTitleBlock,
} from "@/components/ui/ScreenHeaderParts";
import { useTranslation } from "@/hooks/useTranslation";
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

export const NoteHeader = ({
  colors,
  isNew,
  onBack,
  onToggleViewMode,
  screenTitle,
  totalExercises,
  viewMode,
}: NoteHeaderProps) => {
  const { t } = useTranslation();

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
          label={viewMode ? t("view") : t("edit")}
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
          eyebrow={t("trainingPlan")}
          numberOfLines={1}
          size="compact"
          title={screenTitle}
        />

        <HeaderStatPlate
          colors={colors}
          label={t("exercise")}
          minWidth={82}
          value={totalExercises}
        />
      </View>
    </>
  );
};

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
