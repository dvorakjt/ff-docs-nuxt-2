import { PAGE_TRANSITION_ANIMATION_PROPERTIES } from "~/constants";

interface GenericPageTransitionHooks {
  onPageEnter: (page: Element, done: () => void) => void;
  onPageLeave: (page: Element, done: () => void) => void;
}

export function useGenericPageTransitionHooks(): GenericPageTransitionHooks {
  const { $gsap } = useNuxtApp();

  function onPageEnter(page: Element, done: () => void) {
    $gsap.set(page, {
      opacity: 0,
    });

    $gsap
      .to(page, {
        opacity: 1,
        duration: PAGE_TRANSITION_ANIMATION_PROPERTIES.DURATION.total({
          unit: "seconds",
        }),
        ease: PAGE_TRANSITION_ANIMATION_PROPERTIES.EASE_FUNCTION,
      })
      .play()
      .then(() => done());
  }

  function onPageLeave(page: Element, done: () => void) {
    $gsap
      .to(page, {
        opacity: 0,
        duration: PAGE_TRANSITION_ANIMATION_PROPERTIES.DURATION.total({
          unit: "seconds",
        }),
        ease: PAGE_TRANSITION_ANIMATION_PROPERTIES.EASE_FUNCTION,
      })
      .play()
      .then(() => done());
  }

  return {
    onPageEnter,
    onPageLeave,
  };
}
