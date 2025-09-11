import { useRouteTransitionsStore } from "~/stores/route-transitions-store";

export default defineNuxtRouteMiddleware((to, from) => {
  const { $pinia } = useNuxtApp();
  const routeTransitionStore = useRouteTransitionsStore($pinia);
  routeTransitionStore.to = to.path;
  routeTransitionStore.from = from.path;
});
