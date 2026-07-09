import { type AppTheme, useAppTheme } from "@/hooks/useAppTheme";

export type MD3Theme = AppTheme;

export const useTheme = () => {
  return useAppTheme().theme;
};
