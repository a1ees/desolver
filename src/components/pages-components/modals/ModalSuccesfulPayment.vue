<template>
  <modal-component v-if="isOpenModal">
    <template #container>
      <div class="modal__container">
        <div class="modal__content">
          <svg
            class="modal__logo"
            width="26"
            height="42"
            viewBox="0 0 33 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.94844 32.4751V45.9476C6.38807 43.9269 0 37.0513 0 25.8647C0 25.8647 4.21695 27.9079 8.94844 32.4751Z"
              fill="#B2B6FF"
            />
            <path
              d="M23.2656 32.4751V45.9476C25.826 43.9269 32.2141 37.0513 32.2141 25.8647C32.2141 25.8647 27.9971 27.9079 23.2656 32.4751Z"
              fill="#B2B6FF"
            />
            <path
              d="M16.1072 0.297852C16.1072 0.297852 11.9876 13.831 0 20.0772C0 20.0772 9.61958 24.6254 16.1072 35.6985C22.5948 24.6254 32.2144 20.0772 32.2144 20.0772C20.2268 13.831 16.1072 0.297852 16.1072 0.297852Z"
              fill="#B2B6FF"
            />
            <path
              d="M19.9101 38.0122C19.9302 43.5482 18.5846 48.6065 16.107 51.8814C13.6294 48.6065 12.2838 43.5482 12.3039 38.0122C13.6249 39.6148 14.9191 41.4242 16.107 43.4527C17.2949 41.4242 18.5891 39.6148 19.9101 38.0122Z"
              fill="#B2B6FF"
            />
          </svg>
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
export default {
  components: {
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
