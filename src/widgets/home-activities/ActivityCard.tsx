import { useTranslation } from "react-i18next";
import { StyleSheet, View } from "react-native";

import { Activity } from "@/entities/activity";
import { Card, StyledIcon, StyledText } from "@/shared/ui";

interface ActivityCardProps {
  activity: Activity;
  onPress: () => void;
}

export function ActivityCard({ activity, onPress }: ActivityCardProps) {
  const { t } = useTranslation("activities");

  return (
    <Card
      padding="md"
      radius="lg"
      background="surface"
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={t(`${activity.id}.title`)}
      style={styles.card}
    >
      <StyledIcon name={activity.icon} />
      <View style={styles.content}>
        <StyledText variant="titleMd">{t(`${activity.id}.title`)}</StyledText>

        <StyledText variant="bodySm" color="secondary" numberOfLines={2}>
          {t(`${activity.id}.description`)}
        </StyledText>

        <View style={styles.duration}>
          <StyledIcon name="time-outline" size={15} />

          <StyledText variant="labelSm" color="secondary">
            {activity.duration} min
          </StyledText>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minHeight: 180,
    gap: 12,
  },
  imageContainer: {
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    gap: 6,
  },
  duration: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: "auto",
  },
});
