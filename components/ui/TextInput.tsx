import { useState, type ReactNode } from "react";
import {
  TextInput as NativeTextInput,
  Pressable,
  StyleSheet,
  View,
  type TextInputProps as NativeTextInputProps,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from "react-native";

import { Icon, type IconSource } from "./Icon";
import { Text } from "./Text";
import { getAppFontStyle } from "@/theme/fonts";
import { useAppTheme } from "@/hooks/useAppTheme";
import { useTheme } from "@/theme";

type TextInputAdornmentIconProps = {
  color?: string;
  icon: IconSource;
  onPress?: () => void;
  size?: number;
};

const TextInputIcon = ({
  color,
  icon,
  onPress,
  size = 20,
}: TextInputAdornmentIconProps) => {
  const theme = useTheme();
  const content = (
    <Icon
      source={icon}
      size={size}
      color={color ?? theme.colors.onSurfaceVariant}
    />
  );

  if (!onPress) return <View style={styles.inputAdornment}>{content}</View>;

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.inputAdornment,
        pressed && styles.pressed,
      ]}
    >
      {content}
    </Pressable>
  );
};

const TextInputAffix = ({ text }: { text: string }) => {
  const theme = useTheme();

  return (
    <Text style={[styles.inputAffix, { color: theme.colors.onSurfaceVariant }]}>
      {text}
    </Text>
  );
};

export type TextInputProps = Omit<NativeTextInputProps, "style"> & {
  activeOutlineColor?: string;
  activeUnderlineColor?: string;
  contentStyle?: StyleProp<TextStyle>;
  dense?: boolean;
  label?: ReactNode;
  left?: ReactNode;
  mode?: "flat" | "outlined";
  outlineColor?: string;
  outlineStyle?: StyleProp<ViewStyle>;
  right?: ReactNode;
  style?: StyleProp<ViewStyle>;
  underlineColor?: string;
};

const TextInputBase = ({
  activeOutlineColor,
  activeUnderlineColor,
  contentStyle,
  dense,
  editable,
  label,
  left,
  mode = "flat",
  multiline,
  outlineColor,
  outlineStyle,
  placeholderTextColor,
  right,
  style,
  underlineColor,
  ...props
}: TextInputProps) => {
  const { fontPreference, fontSizeScale, theme } = useAppTheme();
  const [focused, setFocused] = useState(false);
  const isOutlined = mode === "outlined";
  const isEditable = editable !== false;
  const activeColor =
    activeOutlineColor ?? activeUnderlineColor ?? theme.colors.primary;
  const passiveColor =
    outlineColor ?? underlineColor ?? theme.colors.outlineVariant;
  const borderColor = focused ? activeColor : passiveColor;
  const hasLabel = isOutlined && !!label;
  const shouldShowLabel = hasLabel;
  const resolvedPlaceholder = props.placeholder;
  const inputControlStyle = [
    styles.inputControl,
    isOutlined && !multiline && styles.inputControlOutlined,
    isOutlined && dense && !multiline && styles.inputControlOutlinedDense,
    !isOutlined && dense && styles.inputControlDense,
    multiline && styles.inputControlMultiline,
    contentStyle,
  ];

  return (
    <View
      style={[
        styles.inputFrame,
        isOutlined && !multiline && styles.inputFrameOutlined,
        isOutlined && multiline && styles.inputFrameOutlinedMultiline,
        !isOutlined && styles.inputFrameFlat,
        isOutlined && dense && !multiline && styles.inputFrameOutlinedDense,
        !isOutlined && dense && styles.inputFrameDense,
        multiline && styles.inputFrameMultiline,
        {
          backgroundColor: theme.colors.elevation.level2,
          borderColor: isOutlined ? "transparent" : borderColor,
        },
        style,
        !isEditable && styles.disabled,
      ]}
    >
      {isOutlined && (
        <View
          pointerEvents="none"
          style={[
            styles.outline,
            !shouldShowLabel && styles.outlineWithoutLabel,
            {
              backgroundColor: theme.colors.elevation.level2,
              borderColor,
              borderRadius: 12,
              borderWidth: 1,
            },
            outlineStyle,
            focused && {
              borderColor: activeColor,
              borderWidth: 2,
            },
          ]}
        />
      )}
      {shouldShowLabel && (
        <View
          pointerEvents="none"
          style={styles.inputLabelContainer}
        >
          <Text
            style={[
              styles.inputLabel,
              {
                backgroundColor: theme.colors.elevation.level2,
                color: focused ? activeColor : theme.colors.onSurfaceVariant,
              },
            ]}
            numberOfLines={1}
          >
            {label}
          </Text>
        </View>
      )}
      <View
        style={[
          styles.inputRow,
          !multiline && styles.inputRowSingleLine,
          multiline && styles.inputRowMultiline,
        ]}
      >
        {left}
        <NativeTextInput
          {...props}
          editable={editable}
          multiline={multiline}
          underlineColorAndroid="transparent"
          placeholder={resolvedPlaceholder}
          placeholderTextColor={
            placeholderTextColor ?? theme.colors.onSurfaceVariant
          }
          onBlur={(event) => {
            setFocused(false);
            props.onBlur?.(event);
          }}
          onFocus={(event) => {
            setFocused(true);
            props.onFocus?.(event);
          }}
          style={[
            inputControlStyle,
            { color: theme.colors.onSurface },
            getAppFontStyle(inputControlStyle, fontSizeScale, fontPreference),
          ]}
        />
        {right}
      </View>
    </View>
  );
};

