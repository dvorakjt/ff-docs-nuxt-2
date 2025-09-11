import {
  ANIMATED_ELEMENT_IDS,
  PAGE_TRANSITION_ANIMATION_PROPERTIES,
} from "~/constants";

interface HeaderTransitionHooks {
  onBeforeHeaderLeave: (header: Element) => void;
  onHeaderEnter: (header: Element, done: () => void) => void;
}

export function useHeaderTransitionHooks(): HeaderTransitionHooks {
  const { $gsap } = useNuxtApp();
  const pageTransitionAnimationsStore = usePageTransitionAnimationsStore();

  function onBeforeHeaderLeave(header: Element) {
    const logo = header.querySelector("#" + ANIMATED_ELEMENT_IDS.HEADER.LOGO)!;
    recordLogoRect(logo);
  }

  function recordLogoRect(logo: Element) {
    const logoRect = logo.getBoundingClientRect();
    pageTransitionAnimationsStore.lastKnownElementRects.header.logo = logoRect;
  }

  function onHeaderEnter(header: Element, done: () => void) {
    const logo = header.querySelector("#" + ANIMATED_ELEMENT_IDS.HEADER.LOGO)!;
    const timeline = $gsap.timeline().paused(true);
    addLogoAnimationToTimeline(logo, timeline);
    timeline.play().then(() => done());
  }

  function addLogoAnimationToTimeline(logo: Element, timeLine: GSAPTimeline) {
    const { translateX, translateY, scaleX, scaleY } =
      calculateInvertedLogoState(logo);

    $gsap.set(logo, { x: translateX, y: translateY, scaleX, scaleY });

    timeLine.to(
      logo,
      {
        x: 0,
        y: 0,
        scaleX: 1,
        scaleY: 1,
        duration: PAGE_TRANSITION_ANIMATION_PROPERTIES.DURATION.total({
          unit: "seconds",
        }),
        ease: "none",
      },
      0
    );
  }

  function calculateInvertedLogoState(logo: Element) {
    const logoRect = logo.getBoundingClientRect();
    const lastRecordedHeroRect =
      pageTransitionAnimationsStore.lastKnownElementRects.introPage.hero!;

    const translateX = lastRecordedHeroRect.x - logoRect.x;
    const translateY = lastRecordedHeroRect.y - logoRect.y;
    const scaleX = lastRecordedHeroRect.width / logoRect.width;
    const scaleY = lastRecordedHeroRect.height / logoRect.height;

    return {
      translateX,
      translateY,
      scaleX,
      scaleY,
    };
  }

  return {
    onBeforeHeaderLeave,
    onHeaderEnter,
  };
}
