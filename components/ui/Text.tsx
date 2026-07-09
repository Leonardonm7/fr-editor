import { forwardRef, type ComponentProps } from "react";
import { Text as NativeText } from "react-native";
import { getAppFontStyle } from "@/theme/fonts";

export const Text = forwardRef<
  NativeText,
  ComponentProps<typeof NativeText> & { variant?: string }
>(({ variant: _variant, style, ...props }, ref) => {
  return (
    <NativeText ref={ref} style={[getAppFontStyle(style), style]} {...props} />
  );
});

Text.displayName = "Text";
