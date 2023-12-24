import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from "../components/pages/MainPage.vue";
import RegisterPage from "../components/pages/RegisterPage.vue";
import AuthPage from "../components/pages/AuthPage.vue";
import ProfilePage from "../components/pages/ProfilePage.vue";
import SettingsPage from "../components/pages/SettingsPage.vue";
import SubscribePage from "../components/pages/SubscribePage.vue";
import SupportPage from "../components/pages/SupportPage.vue";
import MarketPage from "../components/pages/MarketPage.vue";
import InventoryPage from "../components/pages/InventoryPage.vue";
import NotFoundPage from "@/components/pages/NotFoundPage.vue";

const isLoggedIn = () => localStorage.getItem("user") !== null;

const authGuard = (to, from, next) => {
  if (!isLoggedIn()) {
    next("/login");
  } else {
    next();
  }
};

const redirectToProfileIfLoggedIn = (to, from, next) => {
  if (isLoggedIn()) {
    next("/profile");
  } else {
    next();
  }
};

const routes = [
  { path: "/", component: MainPage, beforeEnter: redirectToProfileIfLoggedIn },
  {
    path: "/register",
    component: RegisterPage,
    beforeEnter: redirectToProfileIfLoggedIn,
  },
  {
    path: "/login",
    component: AuthPage,
    beforeEnter: redirectToProfileIfLoggedIn,
  },
  { path: "/profile", component: ProfilePage, beforeEnter: authGuard },
  { path: "/settings", component: SettingsPage, beforeEnter: authGuard },
  { path: "/subscribe", component: SubscribePage, beforeEnter: authGuard },
  { path: "/support", component: SupportPage, beforeEnter: authGuard },
  { path: "/market", component: MarketPage, beforeEnter: authGuard },
  { path: "/inventory", component: InventoryPage, beforeEnter: authGuard },
  { path: "/:catchAll(.*)", component: NotFoundPage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
