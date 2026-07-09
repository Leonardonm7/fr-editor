import { type ReactNode } from "react";
import { View, type StyleProp, type ViewStyle } from "react-native";

const CardBase = ({
  children,
  style,
}: {
  children?: ReactNode;
  mode?: string;
  style?: StyleProp<ViewStyle>;
}) => {
  return <View style={style}>{children}</View>;
};

const CardContent = ({
  children,
  style,
}: {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
}) => {
  return <View style={style}>{children}</View>;
};

export const Card = Object.assign(CardBase, {
  Content: CardContent,
});
