import { useSettingsStore } from "@/entities/settings";
import { ThemeProvider } from "@/shared/theme";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { PropsWithChildren } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LanguageSync } from "./LanguageSync";

export function AppProviders({ children }: PropsWithChildren) {
  const mode = useSettingsStore((state) => state.theme);

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider mode={mode}>
          <LanguageSync />
          <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
        </ThemeProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

// SafeAreaProvider Предоставляет информацию о безопасных областях устройства

// GestureHandlerRootView Корневой контейнер для жестов

// ThemeProvider Предоставляет тему и цвета

// BottomSheetModalProvider Управляет модальными Bottom Sheet
