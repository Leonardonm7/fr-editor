import { StyleSheet } from "react-native";
import { TextInput } from "@/components/ui/TextInput";
import { useTheme } from "@/components/ui/theme";
import type { TextInputProps } from "@/components/ui/TextInput";

type NoteTextFieldProps = TextInputProps;

export const NoteTextField = ({
  contentStyle,
  outlineStyle,
  style,
  ...props
}: NoteTextFieldProps) => {
  const theme = useTheme();

  return (
    <TextInput
      mode="outlined"
      dense
      style={[
        styles.input,
        { backgroundColor: theme.colors.elevation.level2 },
        style,
      ]}
      contentStyle={[styles.content, contentStyle]}
      outlineStyle={[
        styles.outline,
        { borderColor: theme.colors.outlineVariant },
        outlineStyle,
      ]}
      activeOutlineColor={theme.colors.primary}
      placeholderTextColor={theme.colors.onSurfaceVariant}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 12,
  },
  content: {
    paddingVertical: 5,
    fontSize: 15,
  },
  outline: {
    borderRadius: 12,
    borderWidth: StyleSheet.hairlineWidth,
  },
});
