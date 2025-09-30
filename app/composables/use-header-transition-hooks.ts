import {
  ANIMATED_ELEMENT_IDS,
  PAGE_TRANSITION_ANIMATION_PROPERTIES,
} from "~/constants";

interface HeaderTransitionHooks {
  onBeforeHeaderLeave: (header: Element) => void;
  onHeaderEnter: (header: Element, done: () => void) => void;
  onHeaderLeave: (header: Element, done: () => void) => void;
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
    addHeaderEnterAnimationToTimeline(header, timeline);
    addLogoAnimationToTimeline(logo, timeline);
    timeline.play().then(() => done());
  }

  function addHeaderEnterAnimationToTimeline(
    header: Element,
    timeline: GSAPTimeline
  ) {
    $gsap.set(header, {
      y: "-100%",
    });

    timeline.to(
      header,
      {
        y: 0,
        duration: PAGE_TRANSITION_ANIMATION_PROPERTIES.DURATION.total({
          unit: "seconds",
        }),
        ease: PAGE_TRANSITION_ANIMATION_PROPERTIES.EASE_FUNCTION,
      },
      0
    );
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
        ease: PAGE_TRANSITION_ANIMATION_PROPERTIES.EASE_FUNCTION,
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

  function onHeaderLeave(header: Element, done: () => void) {
    const logo = header.querySelector("#" + ANIMATED_ELEMENT_IDS.HEADER.LOGO)!;
    $gsap.set(logo, { visibility: "hidden" });
    const timeline = $gsap.timeline().paused(true);
    addHeaderLeaveAnimationToTimeline(header, timeline);
    timeline.play().then(() => done());
  }

  function addHeaderLeaveAnimationToTimeline(
    header: Element,
    timeline: GSAPTimeline
  ) {
    timeline.to(
      header,
      {
        y: "-100%",
        duration: PAGE_TRANSITION_ANIMATION_PROPERTIES.DURATION.total({
          unit: "seconds",
        }),
        ease: PAGE_TRANSITION_ANIMATION_PROPERTIES.EASE_FUNCTION,
      },
      0
    );
  }

  return {
    onBeforeHeaderLeave,
    onHeaderEnter,
    onHeaderLeave,
  };
}
