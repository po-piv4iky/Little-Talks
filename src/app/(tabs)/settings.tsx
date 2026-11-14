import { PageLayout } from "@/widgets/page-layout";
import { LanguageSettings, ThemeSettings } from "@/widgets/settings";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";

export default function Settings() {
  const { t } = useTranslation("navigation");
  return (
    <PageLayout title={t("settings")}>
      <ThemeSettings />
      <LanguageSettings />
    </PageLayout>
  );
}

const styles = StyleSheet.create({});
