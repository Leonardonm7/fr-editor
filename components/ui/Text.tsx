import { forwardRef, type ComponentProps } from "react";
import { Text as NativeText } from "react-native";
import { useAppTheme } from "@/hooks/useAppTheme";
import { getAppFontStyle } from "@/theme/fonts";

export const Text = forwardRef<
  NativeText,
  ComponentProps<typeof NativeText> & { variant?: string }
>(({ variant: _variant, style, ...props }, ref) => {
  const { fontPreference, fontSizeScale } = useAppTheme();

  return (
    <NativeText
      ref={ref}
      style={[style, getAppFontStyle(style, fontSizeScale, fontPreference)]}
      {...props}
    />
  );
});

Text.displayName = "Text";
