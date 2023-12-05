<template>
  <div class="page">
    <div class="page__container">
      <header-profile-component />
      <main class="content">
        <navigation-component />
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

export default {
  components: {
    FooterComponent,
    NavigationComponent,
    HeaderProfileComponent,
  },
  name: "MainComponent",
};
</script>

<style src="../assets/styles/main-component.css" scoped></style>
