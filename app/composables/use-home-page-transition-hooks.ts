import {
  ANIMATED_ELEMENT_IDS,
  PAGE_TRANSITION_ANIMATION_PROPERTIES,
} from "~/constants";
import { touchElementsExceptExcludedElementsAndTheirAncestors } from "~/util/touch-elements-except-excluded-elements-and-their-ancestors";

interface HomePageTransitionHooks {
  onBeforeHomePageLeave: (homePage: Element) => void;
  onHomePageEnterFromIntroPage: (homePage: Element, done: () => void) => void;
  onHomePageLeaveToIntroPage: (homePage: Element, done: () => void) => void;
}

export function useHomePageTransitionHooks(): HomePageTransitionHooks {
  const { $gsap } = useNuxtApp();
  const pageTransitionAnimationsStore = usePageTransitionAnimationsStore();

  function onBeforeHomePageLeave(homePage: Element) {
    const heading = homePage.querySelector(
      "#" + ANIMATED_ELEMENT_IDS.HOME_PAGE.HEADING
    )!;
    recordHeadingRect(heading);
  }

  function recordHeadingRect(heading: Element) {
    const headingRect = heading.getBoundingClientRect();
    pageTransitionAnimationsStore.lastKnownElementRects.homePage.heading =
      headingRect;
  }

  function onHomePageEnterFromIntroPage(homePage: Element, done: () => void) {
    const timeline = $gsap.timeline().paused(true);
    addEntryAnimationToTimeline(homePage, timeline);
    timeline.play().then(() => done());
  }

  function addEntryAnimationToTimeline(
    homePage: Element,
    timeline: GSAPTimeline
  ) {
    const { translateX, translateY } = calculateInvertedElementsState(homePage);

    const heading = homePage.querySelector(
      "#" + ANIMATED_ELEMENT_IDS.HOME_PAGE.HEADING
    )!;

    const taglineContainer = homePage.querySelector(
      "#" + ANIMATED_ELEMENT_IDS.HOME_PAGE.TAGLINE_CONTAINER
    );

    const elementsToInvert = [heading, taglineContainer];

    elementsToInvert.forEach((el) => {
      $gsap.set(el, {
        x: translateX,
        y: translateY,
      });

      timeline.to(
        el,
        {
          x: 0,
          y: 0,
          duration: PAGE_TRANSITION_ANIMATION_PROPERTIES.DURATION.total({
            unit: "seconds",
          }),
          ease: PAGE_TRANSITION_ANIMATION_PROPERTIES.EASE_FUNCTION,
        },
        0
      );
    });

    touchElementsExceptExcludedElementsAndTheirAncestors(
      homePage,
      [heading],
      (el) => {
        $gsap.set(el, { opacity: 0 });

        timeline.to(
          el,
          {
            opacity: 1,
            duration: PAGE_TRANSITION_ANIMATION_PROPERTIES.DURATION.total({
              unit: "seconds",
            }),
          },
          0
        );
      }
    );
  }

  function calculateInvertedElementsState(homePage: Element) {
    const heading = homePage.querySelector(
      "#" + ANIMATED_ELEMENT_IDS.HOME_PAGE.HEADING
    )!;
    const headingRect = heading.getBoundingClientRect();

    const lastKnownIntroPageHeadingRect =
      pageTransitionAnimationsStore.lastKnownElementRects.introPage.heading!;

    const translateX = lastKnownIntroPageHeadingRect.x - headingRect.x;

    const translateY = lastKnownIntroPageHeadingRect.y - headingRect.y;

    return { translateX, translateY };
  }

  function onHomePageLeaveToIntroPage(homePage: Element, done: () => void) {
    // const timeline = $gsap.timeline().paused(true);
    // addLeaveAnimationToTimeline(homePage, timeline);
    // timeline.play().then(() => done());
    done();
  }

  // function addLeaveAnimationToTimeline(
  //   homePage: Element,
  //   timeLine: GSAPTimeline
  // ) {
  //   if(shouldTranslateDown()) {

  //   }
  // }

  // function shouldTranslateDown() {
  //   const headingRect =
  //     pageTransitionAnimationsStore.lastKnownElementRects.homePage.heading!;

  //   console.log('last known heading rect: ', headingRect);

  //   const isHeadingWithinViewport =
  //     headingRect.bottom > 0 && headingRect.top < window.innerHeight;

  //   return isHeadingWithinViewport;
  // }

  return {
    onBeforeHomePageLeave,
    onHomePageEnterFromIntroPage,
    onHomePageLeaveToIntroPage,
  };
}
