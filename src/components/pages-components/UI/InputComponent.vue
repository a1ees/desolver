<template>
  <input
    v-if="!password"
    type="text"
    :placeholder="placeholder"
    class="input"
    v-model="inputValue"
  />
  <div v-else class="password">
    <input
      :type="typePassword"
      :placeholder="placeholder"
      class="password__input input"
      v-model="inputValue"
    />
    <button type="button" @click="togglePassword" class="password__button">
      <password-icon :typePassword="typePassword" />
    </button>
  </div>
</template>

<script>
import PasswordIcon from "@/components/icons/PasswordIcon.vue";

export default {
  components: { PasswordIcon },
  data() {
    return {
      inputValue: "",
      typePassword: "password",
    };
  },
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    password: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["input"],
  methods: {
    togglePassword() {
      this.typePassword === "password"
        ? (this.typePassword = "text")
        : (this.typePassword = "password");
    },
  },
  watch: {
    inputValue() {
      this.$emit("input", this.inputValue);
    },
  },
};
</script>

<style scoped>
.input {
  all: unset;
  background-color: #2b2b31;
  border: none;
  outline: none;
  color: #fff;
  padding: 12px 16px;
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
}

.input:focus {
  background-color: #37373e;
}

@media screen and (max-width: 360px) {
  .input {
    font-size: 14px;
    line-height: 16px;
  }
}

.password {
  position: relative;
  width: 100%;
}

.password__button {
  top: 14px;
  right: 15px;
  padding: 0;
  border: none;
  background: none;
  position: absolute;
}

.password__button:hover {
  cursor: pointer;
}
</style>
