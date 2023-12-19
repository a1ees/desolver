<template>
  <button class="black-button" :class="{ 'black-button_inactive': inactive }">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    inactive: {
      default: false,
      type: Boolean,
    },
  },
};
</script>

<style scoped>
.black-button {
  color: #fff;
  background-color: #121214;
  padding: 12px 24px;
  font-size: 16px;
  line-height: 19px;
  border: none;
  border-radius: 8px;
  transition: background-color 0.3s, color 0.3s;
}
.black-button:hover {
  cursor: pointer;
  background-color: #1a1a1e;
}

@media screen and (max-width: 500px) {
  .black-button {
    width: 100%;
    font-size: 14px;
    line-height: 17px;
  }
}

.black-button_inactive {
  background-color: #121214;
}
</style>
