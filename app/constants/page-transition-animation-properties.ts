import { Temporal } from "@js-temporal/polyfill";
import gsap from "gsap";

interface PageTransitionAnimationProperties {
  DURATION: Temporal.Duration;
  EASE_FUNCTION: GSAPTweenVars["ease"];
}

export const PAGE_TRANSITION_ANIMATION_PROPERTIES: PageTransitionAnimationProperties =
  <const>{
    DURATION: Temporal.Duration.from({ milliseconds: 400 }),
    EASE_FUNCTION: "none",
  };
