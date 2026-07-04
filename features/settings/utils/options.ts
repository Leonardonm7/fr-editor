import type {
  AppFontSizePreference,
  AppLanguagePreference,
  AppThemePreference,
} from "@/database/types";

export type ThemeOption = {
  caption: string;
  icon: string;
  label: string;
  value: AppThemePreference;
};

export type FontSizeOption = {
  caption: string;
  icon: string;
  label: string;
  preview: string;
  value: AppFontSizePreference;
};

export type LanguageOption = {
  caption: string;
  icon: string;
  label: string;
  value: AppLanguagePreference;
};

export const themeOptions: ThemeOption[] = [
  {
    caption: "Fundo claro, leitura alta",
    icon: "white-balance-sunny",
    label: "Claro",
    value: "light",
  },
  {
    caption: "Contraste alto, foco noturno",
    icon: "moon-waning-crescent",
    label: "Escuro",
    value: "dark",
  },
];

export const fontSizeOptions: FontSizeOption[] = [
  {
    caption: "Mais conteúdo na tela",
    icon: "format-font-size-decrease",
    label: "Pequena",
    preview: "Aa",
    value: "compact",
  },
  {
    caption: "Equilíbrio padrão",
    icon: "format-size",
    label: "Padrão",
    preview: "Aa",
    value: "default",
  },
  {
    caption: "Leitura mais confortável",
    icon: "format-font-size-increase",
    label: "Grande",
    preview: "Aa",
    value: "large",
  },
];

export const languageOptions: LanguageOption[] = [
  {
    caption: "Interface em português",
    icon: "translate",
    label: "Português",
    value: "pt-BR",
  },
  {
    caption: "Interface em inglês",
    icon: "translate",
    label: "Inglês",
    value: "en",
  },
];

export const getThemeOptions = (language: AppLanguagePreference) =>
  language === "en"
    ? ([
        {
          caption: "Bright background, high readability",
          icon: "white-balance-sunny",
          label: "Light",
          value: "light",
        },
        {
          caption: "High contrast, night focus",
          icon: "moon-waning-crescent",
          label: "Dark",
          value: "dark",
        },
      ] satisfies ThemeOption[])
    : themeOptions;

export const getFontSizeOptions = (language: AppLanguagePreference) =>
  language === "en"
    ? ([
        {
          caption: "More content on screen",
          icon: "format-font-size-decrease",
          label: "Small",
          preview: "Aa",
          value: "compact",
        },
        {
          caption: "Default balance",
          icon: "format-size",
          label: "Default",
          preview: "Aa",
          value: "default",
        },
        {
          caption: "More comfortable reading",
          icon: "format-font-size-increase",
          label: "Large",
          preview: "Aa",
          value: "large",
        },
      ] satisfies FontSizeOption[])
    : fontSizeOptions;

export const getLanguageOptions = (language: AppLanguagePreference) =>
  language === "en"
    ? ([
        {
          caption: "Interface in Portuguese",
          icon: "translate",
          label: "Portuguese",
          value: "pt-BR",
        },
        {
          caption: "Interface in English",
          icon: "translate",
          label: "English",
          value: "en",
        },
      ] satisfies LanguageOption[])
    : languageOptions;
