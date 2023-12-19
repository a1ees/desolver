<template>
  <main-component>
    <template #content>
      <profile-component />
      <div class="section__page">
        <h1 v-if="subscribe" class="section__page-title">Desolver 1.0</h1>
        <div v-if="subscribe" class="section__page-info">
          <div class="section__page-suppsystem suppsystem">
            <windows-icon />
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
          <white-border-button class="section__page-button">
            <div class="section__page-button-content">
              <download-icon class="section__page-button-icon" />
              <p class="section__page-button-text">Загрузить</p>
            </div>
          </white-border-button>
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
import WindowsIcon from "@/components/icons/WindowsIcon.vue";
import DownloadIcon from "@/components/icons/DownloadIcon.vue";
import WhiteBorderButton from "@/components/pages-components/UI/WhiteBorderButton.vue";

export default {
  components: {
    WhiteBorderButton,
    DownloadIcon,
    WindowsIcon,
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
  padding: 0 0 4px 0;
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
  gap: 8px;
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
  max-width: 752px;
  padding: 32px 0;
}

@media screen and (max-width: 1440px) {
  .section__page-button {
    max-width: 656px;
  }
}

@media screen and (max-width: 360px) {
  .section__page-button {
    max-width: 328px;
  }
}

.section__page-button-content {
  display: flex;
  justify-content: center;
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
