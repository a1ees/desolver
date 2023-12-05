<template>
  <div class="page">
    <header class="header">
      <img
        src="../../assets/images/logo/header-logo.svg"
        alt="headerLogo"
        class="header__logo"
      />
    </header>
    <main class="content">
      <div class="register-form">
        <h1 class="register-form__title">Регистрация</h1>
        <form class="register-form__form">
          <input
            type="text"
            class="register-form__input register-form__input_login"
            placeholder="Логин"
            v-model="formData.login"
          />
          <input
            type="text"
            class="register-form__input register-form__input_email"
            placeholder="Почта"
            v-model="formData.email"
          />
          <input
            type="text"
            class="register-form__input register-form__input_password"
            placeholder="Пароль"
            v-model="formData.password"
          />
          <input
            type="text"
            class="register-form__input register-form__input_repeat-password"
            placeholder="Повторите пароль"
            v-model="formData.repeatPassword"
          />
          <div class="register-form__capcha">
            <img
              src="../../assets/images/capcha.png"
              alt="капча"
              class="register-form__img-capcha"
            />
            <input
              type="text"
              class="register-form__input register-form__input_capcha"
              placeholder="Введите капчу"
              v-model="formData.capcha"
            />
          </div>
          <button class="register-form__submit-btn" @click="createUser">
            Создать аккаунт
          </button>
        </form>
        <p class="register-form__signin">
          Уже есть аккаунт?
          <button
            class="register-form__signin-link"
            @click="$router.push('/login')"
          >
            Войти
          </button>
        </p>
        <div v-if="showError" class="register-form__error">
          {{ errorText }}
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import "../../assets/vendor/fonts/font.css";
import "../../assets/vendor/normalize.css";

export default {
  name: "RegisterPage",
  data() {
    return {
      formData: {
        login: "",
        email: "",
        password: "",
        repeatPassword: "",
        capcha: "",
      },
      showError: false,
      errorText: "",
      allUsers: [],
      subscribe: null,
    };
  },
  mounted() {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      this.allUsers = JSON.parse(storedUsers);
    }
  },
  computed: {
    checkPassword() {
      return this.password === this.repeatPassword;
    },
    nowDate() {
      const currentDate = new Date();
      const hours = String(currentDate.getHours()).padStart(2, "0");
      const minutes = String(currentDate.getMinutes()).padStart(2, "0");
      const day = String(currentDate.getDate()).padStart(2, "0");
      const month = String(currentDate.getMonth() + 1).padStart(2, "0");
      const year = currentDate.getFullYear();

      return `${hours}:${minutes} ${day}.${month}.${year}`;
    },
  },
  methods: {
    clearForm() {
      Object.keys(this.formData).forEach((key) => {
        this.formData[key] = "";
      });
    },
    setError(state, text) {
      if (state === "on") {
        this.errorText = text;
        this.showError = true;
      } else if (state === "off") {
        this.errorText = "";
        this.showError = false;
      } else {
        console.log("Переданы некорректные данные состояния");
      }
    },
    checkValidity() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (
        !this.formData.login ||
        this.formData.login.length < 3 ||
        this.formData.login.length > 15
      ) {
        this.setError("on", "Поле с логином должно быть от 3 до 15 символов");
        return false;
      } else if (
        !this.formData.email ||
        !emailRegex.test(this.formData.email)
      ) {
        this.setError("on", "Введен некорректный Email");
        return false;
      } else if (!this.formData.password || this.formData.password.length < 8) {
        this.setError("on", "Пароль должен содержать не менее 8 символов");
        return false;
      } else if (this.formData.password !== this.formData.repeatPassword) {
        this.setError("on", "Пароли не совпадают");
        return false;
      } else if (!this.formData.capcha) {
        this.setError("on", "Капча введена неверно");
        return false;
      } else {
        this.setError("off");
        return true;
      }
    },
    checkUniqueUser() {
      return this.allUsers.some(
        (user) =>
          this.formData.login === user.login ||
          this.formData.email === user.email
      );
    },
    createUser() {
      const newUser = {
        login: this.formData.login,
        email: this.formData.email,
        password: this.formData.password,
        registrationDate: this.nowDate,
        subscribe: this.subscribe,
      };
      if (!this.checkValidity()) {
        return;
      } else if (this.checkUniqueUser()) {
        this.setError(
          "on",
          "Пользователь с такими логином/почтой уже существует"
        );
        return;
      } else {
        this.allUsers.push(newUser);
        localStorage.setItem("users", JSON.stringify(this.allUsers));
        this.clearForm();
        alert("Вы успешно зарегистрировались!");
      }
    },
  },
  watch: {
    formData: {
      handler() {
        this.setError("off");
      },
      deep: true,
    },
  },
};
</script>

<style src="../../assets/styles/register-page.css" scoped></style>
