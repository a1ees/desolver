<template>
  <modal-component :isOpenModal="isOpen">
    <template #container>
      <div class="modal__container">
        <div class="modal__content">
          <div class="modal__header">
            <h1 class="modal__title">
              Покупка <span class="modal__title-name">Desolver</span> на
              {{ transformSub.days }}
            </h1>
            <button class="modal__close-button" @click="closeModal">
              <close-modal-icon />
            </button>
          </div>
          <div class="modal__info">
            <div class="modal__payment-method payment-method">
              <h2 class="payment-method__title">Способ оплаты</h2>
              <div class="payment-method__buttons">
                <dark-button
                  v-for="(method, index) in paymentMethods"
                  :key="index"
                  class="payment-method__button"
                  :class="{
                    'payment-method__button_select':
                      selectedPaymentMethod === method,
                  }"
                  @click="selectPaymentMethod(method)"
                >
                  {{ method }}
                </dark-button>
              </div>
            </div>
            <div class="modal__payment payment">
              <h2 class="payment__title">Пользователь</h2>
              <input-component :placeholder="userName" class="payment__input" />
              <div class="payment__profile">
                <img
                  src="../../../assets/images/logo/fullsize-avatar.png"
                  alt=""
                  class="payment__avatar"
                />
                <p class="payment__login">{{ userName }}</p>
              </div>
              <default-button-component @click="confirmPay">
                Оплатить {{ transformSub.cost }}
              </default-button-component>
            </div>
          </div>
        </div>
      </div>
    </template>
  </modal-component>
</template>
<script>
import DarkButton from "../UI/DarkButton.vue";
import DefaultButtonComponent from "../UI/DefaultButtonComponent.vue";
import InputComponent from "../UI/InputComponent.vue";
import ModalComponent from "./ModalComponent.vue";
import CloseModalIcon from "@/components/icons/CloseModalIcon.vue";
export default {
  components: {
    CloseModalIcon,
    InputComponent,
    ModalComponent,
    DefaultButtonComponent,
    DarkButton,
  },
  props: {
    isOpen: {
      required: true,
      default: false,
    },
    selectSub: {
      required: true,
    },
  },
  data() {
    return {
      userName: "",
      selectedPaymentMethod: "Карта МИР",
      paymentMethods: ["Карта МИР", "Карта", "QIWI", "Криптовалюта"],
    };
  },
  mounted() {
    this.userName = JSON.parse(localStorage.getItem("user"))[0].login;
  },
  computed: {
    transformSub() {
      if (this.isOpen) {
        const transformSub = { ...this.selectSub };
        transformSub.days = transformSub.days.split(" ").slice(1).join(" ");
        return transformSub;
      } else {
        return {};
      }
    },
  },
  methods: {
    selectPaymentMethod(method) {
      this.selectedPaymentMethod = method;
    },
    closeModal() {
      this.$emit("close");
    },
    confirmPay() {
      this.$emit("confirmPay", this.selectSub.totalDays);
    },
  },
  watch: {
    isOpen() {
      this.selectedPaymentMethod = this.paymentMethods[0];
    },
  },
};
</script>

<style scoped>
.modal__container {
  max-width: 622px;
  width: 100%;
  display: flex;
  justify-content: center;
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
}

.modal__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
}

.modal__title {
  padding: 0;
  margin: 0;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
}

@media screen and (max-width: 470px) {
  .modal__title {
    text-align: start;
    font-size: 20px;
    line-height: 24px;
    max-width: 172px;
  }
}

.modal__title-name {
  color: #b2b6ff;
}

.modal__close-button {
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
}

.modal__close-button:hover {
  cursor: pointer;
}

.modal__info {
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 470px) {
  .modal__info {
    flex-direction: column;
  }
}

.payment-method {
  width: 100%;
  max-width: 200px;
}

@media screen and (max-width: 470px) {
  .payment-method {
    max-width: 100%;
  }
}

.payment-method__title {
  padding: 0;
  margin: 0;
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 400;
}
.payment-method__buttons {
  display: flex;
  flex-direction: column;
}

.payment-method__button:not(:last-child) {
  margin-bottom: 8px;
}

.payment-method__button_select {
  color: #121214;
  background-color: #b2b6ff;
}

.payment-method__button_select:hover {
  background-color: #b2b6ff;
  cursor: default;
}

.payment {
  max-width: 350px;
  width: 100%;
  box-sizing: border-box;
}

@media screen and (max-width: 470px) {
  .payment {
    max-width: 100%;
    margin-top: 24px;
  }
}

.payment__title {
  padding: 0;
  margin: 0;
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 400;
}
.payment__input {
  margin-bottom: 16px;
}
.payment__profile {
  margin-bottom: 62px;
  display: flex;
  align-items: center;
}
.payment__avatar {
  width: 32px;
  height: 32px;
  margin-right: 7px;
}
.payment__login {
  margin: 0;
}
</style>
