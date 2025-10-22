import { Routes} from "~/generated/routes";
import { preserveScrollPosition } from "~/util/preserve-scroll-position";
import { useGenericPageTransitionHooks } from "./use-generic-page-transition-hooks";
import type { BackgroundMode } from "~/model";

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

  const { onPageEnter: onOtherPageEnter, onPageLeave: onOtherPageLeave } =
    useGenericPageTransitionHooks();

  function onBeforePageLeave(page: Element) {
    preserveScrollPosition(page as HTMLElement);

    pageTransitionAnimationsStore.showHeader =
      routeTransitionsStore.to !== Routes.Index;

    if (routeTransitionsStore.from === Routes.Index) {
      onBeforeIntroPageLeave(page);
    } else if (routeTransitionsStore.from === Routes.Home) {
      onBeforeHomePageLeave(page);
    }
  }

  function onPageEnter(page: Element, done: () => void) {
    switch (routeTransitionsStore.to) {
      case Routes.Index:
        onIntroPageEnter(page, done);
        setBackgroundMode("collapsed");
        return;
      case Routes.Home:
        onHomePageEnter(page, done);
        break;
      default:
        onOtherPageEnter(page, done);
        break;
    }

    setBackgroundMode("expanded");
  }

  function onPageLeave(page: Element, done: () => void) {
    switch (routeTransitionsStore.from) {
      case Routes.Index:
        onIntroPageLeave(page, done);
        break;
      case Routes.Home:
        onHomePageLeave(page, done);
        break;
      default:
        onOtherPageLeave(page, done);
        break;
    }
  }

  function setBackgroundMode(backgroundMode: BackgroundMode) {
    pageTransitionAnimationsStore.backgroundMode = backgroundMode;
  }

  return {
    onBeforePageLeave,
    onPageEnter,
    onPageLeave,
  };
}
