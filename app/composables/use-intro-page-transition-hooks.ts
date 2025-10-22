import { Routes} from "~/generated/routes";
import {
  ANIMATED_ELEMENT_IDS,
  PAGE_TRANSITION_ANIMATION_PROPERTIES,
} from "~/constants";
import {
  touchElementsExceptExcludedElementsAndTheirAncestors,
  addFadeOutAnimationToTimeline,
} from "~/util";

interface IntroPageTransitionHooks {
  onBeforeIntroPageLeave: (introPage: Element) => void;
  onIntroPageEnter: (introPage: Element, done: () => void) => void;
  onIntroPageLeave: (introPage: Element, done: () => void) => void;
}

export function useIntroPageTransitionHooks(): IntroPageTransitionHooks {
  const { $gsap } = useNuxtApp();
  const routeTransitionsStore = useRouteTransitionsStore();
  const pageTransitionAnimationsStore = usePageTransitionAnimationsStore();

  function onBeforeIntroPageLeave(introPage: Element) {
    const hero = introPage.querySelector(
      "#" + ANIMATED_ELEMENT_IDS.INTRO_PAGE.HERO
    )!;

    const heading = introPage.querySelector(
      "#" + ANIMATED_ELEMENT_IDS.INTRO_PAGE.HEADING
    )!;

    recordHeroRect(hero);
    recordHeadingRect(heading);
  }

  function recordHeroRect(hero: Element) {
    const heroRect = hero.getBoundingClientRect();
    pageTransitionAnimationsStore.lastKnownElementRects.introPage.hero =
      heroRect;
  }

  function recordHeadingRect(heading: Element) {
    const headingRect = heading.getBoundingClientRect();
    pageTransitionAnimationsStore.lastKnownElementRects.introPage.heading =
      headingRect;
  }

  function onIntroPageEnter(introPage: Element, done: () => void) {
    if (shouldExecuteFullAnimationOnEnter()) {
      onIntroPageEnterWithFullAnimation(introPage, done);
    } else {
      onIntroPageEnterWithFadeInOnly(introPage, done);
    }
  }

  function shouldExecuteFullAnimationOnEnter() {
    if (routeTransitionsStore.from === Routes.Home) {
      const homePageHeadingRect =
        pageTransitionAnimationsStore.lastKnownElementRects.homePage.heading!;
      const isHomePageHeadingVisible =
        homePageHeadingRect.bottom > 0 &&
        homePageHeadingRect.top < window.innerHeight;
      return isHomePageHeadingVisible;
    }

    return false;
  }

  function onIntroPageEnterWithFullAnimation(
    introPage: Element,
    done: () => void
  ) {
    const timeline = $gsap.timeline().paused(true);
    addHeroAnimationToTimeline(introPage, timeline);
    addHeadingAnimationToTimeline(introPage, timeline);
    addTaglineEnterAnimationToTimeline(introPage, timeline);
    timeline.play().then(() => done());
  }

  function addHeroAnimationToTimeline(
    introPage: Element,
    timeline: GSAPTimeline
  ) {
    const hero = introPage.querySelector(
      "#" + ANIMATED_ELEMENT_IDS.INTRO_PAGE.HERO
    )!;

    const { translateX, translateY, scaleX, scaleY } =
      calculateInvertedHeroState(hero);

    console.log(translateX, translateY, scaleX, scaleY);

    $gsap.set(hero, {
      x: translateX,
      y: translateY,
      scaleX,
      scaleY,
    });

    timeline.to(
      hero,
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

  function calculateInvertedHeroState(hero: Element) {
    const heroRect = hero.getBoundingClientRect();

    const lastKnownHeaderLogoRect =
      pageTransitionAnimationsStore.lastKnownElementRects.header.logo!;

    const translateX = lastKnownHeaderLogoRect.x - heroRect.x;
    const translateY = lastKnownHeaderLogoRect.y - heroRect.y;

    const scaleX = lastKnownHeaderLogoRect.width / heroRect.width;
    const scaleY = lastKnownHeaderLogoRect.height / heroRect.height;

    return { translateX, translateY, scaleX, scaleY };
  }

  function addHeadingAnimationToTimeline(
    introPage: Element,
    timeline: GSAPTimeline
  ) {
    const heading = introPage.querySelector(
      "#" + ANIMATED_ELEMENT_IDS.INTRO_PAGE.HEADING
    )!;

    const { translateX, translateY } = calculateInvertedHeadingState(heading);

    $gsap.set(heading, {
      x: translateX,
      y: translateY,
    });

    timeline.to(
      heading,
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
  }

  function calculateInvertedHeadingState(heading: Element) {
    const headingRect = heading.getBoundingClientRect();

    const lastKnownHomePageHeadingRect =
      pageTransitionAnimationsStore.lastKnownElementRects.homePage.heading!;

    const translateX = lastKnownHomePageHeadingRect.x - headingRect.x;
    const translateY = lastKnownHomePageHeadingRect.y - headingRect.y;

    return { translateX, translateY };
  }

  function addTaglineEnterAnimationToTimeline(
    introPage: Element,
    timeline: GSAPTimeline
  ) {
    const tagline = introPage.querySelector(
      "#" + ANIMATED_ELEMENT_IDS.INTRO_PAGE.TAGLINE
    )!;

    const { translateY } = calculateInvertedTaglineState(tagline);

    $gsap.set(tagline, {
      opacity: 0,
      translateY,
    });

    timeline.to(
      tagline,
      {
        opacity: 1,
        translateY: 0,
        duration: PAGE_TRANSITION_ANIMATION_PROPERTIES.DURATION.total({
          unit: "seconds",
        }),
        ease: PAGE_TRANSITION_ANIMATION_PROPERTIES.EASE_FUNCTION,
      },
      0
    );
  }

  function calculateInvertedTaglineState(tagline: Element) {
    const taglineRect = tagline.getBoundingClientRect();

    const lastKnownHomePageHeadingRect =
      pageTransitionAnimationsStore.lastKnownElementRects.homePage.heading!;

    const translateY = lastKnownHomePageHeadingRect.y - taglineRect.y;

    return { translateY };
  }

  function onIntroPageEnterWithFadeInOnly(
    introPage: Element,
    done: () => void
  ) {
    const timeline = $gsap.timeline().paused(true);
    addHeroAnimationToTimeline(introPage, timeline);
    addWholePageFadeInToTimeline(introPage, timeline);
    timeline.play().then(() => done());
  }

  function addWholePageFadeInToTimeline(
    introPage: Element,
    timeline: GSAPTimeline
  ) {
    const hero = introPage.querySelector(
      "#" + ANIMATED_ELEMENT_IDS.INTRO_PAGE.HERO
    )!;

    touchElementsExceptExcludedElementsAndTheirAncestors(
      introPage,
      [hero],
      (el) => {
        $gsap.set(el, { opacity: 0 });
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
    );
  }

  function onIntroPageLeave(introPage: Element, done: () => void) {
    if (routeTransitionsStore.to === Routes.Home) {
      onIntroPageLeaveToHomePage(introPage, done);
    } else {
      onIntroPageLeaveToAnyPage(introPage, done);
    }
  }

  function onIntroPageLeaveToHomePage(introPage: Element, done: () => void) {
    const timeline = $gsap.timeline().paused(true);
    hideHeading(introPage);
    addTaglineLeaveAnimationToTimeline(introPage, timeline).then(() => {
      timeline.play().then(() => done());
    });
  }

  function hideHeading(introPage: Element) {
    const heading = introPage.querySelector(
      "#" + ANIMATED_ELEMENT_IDS.INTRO_PAGE.HEADING
    );

    $gsap.set(heading, { visibility: "hidden" });
  }

  function addTaglineLeaveAnimationToTimeline(
    introPage: Element,
    timeline: GSAPTimeline
  ): Promise<void> {
    return nextTick(() => {
      const tagline = introPage.querySelector(
        "#" + ANIMATED_ELEMENT_IDS.INTRO_PAGE.TAGLINE
      )!;

      const { translateY } = calculateTaglineLeaveTo(tagline);

      timeline.to(
        tagline,
        {
          opacity: 0,
          translateY,
          duration: PAGE_TRANSITION_ANIMATION_PROPERTIES.DURATION.total({
            unit: "seconds",
          }),
          ease: PAGE_TRANSITION_ANIMATION_PROPERTIES.EASE_FUNCTION,
        },
        0
      );
    });
  }

  function calculateTaglineLeaveTo(tagline: Element) {
    const taglineRect = tagline.getBoundingClientRect();
    const homePageHeadingContainer = document.getElementById(
      ANIMATED_ELEMENT_IDS.HOME_PAGE.HEADING_CONTAINER
    )!;
    const homePageHeadingContainerRect =
      homePageHeadingContainer.getBoundingClientRect();
    const translateY = homePageHeadingContainerRect.y - taglineRect.y;
    return { translateY };
  }

  function onIntroPageLeaveToAnyPage(introPage: Element, done: () => void) {
    const timeline = $gsap.timeline().paused(true);
    addFadeOutAnimationToTimeline(introPage, timeline);
    timeline.play().then(() => done());
  }

  return {
    onBeforeIntroPageLeave,
    onIntroPageEnter,
    onIntroPageLeave,
  };
}
