import { useCallback } from "react";
import { useTranslation } from "react-i18next";

import { useSettingsStore } from "@/entities/settings";
import { Language } from "@/shared/i18n";

export function useChangeLanguage() {
  const { i18n } = useTranslation();

  const language = useSettingsStore((state) => state.language);
  const setLanguage = useSettingsStore((state) => state.setLanguage);

  const changeLanguage = useCallback(
    async (nextLanguage: Language) => {
      if (nextLanguage === language) return;

      await i18n.changeLanguage(nextLanguage);
      setLanguage(nextLanguage);
    },
    [i18n, language, setLanguage],
  );

  return {
    currentLanguage: language,
    changeLanguage,
  };
}
