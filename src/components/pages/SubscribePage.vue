<template>
  <main-component>
    <template #content>
      <profile-component :subDate="subDate" />
      <div class="section__page-info page-info">
        <div class="page-info__pay-section pay-section">
          <div
            class="pay-section__item"
            v-for="(sub, index) in subsTransform"
            :key="index"
          >
            <p class="pay-section__days">{{ sub.days }}</p>
            <p class="pay-section__coast">{{ sub.cost }}</p>
            <button
              class="pay-section__button"
              @click="extensionSub(sub.totalDays)"
            >
              Купить подписку
            </button>
          </div>
        </div>
      </div>
    </template>
  </main-component>
</template>

<script>
import "../../assets/vendor/fonts/font.css";
import "../../assets/vendor/normalize.css";
import ProfileComponent from "../ProfileComponent.vue";
import MainComponent from "../MainComponent.vue";

export default {
  components: { ProfileComponent, MainComponent },
  name: "SubscribePage",
  data() {
    return {
      subs: [],
      subDate: "",
    };
  },
  computed: {
    subsTransform() {
      if (this.subs) {
        return this.subs.map((sub) => {
          const transformedSub = { ...sub };
          if (transformedSub.days % 365 === 0) {
            transformedSub.days = `Подписка ${transformedSub.days / 365} год`;
          } else {
            transformedSub.days = `Подписка ${transformedSub.days} дней`;
          }
          transformedSub.cost = `${transformedSub.cost}₽`;
          transformedSub.totalDays = sub.days;
          return transformedSub;
        });
      } else {
        return [];
      }
    },
    nowDate() {
      const currentDate = new Date();
      const day = String(currentDate.getDate()).padStart(2, "0");
      const month = String(currentDate.getMonth() + 1).padStart(2, "0");
      const year = currentDate.getFullYear();

      return `${day}.${month}.${year}`;
    },
  },
  mounted() {
    const availableSubs = [
      { days: 7, cost: 1000 },
      { days: 14, cost: 1800 },
      { days: 21, cost: 2500 },
      { days: 30, cost: 3000 },
      { days: 90, cost: 7000 },
      { days: 365, cost: 13000 },
    ];
    this.subs = availableSubs;
  },
  methods: {
    // ожидаемый формат даты('ДД.ММ.ГГГГ'), если данные не переданы(подписки нет) - счет идет от текущего времени
    addDaysToDate(daysToAdd, inputDate) {
      let date;

      if (inputDate) {
        const parts = inputDate.split(".");
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);
        date = new Date(year, month, day);
      } else {
        date = new Date();
      }

      date.setDate(date.getDate() + daysToAdd);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      const formattedDate = `${(day < 10 ? "0" : "") + day}.${
        (month < 10 ? "0" : "") + month
      }.${year}`;

      return formattedDate;
    },
    updateUsers(currentUser) {
      let users = JSON.parse(localStorage.getItem("users"));
      users.forEach((user, index) => {
        if (user.login === currentUser.login) {
          users[index] = currentUser;
        }
      });
      localStorage.setItem("users", JSON.stringify(users));
    },
    extensionSub(days) {
      let user = JSON.parse(localStorage.getItem("user"))[0];
      if (!user.subscribe) {
        user.subscribe = this.addDaysToDate(days);
      } else {
        user.subscribe = this.addDaysToDate(days, user.subscribe);
      }
      localStorage.setItem("user", JSON.stringify([user]));
      this.updateUsers(user);
      this.subDate = user.subscribe;
    },
  },
};
</script>

<style src="../../assets/styles/subscribe-page.css" scoped></style>
