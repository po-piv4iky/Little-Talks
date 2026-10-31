import { useContext } from "react";

import { ThemeContext } from "./ThemeContext";

export function useAppTheme() {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error("useAppTheme must be used within ThemeProvider");
  }

  return theme;
}
