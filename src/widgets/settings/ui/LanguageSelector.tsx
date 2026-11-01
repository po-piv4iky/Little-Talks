import { useAppTheme } from "@/shared/theme";
import { AppColors } from "@/shared/theme/types/theme.types";
import { StyledIcon, StyledText } from "@/shared/ui";

import { Pressable, StyleSheet, View } from "react-native";

interface LanguageSelectorProps {
  value: string;
  onPress: () => void;
}

export function LanguageSelector({ value, onPress }: LanguageSelectorProps) {
  const { colors } = useAppTheme();
  const styles = createStyles(colors);

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`Language: ${value}`}
      style={styles.container}
    >
      <View style={styles.leftContent}>
        <StyledIcon name="globe-outline" />

        <StyledText variant="bodyMd">Language</StyledText>
      </View>

      <View style={styles.rightContent}>
        <StyledText variant="bodySm" color="secondary">
          {value}
        </StyledText>

        <StyledIcon
          name="chevron-forward"
          size="small"
          color={colors.textSecondary}
        />
      </View>
    </Pressable>
  );
}

const createStyles = (colors: AppColors) =>
  StyleSheet.create({
    container: {
      minHeight: 48,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },

    leftContent: {
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
    },

    rightContent: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },
  });
