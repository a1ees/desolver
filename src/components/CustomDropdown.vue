<template>
  <div class="custom__dropdown">
    <div class="custom__dropdown-selected" @click="toggleDropdown">
      {{ currentOption }}
      <img
        src="../assets/images/logo/drop-down.svg"
        alt=""
        class="custom__dropdown-image"
      />
    </div>
    <ul v-if="isOpen" class="custom__dropdown-options">
      <li
        v-for="(option, index) in options"
        :key="index"
        @click="selectOption(option)"
        class="custom__dropdown-item"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CustomDropdown",
  props: {
    options: {
      type: Array,
      required: true,
    },
    currentOption: {
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      this.$emit("optionSelected", option);
      this.isOpen = false;
    },
  },
};
</script>

<style scoped>
.custom__dropdown {
  background-color: #2b2b31;
  border-radius: 8px;
  color: #6c6c7a;
  font-size: 16px;
  line-height: 19.2px;
}

.custom__dropdown:hover {
  cursor: pointer;
}

.custom__dropdown-selected {
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
}

.custom__dropdown-options {
  list-style: none;
  margin: 0;
  padding: 0;
}

.custom__dropdown-item {
  padding: 12px 16px;
  background-color: #1a1a1e;
  margin: 0;
}
.custom__dropdown-item:hover {
  cursor: pointer;
  color: #b2b6ff;
}
</style>
