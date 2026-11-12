import { Language } from "@/shared/i18n";
import { storage } from "@/shared/storage/storage";
import { ThemeMode } from "@/shared/theme";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface SettingsStore {
  theme: ThemeMode;
  language: Language;
  hasHydrated: boolean;
  setThemeMode: (theme: ThemeMode) => void;
  setLanguage: (language: Language) => void;
  setHasHydrated: (value: boolean) => void;
}
export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      theme: "light",
      language: "ru",
      hasHydrated: false,

      setThemeMode: (theme) => {
        set({ theme });
      },
      setLanguage: (language) => {
        set({ language });
      },
      setHasHydrated: (value) => {
        set({ hasHydrated: value });
      },
    }),
    {
      name: "settings-store",
      storage: createJSONStorage(() => storage),
      // Не сохраняем служебный флаг гидратации.
      partialize: (state) => ({
        theme: state.theme,
        language: state.language,
      }),
      // Вызывается после восстановления данных из AsyncStorage.
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    },
  ),
);
