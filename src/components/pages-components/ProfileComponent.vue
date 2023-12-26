<template>
  <div v-if="subscribe" class="section__subscribe subscribe">
    <p class="subscribe__date subscribe__date_text">
      Доступно до
      <span class="subscribe__date subscribe__date_date">{{
        subDate ? subDate : subscribe
      }}</span>
    </p>
    <black-button @click="$router.push('/subscribe')">
      Продлить подписку
    </black-button>
  </div>
  <div v-else class="section__subscribe-inactive subscribe-inactive">
    <p class="subscribe__date-inactive subscribe__date_text-inactive">
      Подписка неактивна
    </p>
    <black-button :inactive="true" @click="$router.push('/subscribe')">
      Купить подписку
    </black-button>
  </div>
  <div class="section__user-info">
    <div class="section__profile profile">
      <img
        src="../../assets/images/logo/fullsize-avatar.png"
        alt="avatar"
        class="profile__avatar"
      />
      <div class="profile__info">
        <p class="profile__login">{{ user.login }}</p>
        <p class="profile__email">{{ user.email }}</p>
      </div>
    </div>
    <div class="section__registration-date registration-date">
      <p class="registration-date__text">Дата регистрации</p>
      <p class="registration-date__date">{{ user.registrationDate }}</p>
    </div>
  </div>
</template>

<script>
import BlackButton from "@/components/pages-components/UI/BlackButton.vue";

export default {
  name: "ProfileComponent",
  components: { BlackButton },
  props: {
    subDate: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      user: {},
      subscribe: null,
    };
  },
  mounted() {
    this.updateSub();
  },
  methods: {
    updateSub() {
      this.user = JSON.parse(localStorage.getItem("user"))[0];
      this.subscribe = this.user.subscribe;
    },
  },
  watch: {
    subDate() {
      this.updateSub();
    },
  },
};
</script>

<style scoped>
.subscribe {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background-color: #b2b6ff;
  padding: 8px 16px;
}

@media screen and (max-width: 500px) {
  .subscribe {
    flex-direction: column;
    justify-content: flex-start;
    padding: 16px;
    align-items: flex-start;
  }
}

@media screen and (max-width: 330px) {
  .subscribe {
    padding: 8px;
  }
}

.subscribe__date {
  padding: 0;
  margin: 0;
  color: #121214;
  font-size: 20px;
  line-height: 24px;
}

@media screen and (max-width: 500px) {
  .subscribe__date {
    margin-bottom: 8px;
  }
}

.subscribe-inactive {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background-color: #2b2b31;
  color: #fff;
  padding: 8px 16px;
  margin-bottom: 32px;
}

@media screen and (max-width: 500px) {
  .subscribe-inactive {
    flex-direction: column;
    justify-content: flex-start;
    padding: 16px;
    align-items: flex-start;
  }
}

@media screen and (max-width: 330px) {
  .subscribe-inactive {
    padding: 8px;
  }
}

.subscribe__date_text-inactive {
  padding: 0;
  margin: 0;
  font-size: 20px;
  line-height: 24px;
}

@media screen and (max-width: 500px) {
  .subscribe__date_text-inactive {
    margin-bottom: 8px;
    font-size: 16px;
    line-height: 19px;
  }
}

/*-----------------------*/

.section__user-info {
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
}

@media screen and (max-width: 500px) {
  .section__user-info {
    flex-direction: column;
  }
}

.section__profile {
  display: flex;
  align-items: flex-start;
}

.profile__avatar {
  height: 64px;
  width: 64px;
  margin-right: 24px;
}

@media screen and (max-width: 500px) {
  .profile__avatar {
    height: 51px;
    width: 51px;
  }
}

@media screen and (max-width: 500px) {
  .profile__info {
    margin-bottom: 24px;
  }
}

.profile__login {
  padding: 0;
  margin: 0px 0px 8px 0px;
  font-size: 20px;
  line-height: 24px;
  color: #fff;
}
.profile__email {
  padding: 0;
  margin: 0;
  font-size: 16px;
  line-height: 19px;
  color: #828289;
}

.registration-date {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

@media screen and (max-width: 500px) {
  .registration-date {
    margin-left: calc(51px + 24px);
  }
}

.registration-date__text {
  padding: 0;
  margin: 0;
  color: #fff;
  font-size: 20px;
  line-height: 24px;
}
.registration-date__date {
  padding: 0;
  margin: 0;
  font-size: 16px;
  line-height: 19px;
  color: #828289;
}
</style>
