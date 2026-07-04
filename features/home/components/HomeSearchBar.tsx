import type { GlobalContainerColors } from "@/components/ui/GlobalContainer";
import { StyleSheet, TextInput, View } from "react-native";
import { Icon, TouchableRipple } from "react-native-paper";

type HomeSearchBarProps = {
  colors: GlobalContainerColors;
  focused: boolean;
  onBlur: () => void;
  onChangeText: (text: string) => void;
  onClear: () => void;
  onFocus: () => void;
  value: string;
};

export function HomeSearchBar({
  colors,
  focused,
  onBlur,
  onChangeText,
  onClear,
  onFocus,
  value,
}: HomeSearchBarProps) {
  return (
    <View
      style={[
        styles.searchWrapper,
        {
          backgroundColor: colors.surface,
          borderColor: focused ? colors.accent : colors.border,
        },
      ]}
    >
      <View style={[styles.searchAccent, { backgroundColor: colors.accent }]} />
      <Icon source="magnify" size={19} color={colors.muted} />
      <TextInput
        onBlur={onBlur}
        onChangeText={onChangeText}
        onFocus={onFocus}
        placeholder="Pesquisar treino..."
        placeholderTextColor={colors.muted}
        returnKeyType="search"
        style={[styles.searchInput, { color: colors.ink }]}
        value={value}
      />
      {value.length > 0 && (
        <TouchableRipple borderless onPress={onClear} style={styles.searchClear}>
          <Icon source="close-circle" size={17} color={colors.muted} />
        </TouchableRipple>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  searchAccent: {
    alignSelf: "stretch",
    width: 4,
  },
  searchClear: {
    borderRadius: 8,
    padding: 4,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    fontWeight: "700",
    minHeight: 38,
    paddingVertical: 0,
  },
  searchWrapper: {
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    gap: 10,
    minHeight: 54,
    overflow: "hidden",
    paddingRight: 12,
  },
});
