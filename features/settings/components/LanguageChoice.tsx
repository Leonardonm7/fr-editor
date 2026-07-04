import type { GlobalContainerColors } from "@/components/ui/GlobalContainer";
import type { LanguageOption } from "@/features/settings/utils/options";
import { StyleSheet, View } from "react-native";
import { Icon, Text, TouchableRipple } from "react-native-paper";

type LanguageChoiceProps = {
  colors: GlobalContainerColors;
  isActive: boolean;
  onPress: () => void;
  option: LanguageOption;
};

export function LanguageChoice({
  colors,
  isActive,
  onPress,
  option,
}: LanguageChoiceProps) {
  return (
    <TouchableRipple
      accessibilityRole="button"
      accessibilityState={{ selected: isActive }}
      borderless
      onPress={onPress}
      style={[
        styles.languageChoice,
        {
          backgroundColor: isActive ? colors.selected : colors.surface,
          borderColor: isActive ? colors.accent : colors.border,
        },
      ]}
    >
      <View style={styles.languageChoiceInner}>
        <View style={styles.choiceTop}>
          <View
            style={[
              styles.optionIconBox,
              {
                backgroundColor: isActive ? colors.accent : colors.thumb,
                borderColor: isActive ? colors.accent : colors.border,
              },
            ]}
          >
            <Icon
              color={isActive ? "#FFFFFF" : colors.accent}
              size={21}
              source={option.icon}
            />
          </View>

          {isActive && (
            <Icon color={colors.accent} size={22} source="check-circle" />
          )}
        </View>

        <Text style={[styles.languageLabel, { color: colors.ink }]}>
          {option.label}
        </Text>
        <Text style={[styles.optionCaption, { color: colors.muted }]}>
          {option.caption}
        </Text>
      </View>
    </TouchableRipple>
  );
}

const styles = StyleSheet.create({
  choiceTop: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  languageChoice: {
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    minHeight: 126,
    overflow: "hidden",
  },
  languageChoiceInner: {
    flex: 1,
    gap: 8,
    justifyContent: "space-between",
    padding: 12,
  },
  languageLabel: {
    fontSize: 17,
    fontWeight: "900",
  },
  optionCaption: {
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 16,
  },
  optionIconBox: {
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    height: 42,
    justifyContent: "center",
    width: 42,
  },
});
