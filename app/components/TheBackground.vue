<template>
  <canvas ref="canvas" :style="canvasStyles"></canvas>
  <NuxtImg
    ref="ff-logo"
    src="/images/background-images/logo-355x300.png"
    preload
    hidden
  />
</template>

<script setup lang="ts">
import {
  ANIMATED_ELEMENT_IDS,
  COLLAPSED_LOGO_DIMENSIONS,
  SPACING,
  PAGE_TRANSITION_ANIMATION_PROPERTIES,
} from "~/constants";

const pageTransitionAnimationsStore = usePageTransitionAnimationsStore();
let progress = 1;
let interval: ReturnType<typeof setInterval> | null = null;

const canvasStyles = {
  top: `${SPACING.PAGE_PADDING_TOP}px`,
  left: `${SPACING.PAGE_PADDING_LEFT}px`,
  width: `calc(100vw - ${
    SPACING.PAGE_PADDING_LEFT + SPACING.PAGE_PADDING_RIGHT
  }px)`,
  height: `calc(100vh - ${
    SPACING.PAGE_PADDING_TOP + SPACING.PAGE_PADDING_BOTTOM
  }px)`,
};

const canvasRef = useTemplateRef("canvas");
const logoRef = useTemplateRef("ff-logo");

watch(
  () => pageTransitionAnimationsStore.backgroundMode,
  () => {
    resetAnimation();
  }
);

onMounted(() => {
  resizeCanvasAndDrawBackground();
  window.addEventListener("resize", resizeCanvasAndDrawBackground);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", resizeCanvasAndDrawBackground);
});

const rateMS = 20;

const totalDuration = PAGE_TRANSITION_ANIMATION_PROPERTIES.DURATION.total({
  unit: "milliseconds",
});

const percentOfTotalDuration = rateMS / totalDuration;

function resetAnimation() {
  // might not be needed
  if (interval) {
    clearInterval(interval);
  }

  progress = 0;
  drawBackground();

  interval = setInterval(() => {
    progress = Math.min(progress + percentOfTotalDuration, 1);
    drawBackground();
    if (interval && progress >= 1) {
      clearInterval(interval);
    }
  }, rateMS);
}

function resizeCanvasAndDrawBackground() {
  resizeCanvas();
  drawBackground();
}

function resizeCanvas() {
  const canvas = canvasRef.value!;
  canvas.width =
    window.innerWidth - SPACING.PAGE_PADDING_LEFT - SPACING.PAGE_PADDING_RIGHT;
  canvas.height =
    window.innerHeight - SPACING.PAGE_PADDING_TOP - SPACING.PAGE_PADDING_BOTTOM;
}

function drawBackground() {
  prepareCanvas();
  paintCanvas();
}

function prepareCanvas() {
  const canvas = canvasRef.value!;
  const context = canvas.getContext("2d")!;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = "low";
  const opacity = calculateOpacity();
  context.globalAlpha = opacity;
}

function calculateOpacity() {
  const mode = pageTransitionAnimationsStore.backgroundMode;

  const opacity =
    mode === "collapsed" ? 0.3 + 0.7 * progress : 1 - 0.7 * progress;

  return opacity;
}

function paintCanvas() {
  const mode = pageTransitionAnimationsStore.backgroundMode;
  if (mode === "collapsed" && progress >= 1) {
    return;
  }

  let width: number, height: number, heroRect: DOMRect;

  if (shouldPaintStaticBackground()) {
    width = COLLAPSED_LOGO_DIMENSIONS.WIDTH;
    height = COLLAPSED_LOGO_DIMENSIONS.HEIGHT;
  } else {
    heroRect = getHeroRect();
    const logoSize = calculateLogoSize(heroRect);
    width = logoSize.width;
    height = logoSize.height;
  }

  const logo = getLogoElement();
  const context = canvasRef.value!.getContext("2d")!;
  const numColumns = calculateBackgroundColumnCount();
  const numRows = calculateBackgroundRowCount();

  for (let column = 0; column < numColumns; column++) {
    const adjustedNumRows = (column & 1) === 1 ? numRows - 1 : numRows;

    for (let row = 0; row < adjustedNumRows; row++) {
      if (row === 0 && column === 0) {
        continue;
      }

      let x: number, y: number;

      if (shouldPaintStaticBackground()) {
        const logoPosition = calculateStaticLogoPosition(row, column);
        x = logoPosition.x;
        y = logoPosition.y;
      } else {
        const logoPosition = calculateAdjustedLogoPosition(
          row,
          column,
          heroRect!
        );
        x = logoPosition.x;
        y = logoPosition.y;
      }

      drawLogo(logo, context, x, y, width, height);
    }
  }
}

