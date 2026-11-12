import { useAppTheme } from "@/shared/theme";
import { AppColors } from "@/shared/theme/types/theme.types";
import { StyledIcon, StyledText } from "@/shared/ui";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LayoutChangeEvent, Pressable, StyleSheet, View } from "react-native";

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export const THEME_OPTIONS = [
  { value: "light", icon: "sunny-outline" },
  { value: "dark", icon: "moon-outline" },
  { value: "ocean", icon: "water-outline" },
] as const;

export type ThemeOption = (typeof THEME_OPTIONS)[number]["value"];

interface ThemeSelectorProps {
  selectedValue: ThemeOption;
  onSelect: (value: ThemeOption) => void;
}

export function ThemeSelector({ selectedValue, onSelect }: ThemeSelectorProps) {
  const { colors } = useAppTheme();
  const styles = createStyles(colors);
  const { t } = useTranslation("settings");

  const [containerWidth, setContainerWidth] = useState(0);

  const selectedIndex = Math.max(
    0,
    THEME_OPTIONS.findIndex((option) => option.value === selectedValue),
  );

  const segmentWidth =
    containerWidth > 0 ? (containerWidth - 6) / THEME_OPTIONS.length : 0;

  const translateX = useSharedValue(0);

  useEffect(() => {
    translateX.value = withTiming(selectedIndex * segmentWidth, {
      duration: 250,
    });
  }, [selectedIndex, segmentWidth, translateX]);

  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const handleLayout = (event: LayoutChangeEvent) => {
    setContainerWidth(event.nativeEvent.layout.width);
  };

  return (
    <View
      style={styles.container}
      onLayout={handleLayout}
      accessibilityRole="radiogroup"
    >
      {segmentWidth > 0 && (
        <Animated.View
          pointerEvents="none"
          style={[
            styles.activeIndicator,
            { width: segmentWidth },
            indicatorStyle,
          ]}
        />
      )}

      {THEME_OPTIONS.map((option) => {
        const isSelected = selectedValue === option.value;

        return (
          <Pressable
            key={option.value}
            onPress={() => onSelect(option.value)}
            accessibilityRole="radio"
            accessibilityState={{ checked: isSelected }}
            style={styles.option}
          >
            <StyledIcon
              name={option.icon}
              size={16}
              color={isSelected ? colors.onPrimary : colors.textSecondary}
            />

            <StyledText
              variant="labelSm"
              style={[styles.label, isSelected && styles.selectedLabel]}
            >
              {t(`theme.${option.value}`)}
            </StyledText>
          </Pressable>
        );
      })}
    </View>
  );
}

const createStyles = (colors: AppColors) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      position: "relative",
      padding: 3,
      borderRadius: 999,
      backgroundColor: colors.surfaceTertiary,
      overflow: "hidden",
    },

    activeIndicator: {
      position: "absolute",
      top: 3,
      bottom: 3,
      left: 3,
      borderRadius: 999,
      backgroundColor: colors.primary,
    },

    option: {
      flex: 1,
      minWidth: 0,
      minHeight: 36,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 4,
      zIndex: 1,
    },

    label: {
      color: colors.textSecondary,
    },

    selectedLabel: {
      color: colors.onPrimary,
    },
  });
