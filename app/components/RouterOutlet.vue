<template>
  <Transition
    name="page"
    @before-leave="onBeforePageLeave"
    @enter="onPageEnter"
    @leave="onPageLeave"
  >
    <NuxtPage />
  </Transition>
</template>

<script setup lang="ts">
const { onBeforePageLeave, onPageEnter, onPageLeave } =
  usePageTransitionHooks();
</script>

<style>
body:has(.page-enter-active) {
  max-height: 100vh;
  overflow: hidden;
}

.page-enter-from,
.page-enter-active {
  position: fixed;
  top: 0;
  left: 0;
}
</style>
