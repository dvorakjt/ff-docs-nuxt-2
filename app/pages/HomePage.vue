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
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus
        ultrices lectus, ac pharetra lorem ullamcorper nec. Aliquam ac justo ac
        magna tincidunt facilisis. Nulla ac eros vel urna cursus imperdiet.
        Quisque a bibendum erat. Etiam massa dolor, consequat a finibus non,
        efficitur et massa. Mauris pellentesque ipsum at nulla blandit, quis
        suscipit lacus semper. Mauris dictum blandit justo gravida fermentum. In
        venenatis viverra iaculis. Aliquam dictum id magna eu pharetra.
        Pellentesque in rhoncus erat. Aenean ullamcorper tellus nec nisl
        interdum maximus. Sed velit ipsum, vehicula in tempor vel, venenatis sed
        neque. Proin ac luctus nunc. Quisque vel fermentum nulla. Donec
        tincidunt tristique sollicitudin. Sed nunc nisi, fermentum a turpis vel,
        condimentum hendrerit tellus. Sed vulputate, massa nec lacinia lacinia,
        justo tortor malesuada leo, quis lobortis arcu tortor vitae neque. Ut
        posuere quam eu lacus consequat vulputate. Fusce scelerisque gravida
        eros non congue. Curabitur nec leo vel lacus eleifend rutrum eu ultrices
        magna. Nunc nec ex vitae purus fermentum mollis eu sodales nisi. Fusce
        nec porttitor erat. Aenean faucibus fermentum consectetur. Sed varius
        varius porttitor. Suspendisse mattis arcu vel dolor sagittis, ut egestas
        sem auctor. In dapibus nibh nec risus sollicitudin aliquet. Suspendisse
        sagittis, justo sit amet commodo imperdiet, massa turpis consequat nibh,
        accumsan tempor lectus orci id orci. In sed laoreet felis. Vivamus et
        erat vel dui mattis sagittis a hendrerit diam. Integer eu ligula
        blandit, faucibus dolor id, convallis felis. Praesent viverra nulla
        lacus, a lacinia sem finibus pellentesque. Vivamus ullamcorper libero in
        ligula aliquam sollicitudin. Ut risus leo, elementum vitae eleifend nec,
        fringilla mollis ipsum. Maecenas euismod elementum hendrerit. Donec
        dapibus sapien sed velit ullamcorper, in viverra lectus interdum. Sed
        posuere feugiat justo, eget laoreet odio ultrices id. Cras porttitor
        rhoncus feugiat. Donec lacinia nisi orci, in scelerisque mi tincidunt
        tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quisque a lobortis felis, vitae pellentesque urna. Pellentesque eget
        tortor pulvinar, consequat sapien nec, condimentum sem. Nulla non est
        viverra, consequat eros ut, euismod justo. Duis efficitur rhoncus nisi
        id laoreet. Nunc mi elit, bibendum at tempor ut, lacinia eget dui.
        Aliquam imperdiet ultrices ante et cursus. Sed lorem eros, lobortis vel
        orci a, feugiat vestibulum magna. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Donec laoreet,
        urna quis suscipit porta, magna tellus sagittis justo, ut mattis sapien
        arcu non elit. Integer sit amet magna sed lectus venenatis molestie eu
        volutpat magna. Sed ac interdum quam. Morbi ut nisl a justo pretium
        luctus. In tincidunt ornare tristique. Donec laoreet lacus vel bibendum
        tincidunt. Phasellus magna ex, scelerisque nec erat nec, facilisis
        viverra nibh. Praesent gravida orci justo, eu sagittis ante semper non.
        Morbi lacinia dignissim aliquet. Duis fermentum justo id cursus gravida.
        Vivamus vitae dui laoreet, interdum odio vitae, lobortis eros. Cras
        posuere ex nec erat hendrerit eleifend sed vitae urna. Maecenas egestas
        dui turpis, ullamcorper aliquam nisi scelerisque nec.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus
        ultrices lectus, ac pharetra lorem ullamcorper nec. Aliquam ac justo ac
        magna tincidunt facilisis. Nulla ac eros vel urna cursus imperdiet.
        Quisque a bibendum erat. Etiam massa dolor, consequat a finibus non,
        efficitur et massa. Mauris pellentesque ipsum at nulla blandit, quis
        suscipit lacus semper. Mauris dictum blandit justo gravida fermentum. In
        venenatis viverra iaculis. Aliquam dictum id magna eu pharetra.
        Pellentesque in rhoncus erat. Aenean ullamcorper tellus nec nisl
        interdum maximus. Sed velit ipsum, vehicula in tempor vel, venenatis sed
        neque. Proin ac luctus nunc. Quisque vel fermentum nulla. Donec
        tincidunt tristique sollicitudin. Sed nunc nisi, fermentum a turpis vel,
        condimentum hendrerit tellus. Sed vulputate, massa nec lacinia lacinia,
        justo tortor malesuada leo, quis lobortis arcu tortor vitae neque. Ut
        posuere quam eu lacus consequat vulputate. Fusce scelerisque gravida
        eros non congue. Curabitur nec leo vel lacus eleifend rutrum eu ultrices
        magna. Nunc nec ex vitae purus fermentum mollis eu sodales nisi. Fusce
        nec porttitor erat. Aenean faucibus fermentum consectetur. Sed varius
        varius porttitor. Suspendisse mattis arcu vel dolor sagittis, ut egestas
        sem auctor. In dapibus nibh nec risus sollicitudin aliquet. Suspendisse
        sagittis, justo sit amet commodo imperdiet, massa turpis consequat nibh,
        accumsan tempor lectus orci id orci. In sed laoreet felis. Vivamus et
        erat vel dui mattis sagittis a hendrerit diam. Integer eu ligula
        blandit, faucibus dolor id, convallis felis. Praesent viverra nulla
        lacus, a lacinia sem finibus pellentesque. Vivamus ullamcorper libero in
        ligula aliquam sollicitudin. Ut risus leo, elementum vitae eleifend nec,
        fringilla mollis ipsum. Maecenas euismod elementum hendrerit. Donec
        dapibus sapien sed velit ullamcorper, in viverra lectus interdum. Sed
        posuere feugiat justo, eget laoreet odio ultrices id. Cras porttitor
        rhoncus feugiat. Donec lacinia nisi orci, in scelerisque mi tincidunt
        tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quisque a lobortis felis, vitae pellentesque urna. Pellentesque eget
        tortor pulvinar, consequat sapien nec, condimentum sem. Nulla non est
        viverra, consequat eros ut, euismod justo. Duis efficitur rhoncus nisi
        id laoreet. Nunc mi elit, bibendum at tempor ut, lacinia eget dui.
        Aliquam imperdiet ultrices ante et cursus. Sed lorem eros, lobortis vel
        orci a, feugiat vestibulum magna. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Donec laoreet,
        urna quis suscipit porta, magna tellus sagittis justo, ut mattis sapien
        arcu non elit. Integer sit amet magna sed lectus venenatis molestie eu
        volutpat magna. Sed ac interdum quam. Morbi ut nisl a justo pretium
        luctus. In tincidunt ornare tristique. Donec laoreet lacus vel bibendum
        tincidunt. Phasellus magna ex, scelerisque nec erat nec, facilisis
        viverra nibh. Praesent gravida orci justo, eu sagittis ante semper non.
        Morbi lacinia dignissim aliquet. Duis fermentum justo id cursus gravida.
        Vivamus vitae dui laoreet, interdum odio vitae, lobortis eros. Cras
        posuere ex nec erat hendrerit eleifend sed vitae urna. Maecenas egestas
        dui turpis, ullamcorper aliquam nisi scelerisque nec.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus
        ultrices lectus, ac pharetra lorem ullamcorper nec. Aliquam ac justo ac
        magna tincidunt facilisis. Nulla ac eros vel urna cursus imperdiet.
        Quisque a bibendum erat. Etiam massa dolor, consequat a finibus non,
        efficitur et massa. Mauris pellentesque ipsum at nulla blandit, quis
        suscipit lacus semper. Mauris dictum blandit justo gravida fermentum. In
        venenatis viverra iaculis. Aliquam dictum id magna eu pharetra.
        Pellentesque in rhoncus erat. Aenean ullamcorper tellus nec nisl
        interdum maximus. Sed velit ipsum, vehicula in tempor vel, venenatis sed
        neque. Proin ac luctus nunc. Quisque vel fermentum nulla. Donec
        tincidunt tristique sollicitudin. Sed nunc nisi, fermentum a turpis vel,
        condimentum hendrerit tellus. Sed vulputate, massa nec lacinia lacinia,
        justo tortor malesuada leo, quis lobortis arcu tortor vitae neque. Ut
        posuere quam eu lacus consequat vulputate. Fusce scelerisque gravida
        eros non congue. Curabitur nec leo vel lacus eleifend rutrum eu ultrices
        magna. Nunc nec ex vitae purus fermentum mollis eu sodales nisi. Fusce
        nec porttitor erat. Aenean faucibus fermentum consectetur. Sed varius
        varius porttitor. Suspendisse mattis arcu vel dolor sagittis, ut egestas
        sem auctor. In dapibus nibh nec risus sollicitudin aliquet. Suspendisse
        sagittis, justo sit amet commodo imperdiet, massa turpis consequat nibh,
        accumsan tempor lectus orci id orci. In sed laoreet felis. Vivamus et
        erat vel dui mattis sagittis a hendrerit diam. Integer eu ligula
        blandit, faucibus dolor id, convallis felis. Praesent viverra nulla
        lacus, a lacinia sem finibus pellentesque. Vivamus ullamcorper libero in
        ligula aliquam sollicitudin. Ut risus leo, elementum vitae eleifend nec,
        fringilla mollis ipsum. Maecenas euismod elementum hendrerit. Donec
        dapibus sapien sed velit ullamcorper, in viverra lectus interdum. Sed
        posuere feugiat justo, eget laoreet odio ultrices id. Cras porttitor
        rhoncus feugiat. Donec lacinia nisi orci, in scelerisque mi tincidunt
        tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quisque a lobortis felis, vitae pellentesque urna. Pellentesque eget
        tortor pulvinar, consequat sapien nec, condimentum sem. Nulla non est
        viverra, consequat eros ut, euismod justo. Duis efficitur rhoncus nisi
        id laoreet. Nunc mi elit, bibendum at tempor ut, lacinia eget dui.
        Aliquam imperdiet ultrices ante et cursus. Sed lorem eros, lobortis vel
        orci a, feugiat vestibulum magna. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Donec laoreet,
        urna quis suscipit porta, magna tellus sagittis justo, ut mattis sapien
        arcu non elit. Integer sit amet magna sed lectus venenatis molestie eu
        volutpat magna. Sed ac interdum quam. Morbi ut nisl a justo pretium
        luctus. In tincidunt ornare tristique. Donec laoreet lacus vel bibendum
        tincidunt. Phasellus magna ex, scelerisque nec erat nec, facilisis
        viverra nibh. Praesent gravida orci justo, eu sagittis ante semper non.
        Morbi lacinia dignissim aliquet. Duis fermentum justo id cursus gravida.
        Vivamus vitae dui laoreet, interdum odio vitae, lobortis eros. Cras
        posuere ex nec erat hendrerit eleifend sed vitae urna. Maecenas egestas
        dui turpis, ullamcorper aliquam nisi scelerisque nec.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus
        ultrices lectus, ac pharetra lorem ullamcorper nec. Aliquam ac justo ac
        magna tincidunt facilisis. Nulla ac eros vel urna cursus imperdiet.
        Quisque a bibendum erat. Etiam massa dolor, consequat a finibus non,
        efficitur et massa. Mauris pellentesque ipsum at nulla blandit, quis
        suscipit lacus semper. Mauris dictum blandit justo gravida fermentum. In
        venenatis viverra iaculis. Aliquam dictum id magna eu pharetra.
        Pellentesque in rhoncus erat. Aenean ullamcorper tellus nec nisl
        interdum maximus. Sed velit ipsum, vehicula in tempor vel, venenatis sed
        neque. Proin ac luctus nunc. Quisque vel fermentum nulla. Donec
        tincidunt tristique sollicitudin. Sed nunc nisi, fermentum a turpis vel,
        condimentum hendrerit tellus. Sed vulputate, massa nec lacinia lacinia,
        justo tortor malesuada leo, quis lobortis arcu tortor vitae neque. Ut
        posuere quam eu lacus consequat vulputate. Fusce scelerisque gravida
        eros non congue. Curabitur nec leo vel lacus eleifend rutrum eu ultrices
        magna. Nunc nec ex vitae purus fermentum mollis eu sodales nisi. Fusce
        nec porttitor erat. Aenean faucibus fermentum consectetur. Sed varius
        varius porttitor. Suspendisse mattis arcu vel dolor sagittis, ut egestas
        sem auctor. In dapibus nibh nec risus sollicitudin aliquet. Suspendisse
        sagittis, justo sit amet commodo imperdiet, massa turpis consequat nibh,
        accumsan tempor lectus orci id orci. In sed laoreet felis. Vivamus et
        erat vel dui mattis sagittis a hendrerit diam. Integer eu ligula
        blandit, faucibus dolor id, convallis felis. Praesent viverra nulla
        lacus, a lacinia sem finibus pellentesque. Vivamus ullamcorper libero in
        ligula aliquam sollicitudin. Ut risus leo, elementum vitae eleifend nec,
        fringilla mollis ipsum. Maecenas euismod elementum hendrerit. Donec
        dapibus sapien sed velit ullamcorper, in viverra lectus interdum. Sed
        posuere feugiat justo, eget laoreet odio ultrices id. Cras porttitor
        rhoncus feugiat. Donec lacinia nisi orci, in scelerisque mi tincidunt
        tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quisque a lobortis felis, vitae pellentesque urna. Pellentesque eget
        tortor pulvinar, consequat sapien nec, condimentum sem. Nulla non est
        viverra, consequat eros ut, euismod justo. Duis efficitur rhoncus nisi
        id laoreet. Nunc mi elit, bibendum at tempor ut, lacinia eget dui.
        Aliquam imperdiet ultrices ante et cursus. Sed lorem eros, lobortis vel
        orci a, feugiat vestibulum magna. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Donec laoreet,
        urna quis suscipit porta, magna tellus sagittis justo, ut mattis sapien
        arcu non elit. Integer sit amet magna sed lectus venenatis molestie eu
        volutpat magna. Sed ac interdum quam. Morbi ut nisl a justo pretium
        luctus. In tincidunt ornare tristique. Donec laoreet lacus vel bibendum
        tincidunt. Phasellus magna ex, scelerisque nec erat nec, facilisis
        viverra nibh. Praesent gravida orci justo, eu sagittis ante semper non.
        Morbi lacinia dignissim aliquet. Duis fermentum justo id cursus gravida.
        Vivamus vitae dui laoreet, interdum odio vitae, lobortis eros. Cras
        posuere ex nec erat hendrerit eleifend sed vitae urna. Maecenas egestas
        dui turpis, ullamcorper aliquam nisi scelerisque nec.
      </p>
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
