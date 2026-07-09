import { useEffect, useState, type ReactNode } from "react";
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  View,
  type ScrollViewProps,
  type StyleProp,
  type ViewStyle,
} from "react-native";
import { KeyboardAvoidingView } from "react-native-keyboard-controller";
import type { MD3Theme } from "@/theme";
import { useTheme } from "@/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export type GlobalContainerColors = ReturnType<typeof getGlobalContainerColors>;

type GlobalContainerProps = {
  applyBottomInset?: boolean;
  bottomInsetColor?: string;
  bottomOverlay?: ReactNode;
  bottomOverlayBottomOffset?: number;
  bottomOverlayStyle?: StyleProp<ViewStyle>;
  children: ReactNode;
  colors?: GlobalContainerColors;
  contentContainerStyle?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  floating?: ReactNode;
  floatingBottomOffset?: number;
  floatingRightOffset?: number;
  header?: ReactNode;
  headerStyle?: StyleProp<ViewStyle>;
  headerTopPadding?: number;
  keyboardAvoiding?: boolean;
  scroll?: boolean;
  scrollStyle?: StyleProp<ViewStyle>;
  scrollViewProps?: Omit<
    ScrollViewProps,
    "children" | "contentContainerStyle" | "style"
  >;
  style?: StyleProp<ViewStyle>;
  withBackdrop?: boolean;
};

export const getGlobalContainerColors = (theme: MD3Theme) => ({
  accent: theme.colors.primary,
  background: theme.dark ? "#090B0F" : "#EEF1EA",
  border: theme.dark ? "#303744" : "#C7CEC1",
  danger: theme.colors.error,
  grid: theme.dark ? "rgba(244, 241, 232, 0.05)" : "rgba(18, 21, 17, 0.06)",
  ink: theme.dark ? "#F4F1E8" : "#121511",
  muted: theme.dark ? "#A7AFBA" : "#5E665C",
  panel: theme.dark ? "#121821" : "#FAFAF3",
  selected: theme.dark ? "#481300" : "#FFDBCE",
  selectedText: theme.colors.onPrimaryContainer,
  surface: theme.dark ? "#171E28" : "#FFFFFF",
  thumb: theme.dark ? "#202938" : "#E0E5DA",
});

export const GlobalContainer = ({
  applyBottomInset = true,
  bottomInsetColor,
  bottomOverlay,
  bottomOverlayBottomOffset = 0,
  bottomOverlayStyle,
  children,
  colors,
  contentContainerStyle,
  contentStyle,
  floating,
  floatingBottomOffset = 0,
  floatingRightOffset = 18,
  header,
  headerStyle,
  headerTopPadding = 10,
  keyboardAvoiding = false,
  scroll = false,
  scrollStyle,
  scrollViewProps,
  style,
  withBackdrop = true,
}: GlobalContainerProps) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const resolvedColors = colors ?? getGlobalContainerColors(theme);
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const showSub = Keyboard.addListener("keyboardDidShow", () =>
      setKeyboardVisible(true),
    );
    const hideSub = Keyboard.addListener("keyboardDidHide", () =>
      setKeyboardVisible(false),
    );

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  const content = scroll ? (
    <ScrollView
      {...scrollViewProps}
      contentContainerStyle={[styles.content, contentContainerStyle]}
      style={[styles.flex, scrollStyle]}
    >
      {children}
    </ScrollView>
  ) : (
    <View style={[styles.flex, contentStyle]}>{children}</View>
  );

  const container = (
    <View
      style={[
        styles.container,
        {
          backgroundColor: resolvedColors.background,
          paddingBottom: keyboardVisible || !applyBottomInset ? 0 : insets.bottom,
        },
        style,
      ]}
    >
      {withBackdrop && <GlobalContainerBackdrop colors={resolvedColors} />}

      {header && (
        <View
          style={[
            styles.header,
            {
              borderBottomColor: resolvedColors.border,
              paddingTop: insets.top + headerTopPadding,
            },
            headerStyle,
          ]}
        >
          {header}
        </View>
      )}

      {content}
      {bottomOverlay && (
        <View
          style={[
            styles.bottomOverlay,
            {
              backgroundColor: resolvedColors.panel,
              paddingBottom: bottomOverlayBottomOffset,
            },
            bottomOverlayStyle,
          ]}
        >
          {bottomOverlay}
        </View>
      )}
      {floating && (
        <View
          pointerEvents="box-none"
          style={[
            styles.floating,
            { bottom: floatingBottomOffset, right: floatingRightOffset },
          ]}
        >
          {floating}
        </View>
      )}
      {applyBottomInset && !keyboardVisible && insets.bottom > 0 && (
        <View
          pointerEvents="none"
          style={[
            styles.bottomInsetFill,
            {
              backgroundColor: bottomInsetColor ?? resolvedColors.background,
              height: insets.bottom,
            },
          ]}
        />
      )}
    </View>
  );

  if (!keyboardAvoiding) return container;

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.flex}>
      {container}
    </KeyboardAvoidingView>
  );
};

type GlobalContainerBackdropProps = {
  colors: GlobalContainerColors;
};

const GlobalContainerBackdrop = ({ colors }: GlobalContainerBackdropProps) => {
  return (
    <View pointerEvents="none" style={styles.backdrop}>
      <View
        style={[styles.gridLineVertical, { backgroundColor: colors.grid }]}
      />
      <View
        style={[styles.gridLineVerticalAlt, { backgroundColor: colors.grid }]}
      />
      <View
        style={[styles.gridLineHorizontal, { backgroundColor: colors.grid }]}
      />
      <View style={[styles.diagonalBlock, { backgroundColor: colors.grid }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    overflow: "hidden",
  },
  container: {
    flex: 1,
  },
  bottomOverlay: {
    width: "100%",
  },
  bottomInsetFill: {
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
  },
  content: {
    gap: 16,
    paddingBottom: 16,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  diagonalBlock: {
    height: 260,
    position: "absolute",
    right: -150,
    top: 42,
    transform: [{ rotate: "-24deg" }],
    width: 300,
  },
  flex: {
    flex: 1,
  },
  floating: {
    position: "absolute",
  },
  gridLineHorizontal: {
    height: 1,
    left: 0,
    position: "absolute",
    right: 0,
    top: 204,
  },
  gridLineVertical: {
    bottom: 0,
    left: 24,
    position: "absolute",
    top: 0,
    width: 1,
  },
  gridLineVerticalAlt: {
    bottom: 0,
    position: "absolute",
    right: 28,
    top: 0,
    width: 1,
  },
  header: {
    borderBottomWidth: 1,
    paddingBottom: 12,
    paddingHorizontal: 18,
  },
});
