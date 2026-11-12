import { StyledText } from "@/shared/ui";
import { PageLayout } from "@/widgets/page-layout";
import { useTranslation } from "react-i18next";

export default function HomeScreen() {
  const { t } = useTranslation("navigation");
  return (
    <PageLayout title="Home">
      <StyledText>{t("home")}</StyledText>
    </PageLayout>
  );
}
