import { type ReactNode } from "react";
import { View, type StyleProp, type ViewStyle } from "react-native";

export const Surface = ({
  children,
  style,
}: {
  children?: ReactNode;
  elevation?: number;
  style?: StyleProp<ViewStyle>;
}) => {
  return <View style={style}>{children}</View>;
};
