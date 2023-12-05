<template>
  <div class="market__filters filters">
    <div class="filters__buttons">
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
    <div class="filters__price">
      <h2 class="filters__title">Сортировать по цене</h2>
      <div class="filters__inputs">
        <input
          v-model="filterOptions.minPrice"
          type="text"
          class="filters__price-item"
          placeholder="От 0₽"
        />
        <input
          v-model="filterOptions.maxPrice"
          type="text"
          class="filters__price-item"
          placeholder="До 10000₽"
        />
      </div>
    </div>
    <div class="filters__sortby">
      <h2 class="filters__title">Сортировать по</h2>
      <custom-dropdown
        :options="sortOptions"
        @optionSelected="selectSortBy"
        :currentOption="filterOptions.sortBy"
      />
    </div>
    <div class="filters__products">
      <h2 class="filters__title">Показывать товары</h2>
      <custom-dropdown
        :options="productOptions"
        @optionSelected="selectProducts"
        :currentOption="filterOptions.products"
      />
    </div>
    <div class="filters__game">
      <h2 class="filters__title">Игра</h2>
      <custom-dropdown
        :options="gameOptions"
        @optionSelected="selectGame"
        :currentOption="filterOptions.game"
      />
    </div>
    <div class="filters__tags">
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
    <button class="filters__reset" @click="resetFilters">
      Сбросить фильтры
    </button>
  </div>
</template>

<script>
import CustomDropdown from "./CustomDropdown.vue";
export default {
  components: { CustomDropdown },
  name: "FiltersComponent",
  data() {
    const sortOptions = [
      { label: "Время загрузки" },
      { label: "Количество покупок" },
      { label: "Рейтинг" },
    ];

    const productOptions = [{ label: "Все" }, { label: "Хз что тут писать" }];

    const gameOptions = [
      { label: "Все" },
      { label: "CS:GO" },
      { label: "Not CS:GO" },
    ];

    const popularTags = [
      "hvh",
      "legit",
      "rage",
      "lua",
      "visual",
      "free",
      "gamesense",
      "config",
    ];

    return {
      filterOptions: {
        type: "config",
        minPrice: "",
        maxPrice: "",
        sortBy: sortOptions[0].label,
        products: productOptions[0].label,
        game: gameOptions[0].label,
        tagSelect: [],
      },
      sortOptions: sortOptions,
      productOptions: productOptions,
      gameOptions: gameOptions,
      popularTags: popularTags,
    };
  },

  mounted() {
    this.$emit("filterOptions", this.filterOptions);
  },
  methods: {
    resetFilters() {
      this.filterOptions = {
        type: "config",
        minPrice: "",
        maxPrice: "",
        sortBy: this.sortOptions[0].label,
        products: this.productOptions[0].label,
        game: this.gameOptions[0].label,
        tagSelect: [],
      };
      this.$emit("resetFilters");
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
  max-width: calc(396px - 24px - 24px);
  margin-left: 48px;
  height: 100%;
}

.filters__buttons {
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  font-size: 16px;
  line-height: 19px;
  background-color: #2b2b31;
}
.filters__button-configs {
  border: 0;
  background: none;
  padding: 12px 52px;
  color: #ffffff;
}

.filters__button-configs:hover {
  cursor: pointer;
}

.filters__button-scripts {
  border: 0;
  background: none;
  padding: 12px 52px;
  color: #ffffff;
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
  margin: 24px 0px 12px 0px;
}

.filters__inputs {
  display: flex;
}

.filters__price-item {
  background: none;
  background-color: #2b2b31;
  border-radius: 8px;
  border: none;
  outline: none;
  color: #fff;
  width: 100%;
  padding: 12px 16px;
}

.filters__price-item:not(:last-child) {
  margin-right: 12px;
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
  background: none;
  background-color: #1a1a1e;
  color: #8c8e94;
  border-radius: 60px;
  padding: 8px 18px;
}

.filters__tags-item:hover {
  cursor: pointer;
}

.filters__tags-item_select {
  background-color: #b2b6ff;
  color: #121214;
}

.filters__reset {
  margin-top: 30px;
  border: none;
  background: none;
  color: #b2b6ff;
}

.filters__reset:hover {
  cursor: pointer;
  opacity: 0.7;
}
</style>
