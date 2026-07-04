import { Image } from "expo-image";
import type { ImageStyle, StyleProp } from "react-native";
import { StyleSheet, View } from "react-native";
import { Icon, TouchableRipple } from "react-native-paper";

type ExerciseGifPreviewButtonProps = {
  badgeBackgroundColor: string;
  iconColor: string;
  imageStyle: StyleProp<ImageStyle>;
  onPress: () => void;
  source: number;
};

export function ExerciseGifPreviewButton({
  badgeBackgroundColor,
  iconColor,
  imageStyle,
  onPress,
  source,
}: ExerciseGifPreviewButtonProps) {
  return (
    <TouchableRipple
      onPress={(event) => {
        event.stopPropagation();
        onPress();
      }}
      borderless
      style={styles.previewButton}
    >
      <View>
        <Image
          source={source}
          style={imageStyle}
          contentFit="contain"
          transition={150}
        />
        <View
          style={[
            styles.previewBadge,
            { backgroundColor: badgeBackgroundColor },
          ]}
        >
          <Icon source="magnify-plus-outline" size={13} color={iconColor} />
        </View>
      </View>
    </TouchableRipple>
  );
}

const styles = StyleSheet.create({
  previewBadge: {
    alignItems: "center",
    borderRadius: 6,
    bottom: 4,
    height: 22,
    justifyContent: "center",
    position: "absolute",
    right: 4,
    width: 22,
  },
  previewButton: {
    borderRadius: 8,
    flexShrink: 0,
    overflow: "hidden",
  },
});
