import {
  getFontPreference,
  getFontSizePreference,
  getLanguagePreference,
  getThemePreference,
  setFontPreference,
  setFontSizePreference,
  setLanguagePreference,
  setThemePreference,
} from "@/database/repositories/settingsRepository";
import {
  type AppFontPreference,
  type AppFontSizePreference,
  type AppLanguagePreference,
  type AppThemePreference,
} from "@/database/types";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type ThemeElevation = {
  level0: string;
  level1: string;
  level2: string;
  level3: string;
  level4: string;
  level5: string;
};

export type AppTheme = {
  dark: boolean;
  roundness: number;
  colors: {
    primary: string;
    onPrimary: string;
    primaryContainer: string;
    onPrimaryContainer: string;
    secondary: string;
    onSecondary: string;
    secondaryContainer: string;
    onSecondaryContainer: string;
    tertiary: string;
    onTertiary: string;
    tertiaryContainer: string;
    onTertiaryContainer: string;
    surface: string;
    onSurface: string;
    surfaceVariant: string;
    onSurfaceVariant: string;
    outline: string;
    outlineVariant: string;
    background: string;
    onBackground: string;
    error: string;
    onError: string;
    errorContainer: string;
    onErrorContainer: string;
    elevation: ThemeElevation;
  };
};

export type MD3Theme = AppTheme;

const fontSizeScales: Record<AppFontSizePreference, number> = {
  compact: 0.92,
  default: 1,
  large: 1.12,
};

export const darkTheme: AppTheme = {
  dark: true,
  roundness: 12,
  colors: {
    primary: "#E8400A",
    onPrimary: "#FFFFFF",
    primaryContainer: "#481300",
    onPrimaryContainer: "#FFDBCE",
    secondary: "#10B981",
    onSecondary: "#06150F",
    secondaryContainer: "#123A2D",
    onSecondaryContainer: "#A7F3D0",
    tertiary: "#D99B2B",
    onTertiary: "#161006",
    tertiaryContainer: "#3C2B12",
    onTertiaryContainer: "#FFE2A8",
    surface: "#171E28",
    onSurface: "#F4F1E8",
    surfaceVariant: "#202938",
    onSurfaceVariant: "#A7AFBA",
    outline: "#6F7885",
    outlineVariant: "#303744",
    background: "#090B0F",
    onBackground: "#F4F1E8",
    error: "#FFB4AB",
    onError: "#690005",
    errorContainer: "#93000A",
    onErrorContainer: "#FFDAD6",
    elevation: {
      level0: "#090B0F",
      level1: "#111720",
      level2: "#121821",
      level3: "#171E28",
      level4: "#202938",
      level5: "#263140",
    },
  },
};

export const lightTheme: AppTheme = {
  dark: false,
  roundness: 12,
  colors: {
    primary: "#C93508",
    onPrimary: "#FFFFFF",
    primaryContainer: "#FFDBCE",
    onPrimaryContainer: "#3A0D00",
    secondary: "#047857",
    onSecondary: "#FFFFFF",
    secondaryContainer: "#D9F3E6",
    onSecondaryContainer: "#063D2D",
    tertiary: "#9D6A10",
    onTertiary: "#FFFFFF",
    tertiaryContainer: "#F1DEB7",
    onTertiaryContainer: "#3E2700",
    surface: "#FFFFFF",
    onSurface: "#121511",
    surfaceVariant: "#E0E5DA",
    onSurfaceVariant: "#5E665C",
    outline: "#6F766D",
    outlineVariant: "#C7CEC1",
    background: "#EEF1EA",
    onBackground: "#121511",
    error: "#BA1A1A",
    onError: "#FFFFFF",
    errorContainer: "#FFDAD6",
    onErrorContainer: "#410002",
    elevation: {
      level0: "#EEF1EA",
      level1: "#FAFAF3",
      level2: "#FFFFFF",
      level3: "#E8EDE2",
      level4: "#DDE4D7",
      level5: "#D2DACB",
    },
  },
};

