import { NoteTextField } from "@/features/note/components/NoteTextField";
import {
  connectionColors,
  connectionGroups,
  methodologies,
  type ExerciseForm,
  type IndexedExercise,
} from "@/features/note/utils/note";
import { StyleSheet, View } from "react-native";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Divider } from "@/components/ui/Divider";
import { IconButton } from "@/components/ui/IconButton";
import { Surface } from "@/components/ui/Surface";
import { Text } from "@/components/ui/Text";
import { TextInput } from "@/components/ui/TextInput";
import { useTheme } from "@/components/ui/theme";
import { useTranslation } from "@/hooks/useTranslation";

type ExerciseEditorCardProps = {
  disabledMoveDown: boolean;
  disabledMovePrevDay: boolean;
  disabledMoveUp: boolean;
  disabledMoveNextDay: boolean;
  exercise: IndexedExercise;
  isExpanded: boolean;
  linkedNames: string[];
  nextDayLabel: string;
  onChangeExercise: (key: keyof ExerciseForm, value: string) => void;
  onDelete: () => void;
  onDuplicate: () => void;
  onMoveDown: () => void;
  onMoveNextDay: () => void;
  onMovePrevDay: () => void;
  onMoveUp: () => void;
  onToggleExpand: () => void;
  prevDayLabel: string;
};

