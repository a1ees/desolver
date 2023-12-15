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

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: MainPage },
    { path: "/register", component: RegisterPage },
    { path: "/login", component: AuthPage },
    { path: "/profile", component: ProfilePage },
    { path: "/settings", component: SettingsPage },
    { path: "/subscribe", component: SubscribePage },
    { path: "/support", component: SupportPage },
    { path: "/market", component: MarketPage },
    { path: "/inventory", component: InventoryPage },
  ],
});
