import { useAppTheme } from "@/shared/theme/model/useAppTheme";

import { StyleSheet, View, ViewProps } from "react-native";
import { StyledText } from "../styled-text/StyledText";

type BadgeColor = "green" | "yellow" | "peach";

interface BadgeProps extends ViewProps {
  label: string;
  color?: BadgeColor;
}

export function Badge({ label, color = "green", style, ...props }: BadgeProps) {
  const { colors } = useAppTheme();

  const badgeColors = colors.badge[color];

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: badgeColors.background },
        style,
      ]}
      {...props}
    >
      <StyledText variant="labelSm" style={{ color: badgeColors.text }}>
        {label}
      </StyledText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
});
