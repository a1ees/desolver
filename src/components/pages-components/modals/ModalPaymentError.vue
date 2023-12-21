<template>
  <modal-component :isOpenModal="isOpenModal">
    <template #container>
      <div class="modal__container">
        <div class="modal__content">
          <error-payment-icon />
          <h1 class="modal__title">Оплата отклонена</h1>
          <p class="modal__text">
            К сожалению, оплата была отклонена. <br />Если вы считаете что это
            ошибка, то обратитесь в техническую поддержку.
          </p>
          <default-button-component
            class="modal__button"
            @click="this.$emit('close')"
          >
            Попробовать ещё раз
          </default-button-component>
          <dark-button @click="this.$emit('close')" class="modal__button">
            Отмена
          </dark-button>
        </div>
      </div>
    </template>
  </modal-component>
</template>

<script>
import DefaultButtonComponent from "../UI/DefaultButtonComponent.vue";
import ModalComponent from "./ModalComponent.vue";
import DarkButton from "../UI/DarkButton.vue";
import ErrorPaymentIcon from "@/components/icons/ErrorPaymentIcon.vue";
export default {
  components: {
    ErrorPaymentIcon,
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

.modal__logo {
  margin-bottom: 24px;
}
.modal__title {
  padding: 0;
  margin: 0;
  margin-bottom: 8px;
  color: #ff334a;
  font-size: 24px;
  line-height: 29px;
}
.modal__text {
  padding: 0;
  margin: 0;
  margin-bottom: 24px;
  text-align: center;
  font-size: 16px;
  line-height: 19px;
  color: #8c8e94;
}

.modal__button:not(:last-child) {
  margin-bottom: 8px;
}
</style>
