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
          <svg
            class="products__rank-svg"
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.5 0.5L11.6329 7.06434H18.535L12.9511 11.1213L15.084 17.6857L9.5 13.6287L3.91604 17.6857L6.04892 11.1213L0.464963 7.06434H7.36712L9.5 0.5Z"
              fill="#B2B6FF"
            />
          </svg>
          <p class="products__rank-num">{{ product.rating }}</p>
        </div>
      </div>
      <dark-button :textContent="`Купить за ${product.price}₽`" />
    </div>
  </div>
</template>

<script>
import DarkButton from "./UI/DarkButton.vue";
export default {
  name: "ProductComponent",
  components: {
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
