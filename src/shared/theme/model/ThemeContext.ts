import { createContext } from "react";
import { AppTheme } from "../types/theme.types";

export const ThemeContext = createContext<AppTheme | null>(null);
