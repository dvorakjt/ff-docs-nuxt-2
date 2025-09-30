import { Temporal } from "@js-temporal/polyfill";
import gsap from "gsap";

interface PageTransitionAnimationProperties {
  DURATION: Temporal.Duration;
  EASE_FUNCTION: GSAPTweenVars["ease"];
}

export const PAGE_TRANSITION_ANIMATION_PROPERTIES: PageTransitionAnimationProperties =
  <const>{
    DURATION: Temporal.Duration.from({ milliseconds: 500 }),
    EASE_FUNCTION: "sine.in",
  };
