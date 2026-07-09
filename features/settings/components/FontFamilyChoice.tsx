import type { FontFamilyOption } from "@/features/settings/utils/options";
import type { GlobalContainerColors } from "@/components/ui/GlobalContainer";
import { StyleSheet, View } from "react-native";
import { Icon } from "@/components/ui/Icon";
import { Text } from "@/components/ui/Text";
import { TouchableRipple } from "@/components/ui/TouchableRipple";
import { getAppFontFamily } from "@/theme/fonts";

type FontFamilyChoiceProps = {
  colors: GlobalContainerColors;
  isActive: boolean;
  onPress: () => void;
  option: FontFamilyOption;
};

export const FontFamilyChoice = ({
  colors,
  isActive,
  onPress,
  option,
}: FontFamilyChoiceProps) => {
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

          {isActive && (
            <Icon color={colors.accent} size={22} source="check-circle" />
          )}
        </View>

        <Text
          style={[
            styles.fontPreview,
            {
              color: colors.ink,
              fontFamily: getAppFontFamily("700", option.value),
              fontWeight: "normal",
            },
          ]}
        >
          {option.preview}
        </Text>

        <View style={styles.textBlock}>
          <Text style={[styles.fontLabel, { color: colors.ink }]}>
            {option.label}
          </Text>
          <Text
            numberOfLines={2}
            style={[styles.optionCaption, { color: colors.muted }]}
          >
            {option.caption}
          </Text>
        </View>
      </View>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  choiceTop: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  fontChoice: {
    borderRadius: 8,
    borderWidth: 1,
    minHeight: 142,
    overflow: "hidden",
    width: 136,
  },
  fontChoiceInner: {
    flex: 1,
    gap: 10,
    justifyContent: "space-between",
    padding: 12,
  },
  fontLabel: {
    fontSize: 15,
    fontWeight: "900",
  },
  fontPreview: {
    fontSize: 24,
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
  textBlock: {
    gap: 2,
  },
});
