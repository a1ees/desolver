<template>
  <div class="market__filters filters">
    <div v-if="sortByScripts" class="filters__buttons">
      <button
        class="filters__button-configs"
        :class="{
          filters__button_select: filterOptions.type === 'config',
        }"
        @click="selectFilterButton('config')"
      >
        Конфиги
      </button>
      <button
        class="filters__button-scripts"
        :class="{
          filters__button_select: filterOptions.type === 'script',
        }"
        @click="selectFilterButton('script')"
      >
        Скрипты
      </button>
    </div>
    <div v-if="sortByPrice" class="filters__price">
      <h2 class="filters__title">Сортировать по цене</h2>
      <div class="filters__inputs">
        <input-component
          class="filters__price-item"
          :placeholder="'От 0₽'"
          @input="setMinPrice"
        />
        <input-component
          class="filters__price-item"
          :placeholder="'До 10000₽'"
          @input="setMaxPrice"
        />
      </div>
    </div>
    <div v-if="sortOptions.length" class="filters__sortby">
      <h2 class="filters__title">Сортировать по</h2>
      <custom-dropdown
        :options="sortOptions"
        @optionSelected="selectSortBy"
        :currentOption="filterOptions.sortBy"
      />
    </div>
    <div v-if="productOptions.length" class="filters__products">
      <h2 class="filters__title">Показывать товары</h2>
      <custom-dropdown
        :options="productOptions"
        @optionSelected="selectProducts"
        :currentOption="filterOptions.products"
      />
    </div>
    <div v-if="gameOptions.length" class="filters__game">
      <h2 class="filters__title">Игра</h2>
      <custom-dropdown
        :options="gameOptions"
        @optionSelected="selectGame"
        :currentOption="filterOptions.game"
      />
    </div>
    <div v-if="popularTags.length" class="filters__tags">
      <h2 class="filters__title">Популярные теги</h2>
      <div class="filters__tags-buttons">
        <button
          v-for="(tag, index) in popularTags"
          :key="index"
          class="filters__tags-item"
          :class="{
            'filters__tags-item_select': filterOptions.tagSelect.includes(tag),
          }"
          @click="addTagSelect(tag)"
        >
          {{ tag }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import CustomDropdown from "./CustomDropdown.vue";
import InputComponent from "./UI/InputComponent.vue";

export default {
  components: { CustomDropdown, InputComponent },
  name: "FiltersComponent",
  props: {
    sortOptions: {
      type: Array,
      default: () => [],
    },
    productOptions: {
      type: Array,
      default: () => [],
    },
    gameOptions: {
      type: Array,
      default: () => [],
    },
    popularTags: {
      type: Array,
      default: () => [],
    },
    sortByPrice: {
      type: Boolean,
      default: () => false,
    },
    sortByScripts: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      filterOptions: {
        type: "config",
        minPrice: "",
        maxPrice: "",
        sortBy: this.sortOptions.length ? this.sortOptions[0].label : "",
        products: this.productOptions.length
          ? this.productOptions[0].label
          : "",
        game: this.gameOptions.length ? this.gameOptions[0].label : "",
        tagSelect: [],
      },
    };
  },
  mounted() {
    this.$emit("filterOptions", this.filterOptions);
  },
  methods: {
    setTimeoutPrice(callback) {
      if (this.timeOutPrice) {
        clearTimeout(this.timeOutPrice);
      }
      this.timeOutPrice = setTimeout(() => {
        callback();
      }, 1000);
    },
    setMinPrice(minPrice) {
      this.setTimeoutPrice(() => {
        this.filterOptions.minPrice = minPrice;
      });
    },
    setMaxPrice(maxPrice) {
      this.setTimeoutPrice(() => {
        this.filterOptions.maxPrice = maxPrice;
      });
    },
    addTagSelect(tag) {
      if (!this.filterOptions.tagSelect.includes(tag)) {
        this.filterOptions.tagSelect.push(tag);
      } else {
        this.filterOptions.tagSelect = this.filterOptions.tagSelect.filter(
          (item) => item !== tag
        );
      }
    },
    selectFilterButton(button) {
      this.filterOptions.type = button;
    },
    selectSortBy(options) {
      this.filterOptions.sortBy = options.label;
    },
    selectProducts(options) {
      this.filterOptions.products = options.label;
    },
    selectGame(options) {
      this.filterOptions.game = options.label;
    },
  },
  watch: {
    filterOptions: {
      handler() {
        this.$emit("filterOptions", this.filterOptions);
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.market__filters {
  padding: 24px;
  background-color: #151518;
  display: flex;
  flex-direction: column;
  margin-left: 48px;
  height: 100%;
  gap: 24px;
}

@media screen and (max-width: 760px) {
  .market__filters {
    display: none;
  }
}

.filters__buttons {
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-size: 16px;
  line-height: 19px;
  background-color: #2b2b31;
  width: 348px;
}

@media screen and (max-width: 1420px) {
  .filters__buttons {
    width: 230px;
  }
}

.filters__button-configs {
  border: 0;
  background: none;
  padding: 12px 24px;
  color: #ffffff;
  width: 100%;
  transition: background-color 0.4s ease;
}

.filters__button-configs:hover {
  cursor: pointer;
}

.filters__button-scripts {
  border: 0;
  width: 100%;
  background: none;
  padding: 12px 24px;
  color: #ffffff;
  transition: background-color 0.4s ease;
}

.filters__button-scripts:hover {
  cursor: pointer;
}

.filters__button_select {
  background-color: #b2b6ff;
  color: #121214;
}

.filters__price {
  display: flex;
  flex-direction: column;
}

.filters__title {
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  padding: 0;
  margin: 0px 0px 12px 0px;
}

.filters__inputs {
  display: flex;
  gap: 12px;
}

.filters__tags {
  display: flex;
  flex-direction: column;
}
.filters__tags-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.filters__tags-item {
  border: none;
  background: #1a1a1e none;
  color: #8c8e94;
  border-radius: 60px;
  padding: 8px 18px;
  transition: background-color 0.4s ease;
}

.filters__tags-item:hover {
  cursor: pointer;
}

.filters__tags-item_select {
  background-color: #b2b6ff;
  color: #121214;
  transition: background-color 0.4s ease;
}
</style>
