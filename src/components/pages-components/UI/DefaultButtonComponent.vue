<template>
  <button class="button">{{ textContent }}</button>
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
.button {
  width: 100%;
  border: none;
  background: none;
  text-align: center;
  background-color: #b2b6ff;
  font-size: 16px;
  line-height: 19px;
  padding: 12px 24px;
  color: #121214;
  border-radius: 8px;
  transition: background-color 0.3s, color 0.3s;
}

.button:hover {
  cursor: pointer;
  background-color: #cccfff;
}

@media screen and (max-width: 360px) {
  .button {
    font-size: 14px;
    line-height: 16px;
  }
}
</style>
