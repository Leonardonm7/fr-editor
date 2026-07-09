import { StyleSheet, type StyleProp, type TextStyle } from "react-native";
import type { AppFontPreference } from "@/database/types";

export const appFonts = {
  Barlow_400Regular: require("@/assets/fonts/Barlow_400Regular.ttf"),
  Barlow_500Medium: require("@/assets/fonts/Barlow_500Medium.ttf"),
  Barlow_600SemiBold: require("@/assets/fonts/Barlow_600SemiBold.ttf"),
  Barlow_700Bold: require("@/assets/fonts/Barlow_700Bold.ttf"),
  FredokaOne_400Regular: require("@/assets/fonts/FredokaOne_400Regular.ttf"),
  FredokaOne_500Medium: require("@/assets/fonts/FredokaOne_500Medium.ttf"),
  FredokaOne_600SemiBold: require("@/assets/fonts/FredokaOne_600SemiBold.ttf"),
  FredokaOne_700Bold: require("@/assets/fonts/FredokaOne_700Bold.ttf"),
  Inter_400Regular: require("@/assets/fonts/Inter_400Regular.ttf"),
  Inter_500Medium: require("@/assets/fonts/Inter_500Medium.ttf"),
  Inter_600SemiBold: require("@/assets/fonts/Inter_600SemiBold.ttf"),
  Inter_700Bold: require("@/assets/fonts/Inter_700Bold.ttf"),
  Kanit_400Regular: require("@/assets/fonts/Kanit_400Regular.ttf"),
  Kanit_500Medium: require("@/assets/fonts/Kanit_500Medium.ttf"),
  Kanit_600SemiBold: require("@/assets/fonts/Kanit_600SemiBold.ttf"),
  Kanit_700Bold: require("@/assets/fonts/Kanit_700Bold.ttf"),
  Lato_400Regular: require("@/assets/fonts/Lato_400Regular.ttf"),
  Lato_500Medium: require("@/assets/fonts/Lato_500Medium.ttf"),
  Lato_600SemiBold: require("@/assets/fonts/Lato_600SemiBold.ttf"),
  Lato_700Bold: require("@/assets/fonts/Lato_700Bold.ttf"),
  Poppins_400Regular: require("@/assets/fonts/Poppins_400Regular.ttf"),
  Poppins_500Medium: require("@/assets/fonts/Poppins_500Medium.ttf"),
  Poppins_600SemiBold: require("@/assets/fonts/Poppins_600SemiBold.ttf"),
  Poppins_700Bold: require("@/assets/fonts/Poppins_700Bold.ttf"),
  Ubuntu_400Regular: require("@/assets/fonts/Ubuntu_400Regular.ttf"),
  Ubuntu_500Medium: require("@/assets/fonts/Ubuntu_500Medium.ttf"),
  Ubuntu_600SemiBold: require("@/assets/fonts/Ubuntu_600SemiBold.ttf"),
  Ubuntu_700Bold: require("@/assets/fonts/Ubuntu_700Bold.ttf"),
};

const fontFamiliesByPreference = {
  barlow: {
    regular: "Barlow_400Regular",
    medium: "Barlow_500Medium",
    semiBold: "Barlow_600SemiBold",
    bold: "Barlow_700Bold",
  },
  fredoka: {
    regular: "FredokaOne_400Regular",
    medium: "FredokaOne_500Medium",
    semiBold: "FredokaOne_600SemiBold",
    bold: "FredokaOne_700Bold",
  },
  inter: {
    regular: "Inter_400Regular",
    medium: "Inter_500Medium",
    semiBold: "Inter_600SemiBold",
    bold: "Inter_700Bold",
  },
  kanit: {
    regular: "Kanit_400Regular",
    medium: "Kanit_500Medium",
    semiBold: "Kanit_600SemiBold",
    bold: "Kanit_700Bold",
  },
  lato: {
    regular: "Lato_400Regular",
    medium: "Lato_500Medium",
    semiBold: "Lato_600SemiBold",
    bold: "Lato_700Bold",
  },
  poppins: {
    regular: "Poppins_400Regular",
    medium: "Poppins_500Medium",
    semiBold: "Poppins_600SemiBold",
    bold: "Poppins_700Bold",
  },
  ubuntu: {
    regular: "Ubuntu_400Regular",
    medium: "Ubuntu_500Medium",
    semiBold: "Ubuntu_600SemiBold",
    bold: "Ubuntu_700Bold",
  },
} as const;

const numericFontWeight = (fontWeight: TextStyle["fontWeight"] | number) => {
  if (typeof fontWeight === "number") return fontWeight;
  if (!fontWeight || fontWeight === "normal") return 400;
  if (fontWeight === "bold") return 700;

  const parsed = Number(fontWeight);
  return Number.isFinite(parsed) ? parsed : 400;
};

export const getAppFontFamily = (
  fontWeight?: TextStyle["fontWeight"] | number,
  fontPreference: AppFontPreference = "inter",
) => {
  const weight = numericFontWeight(fontWeight);
  const fontFamilies = fontFamiliesByPreference[fontPreference];

  if (weight >= 800) return fontFamilies.bold;
  if (weight >= 700) return fontFamilies.semiBold;
  if (weight >= 600) return fontFamilies.medium;
  return fontFamilies.regular;
};

export const getAppFontStyle = (
  style?: StyleProp<TextStyle>,
  fontScale = 1,
  fontPreference: AppFontPreference = "inter",
): Pick<TextStyle, "fontFamily" | "fontSize" | "fontWeight" | "lineHeight"> => {
  const flattenedStyle = StyleSheet.flatten(style);
  const fontStyle: Pick<
    TextStyle,
    "fontFamily" | "fontSize" | "fontWeight" | "lineHeight"
  > = {};

  if (!flattenedStyle?.fontFamily) {
    fontStyle.fontFamily = getAppFontFamily(
      flattenedStyle?.fontWeight,
      fontPreference,
    );
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
