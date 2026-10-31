import type { ReactNode } from "react";
import {
    Pressable,
    type PressableProps,
    type StyleProp,
    StyleSheet,
    View,
    type ViewStyle,
} from "react-native";

import { useAppTheme } from "@/shared/theme";

type CardProps = Omit<PressableProps, "style"> & {
  children: ReactNode;
  padding?: "sm" | "md" | "lg";
  radius?: "sm" | "md" | "lg";
  border?: "none" | "subtle" | "default" | "accent";
  background?: "transparent" | "surface" | "secondary";
  style?: StyleProp<ViewStyle>;
};

const RADIUS_SIZE = {
  sm: 12,
  md: 20,
  lg: 24,
} as const;

const PADDING_SIZE = {
  sm: 10,
  md: 16,
  lg: 20,
} as const;

export function Card({
  children,
  border = "none",
  padding = "md",
  radius = "md",
  background = "surface",
  style,
  onPress,
  ...pressableProps
}: CardProps) {
  const { colors } = useAppTheme();

  const backgroundColors = {
    transparent: "transparent",
    surface: colors.surface,
    secondary: colors.surfaceSecondary,
  };

  const borderColors = {
    none: "transparent",
    subtle: colors.border,
    default: colors.border,
    accent: colors.primary,
  };

  const borderWidths = {
    none: 0,
    subtle: StyleSheet.hairlineWidth,
    default: 1,
    accent: 1,
  };

  const cardStyle: ViewStyle = {
    padding: PADDING_SIZE[padding],
    borderRadius: RADIUS_SIZE[radius],
    backgroundColor: backgroundColors[background],
    borderWidth: borderWidths[border],
    borderColor: borderColors[border],
  };

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [cardStyle, pressed && styles.pressed, style]}
        {...pressableProps}
      >
        {children}
      </Pressable>
    );
  }

  return <View style={[cardStyle, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.85,
  },
});
