import type { PropsWithChildren } from "react";

import { useSettingsStore } from "@/entities/settings";
import { ThemeProvider } from "@/shared/theme";

export function AppProviders({ children }: PropsWithChildren) {
  const mode = useSettingsStore((state) => state.theme);

  return <ThemeProvider mode={mode}>{children}</ThemeProvider>;
}
