import type { FontSizeOption } from "@/features/settings/utils/options";
import type { GlobalContainerColors } from "@/components/ui/GlobalContainer";
import { StyleSheet, View } from "react-native";
import { Icon, Text, TouchableRipple } from "react-native-paper";

type FontSizeChoiceProps = {
  colors: GlobalContainerColors;
  isActive: boolean;
  option: FontSizeOption;
  onPress: () => void;
};

export function FontSizeChoice({
  colors,
  isActive,
  option,
  onPress,
}: FontSizeChoiceProps) {
  const previewSize =
    option.value === "compact" ? 20 : option.value === "large" ? 28 : 24;

  return (
    <TouchableRipple
      accessibilityRole="button"
      accessibilityState={{ selected: isActive }}
      borderless
      onPress={onPress}
      style={[
        styles.fontChoice,
        {
          backgroundColor: isActive ? colors.selected : colors.surface,
          borderColor: isActive ? colors.accent : colors.border,
        },
      ]}
    >
      <View style={styles.fontChoiceInner}>
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
          <Text
            style={[
              styles.fontPreview,
              { color: colors.ink, fontSize: previewSize },
            ]}
          >
            {option.preview}
          </Text>
        </View>

        <Text style={[styles.fontLabel, { color: colors.ink }]}>
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
  fontChoice: {
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    minHeight: 142,
    overflow: "hidden",
  },
  fontChoiceInner: {
    flex: 1,
    gap: 8,
    justifyContent: "space-between",
    padding: 12,
  },
  fontLabel: {
    fontSize: 15,
    fontWeight: "900",
  },
  fontPreview: {
    fontWeight: "900",
    lineHeight: 30,
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
