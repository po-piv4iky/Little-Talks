import { AppProviders } from "@/app-providers";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <AppProviders>
      <StatusBar barStyle="light-content" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" />
      </Stack>
    </AppProviders>
  );
}
