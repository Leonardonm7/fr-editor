import { ActivityIndicator } from "@/components/ui/ActivityIndicator";
import { appFonts } from "@/theme/fonts";
import { PortalProvider } from "@/components/ui/Portal";
import { initDB } from "@/database/migrations";
import { AppThemeProvider, useAppTheme } from "@/hooks/useAppTheme";
import { useFonts } from "expo-font";
import useUpdate from "@/hooks/useUpdate";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaProvider } from "react-native-safe-area-context";

const AppLayout = () => {
  const [areFontsLoaded, fontLoadError] = useFonts(appFonts);
  const { isThemeLoading, statusBarStyle, theme } = useAppTheme();
  const isLoading = useUpdate({ enabled: !isThemeLoading });
  const canRenderFonts = areFontsLoaded || !!fontLoadError;

  useEffect(() => {
    initDB();
  }, []);

  if (isLoading || isThemeLoading || !canRenderFonts) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.colors.background,
        }}
      >
        <ActivityIndicator size={56} color={theme.colors.primary} />
      </View>
    );
  }

  return (
    <KeyboardProvider>
      <GestureHandlerRootView
        style={{ flex: 1, backgroundColor: theme.colors.background }}
      >
        <PortalProvider>
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
        </PortalProvider>
      </GestureHandlerRootView>
    </KeyboardProvider>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <AppThemeProvider>
        <AppLayout />
      </AppThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
