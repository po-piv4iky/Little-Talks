import { storage } from "@/shared/storage/storage";
import { ThemeMode } from "@/shared/theme";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface SettingsStore {
  theme: ThemeMode;
  setThemeMode: (theme: ThemeMode) => void;
}
export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      theme: "dark",

      setThemeMode: (theme) => {
        set({ theme });
      },
    }),
    {
      name: "settings-store",
      storage: createJSONStorage(() => storage),
    },
  ),
);
