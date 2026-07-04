import type { ThemeOption } from "@/features/settings/utils/options";
import type { GlobalContainerColors } from "@/components/ui/GlobalContainer";
import { StyleSheet, View } from "react-native";
import { Icon, Text, TouchableRipple } from "react-native-paper";

type ThemeChoiceProps = {
  colors: GlobalContainerColors;
  isActive: boolean;
  option: ThemeOption;
  onPress: () => void;
};

export function ThemeChoice({
  colors,
  isActive,
  option,
  onPress,
}: ThemeChoiceProps) {
  return (
    <TouchableRipple
      accessibilityRole="button"
      accessibilityState={{ selected: isActive }}
      borderless
      onPress={onPress}
      style={[
        styles.themeChoice,
        {
          backgroundColor: isActive ? colors.selected : colors.surface,
          borderColor: isActive ? colors.accent : colors.border,
        },
      ]}
    >
      <View style={styles.themeChoiceInner}>
        <View style={styles.themeChoiceTop}>
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
              size={22}
              source={option.icon}
            />
          </View>
          {isActive && (
            <Icon color={colors.accent} size={22} source="check-circle" />
          )}
        </View>

        <Text style={[styles.optionLabel, { color: colors.ink }]}>
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
  optionLabel: {
    fontSize: 20,
    fontWeight: "900",
  },
  themeChoice: {
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    minHeight: 158,
    overflow: "hidden",
  },
  themeChoiceInner: {
    flex: 1,
    gap: 8,
    justifyContent: "space-between",
    padding: 14,
  },
  themeChoiceTop: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
