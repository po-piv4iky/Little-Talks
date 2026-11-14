import { useTranslation } from "react-i18next";

import { ACTIVITIES } from "@/entities/activity/config/activities";
import { StyledText } from "@/shared/ui";
import { useRouter } from "expo-router";
import { FlatList, StyleSheet } from "react-native";
import { ActivityCard } from "./ActivityCard";

export function HomeActivities() {
  const { t } = useTranslation("activities");
  const router = useRouter();
  return (
    <>
      <StyledText variant="headlineLg">{t("sectionTitle")}</StyledText>
      <FlatList
        data={ACTIVITIES}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.content}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <ActivityCard
            activity={item}
            onPress={() => router.push(`/activity/${item.id}`)}
          />
        )}
      />
    </>
  );
}
const styles = StyleSheet.create({
  content: {
    paddingBottom: 24,
    gap: 12,
  },
  row: {
    gap: 12,
  },
  item: {
    flex: 1,
  },
});
