<template>
  <div class="page">
    <div class="page__container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import "../../assets/vendor/animations.css";

export default {
  name: "ContainerMainComponent",
};
</script>

<style scoped>
.page {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  background-color: #121214;
  min-height: 100vh;
  position: relative;
  width: 100%;
  color: #fff;
  z-index: 1;
}

.page__container {
  z-index: 2;
  max-width: 1776px;
  margin: 0 auto;
}

@media screen and (max-width: 1800px) {
  .page__container {
    padding: 0px 16px;
  }
}

@media screen and (max-width: 1440px) {
  .page__container {
    padding: 0;
  }
}

@media screen and (max-width: 900px) {
  .page__container {
    max-width: 704px;
  }
}

@media screen and (max-width: 710px) {
  .page__container {
    max-width: 550px;
  }
}

@media screen and (max-width: 580px) {
  .page__container {
    max-width: 450px;
  }
}

@media screen and (max-width: 360px) {
  .page__container {
    max-width: 328px;
  }
}

@media screen and (max-width: 480px) {
  .page__container {
    padding: 0px 16px;
  }
}
</style>
