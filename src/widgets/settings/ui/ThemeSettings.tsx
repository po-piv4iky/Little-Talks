import { useSettingsStore } from "@/entities/settings";
import { Badge, Card, StyledIcon, StyledText } from "@/shared/ui";

import { useTranslation } from "react-i18next";
import { StyleSheet, View } from "react-native";
import { ThemeSelector } from "./ThemeSelector";

export function ThemeSettings() {
  const theme = useSettingsStore((state) => state.theme);
  const setTheme = useSettingsStore((state) => state.setThemeMode);
  const { t } = useTranslation("settings");

  return (
    <Card>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <StyledIcon name="color-palette-outline" />
          <StyledText variant="titleMd">{t("theme.title")}</StyledText>
        </View>

        <Badge label={t("labels.display")} color="yellow" />
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
