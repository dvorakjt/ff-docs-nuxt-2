<template>
  <Transition name="page">
    <NuxtPage />
  </Transition>
</template>

<style scoped>
.page-enter-from,
.page-enter-active {
  position: fixed;
  top: 0;
  left: 0;
}
</style>
