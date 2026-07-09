import {
  StyleSheet,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from "react-native";

import { TextInput, type TextInputProps } from "@/components/ui/TextInput";
import { type NoteEditColors } from "@/features/note/utils/editSection";

type NoteCompactTextFieldProps = Omit<
  TextInputProps,
  | "activeUnderlineColor"
  | "contentStyle"
  | "dense"
  | "mode"
  | "style"
  | "underlineColor"
> & {
  colors: Pick<NoteEditColors, "accent" | "border" | "ink">;
  contentStyle?: StyleProp<TextStyle>;
  fieldStyle?: StyleProp<ViewStyle>;
  strong?: boolean;
};

export const NoteCompactTextField = ({
  colors,
  contentStyle,
  fieldStyle,
  strong,
  ...props
}: NoteCompactTextFieldProps) => {
  return (
    <TextInput
      {...props}
      mode="flat"
      dense
      style={[styles.field, { backgroundColor: "transparent" }, fieldStyle]}
      contentStyle={[
        strong ? styles.strongContent : styles.content,
        { color: colors.ink },
        contentStyle,
      ]}
      underlineColor={colors.border}
      activeUnderlineColor={colors.accent}
    />
  );
};

const styles = StyleSheet.create({
  content: {
    fontSize: 14,
    fontWeight: "700",
    paddingHorizontal: 0,
  },
  field: {
    height: 38,
  },
  strongContent: {
    fontSize: 15,
    fontWeight: "900",
    lineHeight: 19,
    paddingHorizontal: 0,
  },
});
