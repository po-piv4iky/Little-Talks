import { ActivityId } from "@/entities/activity";
import { Phrase } from "../model/phrase.types";
import { BATH_PHRASES } from "./bath.phrases";
import { BEDTIME_PHRASES } from "./bedtime.phrases";
import { BODY_PHRASES } from "./body.phrases";
import { MEAL_PHRASES } from "./meal.phrases";
import { MORNING_PHRASES } from "./morning.phrases";
import { PLAY_PHRASES } from "./play.phrases";

export const ACTIVITY_PHRASES: Record<ActivityId, Phrase[]> = {
  morning: MORNING_PHRASES,
  bath: BATH_PHRASES,
  body: BODY_PHRASES,
  play: PLAY_PHRASES,
  meal: MEAL_PHRASES,
  bedtime: BEDTIME_PHRASES,
};
