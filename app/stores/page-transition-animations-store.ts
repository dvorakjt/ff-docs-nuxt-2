import type { BackgroundMode } from "~/model";

interface PageTransitionAnimationsStoreState {
  showHeader: boolean;
  backgroundMode: BackgroundMode;
  pageEnterTimeline: GSAPTimeline | null;
  lastKnownElementRects: {
    header: {
      logo: DOMRect | null;
    };
    introPage: {
      hero: DOMRect | null;
      heading: DOMRect | null;
    };
    homePage: {
      heading: DOMRect | null;
    };
  };
}

export const usePageTransitionAnimationsStore = defineStore<
  "pageTransitionAnimationsStore",
  PageTransitionAnimationsStoreState
>("pageTransitionAnimationsStore", {
  state: () => {
    const route = useRoute();

    return {
      showHeader: route.path !== "/",
      backgroundMode: route.path === "/" ? "collapsed" : "expanded",
      pageEnterTimeline: null,
      lastKnownElementRects: {
        header: {
          logo: null,
        },
        introPage: {
          hero: null,
          heading: null,
        },
        homePage: {
          heading: null,
        },
      },
    };
  },
});
