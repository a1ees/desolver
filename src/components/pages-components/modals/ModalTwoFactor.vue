<template>
  <modal-component :isOpenModal="isOpenModal">
    <template #container>
      <div class="modal__container">
        <div class="modal__content">
          <h1 class="modal__title">Подключите 2-ух факторную аутентификацию</h1>
          <div class="modal__buttons">
            <default-button-component
              class="modal__button"
              @click="this.$emit('plug')"
            >
              Подключить
            </default-button-component>
            <dark-button @click="this.$emit('skip')" class="modal__button">
              Пропустить
            </dark-button>
          </div>
        </div>
      </div>
    </template>
  </modal-component>
</template>

<script>
import DefaultButtonComponent from "../UI/DefaultButtonComponent.vue";
import ModalComponent from "./ModalComponent.vue";
import DarkButton from "../UI/DarkButton.vue";
export default {
  components: {
    ModalComponent,
    DefaultButtonComponent,
    DarkButton,
  },
  props: {
    isOpenModal: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
};
</script>

<style scoped>
.modal__container {
  max-width: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #121214;
  border-radius: 16px;
  padding: 20px;
  box-sizing: border-box;
}
.modal__content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.modal__title {
  padding: 0;
  margin: 0;
  margin-bottom: 24px;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
}

@media screen and (max-width: 450px) {
  .modal__title {
    font-size: 20px;
    line-height: 24px;
  }
}

.modal__buttons {
  display: flex;
  width: 100%;
  flex-direction: column;
}

.modal__button:not(:last-child) {
  margin-bottom: 8px;
}
</style>
