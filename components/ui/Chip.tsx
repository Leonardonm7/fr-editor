import { type ComponentProps, type ReactNode } from "react";
import {
  StyleSheet,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from "react-native";

import { Text } from "./Text";
import { TouchableRipple } from "./TouchableRipple";
import { useTheme } from "./theme";

type ChipProps = Omit<
  ComponentProps<typeof TouchableRipple>,
  "children" | "onPress" | "style"
> & {
  children?: ReactNode;
  compact?: boolean;
  onPress?: () => void;
  selected?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export const Chip = ({
  children,
  compact,
  onPress,
  selected,
  style,
  textStyle,
  ...props
}: ChipProps) => {
  const theme = useTheme();

  return (
    <TouchableRipple
      {...props}
      accessibilityRole={props.accessibilityRole ?? "button"}
      accessibilityState={{ ...props.accessibilityState, selected }}
      borderless
      onPress={onPress}
      rippleColor={selected ? theme.colors.primary : theme.colors.primaryContainer}
      style={[
        styles.chip,
        compact && styles.chipCompact,
        {
          backgroundColor: selected
            ? theme.colors.primaryContainer
            : theme.colors.elevation.level2,
          borderColor: selected
            ? theme.colors.primary
            : theme.colors.outlineVariant,
        },
        style,
      ]}
    >
      <Text
        style={[
          styles.chipLabel,
          { color: selected ? theme.colors.primary : theme.colors.onSurface },
          textStyle,
        ]}
      >
        {children}
      </Text>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  chip: {
    alignItems: "center",
    borderRadius: 999,
    borderWidth: StyleSheet.hairlineWidth,
    justifyContent: "center",
    minHeight: 36,
    paddingHorizontal: 12,
  },
  chipCompact: {
    minHeight: 32,
    paddingHorizontal: 10,
  },
  chipLabel: {
    fontSize: 13,
    fontWeight: "800",
  },
});
