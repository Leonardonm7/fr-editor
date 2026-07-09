import { Slot } from "expo-router";
import { View } from "react-native";
import { useTheme } from "@/components/ui/theme";

const MainLayout = () => {
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
    >
      <Slot />
    </View>
  );
};

export default MainLayout;
