import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useRef } from "react";

import { Card } from "@/shared/ui";

import { useChangeLanguage } from "@/features/change-language/model/useChangeLanguage";
import { LanguageBottomSheet } from "./LanguageBottomSheet";
import { LanguageSelector } from "./LanguageSelector";
import { SettingsSectionHeader } from "./SettingsSectionHeader";

export function LanguageSettings() {
  const { currentLanguage, changeLanguage } = useChangeLanguage();

  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const languageLabel = currentLanguage === "en" ? "English" : "Русский";

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
        selectedLanguage={currentLanguage}
        onSelect={changeLanguage}
        onClose={() => {}}
      />
    </>
  );
}
