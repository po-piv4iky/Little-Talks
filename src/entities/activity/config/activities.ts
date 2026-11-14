import { Activity } from "../model/activity.types";

export const ACTIVITIES: Activity[] = [
  {
    id: "morning",
    title: "morning.title",
    description: "morning.description",
    duration: 5,
    image: "morning",
    icon: "sunny-outline",
  },
  {
    id: "bath",
    title: "activity.bath.title",
    description: "activity.bath.description",
    duration: 7,
    image: "bath",
    icon: "water-outline",
  },
  {
    id: "body",
    title: "activity.body.title",
    description: "activity.body.description",
    duration: 5,
    image: "body",
    icon: "body-outline",
  },
  {
    id: "play",
    title: "activity.play.title",
    description: "activity.play.description",
    duration: 10,
    image: "play",
    icon: "game-controller-outline",
  },
  {
    id: "meal",
    title: "activity.meal.title",
    description: "activity.meal.description",
    duration: 7,
    image: "meal",
    icon: "restaurant-outline",
  },
  {
    id: "bedtime",
    title: "bedtime.title",
    description: "bedtime.description",
    duration: 5,
    image: "bedtime",
    icon: "moon-outline",
  },
];
