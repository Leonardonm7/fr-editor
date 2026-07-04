import type {
  AppFontSizePreference,
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
