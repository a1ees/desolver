<template>
  <div v-if="paginatedProduct.length" class="market__pagination pagination">
    <button v-if="page > 1" @click="switchPage(1)" class="pagination__button">
      <icon-pug-left />
      <icon-pug-left />
    </button>
    <button
      v-if="page > 1"
      @click="switchPage(page - 1)"
      class="pagination__button"
    >
      <icon-pug-left />
    </button>
    <button
      v-for="pageNumber in displayedPages"
      :key="pageNumber"
      class="pagination__button"
      :class="{
        pagination__button_select: pageNumber === page,
      }"
      @click="switchPage(pageNumber)"
    >
      {{ pageNumber }}
    </button>
    <button
      v-if="displayRecentItems"
      class="pagination__button pagination__button_disabled"
      disabled
    >
      ...
    </button>
    <button
      v-if="displayRecentItems"
      @click="switchPage(quantityPages)"
      class="pagination__button"
    >
      {{ quantityPages }}
    </button>
    <button
      v-if="displayRecentItems"
      @click="switchPage(page + 1)"
      class="pagination__button"
    >
      <icon-pug-right />
    </button>
    <button
      v-if="displayRecentItems"
      @click="switchPage(quantityPages)"
      class="pagination__button"
    >
      <icon-pug-right />
      <icon-pug-right />
    </button>
  </div>
</template>

<script>
import IconPugLeft from "@/components/icons/IconPugLeft.vue";
import IconPugRight from "@/components/icons/IconPugRight.vue";

export default {
  name: "PaginationComponent",
  components: { IconPugRight, IconPugLeft },
  props: {
    paginatedProduct: {
      required: true,
    },
    quantityPages: {
      required: true,
    },
    page: {
      required: true,
    },
  },
  computed: {
    displayRecentItems() {
      return this.page < this.quantityPages - 2 && this.quantityPages > 3;
    },
    displayedPages() {
      const totalPages = this.quantityPages;
      const currentPage = this.page;
      const lastPage = Math.min(currentPage + 2, totalPages);
      const firstPage = Math.max(1, lastPage - 2);

      return Array.from(
        { length: lastPage - firstPage + 1 },
        (_, i) => firstPage + i
      );
    },
  },
  methods: {
    switchPage(page) {
      this.$emit("switch-page", page);
    },
  },
};
</script>

<style scoped>
.market__pagination {
  margin-top: 24px;
  display: flex;
  justify-content: center;
  gap: 16px;
}

@media screen and (max-width: 760px) {
  .market__pagination {
    width: 90vw;
  }
}

.pagination__button {
  border: none;
  border-radius: 8px;
  width: 43px;
  height: 43px;
  color: #59595a;
  background: #19191d none;
}

.pagination__button:hover {
  cursor: pointer;
  opacity: 0.8;
}

.pagination__button_disabled:hover {
  cursor: default;
  opacity: 1;
}

.pagination__button_select {
  color: #b2b6ff;
}
</style>
