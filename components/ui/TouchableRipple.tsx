import {
  Animated,
  Platform,
  Pressable,
  StyleSheet,
  type ColorValue,
  type GestureResponderEvent,
  type PressableAndroidRippleConfig,
  type PressableStateCallbackType,
  type StyleProp,
  type ViewStyle,
} from "react-native";
import { useRef, type ComponentProps, type ReactNode } from "react";

import { useTheme } from "@/theme";

type TouchableRippleProps = Omit<
  ComponentProps<typeof Pressable>,
  "android_ripple" | "children" | "onLongPress" | "onPress" | "style"
> & {
  background?: PressableAndroidRippleConfig;
  borderless?: boolean;
  children: ReactNode | ((state: PressableStateCallbackType) => ReactNode);
  disabled?: boolean;
  onLongPress?: (event: GestureResponderEvent) => void;
  onPress?: (event: GestureResponderEvent) => void;
  rippleColor?: ColorValue;
  underlayColor?: string;
  style?:
    | StyleProp<ViewStyle>
    | ((state: PressableStateCallbackType) => StyleProp<ViewStyle>);
};

const hexToRgba = (hex: string, alpha: number) => {
  const normalizedHex = hex.replace("#", "");
  const value =
    normalizedHex.length === 3
      ? normalizedHex
          .split("")
          .map((char) => char + char)
          .join("")
      : normalizedHex;

  const red = parseInt(value.slice(0, 2), 16);
  const green = parseInt(value.slice(2, 4), 16);
  const blue = parseInt(value.slice(4, 6), 16);

  if ([red, green, blue].some(Number.isNaN)) {
    return `rgba(255, 255, 255, ${alpha})`;
  }

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
};

const getRippleColor = (
  colorValue: ColorValue | undefined,
  fallback: string,
) => {
  if (colorValue) return colorValue;

  return hexToRgba(fallback, 0.12);
};

const ANDROID_VERSION_LOLLIPOP = 21;
const ANDROID_VERSION_PIE = 28;

const supportsNativeRipple =
  Platform.OS === "android" &&
  Number(Platform.Version) >= ANDROID_VERSION_LOLLIPOP;

export const TouchableRipple = ({
  background,
  borderless = false,
  children,
  disabled: disabledProp,
  onLongPress,
  onPress,
  onPressIn,
  onPressOut,
  rippleColor,
  underlayColor,
  style,
  ...props
}: TouchableRippleProps) => {
  const theme = useTheme();
  const underlayOpacity = useRef(new Animated.Value(0)).current;
  const disabled =
    disabledProp || !(onPress || onLongPress || onPressIn || onPressOut);
  const calculatedRippleColor = getRippleColor(
    rippleColor,
    theme.colors.onSurface,
  );
  const calculatedUnderlayColor =
    underlayColor ?? String(calculatedRippleColor);
  const useForeground =
    Platform.OS === "android" &&
    Number(Platform.Version) >= ANDROID_VERSION_PIE &&
    borderless;
  const androidRipple =
    background ??
    ({
      borderless,
      color: calculatedRippleColor,
      foreground: useForeground,
    } satisfies PressableAndroidRippleConfig);
  const getResolvedStyle = (state: PressableStateCallbackType) => [
    borderless && styles.overflowHidden,
    typeof style === "function" ? style(state) : style,
    disabled && styles.disabled,
  ];
  const showUnderlay = () => {
    Animated.timing(underlayOpacity, {
      duration: 90,
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  const hideUnderlay = () => {
    Animated.timing(underlayOpacity, {
      duration: 180,
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  if (supportsNativeRipple) {
    return (
      <Pressable
        {...props}
        android_ripple={androidRipple}
        disabled={disabled}
        onLongPress={onLongPress}
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        style={getResolvedStyle}
      >
        {children}
      </Pressable>
    );
  }

  return (
    <Pressable
      {...props}
      disabled={disabled}
      onLongPress={onLongPress}
      onPress={onPress}
      onPressIn={(event) => {
        showUnderlay();
        onPressIn?.(event);
      }}
      onPressOut={(event) => {
        hideUnderlay();
        onPressOut?.(event);
      }}
      style={getResolvedStyle}
    >
      {(state) => (
        <>
          {typeof children === "function" ? children(state) : children}
          <Animated.View
            pointerEvents="none"
            style={[
              styles.underlay,
              {
                backgroundColor: calculatedUnderlayColor,
                opacity: underlayOpacity,
              },
            ]}
          />
        </>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  disabled: {
    opacity: 0.45,
  },
  overflowHidden: {
    overflow: "hidden",
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 2,
  },
});
