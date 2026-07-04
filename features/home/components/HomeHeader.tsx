import type { GlobalContainerColors } from "@/components/ui/GlobalContainer";
import {
  HeaderIconAction,
  HeaderSignalPlate,
  HeaderStatPlate,
  HeaderTitleBlock,
} from "@/components/ui/ScreenHeaderParts";
import { StyleSheet, View } from "react-native";
import { IconButton, Text } from "react-native-paper";

type HomeHeaderProps = {
  colors: GlobalContainerColors;
  isSelecting: boolean;
  onClearSelection: () => void;
  onDeleteSelection: () => void;
  onExportBackup: () => void;
  onImportBackup: () => void;
  onSelectAll: () => void;
  selectedCount: number;
  workoutCount: number;
};

export function HomeHeader({
  colors,
  isSelecting,
  onClearSelection,
  onDeleteSelection,
  onExportBackup,
  onImportBackup,
  onSelectAll,
  selectedCount,
  workoutCount,
}: HomeHeaderProps) {
  if (isSelecting) {
    return (
      <View style={styles.selectionRow}>
        <IconButton
          icon="close"
          iconColor={colors.ink}
          onPress={onClearSelection}
          size={22}
          style={styles.iconBtnCompact}
        />
        <View style={styles.selectionTextBlock}>
          <Text style={[styles.selectionKicker, { color: colors.accent }]}>
            Seleção ativa
          </Text>
          <Text style={[styles.selectionCount, { color: colors.ink }]}>
            {selectedCount} selecionado(s)
          </Text>
        </View>
        <View style={styles.selectionActions}>
          <IconButton
            icon="select-all"
            iconColor={colors.muted}
            onPress={onSelectAll}
            size={22}
            style={styles.iconBtnCompact}
          />
          <IconButton
            icon="delete-outline"
            iconColor={colors.danger}
            onPress={onDeleteSelection}
            size={22}
            style={styles.iconBtnCompact}
          />
        </View>
      </View>
    );
  }

  return (
    <>
      <View style={styles.topBar}>
        <HeaderSignalPlate colors={colors} label="FR Editor" />
        <View style={styles.headerActions}>
          <HeaderIconAction
            colors={colors}
            icon="database-import-outline"
            iconColor={colors.muted}
            onPress={onImportBackup}
          />
          <HeaderIconAction
            colors={colors}
            icon="share-variant-outline"
            iconColor={colors.muted}
            onPress={onExportBackup}
          />
        </View>
      </View>

      <View style={styles.heroRow}>
        <HeaderTitleBlock
          colors={colors}
          eyebrow="Área de treino"
          title="Meus treinos"
        />

        <HeaderStatPlate
          colors={colors}
          label="treinos"
          minWidth={92}
          value={workoutCount}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  headerActions: {
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },
  heroRow: {
    alignItems: "flex-end",
    flexDirection: "row",
    gap: 16,
    justifyContent: "space-between",
    marginTop: 12,
  },
  iconBtnCompact: {
    margin: 0,
  },
  selectionActions: {
    flexDirection: "row",
  },
  selectionCount: {
    fontSize: 20,
    fontWeight: "900",
  },
  selectionKicker: {
    fontSize: 12,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  selectionRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
    minHeight: 72,
  },
  selectionTextBlock: {
    flex: 1,
  },
  topBar: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
