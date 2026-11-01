import { useSettingsStore } from "@/entities/settings";
import { Badge, Card, StyledIcon, StyledText } from "@/shared/ui";

import { StyleSheet, View } from "react-native";
import { ThemeSelector } from "./ThemeSelector";

const THEME_OPTIONS = [
  { value: "light", label: "Light", icon: "sunny-outline" },
  { value: "dark", label: "Dark", icon: "moon-outline" },
  { value: "ocean", label: "Ocean", icon: "water-outline" },
] as const;

export function ThemeSettings() {
  const theme = useSettingsStore((state) => state.theme);
  const setTheme = useSettingsStore((state) => state.setThemeMode);

  return (
    <Card>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <StyledIcon name="color-palette-outline" />
          <StyledText variant="titleMd">Theme</StyledText>
        </View>

        <Badge label="Display" color="yellow" />
      </View>

      <ThemeSelector selectedValue={theme} onSelect={setTheme} />
    </Card>
  );
}

const styles = StyleSheet.create({
  header: {
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
