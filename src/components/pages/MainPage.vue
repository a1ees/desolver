<template>
  <div class="page">
    <div class="page__decor"></div>
    <div class="page__container">
      <header class="header">
        <img
          src="../../assets/images/logo/header-logo.svg"
          alt="логотип"
          class="header__logo"
        />
        <img
          src="../../assets/images/logo/header-logo-full.svg"
          alt="logo"
          class="header__logo_full"
        />
        <div class="header__buttons">
          <button
            class="header__button button header__button_autoriz"
            @click="$router.push('/login')"
          >
            Авторизация
          </button>
          <button
            class="header__button button header__button_reg"
            @click="$router.push('/register')"
          >
            Регистрация
          </button>
          <button class="header__button button header__button_burger">
            ...
          </button>
        </div>
      </header>
      <main class="content">
        <h2 class="content__title title">Desolver<br />Cheat CS:GO</h2>
        <p class="content__subtitle">
          Мы находимся на финальном этапе разработки чита - сейчас идет
          бета-тестирование.<br />
          Мы принимаем заявки на участие в бета тесте, если вы хотите получить
          доступ,<br />
          зарегистрируйтесь и подайте заявку.
        </p>
        <div class="content__video">
          <img
            src="../../assets/images/main-video.png"
            alt="видео"
            class="content__video-image"
          />
          <a
            href="https://youtu.be/cUD4TaWbS-g"
            class="content__video-button"
            target="_blank"
          ></a>
        </div>
        <footer-component />
      </main>
    </div>
  </div>
</template>

<script>
import "../../assets/vendor/fonts/font.css";
import "../../assets/vendor/normalize.css";
import FooterComponent from "../FooterComponent.vue";

export default {
  components: { FooterComponent },
  name: "MainPage",
  methods: {},
};
</script>

<style src="../../assets/styles/main-page.css" scoped></style>
