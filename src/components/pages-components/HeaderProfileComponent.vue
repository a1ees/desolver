<template>
  <header class="header">
    <img
      @click="$router.push('/profile')"
      src="../../assets/images/logo/header-logo.svg"
      alt="logo"
      class="header__logo"
    />
    <img
      @click="$router.push('/profile')"
      src="../../assets/images/logo/header-logo-full.svg"
      alt="logo"
      class="header__logo-full"
    />
    <div @click="$router.push('/profile')" class="header__profile">
      <img
        src="../../assets/images/avatar.png"
        alt="avatar"
        class="header__avatar"
      />
      <p class="header__login">{{ login }}</p>
      <div class="header__navigate">
        <default-button-component
          class="header__navigate-button"
          @click.stop="toggleNavBar"
        />
        <transition name="nav">
          <div v-if="isSmallScreen && isOpenNavBar">
            <navigation-component />
          </div>
        </transition>
      </div>
    </div>
  </header>
</template>

<script>
import "../../assets/vendor/fonts/font.css";
import "../../assets/vendor/normalize.css";
import NavigationComponent from "./NavigationComponent.vue";
import DefaultButtonComponent from "./UI/DefaultButtonComponent.vue";

export default {
  name: "HeaderPageComponent",
  components: { DefaultButtonComponent, NavigationComponent },
  data() {
    return {
      login: "",
      isSmallScreen: false,
      isOpenNavBar: false,
    };
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem("user"))[0];
    this.login = user.login;
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
  methods: {
    toggleNavBar() {
      this.isOpenNavBar = !this.isOpenNavBar;
    },
    handleResize() {
      this.isSmallScreen = window.innerWidth <= 1260;
    },
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding-top: 32px;
  margin-bottom: 65px;
}

@media screen and (max-width: 1440px) {
  .header {
    padding: 32px 72px 0px 72px;
  }
}

@media screen and (max-width: 900px) {
  .header {
    padding: 32px 0px 0px 0px;
  }
}

.header__logo {
  display: none;
}
.header__logo-full {
  display: block;
  width: 163px;
  height: 42px;
}

.header__logo-full:hover {
  cursor: pointer;
}

@media screen and (max-width: 450px) {
  .header__logo-full {
    display: none;
  }
  .header__logo {
    display: block;
    width: 27px;
    height: 42px;
  }
}

.header__profile {
  display: flex;
  align-items: center;
}

.header__profile:hover {
  cursor: pointer;
}

.header__avatar {
  width: 32px;
  height: 32px;
  margin-right: 12px;
}

.header__login {
  color: #828289;
  font-size: 20px;
  line-height: 24px;
  padding: 0;
  margin: 0;
}

@media screen and (max-width: 1260px) {
  .header__login {
    margin-right: 24px;
  }
}

.header__navigate {
  position: relative;
}

.header__navigate-button {
  display: none;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 16px 32px;
  border-radius: 6px;
  background-image: url("../../assets/images/logo/burger.svg");
  background-repeat: no-repeat;
  background-size: 20px 20px;
  background-position: center;
}

@media screen and (max-width: 1260px) {
  .header__navigate-button {
    display: block;
  }
}
</style>
