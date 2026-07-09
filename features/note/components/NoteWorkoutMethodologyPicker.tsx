import { methodologies } from "@/features/note/utils/note";
import { type NoteEditColors } from "@/features/note/utils/editSection";
import { useTranslation } from "@/hooks/useTranslation";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "@/components/ui/Text";
import { TouchableRipple } from "@/components/ui/TouchableRipple";

type NoteWorkoutMethodologyPickerProps = {
  colors: NoteEditColors;
  currentMethodology: string;
  onChangeMethodology: (value: string) => void;
};

export const NoteWorkoutMethodologyPicker = ({
  colors,
  currentMethodology,
  onChangeMethodology,
}: NoteWorkoutMethodologyPickerProps) => {
  const { methodologyName, t } = useTranslation();

  return (
    <View
      style={[
        styles.methodologyPicker,
        { backgroundColor: colors.panel, borderColor: colors.border },
      ]}
    >
      <View style={styles.sectionLabelRow}>
        <View style={[styles.sectionAccent, { backgroundColor: colors.accent }]} />
        <Text style={[styles.sectionLabel, { color: colors.muted }]}>
          {t("methodology")}
        </Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.methodologyChipRow}
      >
        <TouchableRipple
          onPress={() => onChangeMethodology("")}
          borderless
          style={[
            styles.methodologyPill,
            {
              backgroundColor: !currentMethodology
                ? colors.accent
                : colors.surface,
              borderColor: !currentMethodology
                ? colors.accent
                : colors.border,
            },
          ]}
        >
          <Text
            style={[
              styles.methodologyPillText,
              { color: !currentMethodology ? "#FFFFFF" : colors.muted },
            ]}
          >
            {t("noMethod")}
          </Text>
        </TouchableRipple>

        {methodologies.map((methodology) => {
          const isActive =
            currentMethodology.toLowerCase() === methodology.toLowerCase() ||
            methodologyName(currentMethodology).toLowerCase() ===
              methodologyName(methodology).toLowerCase();

          return (
            <TouchableRipple
              key={methodology}
              onPress={() => onChangeMethodology(isActive ? "" : methodology)}
              borderless
              style={[
                styles.methodologyPill,
                {
                  backgroundColor: isActive ? colors.accent : colors.surface,
                  borderColor: isActive ? colors.accent : colors.border,
                },
              ]}
            >
              <Text
                style={[
                  styles.methodologyPillText,
                  { color: isActive ? "#FFFFFF" : colors.ink },
                ]}
              >
                {methodologyName(methodology)}
              </Text>
            </TouchableRipple>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  methodologyChipRow: {
    gap: 8,
    paddingRight: 12,
  },
  methodologyPicker: {
    borderRadius: 8,
    borderWidth: 1,
    gap: 10,
    padding: 12,
  },
  methodologyPill: {
    borderRadius: 8,
    borderWidth: 1,
    overflow: "hidden",
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  methodologyPillText: {
    fontSize: 12,
    fontWeight: "900",
  },
  sectionAccent: {
    height: 18,
    width: 4,
  },
  sectionLabel: {
    flexShrink: 0,
    fontSize: 11,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  sectionLabelRow: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    gap: 8,
    minWidth: 0,
  },
});
