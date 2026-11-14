import { HomeActivities } from "@/widgets/home-activities";
import { PageLayout } from "@/widgets/page-layout";
import { useTranslation } from "react-i18next";

export default function HomeScreen() {
  const { t } = useTranslation("navigation");
  return (
    <PageLayout title={t("home")}>
      <HomeActivities />
    </PageLayout>
  );
}
