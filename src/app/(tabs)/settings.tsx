import { PageLayout } from "@/widgets/page-layout";
import { LanguageSettings, ThemeSettings } from "@/widgets/settings";
import { StyleSheet } from "react-native";

export default function settings() {
  return (
    <PageLayout title="Settings">
      <ThemeSettings />
      <LanguageSettings />
    </PageLayout>
  );
}

const styles = StyleSheet.create({});
