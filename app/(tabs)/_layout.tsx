import { AppTabBar } from "@/features/navigation/components/AppTabBar";
import { useTranslation } from "@/hooks/useTranslation";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  const { t } = useTranslation();

  return (
    <Tabs
      tabBar={(props) => <AppTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: t("workouts"),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: t("appearanceSettings"),
        }}
      />
    </Tabs>
  );
}
