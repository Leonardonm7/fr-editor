import { initDB } from "@/database/migrations";
import { AppThemeProvider, darkTheme, useAppTheme } from "@/hooks/useAppTheme";
import useUpdate from "@/hooks/useUpdate";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { ActivityIndicator, PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

function AppLayout() {
  const isLoading = useUpdate();
  const { fontSizePreference, isThemeLoading, statusBarStyle, theme } =
    useAppTheme();

  useEffect(() => {
    initDB();
  }, []);

  if (isLoading || isThemeLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.colors.background,
        }}
      >
        <ActivityIndicator
          size="large"
          color={(theme ?? darkTheme).colors.primary}
        />
      </View>
    );
  }

  return (
    <KeyboardProvider>
      <PaperProvider theme={theme}>
        <GestureHandlerRootView
          key={`font-size-${fontSizePreference}`}
          style={{ flex: 1, backgroundColor: theme.colors.background }}
        >
          <StatusBar style={statusBarStyle} />
          <Stack
            screenOptions={{
              contentStyle: {
                backgroundColor: theme.colors.background,
              },
              animation: "fade",
              headerShown: false,
            }}
          />
        </GestureHandlerRootView>
      </PaperProvider>
    </KeyboardProvider>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <AppThemeProvider>
        <AppLayout />
      </AppThemeProvider>
    </SafeAreaProvider>
  );
}
