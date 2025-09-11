import { PAGE_TRANSITION_ANIMATION_PROPERTIES } from "~/constants";

export function addFadeInAnimationToTimeline(
  el: Element,
  gsap: GSAP,
  timeline: GSAPTimeline
) {
  gsap.set(el, {
    opacity: 0,
  });

  timeline.to(
    el,
    {
      opacity: 1,
      duration: PAGE_TRANSITION_ANIMATION_PROPERTIES.DURATION.total({
        unit: "seconds",
      }),
      ease: PAGE_TRANSITION_ANIMATION_PROPERTIES.EASE_FUNCTION,
    },
    0
  );
}
