import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";

import { useTheme } from "@/theme";

export type IconSource = string;

export const Icon = ({
  color,
  size = 24,
  source,
}: {
  color?: string;
  size?: number;
  source: IconSource;
}) => {
  const theme = useTheme();

  return (
    <MaterialDesignIcons
      name={source as never}
      size={size}
      color={color ?? theme.colors.onSurface}
    />
  );
};
