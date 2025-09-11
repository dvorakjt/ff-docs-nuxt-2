<template>
  <TheHeader />
  <RouterOutlet />
  <NuxtRouteAnnouncer />
</template>

<style>
* {
  box-sizing: border-box;
  font-family: "Roboto Flex";
  color: white;
  margin: 0;
  padding: 0;
  transform-origin: top left;
}

html {
  scrollbar-gutter: stable;
}

body {
  background-color: black;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Monomaniac One";
}

.page-enter-from,
.page-enter-active,
.page-leave-active {
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
}
</style>
