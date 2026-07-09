import {
  ActivityIndicator as NativeActivityIndicator,
  type ActivityIndicatorProps as NativeActivityIndicatorProps,
} from "react-native";

export type ActivityIndicatorProps = NativeActivityIndicatorProps;

export const ActivityIndicator = ({
  size = "small",
  ...props
}: ActivityIndicatorProps) => {
  return <NativeActivityIndicator size={size} {...props} />;
};
