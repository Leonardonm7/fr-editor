import {
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import { StyleSheet, type StyleProp, type TextStyle } from "react-native";

export const appFonts = {
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
};

const fontFamiliesByWeight = {
  regular: "Inter_400Regular",
  semiBold: "Inter_600SemiBold",
  bold: "Inter_700Bold",
  extraBold: "Inter_800ExtraBold",
  black: "Inter_900Black",
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

  if (weight >= 900) return fontFamiliesByWeight.black;
  if (weight >= 800) return fontFamiliesByWeight.extraBold;
  if (weight >= 700) return fontFamiliesByWeight.bold;
  if (weight >= 600) return fontFamiliesByWeight.semiBold;
  return fontFamiliesByWeight.regular;
};

export const getAppFontStyle = (
  style?: StyleProp<TextStyle>,
): Pick<TextStyle, "fontFamily"> => {
  const flattenedStyle = StyleSheet.flatten(style);
  if (flattenedStyle?.fontFamily) return {};

  return {
    fontFamily: getAppFontFamily(flattenedStyle?.fontWeight),
  };
};
