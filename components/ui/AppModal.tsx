import { useEffect, type ReactNode } from "react";
import {
  BackHandler,
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
  type StyleProp,
  type ViewStyle,
} from "react-native";
import { KeyboardAvoidingView } from "react-native-keyboard-controller";
import type { MD3Theme } from "react-native-paper";
import { Portal, useTheme } from "react-native-paper";
import Animated, {
  FadeIn,
  FadeOut,
  ZoomIn,
  ZoomOut,
} from "react-native-reanimated";

type AppModalProps = {
  visible: boolean;
  children: ReactNode;
  onDismiss: () => void;
  actions?: ReactNode;
  header?: ReactNode;
  keyboardAvoiding?: boolean;
  contentStyle?: StyleProp<ViewStyle>;
  scrollContentStyle?: StyleProp<ViewStyle>;
};

const getModalColors = (theme: MD3Theme) => ({
  accent: theme.colors.primary,
  border: theme.colors.outlineVariant,
  grid: theme.dark ? "rgba(244, 241, 232, 0.05)" : "rgba(18, 21, 17, 0.06)",
  panel: theme.colors.elevation.level1,
});

export function AppModal({
  visible,
  children,
  onDismiss,
  actions,
  header,
  keyboardAvoiding = false,
  contentStyle,
  scrollContentStyle,
}: AppModalProps) {
  const theme = useTheme();
  const colors = getModalColors(theme);

  useEffect(() => {
    if (visible) Keyboard.dismiss();
  }, [visible]);

  useEffect(() => {
    if (!visible) return;

    const subscription = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        onDismiss();
        return true;
      },
    );

    return () => subscription.remove();
  }, [onDismiss, visible]);

  if (!visible) return null;

  const modalContent = (
    <View
      style={[
        styles.content,
        {
          backgroundColor: colors.panel,
          borderColor: colors.border,
        },
        contentStyle,
      ]}
    >
      <View pointerEvents="none" style={styles.modalBackdrop}>
        <View
          style={[styles.gridLineVertical, { backgroundColor: colors.grid }]}
        />
        <View
          style={[styles.gridLineHorizontal, { backgroundColor: colors.grid }]}
        />
        <View
          style={[styles.diagonalPlate, { backgroundColor: colors.grid }]}
        />
      </View>

      <View style={[styles.topAccent, { backgroundColor: colors.accent }]} />

      {header}

      <ScrollView
        contentContainerStyle={[styles.scrollContent, scrollContentStyle]}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>

      {actions}
    </View>
  );

  return (
    <Portal>
      <Animated.View entering={FadeIn} exiting={FadeOut} style={styles.root}>
        <Pressable
          accessibilityLabel="Fechar modal"
          accessibilityRole="button"
          onPress={onDismiss}
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: theme.dark
                ? "rgba(0,0,0,0.78)"
                : "rgba(9,11,15,0.46)",
            },
          ]}
        />
        <Animated.View entering={ZoomIn} exiting={ZoomOut} style={styles.root}>
          {keyboardAvoiding ? (
            <KeyboardAvoidingView
              behavior="padding"
              pointerEvents="box-none"
              style={styles.container}
            >
              {modalContent}
            </KeyboardAvoidingView>
          ) : (
            <View pointerEvents="box-none" style={styles.container}>
              {modalContent}
            </View>
          )}
        </Animated.View>
      </Animated.View>
    </Portal>
  );
}

const styles = StyleSheet.create({
  content: {
    alignSelf: "center",
    borderRadius: 8,
    borderWidth: 1,
    maxHeight: "80%",
    maxWidth: 560,
    overflow: "hidden",
    width: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 18,
  },
  diagonalPlate: {
    height: 160,
    position: "absolute",
    right: -90,
    top: 10,
    transform: [{ rotate: "-24deg" }],
    width: 210,
  },
  gridLineHorizontal: {
    height: 1,
    left: 0,
    position: "absolute",
    right: 0,
    top: 96,
  },
  gridLineVertical: {
    bottom: 0,
    left: 22,
    position: "absolute",
    top: 0,
    width: 1,
  },
  modalBackdrop: {
    ...StyleSheet.absoluteFillObject,
  },
  topAccent: {
    height: 4,
  },
  root: {
    ...StyleSheet.absoluteFillObject,
  },
  scrollContent: {
    flexGrow: 0,
  },
});