export const TextInput = Object.assign(TextInputBase, {
  Affix: TextInputAffix,
  Icon: TextInputIcon,
});

const styles = StyleSheet.create({
  disabled: {
    opacity: 0.45,
  },
  inputAdornment: {
    alignItems: "center",
    borderRadius: 999,
    height: 40,
    justifyContent: "center",
    width: 40,
  },
  inputAffix: {
    fontSize: 13,
    fontWeight: "800",
    paddingHorizontal: 8,
  },
  inputControl: {
    flex: 1,
    fontSize: 15,
    includeFontPadding: false,
    lineHeight: 20,
    minHeight: 40,
    paddingHorizontal: 0,
    paddingVertical: 0,
    textAlignVertical: "center",
  },
  inputControlOutlined: {
    height: 56,
  },
  inputControlOutlinedDense: {
    height: 48,
  },
  inputControlDense: {
    height: 40,
    minHeight: 40,
  },
  inputControlMultiline: {
    includeFontPadding: true,
    lineHeight: undefined,
    minHeight: 72,
    paddingTop: 14,
    textAlignVertical: "top",
  },
  inputFrame: {
    backgroundColor: "transparent",
    justifyContent: "center",
    overflow: "visible",
  },
  inputFrameDense: {
    height: 40,
    minHeight: 40,
  },
  inputFrameFlat: {
    borderBottomWidth: 1,
  },
  inputFrameMultiline: {
    minHeight: 56,
  },
  inputFrameOutlined: {
    borderRadius: 12,
    height: 56,
    minHeight: 56,
  },
  inputFrameOutlinedMultiline: {
    borderRadius: 12,
    minHeight: 56,
  },
  inputFrameOutlinedDense: {
    height: 48,
    minHeight: 48,
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: "800",
    lineHeight: 16,
    paddingHorizontal: 5,
  },
  inputLabelContainer: {
    left: 11,
    maxWidth: "86%",
    position: "absolute",
    top: -1,
    zIndex: 2,
  },
  inputRow: {
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 8,
    paddingRight: 8,
  },
  inputRowMultiline: {
    alignItems: "flex-start",
    paddingTop: 8,
  },
  inputRowSingleLine: {
    height: "100%",
  },
  outline: {
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
    top: 6,
  },
  outlineWithoutLabel: {
    top: 0,
  },
  pressed: {
    opacity: 0.72,
  },
});
