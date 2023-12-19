<template>
  <div class="page">
    <header class="header">
      <img
        src="../../assets/images/logo/header-logo.svg"
        alt=""
        class="header__logo"
        @click="this.$router.push('/')"
      />
    </header>
    <main class="content">
      <div class="auth-form">
        <h1 class="auth-form__title">Авторизация</h1>
        <form @submit.prevent="signin" class="auth-form__form">
          <input-component
            class="auth-form__input auth-form__input_login"
            :placeholder="'Логин'"
            @input="setLogin"
          />
          <input-component
            :password="true"
            class="auth-form__input auth-form__input_password"
            :placeholder="'Пароль'"
            @input="setPassword"
          />
          <label class="auth-form__checkbox">
            <input
              type="checkbox"
              id="checkbox"
              class="auth-form__checkbox-button"
            />
            <label for="checkbox" class="auth-form__checkbox-label"></label>
            <p class="auth-form__checkbox-text">Запомнить меня</p>
          </label>
          <default-button-component class="auth-form__submit-btn" type="submit">
            Войти
          </default-button-component>
        </form>
        <div class="auth-form__navlink">
          <button
            @click="recoveryPassword"
            class="auth-form__recovery-password auth-form__navlink-item"
          >
            Забыли пароль?
          </button>
          <button
            @click="$router.push('/register')"
            class="auth-form__signup-link auth-form__navlink-item"
          >
            Регистрация
          </button>
        </div>
        <div v-if="showError" class="auth-form__error">
          Ошибка! Ваш логин/пароль неверный.
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import router from "@/router/router";
import "../../assets/vendor/fonts/font.css";
import "../../assets/vendor/normalize.css";
import InputComponent from "../pages-components/UI/InputComponent.vue";
import DefaultButtonComponent from "../pages-components/UI/DefaultButtonComponent.vue";

export default {
  components: { InputComponent, DefaultButtonComponent },
  name: "AuthPage",
  data() {
    return {
      formData: {
        login: "",
        password: "",
      },
      showError: false,
      allUsers: [],
    };
  },
  mounted() {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      this.allUsers = JSON.parse(storedUsers);
    }
  },
  methods: {
    setLogin(login) {
      this.formData.login = login;
    },
    setPassword(password) {
      this.formData.password = password;
    },
    recoveryPassword() {
      alert("Страница восстановления пароля в разработке");
    },
    signin() {
      const currentUser = this.allUsers.filter(
        (user) =>
          user.login === this.formData.login &&
          user.password === this.formData.password
      );
      if (currentUser.length) {
        localStorage.setItem("user", JSON.stringify(currentUser));
        router.push("/profile");
        this.showError = false;
      } else {
        this.showError = true;
      }
    },
  },
};
</script>

<style scoped>
.page {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  background-color: #121214;
  min-height: 100vh;
  position: relative;
  width: 100%;
  color: #fff;
  z-index: 1;
  overflow: hidden;
}
.header {
  width: 100%;
  padding-top: 32px;
  margin-bottom: 185px;
  display: flex;
  justify-content: center;
}

@media screen and (max-width: 1440px) {
  .header {
    margin-bottom: 155px;
  }
}

@media screen and (max-width: 580px) {
  .header {
    margin-bottom: 65px;
  }
}

.header__logo {
  width: 163px;
  height: 42px;
}

.header__logo:hover {
  cursor: pointer;
}

.content {
  height: 100%;
  display: flex;
  justify-content: center;
}
.auth-form {
  max-width: calc(564px - 32px - 32px);
  width: 100%;
  background-color: #151518;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  padding: 32px;
}

@media screen and (max-width: 360px) {
  .auth-form {
    padding: 20px;
  }
}

.auth-form__title {
  padding: 0;
  margin: 0px 0px 24px 0px;
}
.auth-form__form {
  display: flex;
  flex-direction: column;
}

.auth-form__input_login {
  margin-bottom: 16px;
}
.auth-form__input_password {
  margin-bottom: 16px;
}

.auth-form__checkbox {
  display: flex;
  align-items: center;
}

.auth-form__checkbox-button {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.auth-form__checkbox-label {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-image: url("../../assets/images/logo/cheackbox.svg");
  background-size: cover;
  cursor: pointer;
}

.auth-form__checkbox-button:checked + .auth-form__checkbox-label {
  opacity: 0.5;
}

.auth-form__checkbox-text {
  padding: 0;
  margin: 0;
  margin-left: 16px;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 5%;
}

@media screen and (max-width: 360px) {
  .auth-form__checkbox-text {
    font-size: 14px;
    line-height: 16px;
  }
}

.auth-form__submit-btn {
  margin: 24px 0px;
}

.auth-form__navlink {
  display: flex;
  justify-content: space-between;
}

.auth-form__navlink-item {
  background: none;
  border: none;
  color: #b2b6ff;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 5%;
}

@media screen and (max-width: 360px) {
  .auth-form__navlink-item {
    font-size: 14px;
    line-height: 16px;
  }
}

.auth-form__navlink-item:hover {
  cursor: pointer;
}

.auth-form__error {
  margin-top: 32px;
  display: block;
  color: #ff2048;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 5%;
  word-wrap: break-word;
  white-space: normal;
}

@media screen and (max-width: 360px) {
  .auth-form__error {
    font-size: 14px;
    line-height: 16px;
  }
}
</style>
