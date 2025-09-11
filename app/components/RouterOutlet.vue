<template>
  <Transition name="page" @before-leave="onBeforeLeave">
    <NuxtPage />
  </Transition>
</template>

<script setup lang="ts">
import { ANIMATED_ELEMENT_IDS } from "~/constants";

function onBeforeLeave(el: Element) {
  console.log(el.querySelector("#" + ANIMATED_ELEMENT_IDS.HOME_PAGE.HEADING));
}
</script>

<style scoped>
.page-enter-from,
.page-enter-active {
  position: fixed;
  top: 0;
  left: 0;
}
</style>
