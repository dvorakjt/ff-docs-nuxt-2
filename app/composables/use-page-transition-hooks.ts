import { ROUTES } from "~/constants";
import { preserveScrollPosition } from "~/util/preserve-scroll-position";

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

  const { onBeforeHomePageLeave, onHomePageEnter, onHomePageLeave } =
    useHomePageTransitionHooks();

  function onBeforePageLeave(page: Element) {
    preserveScrollPosition(page as HTMLElement);

    pageTransitionAnimationsStore.showHeader =
      routeTransitionsStore.to !== ROUTES.INTRO_PAGE;

    if (routeTransitionsStore.from === ROUTES.INTRO_PAGE) {
      onBeforeIntroPageLeave(page);
    } else if (routeTransitionsStore.from === ROUTES.HOME_PAGE) {
      onBeforeHomePageLeave(page);
    }
  }

  function onPageEnter(page: Element, done: () => void) {
    switch (routeTransitionsStore.to) {
      case ROUTES.INTRO_PAGE:
        onIntroPageEnter(page, done);
        break;
      case ROUTES.HOME_PAGE:
        onHomePageEnter(page, done);
        break;
      default:
        done();
    }
  }

  function onPageLeave(page: Element, done: () => void) {
    switch (routeTransitionsStore.from) {
      case ROUTES.INTRO_PAGE:
        onIntroPageLeave(page, done);
        break;
      case ROUTES.HOME_PAGE:
        onHomePageLeave(page, done);
        break;
      default:
        done();
    }
  }

  return {
    onBeforePageLeave,
    onPageEnter,
    onPageLeave,
  };
}
