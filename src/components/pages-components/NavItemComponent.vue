<template>
  <div class="navigation__container">
    <li
      v-for="item in navigationItems"
      :key="item.route"
      :class="{ navigation__item_select: $route.path === item.route }"
      @click.stop="$router.push(item.route)"
      class="navigation__item"
    >
      {{ item.label }}
    </li>
  </div>
</template>

<script>
import "../../assets/vendor/fonts/font.css";
import "../../assets/vendor/normalize.css";

export default {
  data() {
    return {
      navigationItems: [
        { label: "Профиль", route: "/profile" },
        { label: "Настройки", route: "/settings" },
        { label: "Инвентарь", route: "/inventory" },
        { label: "Маркет", route: "/market" },
        { label: "Подписка", route: "/subscribe" },
        { label: "Поддержка", route: "/support" },
      ],
    };
  },
};
</script>

<style>
.navigation__container {
  border-radius: 8px;
  overflow: hidden;
}

.navigation__item {
  background-color: #1a1a1e;
  color: #6c6c7a;
  padding: 16px 0px 16px 24px;
  width: 300px;
  cursor: pointer;
  transition: color 0.3s ease;
}

.navigation__item:hover {
  color: #fff;
}

.navigation__item_select {
  background-color: #b2b6ff;
  color: #1a1a1e;
  border-radius: 8px;
}
</style>
