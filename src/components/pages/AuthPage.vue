<template>
  <div class="page">
    <header class="header">
      <img
        src="../../assets/images/logo/header-logo.svg"
        alt=""
        class="header__logo"
      />
    </header>
    <main class="content">
      <div class="auth-form">
        <h1 class="auth-form__title">Авторизация</h1>
        <form action="" class="auth-form__form">
          <input
            type="text"
            class="auth-form__input auth-form__input_login"
            placeholder="Логин"
            v-model="formData.login"
          />
          <input
            type="text"
            class="auth-form__input auth-form__input_password"
            placeholder="Пароль"
            v-model="formData.password"
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
          <button class="auth-form__submit-btn" @click="signin">Войти</button>
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

export default {
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

<style src="../../assets/styles/auth-page.css" scoped></style>
