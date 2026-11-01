import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

import { useAppTheme } from "@/shared/theme";
import { AppColors } from "@/shared/theme/types/theme.types";
import { Badge, StyledIcon, StyledText } from "@/shared/ui";

interface SettingsSectionHeaderProps {
  title: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
  badge?: string;
}

export function SettingsSectionHeader({
  title,
  icon,
  badge,
}: SettingsSectionHeaderProps) {
  const { colors } = useAppTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <StyledIcon name={icon} />
        <StyledText variant="titleMd">{title}</StyledText>
      </View>

      {badge && <Badge label={badge} color="yellow" />}
    </View>
  );
}

const createStyles = (colors: AppColors) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 16,
    },

    titleContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
  });
