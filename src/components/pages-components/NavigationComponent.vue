<template>
  <nav class="content__navigation navigation">
    <ul class="navigation__list">
      <nav-item-component />
      <li
        class="navigation__item navigation__item--exit"
        :class="{ navigation__item_select: $route.path === '/' }"
        @click.stop="isOpenModal = true"
      >
        <exit-button-icon
          class="navigation__item-exit navigation__item-exit_button"
        />
        <p class="navigation__item-exit navigation__item-exit_text">
          Выйти из аккаунта
        </p>
      </li>
    </ul>
  </nav>
  <modal-exit
    :isOpenModal="isOpenModal"
    @exit="exit"
    @noExit="isOpenModal = false"
  />
</template>

<script>
import "../../assets/vendor/fonts/font.css";
import "../../assets/vendor/normalize.css";
import router from "@/router/router";
import ModalExit from "./modals/ModalExit.vue";
import ExitButtonIcon from "@/components/icons/ExitButtonIcon.vue";
import NavItemComponent from "@/components/pages-components/NavItemComponent.vue";

export default {
  components: { NavItemComponent, ExitButtonIcon, ModalExit },
  name: "NavigationComponent",
  data() {
    return {
      isOpenModal: false,
    };
  },
  methods: {
    exit() {
      localStorage.removeItem("user");
      router.push("/");
    },
  },
};
</script>

<style scoped>
.navigation {
  margin: 0 144px 0 0;
}

@media screen and (max-width: 1440px) {
  .navigation {
    margin: 0px 72px 0px 0px;
    padding: 0px 0px 0px 72px;
  }
}

@media screen and (max-width: 1260px) {
  .navigation {
    background-color: #1a1a1e;
    border-radius: 8px;
    position: absolute;
    padding: 0;
    margin: 0;
    top: 50px;
    right: 0;
    z-index: 100;
  }
}

.navigation__list {
  border-radius: 8px;
  overflow: hidden;
  padding: 0;
  margin: 0;
  list-style: none;
}
.navigation__item--exit {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 32px;
  border-radius: 8px;
}

@media screen and (max-width: 1260px) {
  .navigation__item--exit {
    margin: 0;
  }
}

.navigation__item-exit_text {
  padding: 0;
  text-align: center;
  margin: 2px 0 0;
}
</style>
