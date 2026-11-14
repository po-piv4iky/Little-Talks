import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";

export type ActivityId =
  | "morning"
  | "bath"
  | "body"
  | "play"
  | "meal"
  | "bedtime";

export type Activity = {
  id: ActivityId;
  title: string;
  description: string;
  duration: number;
  image: string;
  icon: ComponentProps<typeof Ionicons>["name"];
};
