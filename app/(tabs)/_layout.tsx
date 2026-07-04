import { AppTabBar } from "@/features/navigation/components/AppTabBar";
import { Tabs } from "expo-router";

export default function TabsLayout() {
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
          title: "Treinos",
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Aparência",
        }}
      />
    </Tabs>
  );
}
