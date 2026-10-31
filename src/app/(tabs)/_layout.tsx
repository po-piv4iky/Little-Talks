import { Tabs } from "expo-router";

import { CustomTabBar } from "@/widgets/tab-bar";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="favorites" />
      <Tabs.Screen name="settings" />
    </Tabs>
  );
}
