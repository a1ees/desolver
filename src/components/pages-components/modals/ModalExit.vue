<template>
  <modal-component v-if="isOpenModal">
    <template #container>
      <div class="modal__container">
        <div class="modal__content">
          <h1 class="modal__title">Вы уверены что хотите выйти?</h1>
          <div class="modal__buttons">
            <default-button-component
              class="modal__button"
              :textContent="'Нет, отмена'"
              @click="this.$emit('noExit')"
            />
            <dark-button
              @click="this.$emit('exit')"
              class="modal__button"
              :textContent="'Да, выйти'"
            />
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
      required: true,
      default: false,
    },
  },
};
</script>

<style scoped>
.modal__container {
  max-width: 700px;
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
  justify-content: space-between;
  gap: 16px;
}

@media screen and (max-width: 450px) {
  .modal__buttons {
    flex-direction: column;
  }
}
</style>
