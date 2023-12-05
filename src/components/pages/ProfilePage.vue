<template>
  <main-component>
    <template #content>
      <profile-component />
      <div class="section__page">
        <h1 class="section__page-title">Desolver 1.0</h1>
        <div class="section__page-info">
          <div class="section__page-suppsystem suppsystem">
            <img
              src="../../assets/images/logo/windows-icon.svg"
              alt="icon"
              class="suppsystem__icon"
            />
            <p class="suppsystem__text">XP, Vista, 7, 8, 10</p>
          </div>
          <p class="section__page-text">
            Важный момент перед загрузкой Desolver —
            <a href="" class="section__page-link section__page-link_manual"
              >инструкция</a
            >, с ней необхдимо ознакомиться. Также установите
            <a href="" class="section__page-link section__page-link_visual"
              >Visual C++ 15 x64.</a
            >
          </p>
          <button class="section__page-button">
            <div class="section__page-button-content">
              <img
                src="../../assets/images/logo/download.svg"
                alt=""
                class="section__page-button-icon"
              />
              <p class="section__page-button-text">Загрузить</p>
            </div>
          </button>
        </div>
      </div>
    </template>
  </main-component>
</template>

<script>
import "../../assets/vendor/fonts/font.css";
import "../../assets/vendor/normalize.css";
import MainComponent from "../MainComponent.vue";
import ProfileComponent from "../ProfileComponent.vue";

export default {
  components: {
    MainComponent,
    ProfileComponent,
  },
  name: "ProfilePage",
};
</script>

<style src="../../assets/styles/profile-page.css" scoped></style>
