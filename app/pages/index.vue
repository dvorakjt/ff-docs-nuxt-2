<template>
  <main>
    <div
      :id="ANIMATED_ELEMENT_IDS.INTRO_PAGE.HERO_CONTAINER"
      class="hero-container"
    >
      <img
        :id="ANIMATED_ELEMENT_IDS.INTRO_PAGE.HERO"
        class="hero"
        src="/images/ff-logo.svg"
        alt="Fully Formed logo"
      />
    </div>
    <div :id="ANIMATED_ELEMENT_IDS.INTRO_PAGE.HEADING_CONTAINER">
      <h1 :id="ANIMATED_ELEMENT_IDS.INTRO_PAGE.HEADING" class="heading">
        Fully Formed
      </h1>
    </div>
    <p :id="ANIMATED_ELEMENT_IDS.INTRO_PAGE.TAGLINE" class="tagline">
      Flawless forms,
      <NuxtLink to="/home">just add water.</NuxtLink>
    </p>
  </main>
</template>

<script setup lang="ts">
import { ANIMATED_ELEMENT_IDS } from "~/constants";
</script>

<style scoped>
.page-leave-active .hero {
  visibility: hidden;
}

main {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* Keep the FF icon above the navbar during transitions */
  z-index: 2;
}

.hero-container {
  margin-bottom: 20px;
}

.hero {
  width: 230px;
  height: 195px;
}

.heading {
  text-transform: uppercase;
  font-size: 45px;
  margin-bottom: 20px;
  text-align: center;
}

.tagline {
  font-size: 15px;
}

.tagline > a {
  color: #7acdc8;
  text-decoration: none;
}

.tagline > a:hover {
  text-decoration: underline;
}

@media screen and (min-width: 344px) {
  .hero {
    width: 260px;
    height: 200px;
  }

  .heading {
    font-size: 50px;
  }
}

@media screen and (min-width: 360px) {
  .hero {
    width: 280px;
    height: 237px;
  }

  .heading {
    font-size: 55px;
  }
}

@media screen and (min-width: 390px) {
  .hero {
    width: 300px;
    height: 254px;
  }

  .heading {
    font-size: 60px;
  }
}

@media screen and (min-width: 428px) {
  .hero {
    width: 340px;
    height: 289px;
  }

  .heading {
    font-size: 65px;
  }

  .tagline {
    font-size: 17px;
  }
}

@media screen and (min-width: 540px) {
  .hero {
    width: 350px;
    height: 294px;
  }

  .heading {
    font-size: 75px;
  }

  .tagline {
    font-size: 18px;
  }
}

@media screen and (min-width: 700px) {
  .hero {
    width: 460px;
    height: 387px;
  }

  .heading {
    font-size: 95px;
  }
}

@media screen and (min-width: 744px) {
  .hero {
    width: 500px;
    height: 421px;
  }

  .heading {
    font-size: 100px;
  }
}

@media screen and (min-width: 768px) {
  .hero {
    width: 530px;
    height: 447px;
  }

  .heading {
    font-size: 105px;
  }

  .tagline {
    font-size: 20px;
  }
}

@media screen and (min-width: 834px) {
  .hero {
    width: 600px;
    height: 505px;
  }

  .heading {
    font-size: 115px;
  }
}

@media screen and (min-width: 912px) {
  .hero {
    width: 670px;
    height: 563px;
  }

  .heading {
    font-size: 130px;
  }
}

@media screen and (min-width: 1024px) {
  .hero {
    width: 780px;
    height: 656px;
  }

  .heading {
    font-size: 150px;
  }
}

@media screen and (orientation: landscape) {
  .hero-container {
    margin-bottom: 10px;
  }

  .hero {
    width: 200px;
    height: 169px;
  }

  .heading {
    font-size: 45px;
    margin-bottom: 10px;
  }

  .tagline {
    font-size: 18px;
  }
}

@media screen and (orientation: landscape) and (min-height: 375px) {
  .hero {
    width: 250px;
    height: 212px;
  }

  .heading {
    font-size: 50px;
  }
}

@media screen and (orientation: landscape) and (min-height: 402px) {
  .hero {
    width: 255px;
    height: 216px;
  }

  .heading {
    font-size: 55px;
  }
}

@media screen and (orientation: landscape) and (min-height: 428) {
  .hero {
    width: 260px;
    height: 220px;
  }

  .heading {
    font-size: 60px;
  }
}

@media screen and (orientation: landscape) and (min-height: 430) {
  .hero {
    width: 265px;
    height: 225px;
  }

  .heading {
    font-size: 65px;
  }
}

@media screen and (orientation: landscape) and (min-height: 440) {
  .hero {
    width: 270px;
    height: 229px;
  }
}

@media screen and (orientation: landscape) and (min-height: 540) {
  .hero-container {
    margin-bottom: 20px;
  }

  .hero {
    width: 300px;
    height: 254px;
  }

  .heading {
    margin-bottom: 20px;
  }
}

@media screen and (orientation: landscape) and (max-width: 720) and (min-height: 540) {
  .heading {
    font-size: 50px;
  }
}

@media screen and (orientation: landscape) and (min-height: 700px) {
  .hero-container {
    margin-bottom: 30px;
  }

  .hero {
    width: 450px;
    height: 380px;
  }

  .heading {
    font-size: 100px;
    margin-bottom: 30px;
  }

  .tagline {
    font-size: 20px;
  }
}

@media screen and (orientation: landscape) and (min-height: 768px) {
  .hero {
    width: 500px;
    height: 422px;
  }

  .heading {
    font-size: 110px;
  }
}

@media screen and (orientation: landscape) and (min-height: 834px) {
  .hero {
    width: 550px;
    height: 464px;
  }

  .heading {
    font-size: 120px;
  }
}

@media screen and (orientation: landscape) and (min-height: 912px) {
  .hero {
    width: 600px;
    height: 506px;
  }

  .heading {
    font-size: 130px;
  }
}

@media screen and (orientation: landscape) and (min-height: 1080px) {
  .hero {
    width: 650px;
    height: 548px;
  }

  .heading {
    font-size: 145px;
  }

  .tagline {
    font-size: 25px;
  }
}

@media screen and (orientation: landscape) and (min-height: 1080px) and (min-width: 1920px) {
  .hero {
    width: 700px;
    height: 590px;
  }

  .heading {
    font-size: 150px;
  }
}
</style>
