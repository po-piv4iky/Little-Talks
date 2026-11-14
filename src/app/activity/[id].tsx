import { ActivityId } from "@/entities/activity";
import { ActivityPage } from "@/pages/ActivityPage";
import { useLocalSearchParams } from "expo-router";

export default function ActivityRoute() {
  const { id } = useLocalSearchParams<{ id: ActivityId }>();

  return <ActivityPage activityId={id} />;
}