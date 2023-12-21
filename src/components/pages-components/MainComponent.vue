<template>
  <div class="page">
    <div class="page__container">
      <header-profile-component />
      <main class="content">
        <navigation-component v-if="shouldShowNavigation" />
        <div class="content__section section">
          <slot name="content"></slot>
        </div>
      </main>
      <footer-component />
    </div>
  </div>
</template>

<script>
import FooterComponent from "./FooterComponent.vue";
import HeaderProfileComponent from "./HeaderProfileComponent.vue";
import NavigationComponent from "./NavigationComponent.vue";
import "../../assets/vendor/animations.css";

export default {
  components: {
    FooterComponent,
    NavigationComponent,
    HeaderProfileComponent,
  },
  name: "MainComponent",
  data() {
    return {
      shouldShowNavigation: true,
    };
  },
  mounted() {
    this.updateScreenWidth();
    window.addEventListener("resize", this.updateScreenWidth);
  },
  methods: {
    updateScreenWidth() {
      this.shouldShowNavigation = window.innerWidth > 1260;
    },
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateScreenWidth);
  },
};
</script>

<style scoped>
.page {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  background-color: #121214;
  min-height: 100vh;
  position: relative;
  width: 100%;
  color: #fff;
  z-index: 1;
}

.page__container {
  z-index: 2;
  max-width: 1776px;
  margin: 0 auto;
}

@media screen and (max-width: 1800px) {
  .page__container {
    padding: 0px 16px;
  }
}

@media screen and (max-width: 1440px) {
  .page__container {
    padding: 0;
  }
}

@media screen and (max-width: 900px) {
  .page__container {
    max-width: 704px;
  }
}

@media screen and (max-width: 710px) {
  .page__container {
    max-width: 550px;
  }
}

@media screen and (max-width: 580px) {
  .page__container {
    max-width: 450px;
  }
}

@media screen and (max-width: 360px) {
  .page__container {
    max-width: 328px;
  }
}

@media screen and (max-width: 480px) {
  .page__container {
    padding: 0px 16px;
  }
}

.content {
  display: flex;
}

@media screen and (max-width: 1260px) {
  .content {
    justify-content: center;
  }
}

/*-----------------------*/

.content__section {
  max-width: 888px;
  width: 100%;
}

@media screen and (max-width: 1440px) {
  .content__section {
    max-width: 923px;
    width: 100%;
  }
}

@media screen and (max-width: 1420px) {
  .content__section {
    max-width: 704px;
    width: 100%;
  }
}

@media screen and (max-width: 1260px) {
  .content__section {
    padding: 0;
  }
}

@media screen and (max-width: 708px) {
  .content__section {
    max-width: 500px;
    width: 100%;
  }
}

@media screen and (max-width: 500px) {
  .content__section {
    max-width: 328px;
    width: 100%;
  }
}
</style>
