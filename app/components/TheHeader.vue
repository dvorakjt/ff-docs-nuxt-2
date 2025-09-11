<template>
  <Transition
    name="header"
    @before-leave="onBeforeHeaderLeave"
    @enter="onHeaderEnter"
  >
    <header :style="headerStyles" v-if="showHeader">
      <div class="navbar-left">
        <NuxtLink :to="ROUTES.INTRO_PAGE">
          <NuxtImg
            :id="ANIMATED_ELEMENT_IDS.HEADER.LOGO"
            src="/images/ff-logo.svg"
            alt="Fully Formed logo"
            :style="logoStyles"
            class="logo"
          />
        </NuxtLink>
        <nav class="primary-navigation animated">
          <ul>
            <li>
              <NuxtLink :to="ROUTES.HOME_PAGE">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="ROUTES.DOCS_PAGE">Docs</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/apireference">API Reference</NuxtLink>
            </li>
            <form class="search-bar">
              <NuxtImg
                src="/images/magnifying-glass.svg"
                alt=""
                class="magnifying-glass"
              />
              <input type="search" placeholder="Search..." />
            </form>
          </ul>
        </nav>
      </div>
      <div class="navbar-right animated">
        <nav class="secondary-navigation">
          <ul>
            <li>
              <NuxtImg
                src="/images/github-logo.svg"
                alt="Github icon"
                class="icon"
              />
            </li>
            <li>
              <NuxtImg src="/images/npm-logo.svg" alt="NPM icon" class="icon" />
            </li>
            <li>
              <NuxtImg
                src="/images/buy-me-a-coffee-logo.svg"
                alt="Buy Me a Coffee icon"
                class="icon"
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </Transition>
</template>

<script setup lang="ts">
import {
  ROUTES,
  PAGE_PADDING,
  ANIMATED_ELEMENT_IDS,
  COLLAPSED_LOGO_DIMENSIONS,
} from "~/constants";

const headerStyles = {
  padding: `0 ${PAGE_PADDING.LEFT}px`,
};

const logoStyles = {
  width: COLLAPSED_LOGO_DIMENSIONS.WIDTH + "px",
  height: COLLAPSED_LOGO_DIMENSIONS.HEIGHT + "px",
  marginTop: PAGE_PADDING.TOP + "px",
};

const pageTransitionAnimationsStore = usePageTransitionAnimationsStore();
const { showHeader } = storeToRefs(pageTransitionAnimationsStore);

const { onBeforeHeaderLeave, onHeaderEnter } = useHeaderTransitionHooks();
</script>

<style scoped>
@keyframes slide-down {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}

.header-enter-active {
  animation: 0.4s linear 1 forwards slide-down;
}

.header-leave-active {
  animation: 0.4s linear reverse 1 forwards slide-down;
}

.header-leave-active .logo {
  visibility: hidden;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
}

header,
.navbar-left,
.navbar-right,
ul {
  display: flex;
  align-items: center;
}

header {
  justify-content: space-between;
  background-color: #00000099;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

a {
  font-family: "Monomaniac One";
  font-size: 30px;
  text-decoration: none;
}

a.router-link-active {
  text-decoration: underline;
}

.logo {
  margin-bottom: 12px;
  transform-origin: top left;
}

.primary-navigation {
  margin-left: 64px;
}

.primary-navigation > ul {
  display: flex;
  align-items: center;
}

.primary-navigation > ul > li:has(+ li),
.primary-navigation > ul > li:has(+ form) {
  margin-right: 40px;
}

.search-bar {
  border: 1px solid #7acdc8;
  border-radius: 7px;
  background-color: #000000;
  display: flex;
  align-items: center;
  width: 220px;
  margin-top: 4px;
}

.magnifying-glass {
  height: 20px;
  width: auto;
  margin: 8px;
}

.search-bar > input {
  background-color: #000000;
  border: none;
  flex: 1;
}

.search-bar > input,
.search-bar > input::placeholder {
  font-size: 15px;
  color: #7acdc8;
}

.search-bar > input:focus {
  outline: none;
}

.search-bar > input::-webkit-search-cancel-button {
  display: none;
}

.secondary-navigation {
  margin-top: 6px;
}

.secondary-navigation > ul {
  justify-content: flex-end;
}

.secondary-navigation .icon {
  width: 37px;
  height: 37px;
}

.secondary-navigation li:has(+ li) {
  margin-right: 30px;
}
</style>
