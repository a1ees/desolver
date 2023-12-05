<template>
  <div v-if="subscribe" class="section__subscribe subscribe">
    <p class="subscribe__date subscribe__date_text">
      Доступно до
      <span class="subscribe__date subscribe__date_date">{{
        subDate ? subDate : subscribe
      }}</span>
    </p>
    <button class="subscribe__renew-button" @click="$router.push('/subscribe')">
      Продлить подписку
    </button>
  </div>
  <div v-else class="section__subscribe-inactive subscribe-inactive">
    <p class="subscribe__date-inactive subscribe__date_text-inactive">
      Подписка неактивна
    </p>
    <button
      class="subscribe__renew-button-inactive"
      @click="$router.push('/subscribe')"
    >
      Купить подписку
    </button>
  </div>
  <div class="section__user-info">
    <div class="section__profile profile">
      <img
        src="../assets/images/logo/fullsize-avatar.png"
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
export default {
  name: "ProfileComponent",
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
};
</script>

<style src="../assets/styles/profile-component.css" scoped></style>
