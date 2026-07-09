import {
  buildSeriesDetails,
  getSeriesDetails,
  type ExerciseForm,
  type IndexedExercise,
} from "@/features/note/utils/note";
import { NoteCompactTextField } from "@/features/note/components/NoteCompactTextField";
import { type NoteEditColors } from "@/features/note/utils/editSection";
import { useTranslation } from "@/hooks/useTranslation";
import { StyleSheet, View } from "react-native";
import { Icon } from "@/components/ui/Icon";
import { Text } from "@/components/ui/Text";
import { TouchableRipple } from "@/components/ui/TouchableRipple";

type NoteWorkoutSeriesEditorProps = {
  colors: NoteEditColors;
  exercise: IndexedExercise;
  onChangeExercise: (
    index: number,
    key: keyof ExerciseForm,
    value: string | ExerciseForm["seriesDetails"],
  ) => void;
};

export const NoteWorkoutSeriesEditor = ({
  colors,
  exercise,
  onChangeExercise,
}: NoteWorkoutSeriesEditorProps) => {
  const { t } = useTranslation();

  const updateSeriesDetail = (
    seriesIndex: number,
    key: "reps" | "load",
    value: string,
  ) => {
    const nextDetails = getSeriesDetails(exercise).map((detail, detailIndex) =>
      detailIndex === seriesIndex ? { ...detail, [key]: value } : detail,
    );

    onChangeExercise(exercise.index, "seriesDetails", nextDetails);
  };

  return (
    <View style={styles.seriesSection}>
      <View style={styles.seriesTopRow}>
        <Text style={[styles.seriesSectionHeader, { color: colors.muted }]}>
          {t("series").toUpperCase()}
        </Text>
        <View style={styles.seriesStepper}>
          <TouchableRipple
            borderless
            onPress={() => {
              const n = parseInt(exercise.series, 10) || 0;
              if (n > 1)
                onChangeExercise(exercise.index, "series", String(n - 1));
            }}
            style={[styles.stepperBtn, { borderColor: colors.border }]}
          >
            <Icon source="minus" size={13} color={colors.muted} />
          </TouchableRipple>
          <Text style={[styles.stepperCount, { color: colors.ink }]}>
            {exercise.series || "0"}
          </Text>
          <TouchableRipple
            borderless
            onPress={() => {
              const n = parseInt(exercise.series, 10) || 0;
              onChangeExercise(exercise.index, "series", String(n + 1));
            }}
            style={[
              styles.stepperBtn,
              {
                borderColor: colors.border,
                backgroundColor: `${colors.accent}22`,
              },
            ]}
          >
            <Icon source="plus" size={13} color={colors.accent} />
          </TouchableRipple>
        </View>
      </View>

      {(parseInt(exercise.series, 10) || 0) > 0 && (
        <View style={[styles.seriesGrid, { borderColor: colors.border }]}>
          <View
            style={[styles.seriesGridHeader, { borderColor: colors.border }]}
          >
            <Text
              style={[
                styles.seriesGridCol0,
                styles.seriesColLabel,
                { color: colors.muted },
              ]}
            >
              #
            </Text>
            <Text
              style={[
                styles.seriesGridCol1,
                styles.seriesColLabel,
                { color: colors.muted },
              ]}
            >
              {t("reps").toUpperCase()}
            </Text>
            <Text
              style={[
                styles.seriesGridCol2,
                styles.seriesColLabel,
                { color: colors.muted },
              ]}
            >
              {t("load").toUpperCase()}
            </Text>
          </View>

          {buildSeriesDetails(
            exercise.series,
            { reps: exercise.reps, load: exercise.load },
            exercise.seriesDetails,
          ).map((detail, seriesIndex) => (
            <View
              key={`${exercise.uid}-${seriesIndex}`}
              style={[styles.seriesGridRow, { borderColor: colors.border }]}
            >
              <Text
                style={[
                  styles.seriesGridCol0,
                  styles.seriesGridIdx,
                  { color: colors.muted },
                ]}
              >
                {seriesIndex + 1}
              </Text>
              <View style={styles.seriesGridCol1}>
                <NoteCompactTextField
                  colors={colors}
                  value={detail.reps}
                  keyboardType="numeric"
                  onChangeText={(value) =>
                    updateSeriesDetail(seriesIndex, "reps", value)
                  }
                />
              </View>
              <View style={[styles.seriesGridCol2, styles.seriesInputWithUnit]}>
                <NoteCompactTextField
                  colors={colors}
                  value={detail.load}
                  keyboardType="numeric"
                  onChangeText={(value) =>
                    updateSeriesDetail(seriesIndex, "load", value)
                  }
                  fieldStyle={styles.seriesCompactInput}
                />
                <Text style={[styles.seriesUnit, { color: colors.muted }]}>
                  kg
                </Text>
              </View>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  seriesColLabel: {
    fontSize: 9,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  seriesCompactInput: {
    flex: 1,
  },
  seriesGrid: {
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    overflow: "hidden",
  },
  seriesGridCol0: {
    width: 24,
  },
  seriesGridCol1: {
    flex: 1,
    paddingHorizontal: 6,
  },
  seriesGridCol2: {
    flex: 1,
    paddingHorizontal: 6,
  },
  seriesGridHeader: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  seriesGridIdx: {
    fontSize: 12,
    fontWeight: "900",
    textAlign: "center",
  },
  seriesGridRow: {
    alignItems: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    paddingLeft: 10,
  },
  seriesInputWithUnit: {
    alignItems: "center",
    flexDirection: "row",
  },
  seriesSection: {
    gap: 10,
    paddingTop: 8,
  },
  seriesSectionHeader: {
    fontSize: 10,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  seriesStepper: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  seriesTopRow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  seriesUnit: {
    fontSize: 11,
    fontWeight: "800",
    paddingRight: 8,
  },
  stepperBtn: {
    alignItems: "center",
    borderRadius: 7,
    borderWidth: 1,
    height: 30,
    justifyContent: "center",
    overflow: "hidden",
    width: 30,
  },
  stepperCount: {
    fontSize: 17,
    fontWeight: "900",
    minWidth: 22,
    textAlign: "center",
  },
});
