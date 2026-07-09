import type {
  AppFontPreference,
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

export type FontFamilyOption = {
  caption: string;
  icon: string;
  label: string;
  preview: string;
  value: AppFontPreference;
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

export const fontFamilyOptions: FontFamilyOption[] = [
  {
    caption: "Equilibrada e moderna",
    icon: "format-font",
    label: "Inter",
    preview: "Treino",
    value: "inter",
  },
  {
    caption: "Geométrica e forte",
    icon: "format-font",
    label: "Poppins",
    preview: "Treino",
    value: "poppins",
  },
  {
    caption: "Técnica e direta",
    icon: "format-font",
    label: "Barlow",
    preview: "Treino",
    value: "barlow",
  },
  {
    caption: "Esportiva e marcante",
    icon: "format-font",
    label: "Kanit",
    preview: "Treino",
    value: "kanit",
  },
  {
    caption: "Bem arredondada e cheia",
    icon: "format-font",
    label: "Fredoka One",
    preview: "Treino",
    value: "fredoka",
  },
  {
    caption: "Amigável e robusta",
    icon: "format-font",
    label: "Ubuntu",
    preview: "Treino",
    value: "ubuntu",
  },
  {
    caption: "Leve e clara",
    icon: "format-font",
    label: "Lato",
    preview: "Treino",
    value: "lato",
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

export const getFontFamilyOptions = (language: AppLanguagePreference) =>
  language === "en"
    ? ([
        {
          caption: "Balanced and modern",
          icon: "format-font",
          label: "Inter",
          preview: "Workout",
          value: "inter",
        },
        {
          caption: "Geometric and strong",
          icon: "format-font",
          label: "Poppins",
          preview: "Workout",
          value: "poppins",
        },
        {
          caption: "Technical and direct",
          icon: "format-font",
          label: "Barlow",
          preview: "Workout",
          value: "barlow",
        },
        {
          caption: "Sporty and expressive",
          icon: "format-font",
          label: "Kanit",
          preview: "Workout",
          value: "kanit",
        },
        {
          caption: "Very rounded and full",
          icon: "format-font",
          label: "Fredoka One",
          preview: "Workout",
          value: "fredoka",
        },
        {
          caption: "Friendly and sturdy",
          icon: "format-font",
          label: "Ubuntu",
          preview: "Workout",
          value: "ubuntu",
        },
        {
          caption: "Light and clear",
          icon: "format-font",
          label: "Lato",
          preview: "Workout",
          value: "lato",
        },
      ] satisfies FontFamilyOption[])
    : fontFamilyOptions;

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