export const ExerciseEditorCard = ({
  disabledMoveDown,
  disabledMovePrevDay,
  disabledMoveUp,
  disabledMoveNextDay,
  exercise,
  isExpanded,
  linkedNames,
  nextDayLabel,
  onChangeExercise,
  onDelete,
  onDuplicate,
  onMoveDown,
  onMoveNextDay,
  onMovePrevDay,
  onMoveUp,
  onToggleExpand,
  prevDayLabel,
}: ExerciseEditorCardProps) => {
  const theme = useTheme();
  const { methodologyName, t } = useTranslation();

  return (
    <Card
      mode="contained"
      style={[styles.card, { backgroundColor: theme.colors.elevation.level1 }]}
    >
      <Card.Content style={styles.content}>
        <Surface style={styles.header} elevation={0}>
          <View style={styles.headerLeft}>
            <IconButton
              icon={isExpanded ? "chevron-down" : "chevron-right"}
              size={20}
              onPress={onToggleExpand}
              style={styles.expandIcon}
            />
            <View style={styles.flex}>
              <Text variant="titleSmall" numberOfLines={1}>
                {exercise.name || t("newExercise")}
              </Text>
              {!isExpanded && exercise.name.trim() && (
                <Text
                  variant="bodySmall"
                  style={{
                    color: theme.colors.onSurfaceVariant,
                  }}
                >
                  {exercise.series}×{exercise.reps} · {exercise.load}kg
                  {exercise.methodology.trim()
                    ? ` · ${methodologyName(exercise.methodology)}`
                    : ""}
                  {exercise.connectionGroup.trim()
                    ? ` (${t("block")} ${exercise.connectionGroup.toUpperCase()})`
                    : ""}
                </Text>
              )}
              {!isExpanded && !!exercise.description.trim() && (
                <Text
                  variant="bodySmall"
                  style={{ color: theme.colors.onSurfaceVariant }}
                  numberOfLines={2}
                >
                  {exercise.description}
                </Text>
              )}
              {!isExpanded && linkedNames.length > 0 && (
                <Text
                  variant="labelSmall"
                  style={{ color: theme.colors.primary }}
                  numberOfLines={1}
                >
                  {t("linked")}: {linkedNames.join(" • ")}
                </Text>
              )}
            </View>
          </View>

          <View style={styles.headerActions}>
            <IconButton
              icon="arrow-up"
              size={18}
              onPress={onMoveUp}
              disabled={disabledMoveUp}
            />
            <IconButton
              icon="arrow-down"
              size={18}
              onPress={onMoveDown}
              disabled={disabledMoveDown}
            />
          </View>
        </Surface>

        {isExpanded && (
          <View style={styles.expandedForm}>
            <Divider style={styles.formDivider} />

            <NoteTextField
              label={t("exerciseName")}
              value={exercise.name}
              onChangeText={(value) => onChangeExercise("name", value)}
              left={<TextInput.Icon icon="dumbbell" size={18} />}
            />

            <NoteTextField
              label={t("descriptionOptional")}
              placeholder={t("descriptionPlaceholder")}
              value={exercise.description}
              onChangeText={(value) => onChangeExercise("description", value)}
              multiline
              numberOfLines={3}
              style={styles.descriptionField}
              left={<TextInput.Icon icon="note-text-outline" />}
            />

            <View style={styles.inputRow}>
              <NoteTextField
                label={t("series")}
                value={exercise.series}
                keyboardType="numeric"
                onChangeText={(value) => onChangeExercise("series", value)}
                style={styles.flex}
              />
              <NoteTextField
                label={t("reps")}
                value={exercise.reps}
                keyboardType="numeric"
                onChangeText={(value) => onChangeExercise("reps", value)}
                style={styles.flex}
              />
              <NoteTextField
                label={t("load")}
                value={exercise.load}
                keyboardType="numeric"
                onChangeText={(value) => onChangeExercise("load", value)}
                style={styles.flex}
                right={<TextInput.Affix text="kg" />}
              />
            </View>

            <NoteTextField
              label={t("methodologyOptional")}
              value={exercise.methodology}
              onChangeText={(value) => onChangeExercise("methodology", value)}
              left={<TextInput.Icon icon="tag-outline" />}
            />

            <View style={styles.methodologyChipRow}>
              <Chip
                compact
                selected={!exercise.methodology.trim()}
                onPress={() => onChangeExercise("methodology", "")}
              >
                {t("noMethod")}
              </Chip>
              {methodologies.map((method) => (
                <Chip
                  key={method}
                  compact
                  selected={
                    exercise.methodology.toLowerCase() ===
                      method.toLowerCase() ||
                    methodologyName(exercise.methodology).toLowerCase() ===
                      methodologyName(method).toLowerCase()
                  }
                  onPress={() => onChangeExercise("methodology", method)}
                >
                  {methodologyName(method)}
                </Chip>
              ))}
            </View>

            {!!exercise.methodology.trim() && (
              <View style={[styles.connectionBox, { backgroundColor: theme.colors.surfaceVariant }]}>
                <Text
                  variant="labelMedium"
                  style={{ color: theme.colors.onSurfaceVariant }}
                >
                  {t("connectExerciseToBlock")}
                </Text>
                <View style={styles.connectionChipRow}>
                  <Chip
                    compact
                    selected={!exercise.connectionGroup.trim()}
                    onPress={() => onChangeExercise("connectionGroup", "")}
                  >
                    {t("noConnection")}
                  </Chip>
                  {connectionGroups.map((group) => (
                    <Chip
                      key={group}
                      compact
                      selected={exercise.connectionGroup.toUpperCase() === group}
                      style={{
                        backgroundColor:
                          exercise.connectionGroup.toUpperCase() === group
                            ? connectionColors[group]
                            : undefined,
                      }}
                      textStyle={
                        exercise.connectionGroup.toUpperCase() === group
                          ? { color: "#101318", fontWeight: "700" }
                          : undefined
                      }
                      onPress={() => onChangeExercise("connectionGroup", group)}
                    >
                      {t("block")} {group}
                    </Chip>
                  ))}
                </View>
                {exercise.connectionGroup.trim() && (
                  <Text variant="bodySmall" style={{ color: theme.colors.primary }}>
                    {t("sameMethodologyTip")}
                  </Text>
                )}
              </View>
            )}

            <View style={styles.actionRow}>
              <Button
                mode="text"
                compact
                icon="content-copy"
                onPress={onDuplicate}
              >
                {t("duplicate")}
              </Button>
              <Button
                mode="text"
                compact
                icon="arrow-left"
                onPress={onMovePrevDay}
                disabled={disabledMovePrevDay}
              >
                {prevDayLabel}
              </Button>
              <Button
                mode="text"
                compact
                icon="arrow-right"
                contentStyle={styles.nextDayButtonContent}
                onPress={onMoveNextDay}
                disabled={disabledMoveNextDay}
              >
                {nextDayLabel}
              </Button>
              <View style={styles.flex} />
              <IconButton
                icon="trash-can-outline"
                size={20}
                iconColor={theme.colors.error}
                onPress={onDelete}
              />
            </View>
          </View>
        )}
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
  },
  content: {
    paddingVertical: 10,
    paddingHorizontal: 6,
  },
  flex: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 6,
  },
  expandIcon: {
    margin: 0,
  },
  headerActions: {
    flexDirection: "row",
    marginRight: -8,
  },
  expandedForm: {
    gap: 12,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  descriptionField: {
    minHeight: 100,
  },
  formDivider: {
    marginBottom: 6,
  },
  inputRow: {
    flexDirection: "row",
    gap: 10,
  },
  methodologyChipRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  connectionBox: {
    gap: 10,
    marginTop: 4,
    padding: 12,
    borderRadius: 14,
  },
  connectionChipRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: 6,
  },
  nextDayButtonContent: {
    flexDirection: "row-reverse",
  },
});
