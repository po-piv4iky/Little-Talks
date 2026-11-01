import { THEMES } from "../config/theme";

export type ThemeMode = keyof typeof THEMES; // ThemeMode = 'light' | 'dark' | 'ocean'

export type AppTheme = (typeof THEMES)[ThemeMode];
// при обращении AppTheme выводим строгий тип одной из тем
export type AppColors = AppTheme["colors"]; // только палитра цветов
