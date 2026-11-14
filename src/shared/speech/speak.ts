import * as Speech from "expo-speech";

export function speak(text: string) {
  Speech.stop();

  Speech.speak(text, {
    language: "en-US",
    rate: 0.85,
    pitch: 1,
  });
}
