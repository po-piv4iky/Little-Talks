import { ActivityId } from "@/entities/activity";
import { ACTIVITY_PHRASES } from "../config";

export function getActivityPhrases(activityId: ActivityId) {
  return ACTIVITY_PHRASES[activityId];
}
