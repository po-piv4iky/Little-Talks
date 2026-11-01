import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useRef } from "react";

import { useSettingsStore } from "@/entities/settings";
import { Card } from "@/shared/ui";

import { LanguageBottomSheet } from "./LanguageBottomSheet";
import { LanguageSelector } from "./LanguageSelector";
import { SettingsSectionHeader } from "./SettingsSectionHeader";

export function LanguageSettings() {
  const language = useSettingsStore((state) => state.language);
  const setLanguage = useSettingsStore((state) => state.setLanguage);

  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const languageLabel = language === "en" ? "English" : "Русский";

  return (
    <>
      <Card>
        <SettingsSectionHeader
          title="Language & Region"
          icon="language-outline"
        />

        <LanguageSelector
          value={languageLabel}
          onPress={() => bottomSheetRef.current?.present()}
        />
      </Card>

      <LanguageBottomSheet
        ref={bottomSheetRef}
        selectedLanguage={language}
        onSelect={setLanguage}
        onClose={() => {}}
      />
    </>
  );
}
