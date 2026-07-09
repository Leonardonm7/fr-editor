import { useEffect, type ReactNode } from "react";
import { StyleSheet, View } from "react-native";

import { Text } from "./Text";
import { useTheme } from "@/theme";

type SnackbarProps = {
  children?: ReactNode;
  duration?: number;
  onDismiss: () => void;
  visible: boolean;
};

export const Snackbar = ({
  children,
  duration,
  onDismiss,
  visible,
}: SnackbarProps) => {
  const theme = useTheme();

  useEffect(() => {
    if (!visible || !duration) return;

    const timeout = setTimeout(onDismiss, duration);
    return () => clearTimeout(timeout);
  }, [duration, onDismiss, visible]);

  if (!visible) return null;

  return (
    <View
      style={[
        styles.snackbar,
        { backgroundColor: theme.colors.elevation.level5 },
      ]}
    >
      <Text style={[styles.snackbarText, { color: theme.colors.onSurface }]}>
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  snackbar: {
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  snackbarText: {
    fontSize: 14,
    fontWeight: "700",
  },
});
