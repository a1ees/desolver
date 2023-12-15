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
            <default-button-component
              class="pay-section__button"
              :textContent="'Купить подписку'"
              @click="togglePaymentModal(sub)"
            />
          </div>
        </div>
      </div>
      <modal-payment
        :selectSub="selectSub"
        :isOpen="isOpenModalPayment"
        @close="togglePaymentModal"
        @confirmPay="extensionSub"
      />
      <modal-succesful-payment
        @close="isOpenModalPaymentSuccess = false"
        :isOpenModal="isOpenModalPaymentSuccess"
      />
    </template>
  </main-component>
</template>

<script>
import "../../assets/vendor/fonts/font.css";
import "../../assets/vendor/normalize.css";
import ProfileComponent from "../pages-components/ProfileComponent.vue";
import MainComponent from "../pages-components/MainComponent.vue";
import DefaultButtonComponent from "../pages-components/UI/DefaultButtonComponent.vue";
import ModalPayment from "../pages-components/modals/ModalPayment.vue";
import ModalSuccesfulPayment from "../pages-components/modals/ModalSuccesfulPayment.vue";

export default {
  components: {
    ProfileComponent,
    MainComponent,
    DefaultButtonComponent,
    ModalPayment,
    ModalSuccesfulPayment,
  },
  name: "SubscribePage",
  data() {
    return {
      subs: [],
      subDate: "",
      selectSub: {},
      isOpenModalPayment: false,
      isOpenModalPaymentSuccess: false,
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
    togglePaymentModal(sub) {
      if (this.isOpenModalPayment) {
        this.isOpenModalPayment = !this.isOpenModalPayment;
        this.selectSub = {};
      } else {
        this.isOpenModalPayment = !this.isOpenModalPayment;
        this.selectSub = sub;
      }
    },
    // ожидаемый формат даты('ДД.ММ.ГГГГ'), если данные не переданы(подписки на аккаунте нет) - счет идет от текущего времени
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
      this.isOpenModalPayment = false;
      this.isOpenModalPaymentSuccess = true;
    },
  },
};
</script>

<style scoped>
.section__page-info {
  margin: 72px 0px 205px 0px;
}

@media screen and (max-width: 956px) {
  .section__page-info {
    margin: 72px 0px 128px 0px;
  }
}

.pay-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: max-content;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
}

@media screen and (max-width: 956px) {
  .pay-section {
    grid-template-columns: 1fr;
    grid-template-rows: max-content;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
  }
}

.pay-section__item {
  padding: 24px;
  background-color: #1a1a1e;
  border-radius: 16px;
}
.pay-section__days {
  padding: 0;
  margin: 0px 0px 16px 0px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 200;
}

@media screen and (max-width: 360px) {
  .pay-section__days {
    font-size: 16px;
    line-height: 19px;
  }
}

.pay-section__coast {
  padding: 0;
  margin: 0px 0px 74px 0px;
  font-size: 36px;
  line-height: 43px;
  font-weight: 800;
}

@media screen and (max-width: 360px) {
  .pay-section__coast {
    font-size: 36px;
    line-height: 38px;
  }
}

@media screen and (max-width: 956px) {
  .pay-section__coast {
    margin: 0px 0px 40px 0px;
  }
}
</style>
