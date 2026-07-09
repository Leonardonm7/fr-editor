import { HomeFab } from "@/features/home/components/HomeFab";
import { HomeHeader } from "@/features/home/components/HomeHeader";
import { HomeSearchBar } from "@/features/home/components/HomeSearchBar";
import { HomeWorkoutList } from "@/features/home/components/HomeWorkoutList";
import { ConfirmDialog } from "@/components/ui/ConfirmDialog";
import {
  getGlobalContainerColors,
  GlobalContainer,
} from "@/components/ui/GlobalContainer";
import { ImportJsonDialog } from "@/components/ui/ImportJsonDialog";
import { useHomeScreen } from "@/features/home/hooks/useHomeScreen";
import { useTranslation } from "@/hooks/useTranslation";
import { router } from "expo-router";
import { useMemo } from "react";
import { StyleSheet } from "react-native";
import { Snackbar } from "@/components/ui/Snackbar";
import { useTheme } from "@/components/ui/theme";

const HomeTab = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const colors = useMemo(() => getGlobalContainerColors(theme), [theme]);
  const {
    confirmDelete,
    deleteVisible,
    feedbackMessage,
    filterNotes,
    filtered,
    handleExportBackup,
    handleImportJson,
    handleLongPressItem,
    handlePressItem,
    importVisible,
    isSelecting,
    notes,
    query,
    searchFocused,
    selectedIds,
    setDeleteVisible,
    setFeedbackMessage,
    setImportVisible,
    setSearchFocused,
    setSelectedIds,
  } = useHomeScreen();
  return (
    <>
      <ConfirmDialog
        cancelLabel={t("cancel")}
        confirmLabel={t("delete")}
        message={t("deleteWorkoutsMessage", { count: selectedIds.length })}
        onCancel={() => setDeleteVisible(false)}
        onConfirm={confirmDelete}
        title={t("deleteWorkouts")}
        visible={deleteVisible}
      />
      <ImportJsonDialog
        onCancel={() => setImportVisible(false)}
        onImport={handleImportJson}
        visible={importVisible}
      />

      <GlobalContainer
        applyBottomInset={false}
        bottomOverlay={
          !!feedbackMessage && (
            <Snackbar
              duration={3000}
              onDismiss={() => setFeedbackMessage("")}
              visible
            >
              {feedbackMessage}
            </Snackbar>
          )
        }
        colors={colors}
        contentContainerStyle={styles.scrollContent}
        floating={
          !isSelecting && (
            <HomeFab
              colors={colors}
              onCreateManual={() =>
                router.push({ pathname: "/Note", params: { id: "new" } })
              }
            />
          )
        }
        floatingBottomOffset={20}
        header={
          <HomeHeader
            colors={colors}
            isSelecting={isSelecting}
            onClearSelection={() => setSelectedIds([])}
            onDeleteSelection={() => setDeleteVisible(true)}
            onExportBackup={handleExportBackup}
            onImportBackup={() => setImportVisible(true)}
            onSelectAll={() => setSelectedIds(filtered.map((note) => note.id))}
            selectedCount={selectedIds.length}
            workoutCount={notes.length}
          />
        }
        scroll
        scrollViewProps={{ keyboardShouldPersistTaps: "handled" }}
      >
        <HomeSearchBar
          colors={colors}
          focused={searchFocused}
          onBlur={() => setSearchFocused(false)}
          onChangeText={filterNotes}
          onClear={() => filterNotes("")}
          onFocus={() => setSearchFocused(true)}
          value={query}
        />

        <HomeWorkoutList
          colors={colors}
          hasQuery={!!query}
          onLongPressItem={handleLongPressItem}
          onPressItem={handlePressItem}
          selectedIds={selectedIds}
          workouts={filtered}
        />
      </GlobalContainer>
    </>
  );
};

export default HomeTab;

const styles = StyleSheet.create({
  scrollContent: {
    gap: 14,
    paddingBottom: 16,
  },
});
