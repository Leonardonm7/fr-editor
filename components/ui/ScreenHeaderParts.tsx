import type { ReactNode } from "react";
import { StyleSheet, View, type StyleProp, type ViewStyle } from "react-native";
import { IconButton } from "@/components/ui/IconButton";
import { Text } from "@/components/ui/Text";
import type { GlobalContainerColors } from "./GlobalContainer";

type HeaderSignalPlateProps = {
  background?: string;
  colors: GlobalContainerColors;
  label: string;
  style?: StyleProp<ViewStyle>;
};

export const HeaderSignalPlate = ({
  background,
  colors,
  label,
  style,
}: HeaderSignalPlateProps) => {
  return (
    <View
      style={[
        styles.signalPlate,
        {
          backgroundColor: background,
          borderColor: colors.border,
        },
        style,
      ]}
    >
      <View style={[styles.signalMark, { backgroundColor: colors.accent }]} />
      <Text style={[styles.signalText, { color: colors.muted }]}>{label}</Text>
    </View>
  );
};

type HeaderTitleBlockProps = {
  colors: GlobalContainerColors;
  eyebrow: string;
  title: string;
  numberOfLines?: number;
  size?: "default" | "compact";
  style?: StyleProp<ViewStyle>;
};

export const HeaderTitleBlock = ({
  colors,
  eyebrow,
  numberOfLines,
  size = "default",
  style,
  title,
}: HeaderTitleBlockProps) => {
  return (
    <View style={[styles.titleBlock, style]}>
      <Text style={[styles.titleEyebrow, { color: colors.accent }]}>
        {eyebrow}
      </Text>
      <Text
        numberOfLines={numberOfLines}
        style={[
          styles.titleMain,
          size === "compact" && styles.titleMainCompact,
          { color: colors.ink },
        ]}
      >
        {title}
      </Text>
      <View style={styles.titleRuleRow}>
        <View
          style={[styles.titleRuleStrong, { backgroundColor: colors.accent }]}
        />
        <View style={[styles.titleRule, { backgroundColor: colors.border }]} />
      </View>
    </View>
  );
};

type HeaderStatPlateProps = {
  colors: GlobalContainerColors;
  label: string;
  minWidth?: number;
  value: ReactNode;
};

export const HeaderStatPlate = ({
  colors,
  label,
  minWidth,
  value,
}: HeaderStatPlateProps) => {
  return (
    <View
      style={[
        styles.statPlate,
        {
          backgroundColor: colors.panel,
          borderColor: colors.border,
          minWidth,
        },
      ]}
    >
      <Text style={[styles.statValue, { color: colors.ink }]}>{value}</Text>
      <Text style={[styles.statLabel, { color: colors.muted }]}>{label}</Text>
    </View>
  );
};

type HeaderIconActionProps = {
  colors: GlobalContainerColors;
  icon: string;
  iconColor?: string;
  onPress: () => void;
};

export const HeaderIconAction = ({
  colors,
  icon,
  iconColor,
  onPress,
}: HeaderIconActionProps) => {
  return (
    <IconButton
      icon={icon}
      iconColor={iconColor ?? colors.muted}
      onPress={onPress}
      size={22}
      style={[
        styles.iconButton,
        {
          backgroundColor: colors.panel,
          borderColor: colors.border,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  iconButton: {
    borderRadius: 8,
    borderWidth: 1,
    margin: 0,
  },
  signalMark: {
    height: 16,
    marginRight: 8,
    width: 4,
  },
  signalPlate: {
    alignItems: "center",
    alignSelf: "flex-start",
    borderRadius: 6,
    borderWidth: 1,
    flexDirection: "row",
    minHeight: 30,
    paddingHorizontal: 10,
  },
  signalText: {
    fontSize: 12,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  statLabel: {
    fontSize: 12,
    fontWeight: "900",
    textAlign: "right",
    textTransform: "uppercase",
  },
  statPlate: {
    alignItems: "flex-end",
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  statValue: {
    fontSize: 34,
    fontWeight: "900",
    lineHeight: 36,
    textAlign: "right",
  },
  titleBlock: {
    flex: 1,
  },
  titleEyebrow: {
    fontSize: 13,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  titleMain: {
    fontSize: 34,
    fontWeight: "900",
    lineHeight: 38,
    marginTop: 2,
    textTransform: "uppercase",
  },
  titleMainCompact: {
    fontSize: 32,
    lineHeight: 36,
  },
  titleRule: {
    flex: 1,
    height: 2,
  },
  titleRuleRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: 7,
    marginTop: 8,
    maxWidth: 190,
  },
  titleRuleStrong: {
    height: 5,
    width: 40,
  },
});
