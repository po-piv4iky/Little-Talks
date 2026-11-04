import type { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

import { useAppTheme } from "@/shared/theme";
import { StyledText } from "@/shared/ui";
import { Ionicons } from "@expo/vector-icons";

interface AppHeaderProps {
  title: string;
  rightAction?: ReactNode;
}

export function AppHeader({ title, rightAction }: AppHeaderProps) {
  const { colors } = useAppTheme();

  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <View style={[styles.logo, { backgroundColor: colors.primary }]}>
          <Ionicons
            name="chatbubble-ellipses"
            size={23}
            color={colors.onPrimary}
          />
        </View>

        <View style={styles.titleContainer}>
          <StyledText variant="titleMd">Little Talks</StyledText>

          <StyledText variant="bodySm" color="secondary">
            {title}
          </StyledText>
        </View>
      </View>

      {rightAction && <View style={styles.rightContent}>{rightAction}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 64,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 12,
  },

  leftContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  logo: {
    width: 44,
    height: 44,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  titleContainer: {
    gap: 2,
  },

  rightContent: {
    alignItems: "center",
    justifyContent: "center",
  },
});
