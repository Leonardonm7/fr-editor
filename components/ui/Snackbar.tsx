import { useEffect, type ReactNode } from "react";
import { StyleSheet, View } from "react-native";

import { Icon } from "@/components/ui/Icon";
import { useTheme } from "@/theme";
import Animated, { FadeInDown, FadeOutUp } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Portal } from "./Portal";
import { Text } from "./Text";

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
  const { top } = useSafeAreaInsets();
  useEffect(() => {
    if (!visible || !duration) return;

    const timeout = setTimeout(onDismiss, duration);
    return () => clearTimeout(timeout);
  }, [duration, onDismiss, visible]);

  if (!visible) return null;

  return (
    <Portal>
      <Animated.View
        accessibilityLiveRegion="polite"
        accessibilityRole="alert"
        entering={FadeInDown.duration(220)}
        exiting={FadeOutUp.duration(160)}
        style={[
          styles.snackbar,
          {
            backgroundColor: theme.colors.elevation.level1,
            borderColor: theme.colors.outlineVariant,
            shadowColor: theme.colors.background,
            top: top + 12,
          },
        ]}
      >
        <View
          pointerEvents="none"
          style={[styles.accentRail, { backgroundColor: theme.colors.primary }]}
        />

        <View
          style={[
            styles.iconFrame,
            {
              backgroundColor: theme.colors.primaryContainer,
              borderColor: theme.colors.primary,
            },
          ]}
        >
          <Icon
            source="information-outline"
            size={20}
            color={theme.colors.primary}
          />
        </View>

        <Text style={[styles.snackbarText, { color: theme.colors.onSurface }]}>
          {children}
        </Text>
      </Animated.View>
    </Portal>
  );
};

const styles = StyleSheet.create({
  accentRail: {
    alignSelf: "stretch",
    width: 4,
  },
  iconFrame: {
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    height: 38,
    justifyContent: "center",
    marginLeft: 12,
    width: 38,
  },
  snackbar: {
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    elevation: 8,
    flexDirection: "row",
    left: 14,
    minHeight: 64,
    overflow: "hidden",
    paddingRight: 16,
    position: "absolute",
    right: 14,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.28,
    shadowRadius: 12,
  },
  snackbarText: {
    flex: 1,
    fontSize: 14,
    fontWeight: "800",
    lineHeight: 20,
    paddingHorizontal: 12,
    paddingVertical: 13,
  },
});
