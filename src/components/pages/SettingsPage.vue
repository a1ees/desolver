<template>
  <main-component>
    <template v-slot:content>
      <profile-component />
      <div class="section__page-info page-info">
        <div class="page-info__settings settings">
          <div class="settings__element-settings settings__element_password">
            <white-border-button @click="isOpenModalChangePassword = true"
              >Сменить пароль</white-border-button
            >
            <p class="setting__element-text">Смена вашего пароля на новый</p>
          </div>
          <div class="settings__element settings__element_discord">
            <white-border-button>Привязать Discord</white-border-button>
            <p class="setting__element-text">
              Привязка учетной записи к Discord
            </p>
          </div>
          <div class="settings__element settings__element_hwid">
            <white-border-button>Сбросить HWID</white-border-button>
            <p class="setting__element-text">
              Сброс идентификатора устройства раз в 12 часов
            </p>
          </div>
          <div class="settings__element settings__element_two-factor">
            <white-border-button @click="isOpenModalTwoFactor = true"
              >Включить двухфакторную аутентификацию</white-border-button
            >
          </div>
        </div>
      </div>
      <modal-two-factor
        @skip="isOpenModalTwoFactor = false"
        @plug="plugTwoFactor"
        :isOpenModal="isOpenModalTwoFactor"
      />
      <modal-two-factor-auth
        @close="isOpenModalTwoFactorAuth = false"
        :isOpenModal="isOpenModalTwoFactorAuth"
      />
      <modal-change-password
        @close="isOpenModalChangePassword = false"
        :isOpenModal="isOpenModalChangePassword"
      />
    </template>
  </main-component>
</template>

<script>
import "../../assets/vendor/fonts/font.css";
import "../../assets/vendor/normalize.css";
import ProfileComponent from "../pages-components/ProfileComponent.vue";
import MainComponent from "../pages-components/MainComponent.vue";
import ModalTwoFactor from "../pages-components/modals/ModalTwoFactor.vue";
import ModalTwoFactorAuth from "../pages-components/modals/ModalTwoFactorAuth.vue";
import ModalChangePassword from "../pages-components/modals/ModalChangePassword.vue";
import WhiteBorderButton from "@/components/pages-components/UI/WhiteBorderButton.vue";

export default {
  name: "SettingsPage",
  components: {
    WhiteBorderButton,
    ProfileComponent,
    MainComponent,
    ModalTwoFactor,
    ModalTwoFactorAuth,
    ModalChangePassword,
  },
  data() {
    return {
      isOpenModalTwoFactor: false,
      isOpenModalTwoFactorAuth: false,
      isOpenModalChangePassword: false,
    };
  },
  methods: {
    plugTwoFactor() {
      this.isOpenModalTwoFactorAuth = true;
      this.isOpenModalTwoFactor = false;
    },
  },
};
</script>

<style scoped>
.section__page-info {
  margin: 72px 0px 183px 0px;
}

.settings {
  display: grid;
  max-width: 888px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "password discord hwid"
    "two-factor two-factor two-factor";
  grid-column-gap: 24px;
  grid-row-gap: 32px;
}

@media screen and (max-width: 768px) {
  .settings {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
      "password discord"
      "hwid hwid"
      "two-factor two-factor";
  }
}

@media screen and (max-width: 360px) {
  .settings {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas:
      "password"
      "hwid"
      "discord"
      "two-factor";
    grid-row-gap: 12px;
  }
}

.settings__element_password {
  grid-area: password;
}

.setting__element-text {
  padding: 0;
  margin: 16px 0px 0px 0px;
  font-size: 16px;
  line-height: 19px;
  color: #fff;
  opacity: 40%;
  text-align: center;
}

@media screen and (max-width: 360px) {
  .setting__element-text {
    margin: 8px 0px 0px 0px;
  }
}

.settings__element_discord {
  grid-area: discord;
}
.settings__element_hwid {
  grid-area: hwid;
}
.settings__element_two-factor {
  grid-area: two-factor;
}
</style>
