import { ROUTES } from "~/constants";

interface PageTransitionHooks {
  onBeforePageLeave: (page: Element) => void;
  onPageEnter: (page: Element, done: () => void) => void;
  onPageLeave: (page: Element, done: () => void) => void;
}

export function usePageTransitionHooks(): PageTransitionHooks {
  const routeTransitionsStore = useRouteTransitionsStore();
  const pageTransitionAnimationsStore = usePageTransitionAnimationsStore();

  const { onBeforeIntroPageLeave, onIntroPageEnter, onIntroPageLeave } =
    useIntroPageTransitionHooks();

  const { onBeforeHomePageLeave, onHomePageEnterFromIntroPage } =
    useHomePageTransitionHooks();

  function onBeforePageLeave(page: Element) {
    pageTransitionAnimationsStore.showHeader =
      routeTransitionsStore.to !== ROUTES.INTRO_PAGE;

    if (routeTransitionsStore.from === ROUTES.INTRO_PAGE) {
      onBeforeIntroPageLeave(page);
    } else if (routeTransitionsStore.from === ROUTES.HOME_PAGE) {
      onBeforeHomePageLeave(page);
    }
  }

  function onPageEnter(page: Element, done: () => void) {
    if (routeTransitionsStore.to === ROUTES.INTRO_PAGE) {
      onIntroPageEnter(page, done);
    } else if (
      routeTransitionsStore.to === ROUTES.HOME_PAGE &&
      routeTransitionsStore.from === ROUTES.INTRO_PAGE
    ) {
      onHomePageEnterFromIntroPage(page, done);
    }
  }

  function onPageLeave(page: Element, done: () => void) {
    if (routeTransitionsStore.from === ROUTES.INTRO_PAGE) {
      onIntroPageLeave(page, done);
    } else {
      done();
    }
  }

  return {
    onBeforePageLeave,
    onPageEnter,
    onPageLeave,
  };
}
