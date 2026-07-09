import { forwardRef, type ComponentProps } from "react";
import { Text as NativeText } from "react-native";

export const Text = forwardRef<
  NativeText,
  ComponentProps<typeof NativeText> & { variant?: string }
>(({ variant: _variant, style, ...props }, ref) => {
  return <NativeText ref={ref} style={style} {...props} />;
});

Text.displayName = "Text";
