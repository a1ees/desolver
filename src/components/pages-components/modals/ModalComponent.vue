<template>
  <div class="page__modal modal" :class="{ modal__visible: showModal }">
    <slot name="container"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
    };
  },
  props: {
    isOpenModal: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    isOpenModal() {
      if (this.isOpenModal) {
        this.$nextTick(() => {
          setTimeout(() => {
            this.showModal = true;
          }, 1);
        });
      } else {
        this.$nextTick(() => {
          setTimeout(() => {
            this.showModal = false;
          }, 1);
        });
      }
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s linear, visibility 0s linear 0.3s;
}

.modal__visible {
  visibility: visible;
  transition: opacity 0.3s linear;
  opacity: 1;
}
</style>
