<template>
  <container-main-component>
    <header-profile-component />
    <main class="content">
      <navigation-component v-if="shouldShowNavigation" />
      <div class="content__section section">
        <slot name="content"></slot>
      </div>
    </main>
    <footer-component />
  </container-main-component>
</template>

<script>
import FooterComponent from "./FooterComponent.vue";
import HeaderProfileComponent from "./HeaderProfileComponent.vue";
import NavigationComponent from "./NavigationComponent.vue";
import "../../assets/vendor/animations.css";
import ContainerMainComponent from "@/components/pages-components/ContainerMainComponent.vue";

export default {
  components: {
    ContainerMainComponent,
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
