<template>
  <modal-component :isOpenModal="isOpenModal">
    <template #container>
      <div class="modal__container">
        <div class="modal__content">
          <div class="modal__header">
            <h1 class="modal__title">Смена пароля</h1>
            <button @click="this.$emit('close')" class="modal__close-button">
              <close-modal-icon />
            </button>
          </div>
          <input-component
            class="modal__input"
            :password="true"
            :placeholder="'Старый пароль'"
            @input="setOldPass"
          />
          <input-component
            class="modal__input"
            :password="true"
            :placeholder="'Новый пароль'"
            @input="setNewPass"
          />
          <input-component
            class="modal__input"
            :password="true"
            :placeholder="'Подтверждение нового пароля'"
            @input="setRepeatNewPass"
          />
          <default-button-component
            class="modal__button"
            @click="changePassword"
          >
            Сменить пароль
          </default-button-component>
          <span v-if="errorText.length" class="modal__error">{{
            errorText
          }}</span>
        </div>
      </div>
    </template>
  </modal-component>
</template>

<script>
import DefaultButtonComponent from "../UI/DefaultButtonComponent.vue";
import InputComponent from "../UI/InputComponent.vue";
import ModalComponent from "./ModalComponent.vue";
import CloseModalIcon from "@/components/icons/CloseModalIcon.vue";
export default {
  components: {
    CloseModalIcon,
    ModalComponent,
    DefaultButtonComponent,
    InputComponent,
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
      errorText: "",
      inputs: {
        oldPass: "",
        newPass: "",
        repeatPass: "",
      },
      user: {},
    };
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"))[0];
  },
  methods: {
    setOldPass(oldPass) {
      this.inputs.oldPass = oldPass;
    },
    setNewPass(newPass) {
      this.inputs.newPass = newPass;
    },
    setRepeatNewPass(repeatPass) {
      this.inputs.repeatPass = repeatPass;
    },
    changePassword() {
      if (this.inputs.oldPass !== this.user.password) {
        this.errorText = "Вы ввели неверный старый пароль";
      } else if (this.inputs.newPass !== this.inputs.repeatPass) {
        this.errorText = "Пароли не совпадают";
      } else {
        const users = JSON.parse(localStorage.getItem("users"));
        const usersUpdate = users.map((user) => {
          if (user.login === this.user.login) {
            return { ...user, password: this.inputs.newPass };
          } else {
            return user;
          }
        });
        this.user.password = this.inputs.newPass;
        localStorage.setItem("user", JSON.stringify([this.user]));
        localStorage.setItem("users", JSON.stringify(usersUpdate));
        this.$emit("close");
        alert("Вы успешно сменили пароль");
      }
    },
  },
  watch: {
    inputs: {
      deep: true,
      handler() {
        this.errorText = "";
      },
    },
  },
};
</script>

<style scoped>
.modal__container {
  max-width: 470px;
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
  align-items: flex-start;
}
.modal__header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}
.modal__title {
  font-size: 24px;
  line-height: 29px;
  margin: 0;
  padding: 0;
}
.modal__close-button {
  padding: 0;
  background: none;
  border: none;
}

.modal__close-button:hover {
  cursor: pointer;
}

.modal__input:not(:last-child) {
  margin-bottom: 16px;
}
.modal__button {
  margin: 24px 0px 0px 0px;
}
.modal__error {
  color: #ff2048;
  font-size: 16px;
  line-height: 19px;
  margin-top: 32px;
}
</style>
