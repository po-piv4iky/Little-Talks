import { TYPOGRAPHY } from "@/shared/theme/config/typography";
import { useAppTheme } from "@/shared/theme/model/useAppTheme";
import { Text, TextProps } from "react-native";

interface StyledTextProps extends TextProps {
  color?: "primary" | "secondary" | "error";
  variant?:
    | "displayXl"
    | "headlineLg"
    | "headlineMd"
    | "titleMd"
    | "bodyMd"
    | "bodySm"
    | "labelSm";
}

const typographyStyles = {
  displayXl: TYPOGRAPHY.DISPLAY_XL,
  headlineLg: TYPOGRAPHY.HEADLINE_LG,
  headlineMd: TYPOGRAPHY.HEADLINE_MD,
  titleMd: TYPOGRAPHY.TITLE_MD,
  bodyMd: TYPOGRAPHY.BODY_MD,
  bodySm: TYPOGRAPHY.BODY_SM,
  labelSm: TYPOGRAPHY.LABEL_SM,
};
export function StyledText({
  children,
  color = "primary",
  variant = "bodyMd",
  style,
  ...props
}: StyledTextProps) {
  const { colors } = useAppTheme();
  const textColor = {
    primary: colors.textPrimary,
    secondary: colors.textSecondary,
    error: colors.error,
  };

  return (
    <Text
      style={[typographyStyles[variant], { color: textColor[color] }, style]}
      {...props}
    >
      {children}
    </Text>
  );
}
