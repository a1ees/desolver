<template>
  <div class="items">
    <div
      ref="scrollBlock"
      class="items__products"
      :class="{ 'items__products_scroll-block': switchScroll }"
      @scroll="checkScrollEnd"
    >
      <div
        v-for="(item, index) in visibleElements"
        :key="index"
        class="items__product"
      >
        <div class="items__product-item product-item">
          <img
            v-if="item.image"
            src="https://guidesgame.ru/wp-content/uploads/2020/04/66767089.jpg"
            alt=""
            class="product-item__image"
          />
          <div class="product-item__info">
            <h3 class="product-item__title">{{ item.title }}</h3>
            <p class="product-item__date">{{ item.date }}</p>
          </div>
        </div>
        <div class="items__product-buttons product-buttons">
          <dark-button v-if="item.removeButton" class="product-buttons__button">
            {{ item.removeButton }}
          </dark-button>
          <dark-button v-if="item.addButton" class="product-buttons__button">
            {{ item.addButton }}
          </dark-button>
          <dark-button v-if="item.postButton" class="product-buttons__button">
            {{ item.postButton }}
          </dark-button>
          <dark-button v-if="item.marketButton" class="product-buttons__button">
            {{ item.marketButton }}
          </dark-button>
        </div>
      </div>
    </div>
    <div
      v-if="switchScroll && maxElementsOnItems < items.length"
      class="items__product-gradient"
    ></div>
    <dark-button
      @click="showMore"
      class="items__products-button"
      :class="{
        'items__products-button_show':
          showMoreButton && maxElementsOnItems < items.length,
      }"
    >
      Показать больше
    </dark-button>
  </div>
</template>

<script>
import DarkButton from "./UI/DarkButton.vue";
export default {
  components: { DarkButton },
  name: "SupportPage",
  props: {
    itemsElem: {
      required: true,
    },
  },
  data() {
    return {
      items: [],
      showMoreButton: false,
      maxElementsOnItems: 7,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.items = this.itemsElem;
    });
  },
  computed: {
    switchScroll() {
      return this.itemsElem.length > 4;
    },
    visibleElements() {
      return this.itemsElem.slice(0, this.maxElementsOnItems);
    },
  },
  methods: {
    checkScrollEnd() {
      const scrollBlock = this.$refs.scrollBlock;
      if (
        scrollBlock.scrollHeight - scrollBlock.scrollTop <
        scrollBlock.clientHeight + 10
      ) {
        this.showMoreButton = true;
      } else {
        this.showMoreButton = false;
      }
    },
    showMore() {
      this.maxElementsOnItems = this.maxElementsOnItems + 4;
      this.$nextTick(() => {
        this.checkScrollEnd();
      });
    },
  },
};
</script>

<style scoped>
.items {
  width: 888px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 24px;
}
.items__products {
  display: block;
  max-height: 424px;
  padding-right: 16px;
  width: calc(100% - 16px);
  position: relative;
}

.items__product-gradient {
  display: block;
  margin-top: -120px;
  margin-right: 20px;
  width: 100%;
  height: 120px;
  background: linear-gradient(to top, rgba(18, 18, 20, 1), rgba(18, 18, 20, 0));
  position: sticky;
}

.items__products_scroll-block {
  overflow-y: scroll;
}

.items__products_scroll-block::-webkit-scrollbar {
  width: 4px;
}

.items__products_scroll-block::-webkit-scrollbar-thumb {
  background-color: #b2b6ff;
  border-radius: 4px;
}

.items__products_scroll-block::-webkit-scrollbar-track {
  background-color: #1a1a1e;
  border-radius: 4px;
}

.items__product {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #151518;
}

.items__product:not(:last-child) {
  margin-bottom: 8px;
}

.product-item {
  display: flex;
}

.product-item__image {
  width: 200px;
}

.product-item__info {
  padding: 24px;
}

.product-item__title {
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 4px;
}
.product-item__date {
  padding: 0;
  margin: 0;
  font-size: 14px;
  line-height: 16.8px;
  color: #8c8e94;
}

.product-buttons {
  display: flex;
  gap: 8px;
  padding: 24px;
}

.product-buttons__button {
  white-space: nowrap;
}

.items__products-button {
  visibility: hidden;
  max-width: 300px;
  margin-top: 16px;
}

.items__products-button_show {
  visibility: visible;
}
</style>
