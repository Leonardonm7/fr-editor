import { Text } from "@/components/ui/Text";
import { TouchableRipple } from "@/components/ui/TouchableRipple";
import type { MD3Theme } from "@/theme";
import { useTheme } from "@/theme";
import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const TAB_BAR_HEIGHT = 82;
const TAB_ANIMATION_DURATION = 460;
const AnimatedText = Animated.createAnimatedComponent(Text);

const tabIcons: Record<
  string,
  React.ComponentProps<typeof MaterialDesignIcons>["name"]
> = {
  home: "dumbbell",
  settings: "theme-light-dark",
};

type TabBarColors = ReturnType<typeof getTabBarColors>;

const getTabBarColors = (theme: MD3Theme) => ({
  accent: theme.colors.primary,
  background: theme.dark ? "#090B0F" : "#EEF1EA",
  border: theme.dark ? "#303744" : "#C7CEC1",
  dock: theme.dark ? "#111720" : "#FAFAF3",
  ink: theme.dark ? "#F4F1E8" : "#121511",
  muted: theme.dark ? "#8D96A5" : "#646B61",
  rail: theme.dark ? "rgba(244, 241, 232, 0.05)" : "rgba(18, 21, 17, 0.06)",
  selected: theme.dark ? "#481300" : "#FFDBCE",
});

type AnimatedTabItemProps = {
  colors: TabBarColors;
  focused: boolean;
  iconName: React.ComponentProps<typeof MaterialDesignIcons>["name"];
  index: number;
  label: string | undefined;
  onLongPress: () => void;
  onPress: () => void;
  tabBarAccessibilityLabel: string | undefined;
  tabBarButtonTestID: string | undefined;
};

const AnimatedTabItem = ({
  colors,
  focused,
  iconName,
  index,
  label,
  onLongPress,
  onPress,
  tabBarAccessibilityLabel,
  tabBarButtonTestID,
}: AnimatedTabItemProps) => {
  const progress = useSharedValue(focused ? 1 : 0);
  const targetProgress = useSharedValue(focused ? 1 : 0);

  useEffect(() => {
    targetProgress.value = focused ? 1 : 0;
    progress.value = withTiming(focused ? 1 : 0, {
      duration: TAB_ANIMATION_DURATION,
      easing: Easing.bezier(0.2, 0, 0, 1),
    });
  }, [focused, progress, targetProgress]);

  const activePlateStyle = useAnimatedStyle(() => ({
    opacity: progress.value,
    transform: [
      { translateY: 9 - progress.value * 9 },
      { scaleX: 0.82 + progress.value * 0.18 },
    ],
  }));

  const iconLiftStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: -3 * progress.value },
      { scale: 1 + progress.value * 0.08 },
    ],
  }));

  const labelMotionStyle = useAnimatedStyle(() => ({
    opacity: 0.68 + progress.value * 0.32,
  }));

  return (
    <TouchableRipple
      accessibilityLabel={tabBarAccessibilityLabel}
      accessibilityRole="button"
      accessibilityState={focused ? { selected: true } : {}}
      rippleColor="transparent"
      onLongPress={onLongPress}
      onPress={onPress}
      style={({ pressed }) => [
        styles.tabItem,
        pressed && { opacity: 0.76, transform: [{ scale: 0.98 }] },
      ]}
      testID={tabBarButtonTestID}
    >
      <View style={styles.tabItemShell}>
        <Animated.View
          pointerEvents="none"
          style={[
            styles.activePlate,
            { backgroundColor: colors.selected, borderColor: colors.accent },
            activePlateStyle,
          ]}
        />
        <View style={styles.tabUpperRow}>
          <Text
            style={[
              styles.tabIndex,
              { color: focused ? colors.accent : colors.muted },
            ]}
          >
            {String(index + 1).padStart(2, "0")}
          </Text>
          <Animated.View style={iconLiftStyle}>
            <MaterialDesignIcons
              color={focused ? colors.ink : colors.muted}
              name={iconName}
              size={24}
            />
          </Animated.View>
        </View>

        <AnimatedText
          numberOfLines={1}
          style={[
            styles.tabLabel,
            { color: focused ? colors.ink : colors.muted },
            labelMotionStyle,
          ]}
        >
          {label}
        </AnimatedText>
      </View>
    </TouchableRipple>
  );
};

export const AppTabBar = ({
  descriptors,
  insets,
  navigation,
  state,
}: BottomTabBarProps) => {
  const theme = useTheme();
  const colors = getTabBarColors(theme);
  const bottomPadding = Math.max(insets.bottom, 10);

  return (
    <View
      style={[
        styles.tabBarFrame,
        {
          backgroundColor: colors.background,
          height: TAB_BAR_HEIGHT + bottomPadding,
          paddingBottom: bottomPadding,
        },
      ]}
    >
      <View style={[styles.topRail, { backgroundColor: colors.rail }]} />
      <View
        style={[
          styles.tabDock,
          {
            backgroundColor: colors.dock,
            borderColor: colors.border,
          },
        ]}
      >
        <View style={[styles.dockSignal, { backgroundColor: colors.accent }]} />
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const focused = state.index === index;
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const onPress = () => {
            const event = navigation.emit({
              canPreventDefault: true,
              target: route.key,
              type: "tabPress",
            });

            if (!focused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              target: route.key,
              type: "tabLongPress",
            });
          };

          return (
            <AnimatedTabItem
              colors={colors}
              focused={focused}
              iconName={tabIcons[route.name] ?? "circle-outline"}
              index={index}
              key={route.key}
              label={typeof label === "string" ? label : options.title}
              onLongPress={onLongPress}
              onPress={onPress}
              tabBarAccessibilityLabel={options.tabBarAccessibilityLabel}
              tabBarButtonTestID={options.tabBarButtonTestID}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  activePlate: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 8,
    borderWidth: 1,
  },
  dockSignal: {
    bottom: 12,
    left: 12,
    position: "absolute",
    top: 12,
    width: 4,
  },
  tabBarFrame: {
    borderTopWidth: 0,
    justifyContent: "center",
    paddingHorizontal: 14,
    paddingTop: 10,
  },
  tabDock: {
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    elevation: 2,
    flex: 1,
    flexDirection: "row",
    overflow: "hidden",
    paddingLeft: 16,
    paddingRight: 6,
    paddingVertical: 7,
  },
  tabIndex: {
    fontSize: 10,
    fontWeight: "900",
    minWidth: 18,
    textAlign: "left",
  },
  tabItem: {
    alignItems: "center",
    flex: 1,
    height: "100%",
    justifyContent: "center",
  },
  tabItemShell: {
    alignItems: "center",
    flex: 1,
    gap: 4,
    height: 58,
    justifyContent: "center",
    paddingHorizontal: 8,
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: "900",
    includeFontPadding: false,
    maxWidth: "100%",
    textTransform: "uppercase",
  },
  tabUpperRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
  },
  topRail: {
    height: 1,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },
});
