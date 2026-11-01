import { useSettingsStore } from "@/entities/settings";
import { ThemeProvider } from "@/shared/theme";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { PropsWithChildren } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export function AppProviders({ children }: PropsWithChildren) {
  const mode = useSettingsStore((state) => state.theme);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider mode={mode}>
        <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
// GestureHandlerRootView Корневой контейнер для жестов

// ThemeProvider Предоставляет тему и цвета

// BottomSheetModalProvider Управляет модальными Bottom Sheet