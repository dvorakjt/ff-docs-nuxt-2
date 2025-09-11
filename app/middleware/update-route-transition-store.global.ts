import { useRouteTransitionStore } from "~/stores/route-transition-store";

export default defineNuxtRouteMiddleware((to, from) => {
  const { $pinia } = useNuxtApp();
  const routeTransitionStore = useRouteTransitionStore($pinia);
  routeTransitionStore.to = to.path;
  routeTransitionStore.from = from.path;
});
