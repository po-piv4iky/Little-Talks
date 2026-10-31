import { useMemo, type PropsWithChildren } from "react";

import { THEMES } from "../config/theme";
import { ThemeMode } from "../types/theme.types";
import { ThemeContext } from "./ThemeContext";

interface ThemeProviderProps extends PropsWithChildren {
  mode: ThemeMode;
}

export function ThemeProvider({ mode, children }: ThemeProviderProps) {
  const theme = useMemo(() => THEMES[mode], [mode]);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
