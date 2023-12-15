<template>
  <button class="dark__button">{{ textContent }}</button>
</template>

<script>
export default {
  props: {
    textContent: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.dark__button {
  width: 100%;
  border: none;
  background: none;
  text-align: center;
  background-color: #1a1a1e;
  font-size: 16px;
  line-height: 19px;
  padding: 12px 24px;
  color: #fff;
  border-radius: 8px;
  transition: background-color 0.3s, color 0.3s;
}

.dark__button:hover {
  cursor: pointer;
  background-color: #2b2b31;
}

@media screen and (max-width: 360px) {
  .dark__button {
    font-size: 14px;
    line-height: 16px;
  }
}
</style>
