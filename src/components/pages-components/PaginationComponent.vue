<template>
  <div v-if="paginatedProduct.length" class="market__pagination pagination">
    <button v-if="page > 1" @click="switchPage(1)" class="pagination__button">
      <svg
        width="6"
        height="9"
        viewBox="0 0 6 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.7135 8.54688L5.7135 7.54688L2.66663 4.5L5.7135 1.45312L4.7135 0.453125L0.666626 4.5L4.7135 8.54688Z"
          fill="#87878E"
        /></svg
      ><svg
        width="6"
        height="9"
        viewBox="0 0 6 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.7135 8.54688L5.7135 7.54688L2.66663 4.5L5.7135 1.45312L4.7135 0.453125L0.666626 4.5L4.7135 8.54688Z"
          fill="#87878E"
        />
      </svg>
    </button>
    <button
      v-if="page > 1"
      @click="switchPage(page - 1)"
      class="pagination__button"
    >
      <svg
        width="6"
        height="9"
        viewBox="0 0 6 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.7135 8.54688L5.7135 7.54688L2.66663 4.5L5.7135 1.45312L4.7135 0.453125L0.666626 4.5L4.7135 8.54688Z"
          fill="#87878E"
        />
      </svg>
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
      <svg
        width="6"
        height="9"
        viewBox="0 0 6 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.16663 0.453125L0.166626 1.45312L3.2135 4.5L0.166626 7.54688L1.16663 8.54688L5.2135 4.5L1.16663 0.453125Z"
          fill="#59595A"
        />
      </svg>
    </button>
    <button
      v-if="displayRecentItems"
      @click="switchPage(quantityPages)"
      class="pagination__button"
    >
      <svg
        width="11"
        height="9"
        viewBox="0 0 11 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 0L0 1L3.04687 4.04688L0 7.09375L1 8.09375L5.04688 4.04688L1 0Z"
          fill="#59595A"
        />
        <path
          d="M6 0L5 1L8.04687 4.04688L5 7.09375L6 8.09375L10.0469 4.04688L6 0Z"
          fill="#59595A"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "PaginationComponent",
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
}

.pagination__button {
  background: none;
  border: none;
  border-radius: 8px;
  width: 43px;
  height: 43px;
  color: #59595a;
  background-color: #19191d;
}

.pagination__button:not(:last-child) {
  margin-right: 16px;
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
