import { LanguageSettings, ThemeSettings } from "@/widgets/settings";
import { StyleSheet, View } from "react-native";

export default function settings() {
  return (
    <View style={{ paddingTop: 40 }}>
      <ThemeSettings />
      <LanguageSettings />
    </View>
  );
}

const styles = StyleSheet.create({});