export type AppThemeContextValue = {
  fontPreference: AppFontPreference;
  fontSizePreference: AppFontSizePreference;
  fontSizeScale: number;
  languagePreference: AppLanguagePreference;
  preference: AppThemePreference;
  theme: AppTheme;
  isThemeLoading: boolean;
  statusBarStyle: "light" | "dark";
  setFontPreference: (value: AppFontPreference) => Promise<void>;
  setFontSizePreference: (value: AppFontSizePreference) => Promise<void>;
  setLanguagePreference: (value: AppLanguagePreference) => Promise<void>;
  setPreference: (value: AppThemePreference) => Promise<void>;
};

const AppThemeContext = createContext<AppThemeContextValue | null>(null);

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  const [preference, setThemeValue] = useState<AppThemePreference>("dark");
  const [fontPreferenceValue, setFontPreferenceValue] =
    useState<AppFontPreference>("inter");
  const [fontSizePreferenceValue, setFontSizePreferenceValue] =
    useState<AppFontSizePreference>("default");
  const [languagePreferenceValue, setLanguagePreferenceValue] =
    useState<AppLanguagePreference>("pt-BR");
  const [isThemeLoading, setIsThemeLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadPreference = async () => {
      try {
        const [
          savedPreference,
          savedFontPreference,
          savedFontSizePreference,
          savedLanguagePreference,
        ] = await Promise.all([
          getThemePreference(),
          getFontPreference(),
          getFontSizePreference(),
          getLanguagePreference(),
        ]);
        if (isMounted) {
          setThemeValue(savedPreference);
          setFontPreferenceValue(savedFontPreference);
          setFontSizePreferenceValue(savedFontSizePreference);
          setLanguagePreferenceValue(savedLanguagePreference);
        }
      } finally {
        if (isMounted) setIsThemeLoading(false);
      }
    };

    loadPreference();

    return () => {
      isMounted = false;
    };
  }, []);

  const setPreference = useCallback(async (value: AppThemePreference) => {
    setThemeValue(value);
    await setThemePreference(value);
  }, []);

  const setAppFontPreference = useCallback(
    async (value: AppFontPreference) => {
      setFontPreferenceValue(value);
      await setFontPreference(value);
    },
    [],
  );

  const setAppFontSizePreference = useCallback(
    async (value: AppFontSizePreference) => {
      setFontSizePreferenceValue(value);
      await setFontSizePreference(value);
    },
    [],
  );

  const setAppLanguagePreference = useCallback(
    async (value: AppLanguagePreference) => {
      setLanguagePreferenceValue(value);
      await setLanguagePreference(value);
    },
    [],
  );

  const baseTheme = preference === "light" ? lightTheme : darkTheme;
  const theme = useMemo(() => {
    return { ...baseTheme };
  }, [baseTheme]);
  const statusBarStyle: "light" | "dark" =
    preference === "light" ? "dark" : "light";

  const contextValue = useMemo(
    () => ({
      fontPreference: fontPreferenceValue,
      fontSizePreference: fontSizePreferenceValue,
      fontSizeScale: fontSizeScales[fontSizePreferenceValue],
      languagePreference: languagePreferenceValue,
      preference,
      theme,
      isThemeLoading,
      statusBarStyle,
      setFontPreference: setAppFontPreference,
      setFontSizePreference: setAppFontSizePreference,
      setLanguagePreference: setAppLanguagePreference,
      setPreference,
    }),
    [
      fontSizePreferenceValue,
      fontPreferenceValue,
      isThemeLoading,
      languagePreferenceValue,
      preference,
      setAppFontPreference,
      setAppFontSizePreference,
      setAppLanguagePreference,
      setPreference,
      statusBarStyle,
      theme,
    ],
  );

  return (
    <AppThemeContext.Provider value={contextValue}>
      {children}
    </AppThemeContext.Provider>
  );
};

export const useAppTheme = () => {
  const context = useContext(AppThemeContext);

  if (!context) {
    throw new Error("useAppTheme must be used within AppThemeProvider");
  }

  return context;
};
