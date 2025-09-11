interface PageTransitionHooks {
  onBeforePageLeave: (page: Element) => void;
  onPageEnter: (page: Element, done: () => void) => void;
}

export function usePageTransitionHooks(): PageTransitionHooks {
  const routeTransitionsStore = useRouteTransitionsStore();
  const pageTransitionAnimationsStore = usePageTransitionAnimationsStore();

  const { onBeforeIntroPageLeave, onIntroPageEnterFromAnyPage } =
    useIntroPageTransitionHooks();

  const { onBeforeHomePageLeave, onHomePageEnterFromIntroPage } =
    useHomePageTransitionHooks();

  function onBeforePageLeave(page: Element) {
    pageTransitionAnimationsStore.showHeader = routeTransitionsStore.to !== "/";

    if (routeTransitionsStore.from === "/") {
      onBeforeIntroPageLeave(page);
    } else if (routeTransitionsStore.from === "/home") {
      onBeforeHomePageLeave(page);
    }
  }

  function onPageEnter(page: Element, done: () => void) {
    if (routeTransitionsStore.to === "/") {
      onIntroPageEnterFromAnyPage(page, done);
    } else if (
      routeTransitionsStore.to === "/home" &&
      routeTransitionsStore.from === "/"
    ) {
      onHomePageEnterFromIntroPage(page, done);
    }
  }

  return {
    onBeforePageLeave,
    onPageEnter,
  };
}
