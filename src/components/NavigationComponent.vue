<template>
  <nav class="content__navigation navigation">
    <ul class="navigation__list">
      <li
        class="navigation__item"
        :class="{ navigation__item_select: $route.path === '/profile' }"
        @click="$router.push('/profile')"
      >
        Профиль
      </li>
      <li
        class="navigation__item"
        :class="{ navigation__item_select: $route.path === '/settings' }"
        @click="$router.push('/settings')"
      >
        Настройки
      </li>
      <li
        class="navigation__item"
        :class="{ navigation__item_select: $route.path === '/inventory' }"
        @click="$router.push('/inventory')"
      >
        Инвентарь
      </li>
      <li
        class="navigation__item"
        :class="{ navigation__item_select: $route.path === '/market' }"
        @click="$router.push('/market')"
      >
        Маркет
      </li>
      <li
        class="navigation__item"
        :class="{ navigation__item_select: $route.path === '/subscribe' }"
        @click="$router.push('/subscribe')"
      >
        Подписка
      </li>
      <li
        class="navigation__item navigation__item_pre-last"
        :class="{ navigation__item_select: $route.path === '/support' }"
        @click="$router.push('/support')"
      >
        Поддержка
      </li>
      <li
        class="navigation__item navigation__item--exit"
        :class="{ navigation__item_select: $route.path === '/' }"
        @click="exit"
      >
        <div class="navigation__item-exit navigation__item-exit_icon"></div>
        <p class="navigation__item-exit navigation__item-exit_text">
          Выйти из аккаунта
        </p>
      </li>
    </ul>
  </nav>
</template>

<script>
import "../assets/vendor/fonts/font.css";
import "../assets/vendor/normalize.css";
import router from "@/router/router";

export default {
  name: "NavigationComponent",
  methods: {
    exit() {
      localStorage.removeItem("user");
      router.push("/");
    },
  },
};
</script>

<style src="../assets/styles/navigation-component.css" scoped></style>
