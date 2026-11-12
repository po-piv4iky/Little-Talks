export type ActivityId =
  | "morning"
  | "bath"
  | "body"
  | "play"
  | "meal"
  | "bedtime";

export type Activity = {
  id: ActivityId;
  titleKey: string;
  descriptionKey: string;
  duration: number;
  image: string;
};
