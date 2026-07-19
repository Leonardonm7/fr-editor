import { AppTabBar } from "@/features/navigation/components/AppTabBar";
import { useTranslation } from "@/hooks/useTranslation";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  const { t } = useTranslation();

  return (
    <Tabs
      tabBar={(props) => <AppTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
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
};

export default TabsLayout;
