import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { useSettingsStore } from "@/entities/settings";

export function useSyncLanguage() {
  const { i18n } = useTranslation();
  const language = useSettingsStore((state) => state.language);

  useEffect(() => {
    if (i18n.language !== language) {
      void i18n.changeLanguage(language);
    }
  }, [i18n, language]);
}
