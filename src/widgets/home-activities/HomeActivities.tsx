import { useTranslation } from "react-i18next";

import { ACTIVITIES } from "@/entities/activity/config/activities";
import { StyledText } from "@/shared/ui";
import { useRouter } from "expo-router";
import { ActivityCard } from "./ActivityCard";

export function HomeActivities() {
  const { t } = useTranslation("activities");
  const router = useRouter();
  return (
    <>
      <StyledText variant="headlineLg">{t("sectionTitle")}</StyledText>

      {ACTIVITIES.map((activity) => (
        <ActivityCard
          key={activity.id}
          title={t(activity.titleKey)}
          description={t(activity.descriptionKey)}
          duration={activity.duration}
          onPress={() => router.push(`/activity/${activity.id}`)}
        />
      ))}
    </>
  );
}
