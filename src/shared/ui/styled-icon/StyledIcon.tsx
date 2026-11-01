import { AppColors, useAppTheme } from '@/shared/theme'
import { Ionicons } from '@expo/vector-icons'
import {
    ColorValue,
    StyleSheet,
    View,
    ViewStyle,
} from 'react-native'

interface StyledIconProps {
  name: React.ComponentProps<typeof Ionicons>['name']
  size?: 'small' | 'default' | 'large' | number
  color?: string
  circle?: boolean
  circleSize?: number
  circleColor?: ColorValue
  style?: ViewStyle
}

const ICON_SIZES = {
  small: 18,
  default: 24,
  large: 32,
} as const

export function StyledIcon({
  name,
  size = 'default',
  color,
  circle = false,
  circleSize = 44,
  circleColor,
  style,
}: StyledIconProps) {
  const { colors } = useAppTheme()

  const iconSize = typeof size === 'number' ? size : ICON_SIZES[size]
  const iconColor = color ?? colors.primary

  const styles = createStyles(colors, circleSize)

  return (
    <View
      style={[
        circle ? styles.circle : undefined,
        circleColor ? { backgroundColor: circleColor } : undefined,
        style,
      ]}
    >
      <Ionicons
        name={name}
        size={iconSize}
        color={iconColor}
      />
    </View>
  )
}

const createStyles = (colors: AppColors, circleSize: number) =>
  StyleSheet.create({
    circle: {
      width: circleSize,
      height: circleSize,
      borderRadius: circleSize / 2,
      backgroundColor: colors.surfaceTertiary,
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
