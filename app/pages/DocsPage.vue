<template>
  <main>
    <h1>[DOCS PAGE]</h1>
  </main>
</template>

<script setup lang="ts">
import { ROUTES } from "~/constants";

definePageMeta({
  path: ROUTES.DOCS_PAGE,
});
</script>

<style scoped>
main {
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 100px;
}
</style>
