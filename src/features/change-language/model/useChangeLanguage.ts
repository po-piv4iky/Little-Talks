import { useCallback } from "react";

import { useSettingsStore } from "@/entities/settings";
import { Language } from "@/shared/i18n";

export function useChangeLanguage() {
  const language = useSettingsStore((state) => state.language);
  const setLanguage = useSettingsStore((state) => state.setLanguage);

  const changeLanguage = useCallback(
    (nextLanguage: Language) => {
      if (nextLanguage === language) return;
      setLanguage(nextLanguage);
    },
    [language, setLanguage],
  );

  return {
    currentLanguage: language,
    changeLanguage,
  };
}
