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
          <default-button-component
            class="header__button header__button_autoriz"
            @click="$router.push('/login')"
          >
            Авторизация
          </default-button-component>
          <default-button-component
            class="header__button header__button_reg"
            @click="$router.push('/register')"
          >
            Регистрация
          </default-button-component>
          <default-button-component
            class="header__button header__button_burger"
            @click="isOpenButtonsModal = !isOpenButtonsModal"
          >
            ...
          </default-button-component>
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
    <modal-mobil-auth-buttons v-if="isOpenButtonsModal" />
  </div>
</template>

<script>
import "../../assets/vendor/fonts/font.css";
import "../../assets/vendor/normalize.css";
import FooterComponent from "../pages-components/FooterComponent.vue";
import DefaultButtonComponent from "../pages-components/UI/DefaultButtonComponent.vue";
import ModalMobilAuthButtons from "../pages-components/modals/ModalMobilAuthButtons.vue";

export default {
  components: {
    FooterComponent,
    DefaultButtonComponent,
    ModalMobilAuthButtons,
  },
  name: "MainPage",
  methods: {},
  data() {
    return {
      isOpenButtonsModal: false,
    };
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

.page__decor {
  width: 100%;
  height: 1145px;
  background-image: url("../../assets/images/decor.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  z-index: -1;
}

@media screen and (max-width: 1440px) {
  .page__decor {
    max-width: 1691px;
    height: 984px;
  }
}

@media screen and (max-width: 768px) {
  .page__decor {
    display: none;
  }
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

.header {
  display: flex;
  justify-content: space-between;
  padding-top: 32px;
  z-index: 2;
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

.header__logo_full {
  width: 163px;
  height: 42px;
}

@media screen and (max-width: 360px) {
  .header__logo {
    display: block;
    width: 27px;
    height: 42px;
  }

  .header__logo_full {
    display: none;
  }
}

.header__buttons {
  display: flex;
  font-size: 16px;
  line-height: 19px;
  color: #121214;
  gap: 10px;
}

.header__button_burger {
  display: none;
  font-weight: bold;
}

@media screen and (max-width: 580px) {
  .header__button_autoriz {
    display: none;
  }
  .header__button_reg {
    display: none;
  }
  .header__button_burger {
    display: block;
  }
}

/* -------------------------*/

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 64px 0px 0px 0px;
}

@media screen and (max-width: 360px) {
  .content {
    margin: 36px 0px 0px 0px;
  }
}

.title {
  padding: 0;
  margin: 0;
}

.content__title {
  font-size: 64px;
  line-height: 77px;
  color: #fff;
  text-align: center;
}

@media screen and (max-width: 360px) {
  .content__title {
    font-size: 36px;
    line-height: 43px;
  }
}

.content__subtitle {
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  padding: 0;
  color: #8c8e94;
  margin: 24px 0px 84px 0px;
}

@media screen and (max-width: 360px) {
  .content__subtitle {
    font-size: 14px;
    line-height: 17px;
  }
}

.content__video {
  position: relative;
  margin-bottom: 103px;
}

@media screen and (max-width: 768px) {
  .content__video {
    margin-bottom: 139px;
  }
}

.content__video-image {
  display: block;
  width: 100%;
  height: auto;
  z-index: 1;
}
.content__video-button {
  position: absolute;
  width: 64px;
  height: 64px;
  top: 42%;
  left: 45%;
  z-index: 2;
  background-image: url("../../assets/images/logo/video-logo.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

@media screen and (max-width: 480px) {
  .content__video-button {
    width: 42px;
    height: 42px;
    background-size: cover;
  }
}
</style>
