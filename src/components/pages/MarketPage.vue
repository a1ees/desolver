<template>
  <main-component>
    <template #content>
      <section class="market">
        <div class="market__products products">
          <div class="products__filter">
            <input-component
              class="products__filter-input"
              :placeholder="'Поиск товара'"
              @input="setFilter"
            />
            <default-button-component
              class="products__filter-button filter-button"
              @click="activeFiltersForInput = true"
            >
              <search-icon />
            </default-button-component>
          </div>
          <div v-if="paginatedProduct.length" class="products__items">
            <product-component :paginatedProduct="paginatedProduct" />
          </div>
          <div v-else class="products__empty empty">
            <h1 class="empty__title">Товаров не найдено</h1>
          </div>
          <pagination-component
            :paginatedProduct="paginatedProduct"
            :quantityPages="quantityPages"
            :page="page"
            @switch-page="switchPage"
          />
        </div>
        <filters-component
          @filterOptions="filters"
          :productOptions="productOptions"
          :gameOptions="gameOptions"
          :popularTags="popularTags"
          :sortOptions="sortOptions"
          :sortByPrice="true"
          :sortByScripts="true"
        />
      </section>
    </template>
  </main-component>
</template>

<script>
import FiltersComponent from "../pages-components/FiltersComponent.vue";
import MainComponent from "../pages-components/MainComponent.vue";
import PaginationComponent from "../pages-components/PaginationComponent.vue";
import ProductComponent from "../pages-components/ProductComponent.vue";
import InputComponent from "../pages-components/UI/InputComponent.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import DefaultButtonComponent from "@/components/pages-components/UI/DefaultButtonComponent.vue";
import { products } from "@/utils/constants";
export default {
  name: "MarketPage",
  components: {
    DefaultButtonComponent,
    SearchIcon,
    MainComponent,
    ProductComponent,
    PaginationComponent,
    FiltersComponent,
    InputComponent,
  },
  data() {
    return {
      page: 1,
      productItem: [],
      filterInput: "",
      allFilters: {},
      activeFiltersForInput: false,

      sortOptions: [
        { label: "Время загрузки" },
        { label: "Количество покупок" },
        { label: "Рейтинг" },
      ],

      productOptions: [{ label: "Все" }, { label: "Хз что тут писать" }],

      gameOptions: [
        { label: "Все" },
        { label: "CS:GO" },
        { label: "Not CS:GO" },
      ],

      popularTags: [
        "hvh",
        "legit",
        "rage",
        "lua",
        "visual",
        "free",
        "gamesense",
        "config",
      ],
    };
  },
  mounted() {
    this.productItem = products;
  },
  computed: {
    startIndex() {
      // нашли индекс первого элемента на странице
      return (this.page - 1) * 9;
    },
    endIndex() {
      // нашли индекс последнего элемента на странице
      return this.page * 9;
    },
    filteredByName() {
      return this.activeFiltersForInput
        ? this.productItemTypeFiltered.filter((item) => {
            return item.name
              .toUpperCase()
              .startsWith(this.filterInput.toUpperCase());
          })
        : this.productItemTypeFiltered;
    },
    filteredByAuthor() {
      return this.activeFiltersForInput
        ? this.productItemTypeFiltered.filter((item) => {
            return item.author
              .toUpperCase()
              .startsWith(this.filterInput.toUpperCase());
          })
        : this.productItemTypeFiltered;
    },

    filteredByPrice() {
      const { minPrice, maxPrice } = this.allFilters;
      return this.productItemTypeFiltered.filter((item) => {
        return maxPrice.length
          ? item.price >= minPrice && item.price <= maxPrice
          : item.price >= minPrice;
      });
    },
    filteredByTags() {
      const { tagSelect } = this.allFilters;
      return this.productItemTypeFiltered.filter((item) => {
        return tagSelect.length
          ? item.tags.some((tag) => tagSelect.includes(tag))
          : true;
      });
    },

    filteredByGame() {
      const { game } = this.allFilters;
      return this.productItemTypeFiltered.filter((item) => {
        if (game === "CS:GO") {
          return item.csgo;
        } else if (game === "Not CS:GO") {
          return !item.csgo;
        } else {
          return item;
        }
      });
    },

    sortProduct() {
      const addFilters = this.productItemTypeFiltered.filter((item) => {
        const inNameFiltered = this.filteredByName.includes(item);
        const inAuthorFiltered = this.filteredByAuthor.includes(item);
        const inPriceFiltered = this.filteredByPrice.includes(item);
        const inTagsFiltered = this.filteredByTags.includes(item);
        const inGameFiltered = this.filteredByGame.includes(item);
        return (
          (inAuthorFiltered || inNameFiltered) &&
          inTagsFiltered &&
          inPriceFiltered &&
          inGameFiltered
        );
      });
      return this.filteredBySort(addFilters);
    },
    productItemTypeFiltered() {
      return this.filteredByType(this.productItem);
    },
    paginatedProduct() {
      return this.sortProduct.slice(this.startIndex, this.endIndex);
    },
    quantityPages() {
      return Math.ceil(this.sortProduct.length / 9);
    },
  },
  methods: {
    setFilter(filter) {
      this.filterInput = filter;
    },
    filteredBySort(array) {
      if (this.allFilters.sortBy === "Количество покупок") {
        return array.sort((a, b) => b.purchases - a.purchases);
      } else if (this.allFilters.sortBy === "Рейтинг") {
        return array.sort((a, b) => b.rating - a.rating);
      } else {
        return array;
      }
    },
    filteredByType(array) {
      const { type } = this.allFilters;
      return array.filter((item) => {
        return item.type === type;
      });
    },
    switchPage(p) {
      this.page = p;
    },
    filters(options) {
      this.allFilters = options;
    },
  },
  watch: {
    filterInput() {
      this.page = 1;
      if (!this.filterInput.length) {
        this.activeFiltersForInput = false;
      }
    },
  },
};
</script>

<style scoped>
.market {
  display: flex;
}
.market__products {
  margin-bottom: 120px;
}

.products__filter {
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
  gap: 8px;
}
.products__filter-button {
  max-width: 67px;
}

.products__items {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  width: 888px;
}

.products__empty {
  width: 888px;
}

.empty {
  width: 888px;
  display: flex;
  justify-content: center;
  color: #2b2b31;
}
</style>
