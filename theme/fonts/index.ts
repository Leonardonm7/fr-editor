import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { StyleSheet, type StyleProp, type TextStyle } from "react-native";

export const appFonts = {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
};

const fontFamiliesByWeight = {
  regular: "Inter_400Regular",
  medium: "Inter_500Medium",
  semiBold: "Inter_600SemiBold",
  bold: "Inter_700Bold",
} as const;

const numericFontWeight = (fontWeight: TextStyle["fontWeight"]) => {
  if (typeof fontWeight === "number") return fontWeight;
  if (!fontWeight || fontWeight === "normal") return 400;
  if (fontWeight === "bold") return 700;

  const parsed = Number(fontWeight);
  return Number.isFinite(parsed) ? parsed : 400;
};

export const getAppFontFamily = (fontWeight?: TextStyle["fontWeight"]) => {
  const weight = numericFontWeight(fontWeight);

  if (weight >= 800) return fontFamiliesByWeight.bold;
  if (weight >= 700) return fontFamiliesByWeight.semiBold;
  if (weight >= 600) return fontFamiliesByWeight.medium;
  return fontFamiliesByWeight.regular;
};

export const getAppFontStyle = (
  style?: StyleProp<TextStyle>,
  fontScale = 1,
): Pick<TextStyle, "fontFamily" | "fontSize" | "fontWeight" | "lineHeight"> => {
  const flattenedStyle = StyleSheet.flatten(style);
  const fontStyle: Pick<
    TextStyle,
    "fontFamily" | "fontSize" | "fontWeight" | "lineHeight"
  > = {};

  if (!flattenedStyle?.fontFamily) {
    fontStyle.fontFamily = getAppFontFamily(flattenedStyle?.fontWeight);
    fontStyle.fontWeight = "normal";
  }

  if (typeof flattenedStyle?.fontSize === "number") {
    fontStyle.fontSize = Math.round(flattenedStyle.fontSize * fontScale);
  }

  if (typeof flattenedStyle?.lineHeight === "number") {
    fontStyle.lineHeight = Math.round(flattenedStyle.lineHeight * fontScale);
  }

  return fontStyle;
};
