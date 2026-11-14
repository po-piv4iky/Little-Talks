import { ActivityId } from "@/entities/activity";

export type Phrase = {
  id: string;
  activityId: ActivityId;
  english: string;
  russian: string;
  isFeatured?: boolean;
};
