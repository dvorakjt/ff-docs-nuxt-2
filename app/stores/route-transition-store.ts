interface RouteTransitionStoreState {
  from: string | undefined;
  to: string | undefined;
}

export const useRouteTransitionStore = defineStore<
  "routeTransitionStore",
  RouteTransitionStoreState
>("routeTransitionStore", {
  state: () => ({
    from: undefined,
    to: undefined,
  }),
});
