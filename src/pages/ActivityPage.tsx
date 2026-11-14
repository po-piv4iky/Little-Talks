import { ActivityId } from "@/entities/activity";
import { getActivityPhrases, PhraseCard } from "@/entities/phrase";
import { StyledText } from "@/shared/ui";
import { PageLayout } from "@/widgets/page-layout";
import { Ionicons } from "@expo/vector-icons"; // Standard in Expo
import { useRouter } from "expo-router";
import { Pressable, StyleSheet } from "react-native";

interface ActivityPageProps {
  activityId: ActivityId;
}

export function ActivityPage({ activityId }: ActivityPageProps) {
  const router = useRouter();
  const phrases = getActivityPhrases(activityId);

  return (
    <PageLayout>
      <StyledText>{activityId}</StyledText>
      <Pressable
        style={({ pressed }) => [
          styles.backButton,
          pressed && styles.backButtonPressed,
        ]}
        onPress={() => router.back()}
        hitSlop={10}
        accessibilityRole="button"
        accessibilityLabel="Назад"
      >
        <Ionicons name="arrow-back" size={24} color="#000" />
      </Pressable>
      {phrases.map((phrase) => (
        <PhraseCard key={phrase.id} phrase={phrase} />
      ))}
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    // Just a container to show the button
  },
  backButton: {
    marginTop: 100,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f0f0f0", // Light gray, fits standard themes
    alignItems: "center",
    justifyContent: "center",
  },
  backButtonPressed: {
    backgroundColor: "#e0e0e0", // Darker on press for feedback
  },
});
