<template>
  <header class="header">
    <img
      src="../assets/images/logo/header-logo.svg"
      alt="logo"
      class="header__logo"
    />
    <img
      src="../assets/images/logo/header-logo-full.svg"
      alt="logo"
      class="header__logo-full"
    />
    <div class="header__profile">
      <img
        src="../assets/images/avatar.png"
        alt="avatar"
        class="header__avatar"
      />
      <p class="header__login">{{ login }}</p>
      <button class="header__button"></button>
    </div>
  </header>
</template>

<script>
import "../assets/vendor/fonts/font.css";
import "../assets/vendor/normalize.css";

export default {
  name: "HeaderPageComponent",
  data() {
    return {
      login: "",
    };
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem("user"))[0];
    this.login = user.login;
  },
};
</script>

<style src="../assets/styles/header-page-component.css" scoped></style>
