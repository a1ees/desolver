<template>
  <modal-component v-if="isOpenModal">
    <template #container>
      <div class="modal__container">
        <div class="modal__content">
          <div class="modal__header">
            <h1 class="modal__title">Двухфакторная аутентификация</h1>
            <button @click="this.$emit('close')" class="modal__close-button">
              <close-modal-icon />
            </button>
          </div>
          <div class="modal__info">
            <p class="modal__subtitle subtitle">
              Скачайте приложение
              <span class="subtitle__span">Authy</span> или<br />
              <span class="subtitle__span">Google Authentificator</span> на
              смартфон.
            </p>
            <div class="modal__qr qr">
              <p class="qr__text">Отсканируйте QR-Код:</p>
              <img
                src="../../../assets/images/qr-code.png"
                alt=""
                class="qr__generate-image"
              />
              <p class="qr__generate-code generate-code">
                Код для ручного ввода:
                <span
                  ref="generatedCodeRef"
                  class="generate-code__span"
                  @click="copyGeneratedCode"
                  >DG8A AWDS RADA RGAY</span
                >
              </p>
            </div>
            <p class="modal__input-label">
              Введите сгенерированный 6-значный код подтвержденияю.
            </p>
            <div v-if="showCopiedMessage" class="copied-message">
              Текст скопирован
            </div>
            <input-component :placeholder="'000 000'" class="modal__input" />
            <default-button-component
              class="modal__button"
              :textContent="'Подключить'"
              @click="this.$emit('close')"
            />
          </div>
        </div>
      </div>
    </template>
  </modal-component>
</template>

<script>
import ModalComponent from "./ModalComponent.vue";
import InputComponent from "../UI/InputComponent.vue";
import DefaultButtonComponent from "../UI/DefaultButtonComponent.vue";
import CloseModalIcon from "@/components/icons/CloseModalIcon.vue";
export default {
  components: {
    CloseModalIcon,
    InputComponent,
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
  data() {
    return {
      showCopiedMessage: false,
    };
  },
  methods: {
    copyGeneratedCode() {
      const generatedCodeElement = this.$refs.generatedCodeRef;

      if (generatedCodeElement && generatedCodeElement.innerText) {
        const codeToCopy = generatedCodeElement.innerText;

        // апишка клипборда
        navigator.clipboard
          .writeText(codeToCopy)
          .then(() => {
            this.showCopiedMessage = true;
            setTimeout(() => {
              this.showCopiedMessage = false;
            }, 2000);
          })
          .catch((err) => {
            console.error("Ошибка копирования: ", err);
          });
      }
    },
  },
};
</script>

<style scoped>
.modal__container {
  max-width: 483px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #121214;
  border-radius: 16px;
  padding: 20px;
  box-sizing: border-box;
  line-height: 19.2px;
  font-size: 16px;
  font-weight: 400;
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
  flex-direction: column;
  position: relative;
}
.modal__subtitle {
  padding: 0;
  margin: 0;
  color: #8c8e94;
}

.subtitle__span {
  color: #b2b6ff;
}

.modal__qr {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 200px;
  width: 100%;
  margin: 24px auto;
}
.qr__text {
  padding: 0;
  margin: 0;
}
.qr__generate-image {
  width: 100%;
  max-height: 200px;
  height: 100%;
  margin: 8px 0px;
}
.qr__generate-code {
  padding: 0;
  margin: 0;
}

.generate-code__span {
  color: #b2b6ff;
}

.generate-code__span:hover {
  cursor: pointer;
}

.modal__input-label {
  padding: 0;
  margin: 0;
  color: #8c8e94;
  margin-bottom: 8px;
}
.modal__input {
  margin-bottom: 16px;
}
.copied-message {
  max-width: 100%;
  margin: 0px auto -50px auto;
  z-index: 10;
  padding: 20px;
  background-color: #1a1a1e;
  border-radius: 16px;
  text-align: center;
}
</style>
