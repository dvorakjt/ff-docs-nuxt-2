interface RouteTransitionStoreState {
  from: string | undefined;
  to: string | undefined;
}

export const useRouteTransitionsStore = defineStore<
  "routeTransitionsStore",
  RouteTransitionStoreState
>("routeTransitionsStore", {
  state: () => ({
    from: undefined,
    to: undefined,
  }),
});
