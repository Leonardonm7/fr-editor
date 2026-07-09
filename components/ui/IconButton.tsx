import { StyleSheet, type StyleProp, type ViewStyle } from "react-native";
import { type ComponentProps } from "react";

import { Icon, type IconSource } from "./Icon";
import { TouchableRipple } from "./TouchableRipple";
import { useTheme } from "./theme";

type IconButtonProps = Omit<
  ComponentProps<typeof TouchableRipple>,
  "children" | "onPress" | "style"
> & {
  disabled?: boolean;
  icon: IconSource;
  iconColor?: string;
  onPress?: () => void;
  size?: number;
  style?: StyleProp<ViewStyle>;
};

export const IconButton = ({
  disabled,
  icon,
  iconColor,
  onPress,
  size = 24,
  style,
  ...props
}: IconButtonProps) => {
  const theme = useTheme();

  return (
    <TouchableRipple
      {...props}
      accessibilityRole={props.accessibilityRole ?? "button"}
      borderless
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.iconButton,
        style,
        disabled && styles.disabled,
      ]}
    >
      <Icon
        source={icon}
        size={size}
        color={iconColor ?? theme.colors.onSurfaceVariant}
      />
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  disabled: {
    opacity: 0.45,
  },
  iconButton: {
    alignItems: "center",
    borderRadius: 999,
    height: 40,
    justifyContent: "center",
    width: 40,
  },
});
