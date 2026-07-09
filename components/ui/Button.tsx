import { type ComponentProps, type ReactNode } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  View,
  type StyleProp,
  type ViewStyle,
} from "react-native";

import { Icon, type IconSource } from "./Icon";
import { Text } from "./Text";
import { TouchableRipple } from "./TouchableRipple";
import { useTheme } from "./theme";

type ButtonProps = Omit<
  ComponentProps<typeof TouchableRipple>,
  "children" | "onPress" | "style"
> & {
  children?: ReactNode;
  compact?: boolean;
  contentStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  icon?: IconSource;
  loading?: boolean;
  mode?: "text" | "contained" | "outlined";
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

export const Button = ({
  children,
  compact,
  contentStyle,
  disabled,
  icon,
  loading,
  mode = "text",
  onPress,
  style,
  ...props
}: ButtonProps) => {
  const theme = useTheme();
  const isContained = mode === "contained";
  const isOutlined = mode === "outlined";
  const foreground = isContained ? theme.colors.onPrimary : theme.colors.primary;

  return (
    <TouchableRipple
      {...props}
      accessibilityRole={props.accessibilityRole ?? "button"}
      disabled={disabled || loading}
      onPress={onPress}
      rippleColor={
        isContained ? theme.colors.onPrimary : theme.colors.primaryContainer
      }
      style={[
        styles.button,
        compact && styles.buttonCompact,
        isContained && { backgroundColor: theme.colors.primary },
        isOutlined && {
          borderColor: theme.colors.outlineVariant,
          borderWidth: StyleSheet.hairlineWidth,
        },
        style,
        (disabled || loading) && styles.disabled,
      ]}
    >
      <View style={[styles.buttonContent, contentStyle]}>
        {loading ? (
          <ActivityIndicator size="small" color={foreground} />
        ) : icon ? (
          <Icon source={icon} size={17} color={foreground} />
        ) : null}
        <Text style={[styles.buttonLabel, { color: foreground }]}>
          {children}
        </Text>
      </View>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    minHeight: 40,
    paddingHorizontal: 12,
  },
  buttonCompact: {
    minHeight: 34,
    paddingHorizontal: 8,
  },
  buttonContent: {
    alignItems: "center",
    flexDirection: "row",
    gap: 6,
    justifyContent: "center",
    minHeight: 40,
  },
  buttonLabel: {
    fontSize: 14,
    fontWeight: "800",
  },
  disabled: {
    opacity: 0.45,
  },
});
