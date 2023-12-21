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
  overflow: hidden;
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
/*-----------------------*/

.header {
  display: flex;
  justify-content: space-between;
  padding-top: 32px;
  margin-bottom: 65px;
}

@media screen and (max-width: 1440px) {
  .header {
    padding: 32px 72px 0px 72px;
  }
}

@media screen and (max-width: 900px) {
  .header {
    padding: 32px 0px 0px 0px;
  }
}

.header__logo {
  display: none;
}
.header__logo-full {
  display: block;
  width: 163px;
  height: 42px;
}

@media screen and (max-width: 450px) {
  .header__logo-full {
    display: none;
  }
  .header__logo {
    display: block;
    width: 27px;
    height: 42px;
  }
}

.header__profile {
  display: flex;
  align-items: center;
}
.header__avatar {
  width: 32px;
  height: 32px;
  margin-right: 12px;
}
.header__login {
  color: #828289;
  font-size: 20px;
  line-height: 24px;
  padding: 0;
  margin: 0;
}

@media screen and (max-width: 1260px) {
  .header__login {
    margin-right: 24px;
  }
}

.header__button {
  display: none;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 16px 32px;
  border-radius: 6px;
  background-image: url("../../assets/images/logo/burger.svg");
  background-repeat: no-repeat;
  background-size: 20px 20px;
  background-position: center;
  background-color: #b2b6ff;
}

@media screen and (max-width: 1260px) {
  .header__button {
    display: block;
  }
}

/*-----------------------*/

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
  min-width: 888px;
  padding-right: 72px;
}

@media screen and (max-width: 1440px) {
  .content__section {
    min-width: 923px;
  }
}

@media screen and (max-width: 1420px) {
  .content__section {
    min-width: 704px;
  }
}

@media screen and (max-width: 1260px) {
  .content__section {
    padding: 0;
  }
}

@media screen and (max-width: 708px) {
  .content__section {
    min-width: 500px;
  }
}

@media screen and (max-width: 500px) {
  .content__section {
    min-width: 328px;
  }
}
</style>
