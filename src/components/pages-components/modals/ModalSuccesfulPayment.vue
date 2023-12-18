<template>
  <modal-component v-if="isOpenModal">
    <template #container>
      <div class="modal__container">
        <div class="modal__content">
          <succes-payment-icon />
          <h1 class="modal__title">Успешная оплата!</h1>
          <p class="modal__text">
            Вы успешно оплатили подписку на
            <span class="modal__span">Desolver</span>
          </p>
          <default-button-component
            class="modal__button"
            :textContent="'Отлично'"
            @click="this.$emit('close')"
          />
        </div>
      </div>
    </template>
  </modal-component>
</template>

<script>
import DefaultButtonComponent from "../UI/DefaultButtonComponent.vue";
import ModalComponent from "./ModalComponent.vue";
import SuccesPaymentIcon from "@/components/icons/SuccesPaymentIcon.vue";
export default {
  components: {
    SuccesPaymentIcon,
    ModalComponent,
    DefaultButtonComponent,
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
  max-width: 350px;
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
  color: #b2b6ff;
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

.modal__span {
  color: #b2b6ff;
}

.modal__button:not(:last-child) {
  margin-bottom: 8px;
}
</style>
