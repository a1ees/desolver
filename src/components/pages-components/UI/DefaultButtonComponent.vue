<template>
  <button class="button"><slot></slot></button>
</template>

<style scoped>
.button {
  width: 100%;
  border: none;
  text-align: center;
  background: #b2b6ff none;
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
