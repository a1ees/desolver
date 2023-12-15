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
          <input-component
            class="register-form__input register-form__input_login"
            :placeholder="'Логин'"
            @input="setLogin"
          />
          <input-component
            class="register-form__input register-form__input_email"
            :placeholder="'Почта'"
            @input="setEmail"
          />
          <input-component
            :password="true"
            class="register-form__input register-form__input_password"
            :placeholder="'Пароль'"
            @input="setPassword"
          />
          <input-component
            :password="true"
            class="register-form__input register-form__input_repeat-password"
            :placeholder="'Повторите пароль'"
            @input="setRepeatPassword"
          />
          <div class="register-form__capcha">
            <img
              src="../../assets/images/capcha.png"
              alt="капча"
              class="register-form__img-capcha"
            />
            <input-component
              class="register-form__input register-form__input_capcha"
              :placeholder="'Введите капчу'"
              @input="setCapcha"
            />
          </div>
          <default-button-component
            class="register-form__submit-btn"
            @click="createUser"
            :textContent="'Создать аккаунт'"
          />
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
import DefaultButtonComponent from "../pages-components/UI/DefaultButtonComponent.vue";
import InputComponent from "../pages-components/UI/InputComponent.vue";

export default {
  components: { InputComponent, DefaultButtonComponent },
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
    setLogin(login) {
      this.formData.login = login;
    },
    setEmail(email) {
      this.formData.email = email;
    },
    setPassword(password) {
      this.formData.password = password;
    },
    setRepeatPassword(repeatPassword) {
      this.formData.repeatPassword = repeatPassword;
    },
    setCapcha(capcha) {
      this.formData.capcha = capcha;
    },
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

.content {
  height: 100%;
  display: flex;
  justify-content: center;
}

.register-form {
  background-color: #151518;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  padding: 32px;
  max-width: calc(564px - 32px - 32px);
  width: 100%;
}
.register-form__title {
  padding: 0;
  margin: 0px 0px 24px 0px;
}
.register-form__form {
  display: flex;
  flex-direction: column;
}
.register-form__input_login {
  margin-bottom: 16px;
}
.register-form__input_email {
  margin-bottom: 16px;
}
.register-form__input_password {
  margin-bottom: 16px;
}
.register-form__input_repeat-password {
  margin-bottom: 24px;
}
.register-form__capcha {
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 580px) {
  .register-form__capcha {
    flex-direction: column;
  }
}

.register-form__img-capcha {
  padding-right: 16px;
  width: 100%;
}

@media screen and (max-width: 580px) {
  .register-form__img-capcha {
    flex-direction: column;
    padding: 0;
    margin-bottom: 16px;
  }
}

.register-form__submit-btn {
  margin: 24px 0px 0px 0px;
}

.register-form__signin {
  padding: 0;
  margin: 24px 0px 16px 0px;
  color: #6c6c7a;
}
.register-form__signin-link {
  border: none;
  background: none;
  color: #b2b6ff;
}

.register-form__signin-link:hover {
  cursor: pointer;
}
.register-form__error {
  display: block;
  color: #ff2048;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 5%;
  word-wrap: break-word;
  white-space: normal;
}

@media screen and (max-width: 580px) {
  .register-form__error {
    width: 288px;
  }
}

@media screen and (max-width: 360px) {
  .register-form__error {
    width: 242px;
    font-size: 14px;
    line-height: 16px;
  }
}
</style>
