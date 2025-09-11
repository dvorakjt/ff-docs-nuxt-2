import {
  ANIMATED_ELEMENT_IDS,
  PAGE_TRANSITION_ANIMATION_PROPERTIES,
  ROUTES,
} from "~/constants";
import {
  addFadeInAnimationToTimeline,
  addFadeOutAnimationToTimeline,
} from "~/util";
import { touchElementsExceptExcludedElementsAndTheirAncestors } from "~/util/touch-elements-except-excluded-elements-and-their-ancestors";

interface HomePageTransitionHooks {
  onBeforeHomePageLeave: (homePage: Element) => void;
  onHomePageEnter: (homePage: Element, done: () => void) => void;
  onHomePageLeave: (homePage: Element, done: () => void) => void;
}

export function useHomePageTransitionHooks(): HomePageTransitionHooks {
  const { $gsap } = useNuxtApp();
  const routeTransitionsStore = useRouteTransitionsStore();
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

  function onHomePageEnter(homePage: Element, done: () => void) {
    if (routeTransitionsStore.from === ROUTES.INTRO_PAGE) {
      onHomePageEnterFromIntroPage(homePage, done);
    } else {
      console.log("enter");
      onHomePageEnterFromAnyPage(homePage, done);
    }
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

  function onHomePageEnterFromAnyPage(homePage: Element, done: () => void) {
    const timeline = $gsap.timeline().paused(true);
    addFadeInAnimationToTimeline(homePage, $gsap, timeline);
    timeline.play().then(() => done());
  }

  function onHomePageLeave(homePage: Element, done: () => void) {
    if (routeTransitionsStore.to === ROUTES.INTRO_PAGE) {
      onHomePageLeaveToIntroPage(homePage, done);
    } else {
      onHomePageLeaveToAnyPage(homePage, done);
    }
  }

  function onHomePageLeaveToIntroPage(homePage: Element, done: () => void) {
    const timeline = $gsap.timeline().paused(true);
    hideHeading(homePage);
    addTaglineContainerAnimationToTimeline(homePage, timeline);
    timeline.play().then(() => done());
  }

  function hideHeading(homePage: Element) {
    const heading = homePage.querySelector(
      "#" + ANIMATED_ELEMENT_IDS.HOME_PAGE.HEADING
    );

    $gsap.set(heading, { visibility: "hidden" });
  }

  function addTaglineContainerAnimationToTimeline(
    homePage: Element,
    timeline: GSAPTimeline
  ) {
    const taglineContainer = homePage.querySelector(
      "#" + ANIMATED_ELEMENT_IDS.HOME_PAGE.TAGLINE_CONTAINER
    )!;
    const { translateY } = calculateTaglineContainerLeaveTo(taglineContainer);

    timeline.to(taglineContainer, {
      opacity: 0,
      translateY,
      duration: PAGE_TRANSITION_ANIMATION_PROPERTIES.DURATION.total({
        unit: "seconds",
      }),
      ease: PAGE_TRANSITION_ANIMATION_PROPERTIES.EASE_FUNCTION,
    });
  }

  function calculateTaglineContainerLeaveTo(taglineContainer: Element) {
    const taglineContainerRect = taglineContainer.getBoundingClientRect();
    const translateY = window.innerHeight - taglineContainerRect.y;
    return { translateY };
  }

  function onHomePageLeaveToAnyPage(homePage: Element, done: () => void) {
    const timeline = $gsap.timeline().paused(true);
    addFadeOutAnimationToTimeline(homePage, timeline);
    timeline.play().then(() => done());
  }

  return {
    onBeforeHomePageLeave,
    onHomePageEnter,
    onHomePageLeave,
  };
}
