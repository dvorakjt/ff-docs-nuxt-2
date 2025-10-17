<template>
  <main>
    <section class="hero">
      <div :id="ANIMATED_ELEMENT_IDS.HOME_PAGE.HEADING_CONTAINER">
        <h1 :id="ANIMATED_ELEMENT_IDS.HOME_PAGE.HEADING" class="heading">
          Fully Formed
        </h1>
      </div>
      <div
        :id="ANIMATED_ELEMENT_IDS.HOME_PAGE.TAGLINE_CONTAINER"
        class="tagline-container"
      >
        <p class="tagline">
          Fully Formed provides powerful, type-safe, design-agnostic form state
          management for React with TypeScript.
        </p>
        <div class="hero-buttons">
          <BaseButton variant="primary">Get Started</BaseButton>
          <BaseButton variant="secondary">Learn More</BaseButton>
        </div>
      </div>
    </section>
    <section>
      <h2>Fully Formed Is</h2>
      <div>
        <h3>Fully Type-Safe</h3>
        <div>
          <p>
            Forms are aware of the names of their fields and the types of values
            each of those fields hold. Forms use this information to construct a
            type representing their own value, making it possible to verify that
            the structure of the data collected by the form matches what is
            expected by the backend.
          </p>
        </div>
      </div>
      <div>
        <h3>Always Atomic</h3>
        <div>
          <p>
            The value and validity of each field are always set simultaneously,
            and the value and validity of the form is derived from those of its
            fields.
          </p>
        </div>
      </div>
      <div>
        <h3>Defined Declaratively</h3>
        <div>
          <p>
            Declarative syntax improves code readability and makes complex forms
            easier to implement. And, because the logic required for form state
            management is all taken care of by Fully Formed, components can
            focus solely on presenting and stylizing form controls.
          </p>
        </div>
      </div>
      <div>
        <h3>Powerful and Flexible</h3>
        <div>
          <p>
            Fully Formed allows you to easily implement any kind of form that
            you can imagine: One field can control another, fields can be
            grouped together and validated as a unit, the values of fields can
            be transformed or omitted, forms can be nested within other forms,
            and much more.
          </p>
        </div>
      </div>
      <div>
        <h3>Headless and Composable</h3>
        <div>
          <p>
            In addition to providing the tools to structure your form data and
            define what makes it valid, Fully Formed provides numerous custom
            hooks that allow components to react to the state of your form,
            opening up endless possibilities in terms of visual design.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ROUTES, ANIMATED_ELEMENT_IDS } from "~/constants";

definePageMeta({
  path: ROUTES.HOME_PAGE,
});
</script>

<style scoped>
.hero {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.heading {
  text-transform: uppercase;
  font-size: 45px;
  text-align: center;
  margin-bottom: 50px;
}

.tagline-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* todo: add media queries */
.tagline {
  margin-bottom: 70px;
  font-size: 30px;
  font-weight: 500;
  width: 45%;
  text-align: center;
}

.hero-buttons > button:first-child {
  margin-right: 100px;
}

@media screen and (min-width: 344px) {
  .heading {
    font-size: 50px;
  }
}

@media screen and (min-width: 360px) {
  .heading {
    font-size: 55px;
  }
}

@media screen and (min-width: 390px) {
  .heading {
    font-size: 60px;
  }
}

@media screen and (min-width: 428px) {
  .heading {
    font-size: 65px;
  }
}

@media screen and (min-width: 540px) {
  .heading {
    font-size: 75px;
  }
}

@media screen and (min-width: 700px) {
  .heading {
    font-size: 95px;
  }
}

@media screen and (min-width: 744px) {
  .heading {
    font-size: 100px;
  }
}

@media screen and (min-width: 768px) {
  .heading {
    font-size: 105px;
  }
}

@media screen and (min-width: 834px) {
  .heading {
    font-size: 115px;
  }
}

@media screen and (min-width: 912px) {
  .heading {
    font-size: 130px;
  }
}

@media screen and (min-width: 1024px) {
  .heading {
    font-size: 150px;
  }
}

@media screen and (orientation: landscape) {
  .heading {
    font-size: 45px;
    margin-bottom: 10px;
  }
}

@media screen and (orientation: landscape) and (min-height: 375px) {
  .heading {
    font-size: 50px;
  }
}

@media screen and (orientation: landscape) and (min-height: 402px) {
  .heading {
    font-size: 55px;
  }
}

@media screen and (orientation: landscape) and (min-height: 428) {
  .heading {
    font-size: 60px;
  }
}

@media screen and (orientation: landscape) and (min-height: 430) {
  .heading {
    font-size: 65px;
  }
}

@media screen and (orientation: landscape) and (min-height: 540) {
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
  .heading {
    font-size: 100px;
    margin-bottom: 30px;
  }
}

@media screen and (orientation: landscape) and (min-height: 768px) {
  .heading {
    font-size: 110px;
  }
}

@media screen and (orientation: landscape) and (min-height: 834px) {
  .heading {
    font-size: 120px;
  }
}

@media screen and (orientation: landscape) and (min-height: 912px) {
  .heading {
    font-size: 130px;
  }
}

@media screen and (orientation: landscape) and (min-height: 1080px) {
  .heading {
    font-size: 145px;
  }
}

@media screen and (orientation: landscape) and (min-height: 1080px) and (min-width: 1920px) {
  .heading {
    font-size: 150px;
  }
}
</style>
