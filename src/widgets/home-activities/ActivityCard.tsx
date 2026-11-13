import { Pressable, StyleSheet, View } from "react-native";

import { AppColors, useAppTheme } from "@/shared/theme";
import { StyledIcon, StyledText } from "@/shared/ui";

interface ActivityCardProps {
  title: string;
  description: string;
  duration: number;
  image?: React.ReactNode;
  onPress: () => void;
}

export function ActivityCard({
  title,
  description,
  duration,
  image,
  onPress,
}: ActivityCardProps) {
  const { colors } = useAppTheme();
  const styles = createStyles(colors);

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <View style={styles.imageContainer}>{image}</View>

      <View style={styles.content}>
        <StyledText variant="titleMd">{title}</StyledText>

        <StyledText variant="bodySm" color="secondary" numberOfLines={2}>
          {description}
        </StyledText>

        <View style={styles.duration}>
          <StyledIcon name="time-outline" size={15} />
          <StyledText variant="labelSm" color="secondary">
            {duration} min
          </StyledText>
        </View>
      </View>
    </Pressable>
  );
}

const createStyles = (colors: AppColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      borderRadius: 20,
      overflow: "hidden",
      backgroundColor: colors.surface,
    },
    imageContainer: {
      aspectRatio: 1.2,
      overflow: "hidden",
    },
    content: {
      padding: 12,
      gap: 6,
    },
    duration: {
      flexDirection: "row",
      alignItems: "center",
      gap: 5,
      marginTop: 4,
    },
    pressed: {
      opacity: 0.8,
      transform: [{ scale: 0.98 }],
    },
  });
