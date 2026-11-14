import { Pressable, StyleSheet, View } from "react-native";

import { useAppTheme } from "@/shared/theme";
import { StyledIcon, StyledText } from "@/shared/ui";

import { speak } from "@/shared/speech";
import type { Phrase } from "../model/phrase.types";

interface PhraseCardProps {
  phrase: Phrase;
}

export function PhraseCard({ phrase }: PhraseCardProps) {
  const { colors } = useAppTheme();
  const handleSpeak = () => {
    speak(phrase.english);
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.surface },
        phrase.isFeatured && styles.featured,
      ]}
    >
      <View style={styles.header}>
        <StyledText variant="labelSm" color="secondary">
          {phrase.isFeatured ? "MAIN PHRASE" : "USEFUL PHRASE"}
        </StyledText>

        <Pressable
          onPress={handleSpeak}
          accessibilityRole="button"
          accessibilityLabel={`Listen: ${phrase.english}`}
          hitSlop={10}
        >
          <StyledIcon name="volume-high-outline" />
        </Pressable>
      </View>

      <StyledText variant="titleMd">{phrase.english}</StyledText>

      <StyledText variant="bodyMd" color="secondary">
        {phrase.russian}
      </StyledText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 18,
    gap: 10,
  },
  featured: {
    borderWidth: 1,
    borderColor: "#75B798",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
