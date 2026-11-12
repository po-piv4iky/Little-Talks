import { ActivityPage } from "@/pages/ActivityPage";
import { useLocalSearchParams } from "expo-router";



export default function ActivityRoute() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return <ActivityPage activityId={id} />;
}