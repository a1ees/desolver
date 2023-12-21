<template>
  <nav class="content__navigation navigation">
    <ul class="navigation__list">
      <li
        class="navigation__item"
        :class="{ navigation__item_select: $route.path === '/profile' }"
        @click.stop="$router.push('/profile')"
      >
        Профиль
      </li>
      <li
        class="navigation__item"
        :class="{ navigation__item_select: $route.path === '/settings' }"
        @click.stop="$router.push('/settings')"
      >
        Настройки
      </li>
      <li
        class="navigation__item"
        :class="{ navigation__item_select: $route.path === '/inventory' }"
        @click.stop="$router.push('/inventory')"
      >
        Инвентарь
      </li>
      <li
        class="navigation__item"
        :class="{ navigation__item_select: $route.path === '/market' }"
        @click.stop="$router.push('/market')"
      >
        Маркет
      </li>
      <li
        class="navigation__item"
        :class="{ navigation__item_select: $route.path === '/subscribe' }"
        @click.stop="$router.push('/subscribe')"
      >
        Подписка
      </li>
      <li
        class="navigation__item navigation__item_pre-last"
        :class="{ navigation__item_select: $route.path === '/support' }"
        @click.stop="$router.push('/support')"
      >
        Поддержка
      </li>
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

export default {
  components: { ExitButtonIcon, ModalExit },
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
.navigation__item {
  background-color: #1a1a1e;
  color: #6c6c7a;
  padding: 16px 0px 16px 24px;
  width: 300px;
}

.navigation__item:hover {
  cursor: pointer;
  color: #fff;
  transition: color 0.3s ease;
}

.navigation__item_pre-last {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.navigation__item_select {
  background-color: #b2b6ff;
  color: #1a1a1e;
  border-radius: 8px;
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
