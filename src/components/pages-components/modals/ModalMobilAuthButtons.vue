<template>
  <div class="buttons">
    <default-button-component
      class="button button_autoriz"
      @click="$router.push('/login')"
    >
      Авторизация
    </default-button-component>
    <default-button-component
      class="button button_reg"
      @click="$router.push('/register')"
    >
      Регистрация
    </default-button-component>
  </div>
</template>

<script>
import DefaultButtonComponent from "../UI/DefaultButtonComponent.vue";
export default {
  components: { DefaultButtonComponent },
};
</script>

<style scoped>
.buttons {
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: #121214;
}
.button:not(:last-child) {
  margin-bottom: 8px;
}
</style>
