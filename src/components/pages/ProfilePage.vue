<template>
  <main-component>
    <template #content>
      <profile-component />
      <div class="section__page">
        <h1 v-if="subscribe" class="section__page-title">Desolver 1.0</h1>
        <div v-if="subscribe" class="section__page-info">
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
              <svg
                class="section__page-button-icon"
                width="13"
                height="19"
                viewBox="0 0 13 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.09987 12.4597L5.09987 0L7.89987 0L7.89987 12.4597L10.4785 9.70915L12.5212 11.6242L6.49987 18.047L0.478516 11.6242L2.52122 9.70915L5.09987 12.4597Z"
                  fill="white"
                />
              </svg>

              <p class="section__page-button-text">Загрузить</p>
            </div>
          </button>
        </div>
        <div v-else>
          <div class="section__page-unsub page-unsub">
            <p class="page-unsub__text">
              У вас нет доступа к бета-тестированию
            </p>
            <p class="page-unsub__text-link">
              Подать заявку можно через
              <a href="/" class="support__link">Discord</a>
            </p>
          </div>
        </div>
      </div>
    </template>
  </main-component>
</template>

<script>
import "../../assets/vendor/fonts/font.css";
import "../../assets/vendor/normalize.css";
import MainComponent from "../pages-components/MainComponent.vue";
import ProfileComponent from "../pages-components/ProfileComponent.vue";

export default {
  components: {
    MainComponent,
    ProfileComponent,
  },
  name: "ProfilePage",
  data() {
    return {
      subscribe: false,
    };
  },
  mounted() {
    this.subscribe = JSON.parse(localStorage.getItem("user"))[0].subscribe;
  },
};
</script>

<style scoped>
.section__page {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 420px;
  margin-bottom: 236px;
  margin-top: 128px;
}

@media screen and (max-width: 1440px) {
  .section__page {
    margin-bottom: 62px;
  }
}

@media screen and (max-width: 360px) {
  .section__page {
    margin-bottom: 46px;
    margin-top: 64px;
  }
}
.section__page-title {
  padding: 0px 0px 4px 0px;
  margin: 0;
  font-size: 48px;
  line-height: 57px;
  text-align: center;
}

@media screen and (max-width: 360px) {
  .section__page-title {
    font-size: 32px;
    line-height: 38px;
  }
}

.section__page-info {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.section__page-info::before {
  content: "";
  width: 300px;
  height: 366px;
  border: 1px solid #828289;
  position: absolute;
  top: 0;
  left: 0;
  border-right: none;
  border-bottom: none;
}
.section__page-info::after {
  content: "";
  width: 300px;
  height: 366px;
  border: 1px solid #828289;
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  border-left: none;
  border-bottom: none;
}

@media screen and (max-width: 708px) {
  .section__page-info::after {
    display: none;
  }
  .section__page-info::before {
    display: none;
  }
}

.suppsystem {
  padding: 4px 0px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
}
.suppsystem__icon {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}
.suppsystem__text {
  padding: 0;
  margin: 0;
  text-align: center;
  font-size: 22px;
  line-height: 26px;
  color: #b2b6ff;
}
.section__page-text {
  padding: 0;
  margin: 0px 0px 32px 0px;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  max-width: 752px;
  color: #8c8e94;
  z-index: 10;
}
.section__page-link {
  color: #b2b6ff;
}
.section__page-button {
  all: unset;
  border: 2px solid #fff;
  border-radius: 96px;
  z-index: 10;
  transition: background-color 0.3s, color 0.3s;
}

.section__page-button .section__page-button-icon path {
  transition: fill 0.3s;
}

.section__page-button:hover {
  cursor: pointer;
  color: #121214;
  background-color: #fff;
}

.section__page-button:hover .section__page-button-icon path {
  fill: #121214;
}

.section__page-button-content {
  padding: 32px 305px;
  display: flex;
  justify-content: center;
}

@media screen and (max-width: 1200px) {
  .section__page-button-content {
    padding: 32px 257px;
  }
}

@media screen and (max-width: 708px) {
  .section__page-button-content {
    padding: 32px 122px;
  }
}

@media screen and (max-width: 360px) {
  .section__page-button-content {
    padding: 32px 100px;
  }
}

.section__page-button-icon {
  margin-right: 16px;
}

.section__page-button-text {
  padding: 0;
  margin: 0;
}

.page-unsub {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 20px;
  line-height: 24px;
}
.page-unsub__text {
  margin: 0px 0px 16px 0px;
  padding: 0;
}
.page-unsub__text-link {
  margin: 0;
  padding: 0;
  color: #8c8e94;
}
.support__link {
  color: #b2b6ff;
}
</style>
