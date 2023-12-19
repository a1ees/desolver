<template>
  <button class="white-border-button"><slot></slot></button>
</template>

<style scoped>
.white-border-button {
  all: unset;
  border: 2px solid #fff;
  border-radius: 96px;
  width: 100%;
  text-align: center;
  padding: 20px 0;
  transition: background-color 0.3s, color 0.3s;
  z-index: 100;
}
.white-border-button:hover {
  cursor: pointer;
  color: #121214;
  background-color: #fff;
}
</style>
