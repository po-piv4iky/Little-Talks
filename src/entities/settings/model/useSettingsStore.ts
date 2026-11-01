import { Language } from "@/shared/i18n";
import { storage } from "@/shared/storage/storage";
import { ThemeMode } from "@/shared/theme";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface SettingsStore {
  theme: ThemeMode;
  language: Language;
  setThemeMode: (theme: ThemeMode) => void;
  setLanguage: (language: Language) => void;
}
export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      theme: "light",
      language: "ru",

      setThemeMode: (theme) => {
        set({ theme });
      },
      setLanguage: (language) => {
        set({ language });
      },
    }),
    {
      name: "settings-store",
      storage: createJSONStorage(() => storage),
    },
  ),
);
