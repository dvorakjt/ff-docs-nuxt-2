import { PAGE_TRANSITION_ANIMATION_PROPERTIES } from "~/constants";

export function addFadeOutAnimationToTimeline(
  el: Element,
  timeline: GSAPTimeline
) {
  timeline.to(
    el,
    {
      opacity: 0,
      duration: PAGE_TRANSITION_ANIMATION_PROPERTIES.DURATION.total({
        unit: "seconds",
      }),
      ease: PAGE_TRANSITION_ANIMATION_PROPERTIES.EASE_FUNCTION,
    },
    0
  );
}