function calculateLogoSize(heroRect: DOMRect) {
  const mode = pageTransitionAnimationsStore.backgroundMode;

  let width: number, height: number;

  if (mode === "collapsed") {
    width =
      COLLAPSED_LOGO_DIMENSIONS.WIDTH +
      (heroRect.width - COLLAPSED_LOGO_DIMENSIONS.WIDTH) * progress;

    height =
      COLLAPSED_LOGO_DIMENSIONS.HEIGHT +
      (heroRect.height - COLLAPSED_LOGO_DIMENSIONS.HEIGHT) * progress;
  } else {
    width =
      heroRect.width -
      (heroRect.width - COLLAPSED_LOGO_DIMENSIONS.WIDTH) * progress;

    height =
      heroRect.height -
      (heroRect.height - COLLAPSED_LOGO_DIMENSIONS.HEIGHT) * progress;
  }

  // round for better performance (prevent sub-pixel rendering)
  width = Math.round(width);
  height = Math.round(height);

  return {
    width,
    height,
  };
}

function shouldPaintStaticBackground() {
  const mode = pageTransitionAnimationsStore.backgroundMode;
  return mode === "expanded" && progress >= 1;
}

function getLogoElement() {
  return logoRef.value!.$el;
}

function calculateBackgroundColumnCount() {
  const canvas = canvasRef.value!;
  const numColumns = Math.ceil(
    canvas.width /
      (COLLAPSED_LOGO_DIMENSIONS.WIDTH + SPACING.BACKGROUND_IMAGE_GUTTER_X)
  );
  return numColumns;
}

function calculateBackgroundRowCount() {
  const canvas = canvasRef.value!;
  let numRows = Math.ceil(
    canvas.height /
      (COLLAPSED_LOGO_DIMENSIONS.HEIGHT + SPACING.BACKGROUND_IMAGE_GUTTER_Y)
  );
  return numRows;
}

function calculateStaticLogoPosition(row: number, column: number) {
  let x =
    column *
    (COLLAPSED_LOGO_DIMENSIONS.WIDTH + SPACING.BACKGROUND_IMAGE_GUTTER_X);

  let y =
    row *
      (COLLAPSED_LOGO_DIMENSIONS.HEIGHT + SPACING.BACKGROUND_IMAGE_GUTTER_Y) +
    (column % 2 === 1
      ? Math.round(
          (COLLAPSED_LOGO_DIMENSIONS.HEIGHT +
            SPACING.BACKGROUND_IMAGE_GUTTER_Y) /
            2
        )
      : 0);

  // round for better performance (prevent sub-pixel rendering)
  x = Math.round(x);
  y = Math.round(y);

  return { x, y };
}

function calculateAdjustedLogoPosition(
  row: number,
  column: number,
  heroRect: DOMRect
) {
  const mode = pageTransitionAnimationsStore.backgroundMode;
  let { x, y } = calculateStaticLogoPosition(row, column);

  if (mode === "collapsed") {
    x = x + (heroRect.x - x) * progress;

    y = y + (heroRect.y - y) * progress;
  } else {
    x = heroRect.x - (heroRect.x - x) * progress;

    y = heroRect.y - (heroRect.y - y) * progress;
  }

  // round for better performance (prevent sub-pixel rendering)
  x = Math.round(x);
  y = Math.round(y);

  return { x, y };
}

function getHeroRect() {
  const mode = pageTransitionAnimationsStore.backgroundMode;
  if (mode === "collapsed") {
    const hero = document.getElementById(
      ANIMATED_ELEMENT_IDS.INTRO_PAGE.HERO_CONTAINER
    )!;
    return hero.getBoundingClientRect();
  }

  const lastKnownHeroRect =
    pageTransitionAnimationsStore.lastKnownElementRects.introPage.hero!;
  return lastKnownHeroRect;
}

function drawLogo(
  logo: HTMLImageElement,
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number
) {
  context.drawImage(logo, x, y, width, height);
}
</script>

<style scoped>
canvas {
  position: fixed;
  z-index: -1;
}
</style>
