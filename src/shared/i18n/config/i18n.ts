import { getLocales } from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "../locales/en/common.json";
import enNavigation from "../locales/en/navigation.json";
import enSettings from "../locales/en/settings.json";

import ruCommon from "../locales/ru/common.json";
import ruNavigation from "../locales/ru/navigation.json";
import ruSettings from "../locales/ru/settings.json";

const deviceLanguage = getLocales()[0]?.languageCode;

const resources = {
  en: {
    common: enCommon,
    navigation: enNavigation,
    settings: enSettings,
  },
  ru: {
    common: ruCommon,
    navigation: ruNavigation,
    settings: ruSettings,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: deviceLanguage === "ru" ? "ru" : "en",
  fallbackLng: "ru",
  defaultNS: "common",
  ns: ["common", "navigation", "settings"],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
