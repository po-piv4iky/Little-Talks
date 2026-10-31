import { Ionicons } from "@expo/vector-icons";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Pressable, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

import { useAppTheme } from "@/shared/theme";

import { StyledText } from "@/shared/ui";
import type { Tab } from "../config/tabs.config";

interface TabItemProps {
  tab: Tab;
  focused: boolean;
  onPress: () => void;
  onLongPress?: () => void;
}

export function TabItem({ tab, focused, onPress, onLongPress }: TabItemProps) {
  const { t } = useTranslation();
  const { colors } = useAppTheme();

  const scale = useSharedValue(1);
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(focused ? 1.05 : 1, {
      damping: 15,
      stiffness: 180,
    });

    opacity.value = withTiming(focused ? 1 : 0, {
      duration: 200,
    });

    translateY.value = withSpring(focused ? -2 : 0);
  }, [focused]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }, { translateY: translateY.value }],
  }));

  const animatedBackground = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const iconColor = focused ? colors.onPrimary : colors.textMuted;

  const textColor = focused ? colors.onPrimary : colors.textSecondary;

  return (
    <Pressable
      style={styles.pressable}
      onPress={onPress}
      onLongPress={onLongPress}
      hitSlop={8}
      accessibilityRole="tab"
      accessibilityState={{ selected: focused }}
      accessibilityLabel={t(tab.titleKey)}
    >
      <Animated.View style={[styles.container, animatedStyle]}>
        <Animated.View
          pointerEvents="none"
          style={[
            styles.activeBackground,
            { backgroundColor: colors.primary },
            animatedBackground,
          ]}
        />

        <Ionicons name={tab.icon} size={22} color={iconColor} />

        <StyledText variant="labelSm" style={{ color: textColor }}>
          {t(tab.titleKey)}
        </StyledText>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    flex: 1,
    alignItems: "center",
  },

  container: {
    position: "relative",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 25,
    gap: 3,
  },

  activeBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 25,
  },
});
