import type { GlobalContainerColors } from "@/components/ui/GlobalContainer";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Icon, Text, TouchableRipple } from "react-native-paper";
import Animated, {
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type HomeFabProps = {
  colors: GlobalContainerColors;
  onCreateManual: () => void;
};

export function HomeFab({ colors, onCreateManual }: HomeFabProps) {
  const [open, setOpen] = useState(false);
  const progress = useSharedValue(0);

  const plusStyle = useAnimatedStyle(() => ({
    opacity: 1 - progress.value,
    transform: [
      { rotate: `${progress.value * 135}deg` },
      { scale: 1 - progress.value * 0.16 },
    ],
  }));

  const closeStyle = useAnimatedStyle(() => ({
    opacity: progress.value,
    transform: [
      { rotate: `${(1 - progress.value) * -135}deg` },
      { scale: 0.72 + progress.value * 0.28 },
    ],
  }));

  const toggleOpen = () => {
    setOpen((current) => {
      const next = !current;
      progress.value = withTiming(next ? 1 : 0, { duration: 180 });
      return next;
    });
  };

  const handleCreateManual = () => {
    setOpen(false);
    progress.value = withTiming(0, { duration: 160 });
    onCreateManual();
  };

  return (
    <View style={styles.wrapper}>
      {open && (
        <Animated.View
          entering={FadeIn.duration(140)}
          exiting={FadeOut.duration(110)}
          style={styles.menu}
        >
          <HomeFabMenuItem
            colors={colors}
            icon="pencil-plus-outline"
            label="Criar treino"
            onPress={handleCreateManual}
          />
          <HomeFabMenuItem
            colors={colors}
            disabled
            icon="auto-fix"
            label="Criar para mim"
            meta="Em breve"
          />
        </Animated.View>
      )}

      <TouchableRipple
        borderless
        onPress={toggleOpen}
        style={[styles.fab, { backgroundColor: colors.accent }]}
      >
        <View style={styles.fabInner}>
          <Animated.View style={[styles.fabIconLayer, plusStyle]}>
            <Icon source="plus" size={29} color="#FFFFFF" />
          </Animated.View>
          <Animated.View style={[styles.fabIconLayer, closeStyle]}>
            <Icon source="close" size={29} color="#FFFFFF" />
          </Animated.View>
        </View>
      </TouchableRipple>
    </View>
  );
}

type HomeFabMenuItemProps = {
  colors: GlobalContainerColors;
  disabled?: boolean;
  icon: string;
  label: string;
  meta?: string;
  onPress?: () => void;
};

function HomeFabMenuItem({
  colors,
  disabled = false,
  icon,
  label,
  meta,
  onPress,
}: HomeFabMenuItemProps) {
  return (
    <TouchableRipple
      borderless
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.menuItem,
        {
          backgroundColor: colors.surface,
          borderColor: colors.border,
          opacity: disabled ? 0.72 : 1,
        },
      ]}
    >
      <View style={styles.menuItemInner}>
        <View
          style={[
            styles.menuIconBox,
            {
              backgroundColor: disabled ? colors.thumb : colors.selected,
              borderColor: disabled ? colors.border : colors.accent,
            },
          ]}
        >
          <Icon
            source={icon}
            size={18}
            color={disabled ? colors.muted : colors.accent}
          />
        </View>

        <View style={styles.menuTextBlock}>
          <Text
            numberOfLines={1}
            style={[styles.menuLabel, { color: colors.ink }]}
          >
            {label}
          </Text>
          {!!meta && (
            <Text
              numberOfLines={1}
              style={[styles.menuMeta, { color: colors.muted }]}
            >
              {meta}
            </Text>
          )}
        </View>
      </View>
    </TouchableRipple>
  );
}

const styles = StyleSheet.create({
  fab: {
    borderRadius: 8,
    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.12)",
    height: 58,
    overflow: "hidden",
    width: 58,
  },
  fabInner: {
    alignItems: "center",
    height: 58,
    justifyContent: "center",
    width: 58,
  },
  fabIconLayer: {
    alignItems: "center",
    height: 58,
    justifyContent: "center",
    left: 0,
    position: "absolute",
    top: 0,
    width: 58,
  },
  menu: {
    alignItems: "flex-end",
    bottom: 70,
    gap: 10,
    position: "absolute",
    right: 0,
  },
  menuIconBox: {
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    height: 34,
    justifyContent: "center",
    width: 34,
  },
  menuItem: {
    borderRadius: 8,
    borderWidth: 1,
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.12)",
    minWidth: 188,
    overflow: "hidden",
  },
  menuItemInner: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  menuLabel: {
    fontSize: 13,
    fontWeight: "900",
  },
  menuMeta: {
    fontSize: 11,
    fontWeight: "800",
  },
  menuTextBlock: {
    flex: 1,
    gap: 1,
    minWidth: 0,
  },
  wrapper: {
    alignItems: "flex-end",
  },
});
