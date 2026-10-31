import { Ionicons } from "@expo/vector-icons";
import type { ComponentProps } from "react";

export type TabName = "index" | "favorites" | "settings";

export type Tab = {
  name: TabName;
  titleKey: string;
  icon: ComponentProps<typeof Ionicons>["name"];
};

export const tabsMap = {
  index: {
    name: "index",
    titleKey: "home",
    icon: "home-outline",
  },
  favorites: {
    name: "favorites",
    titleKey: "favorites",
    icon: "bookmark-outline",
  },
  settings: {
    name: "settings",
    titleKey: "settings",
    icon: "settings-outline",
  },
} satisfies Record<TabName, Tab>;

export const tabs = Object.values(tabsMap);
