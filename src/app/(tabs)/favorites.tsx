import { PageLayout } from "@/widgets/page-layout";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text } from "react-native";

export default function Favorites() {
  const { t } = useTranslation("navigation");
  return (
    <PageLayout title={t("favorites")}>
      <Text>favorites</Text>
    </PageLayout>
  );
}

const styles = StyleSheet.create({});
