import { StyleSheet } from "react-native";

let currentFontSizeScale = 1;
let isFontSizeScalingInstalled = false;

const scaleFontMetric = (value: unknown) => {
  if (typeof value !== "number") return value;
  return Math.round(value * currentFontSizeScale);
};

export const installFontSizeScaling = () => {
  if (isFontSizeScalingInstalled) return;

  StyleSheet.setStyleAttributePreprocessor("fontSize", scaleFontMetric);
  StyleSheet.setStyleAttributePreprocessor("lineHeight", scaleFontMetric);
  isFontSizeScalingInstalled = true;
};

export const setCurrentFontSizeScale = (scale: number) => {
  currentFontSizeScale = scale;
};
