import { useAppTheme } from "@/shared/theme";
import { AppHeader } from "@/widgets/app-header";
import { ReactNode } from "react";
import { ScrollView, StyleProp, StyleSheet, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  contentStyle?: StyleProp<ViewStyle>;
  contentGap?: number;
}

export function PageLayout({
  children,
  title,
  contentStyle,
  contentGap = 16,
}: PageLayoutProps) {
  const { colors } = useAppTheme();
  return (
    <SafeAreaView
      edges={["left", "right", "top"]}
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <AppHeader title={title} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.content,
          { gap: contentGap },
          contentStyle,
        ]}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 24,
  },
});
