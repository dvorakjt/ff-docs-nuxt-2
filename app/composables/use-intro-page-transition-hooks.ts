import {
  ANIMATED_ELEMENT_IDS,
  PAGE_TRANSITION_ANIMATION_PROPERTIES,
} from "~/constants";
import { touchElementsExceptExcludedElementsAndTheirAncestors } from "~/util/touch-elements-except-excluded-elements-and-their-ancestors";

interface IntroPageTransitionHooks {
  onBeforeIntroPageLeave: (introPage: Element) => void;
  onIntroPageEnterFromHomePage: (introPage: Element, done: () => void) => void;
  onIntroPageEnterFromAnyPage: (introPage: Element, done: () => void) => void;
}

export function useIntroPageTransitionHooks() {
  const { $gsap } = useNuxtApp();
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

  function onIntroPageEnterFromAnyPage(introPage: Element, done: () => void) {
    const timeline = $gsap.timeline().paused(true);

    addHeroAnimationToTimeline(introPage, timeline);

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

  // function addFadeInAnimationToTimeline(introPage: Element) {
  //   const hero = introPage
  //   const heading = introPage.querySelector(
  //     "#" + ANIMATED_ELEMENT_IDS.INTRO_PAGE.HEADING
  //   )!;

  //   touchElementsExceptExcludedElementsAndTheirAncestors(
  //     introPage,
  //     [heading],
  //     (el) => {
  //       $gsap.set(el, { opacity: 0 });

  //       pageTransitionAnimationsStore.pageEnterTimeline!.to(
  //         el,
  //         {
  //           opacity: 1,
  //           duration: PAGE_TRANSITION_ANIMATION_PROPERTIES.DURATION.total({
  //             unit: "seconds",
  //           }),
  //         },
  //         0
  //       );
  //     }
  //   );
  // }

  return {
    onBeforeIntroPageLeave,
    onIntroPageEnterFromAnyPage,
  };
}
