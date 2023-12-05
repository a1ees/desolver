<template>
  <main-component>
    <template v-slot:content>
      <profile-component />
      <div class="section__page-info page-info">
        <div class="page-info__settings settings">
          <div class="settings__element-settings settings__element_password">
            <button class="setting__element-button">Сменить пароль</button>
            <p class="setting__element-text">Смена вашего пароля на новый</p>
          </div>
          <div class="settings__element settings__element_discord">
            <button class="setting__element-button">Привязать Discord</button>
            <p class="setting__element-text">
              Привязка учетной записи к Discord
            </p>
          </div>
          <div class="settings__element settings__element_hwid">
            <button class="setting__element-button">Сбросить HWID</button>
            <p class="setting__element-text">
              Сброс идентификатора устройства раз в 12 часов
            </p>
          </div>
          <div class="settings__element settings__element_two-factor">
            <button class="setting__element-button">
              Включить двухфакторную аутентификацию
            </button>
          </div>
        </div>
      </div>
    </template>
  </main-component>
</template>

<script>
import "../../assets/vendor/fonts/font.css";
import "../../assets/vendor/normalize.css";
import ProfileComponent from "../ProfileComponent.vue";
import MainComponent from "../MainComponent.vue";

export default {
  name: "SettingsPage",
  components: {
    ProfileComponent,
    MainComponent,
  },
};
</script>

<style src="../../assets/styles/settings-page.css" scoped></style>
