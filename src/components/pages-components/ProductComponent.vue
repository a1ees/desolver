<template>
  <div
    v-for="(product, index) in paginatedProduct"
    :key="index"
    class="products__item"
    @click="console.log(product)"
  >
    <img :src="product.image" :alt="product.name" class="products__image" />
    <div class="products__info">
      <h2 class="products__name">{{ product.name }}</h2>
      <div class="products__author">
        Автор
        <p class="products__author-name">{{ product.author }}</p>
      </div>
      <div class="products__purchases">
        Покупок
        <p class="products__purchases-quantity">
          {{ product.purchases }}
        </p>
      </div>
      <div class="products__rank">
        Рейтинг
        <div class="products__rank-rating">
          <star-icon class="products__rank-svg" />
          <p class="products__rank-num">{{ product.rating }}</p>
        </div>
      </div>
      <dark-button>Купить за {{ product.price }}₽</dark-button>
    </div>
  </div>
</template>

<script>
import DarkButton from "./UI/DarkButton.vue";
import StarIcon from "@/components/icons/StarIcon.vue";
export default {
  name: "ProductComponent",
  components: {
    StarIcon,
    DarkButton,
  },

  props: {
    paginatedProduct: {
      required: true,
    },
  },
};
</script>

<style scoped>
.products__items {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
.products__item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;
  background-color: #151518;
  max-width: 288px;
  width: 100%;
}
.products__image {
  height: 110px;
}
.products__info {
  display: flex;
  flex-direction: column;

  padding: 24px;
}
.products__name {
  padding: 0;
  margin: 0px 0px 16px 0px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
}
.products__author {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 16px;
  line-height: 19.2px;
}
.products__author-name {
  padding: 0;
  margin: 0;
  color: #b2b6ff;
}
.products__purchases {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 16px;
  line-height: 19.2px;
}

.products__purchases-quantity {
  padding: 0;
  margin: 0;
  color: #b2b6ff;
}

.products__rank {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 19.2px;
}

.products__rank-rating {
  display: flex;
  justify-content: center;
  align-items: center;
}
.products__rank-svg {
  width: 16px;
  height: 16px;
  margin-right: 1.5px;
}

.products__rank-num {
  padding: 0;
  margin: 0;
  color: #b2b6ff;
}
</style>
