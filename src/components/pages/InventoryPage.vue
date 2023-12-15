<template>
  <main-component>
    <template #content>
      <div class="content">
        <div class="inventory__items">
          <h2 class="inventory__items-title">Мои предметы</h2>
          <inventory-scroll-component :itemsElem="myItemsElements" />
          <h2 class="inventory__items-title">Предметы с маркета</h2>
          <inventory-scroll-component :itemsElem="marketItemsElements" />
        </div>
        <filters-component
          :sortByScripts="true"
          :sortOptions="sortOptions"
          :productOptions="productOptions"
          :gameOptions="gameOptions"
        />
      </div>
    </template>
  </main-component>
</template>

<script>
import FiltersComponent from "../pages-components/FiltersComponent.vue";
import InventoryScrollComponent from "../pages-components/InventoryScrollComponent.vue";
import MainComponent from "../pages-components/MainComponent.vue";
export default {
  name: "SupportPage",
  components: { MainComponent, InventoryScrollComponent, FiltersComponent },
  data() {
    return {
      myItemsElements: [],
      marketItemsElements: [],
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
    };
  },
  mounted() {
    const myItems = [
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        removeButton: "Удалить",
        addButton: "Добавить в чит",
        postButton: "Опубликовать",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        removeButton: "Удалить",
        addButton: "Добавить в чит",
        postButton: "Опубликовать",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        removeButton: "Удалить",
        addButton: "Добавить в чит",
        postButton: "Опубликовать",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        removeButton: "Удалить",
        addButton: "Добавить в чит",
        postButton: "Опубликовать",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        removeButton: "Удалить",
        addButton: "Добавить в чит",
        postButton: "Опубликовать",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        removeButton: "Удалить",
        addButton: "Добавить в чит",
        postButton: "Опубликовать",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        removeButton: "Удалить",
        addButton: "Добавить в чит",
        postButton: "Опубликовать",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        removeButton: "Удалить",
        addButton: "Добавить в чит",
        postButton: "Опубликовать",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        removeButton: "Удалить",
        addButton: "Добавить в чит",
        postButton: "Опубликовать",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        removeButton: "Удалить",
        addButton: "Добавить в чит",
        postButton: "Опубликовать",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        removeButton: "Удалить",
        addButton: "Добавить в чит",
        postButton: "Опубликовать",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        removeButton: "Удалить",
        addButton: "Добавить в чит",
        postButton: "Опубликовать",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        removeButton: "Удалить",
        addButton: "Добавить в чит",
        postButton: "Опубликовать",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        removeButton: "Удалить",
        addButton: "Добавить в чит",
        postButton: "Опубликовать",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        removeButton: "Удалить",
        addButton: "Добавить в чит",
        postButton: "Опубликовать",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        removeButton: "Удалить",
        addButton: "Добавить в чит",
        postButton: "Опубликовать",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        removeButton: "Удалить",
        addButton: "Добавить в чит",
        postButton: "Опубликовать",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        removeButton: "Удалить",
        addButton: "Добавить в чит",
        postButton: "Опубликовать",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        removeButton: "Удалить",
        addButton: "Добавить в чит",
        postButton: "Опубликовать",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        removeButton: "Удалить",
        addButton: "Добавить в чит",
        postButton: "Опубликовать",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        removeButton: "Удалить",
        addButton: "Добавить в чит",
        postButton: "Опубликовать",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        removeButton: "Удалить",
        addButton: "Добавить в чит",
        postButton: "Опубликовать",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        removeButton: "Удалить",
        addButton: "Добавить в чит",
        postButton: "Опубликовать",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        removeButton: "Удалить",
        addButton: "Добавить в чит",
        postButton: "Опубликовать",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        removeButton: "Удалить",
        addButton: "Добавить в чит",
        postButton: "Опубликовать",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        removeButton: "Удалить",
        addButton: "Добавить в чит",
        postButton: "Опубликовать",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        removeButton: "Удалить",
        addButton: "Добавить в чит",
        postButton: "Опубликовать",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        removeButton: "Удалить",
        addButton: "Добавить в чит",
        postButton: "Опубликовать",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        removeButton: "Удалить",
        addButton: "Добавить в чит",
        postButton: "Опубликовать",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        removeButton: "Удалить",
        addButton: "Добавить в чит",
        postButton: "Опубликовать",
      },
    ];
    this.myItemsElements = myItems;
    const marketItems = [
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        addButton: "Добавить в чит",
        marketButton: "Опубликовать",
        image: "https://guidesgame.ru/wp-content/uploads/2020/04/66767089.jpg",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        addButton: "Добавить в чит",
        marketButton: "Опубликовать",
        image: "https://guidesgame.ru/wp-content/uploads/2020/04/66767089.jpg",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        addButton: "Добавить в чит",
        marketButton: "Опубликовать",
        image: "https://guidesgame.ru/wp-content/uploads/2020/04/66767089.jpg",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        addButton: "Добавить в чит",
        marketButton: "Опубликовать",
        image: "https://guidesgame.ru/wp-content/uploads/2020/04/66767089.jpg",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        addButton: "Добавить в чит",
        marketButton: "Опубликовать",
        image: "https://guidesgame.ru/wp-content/uploads/2020/04/66767089.jpg",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        addButton: "Добавить в чит",
        marketButton: "Опубликовать",
        image: "https://guidesgame.ru/wp-content/uploads/2020/04/66767089.jpg",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        addButton: "Добавить в чит",
        marketButton: "Опубликовать",
        image: "https://guidesgame.ru/wp-content/uploads/2020/04/66767089.jpg",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        addButton: "Добавить в чит",
        marketButton: "Опубликовать",
        image: "https://guidesgame.ru/wp-content/uploads/2020/04/66767089.jpg",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        addButton: "Добавить в чит",
        marketButton: "Опубликовать",
        image: "https://guidesgame.ru/wp-content/uploads/2020/04/66767089.jpg",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        addButton: "Добавить в чит",
        marketButton: "Опубликовать",
        image: "https://guidesgame.ru/wp-content/uploads/2020/04/66767089.jpg",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        addButton: "Добавить в чит",
        marketButton: "Опубликовать",
        image: "https://guidesgame.ru/wp-content/uploads/2020/04/66767089.jpg",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        addButton: "Добавить в чит",
        marketButton: "Опубликовать",
        image: "https://guidesgame.ru/wp-content/uploads/2020/04/66767089.jpg",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        addButton: "Добавить в чит",
        marketButton: "Опубликовать",
        image: "https://guidesgame.ru/wp-content/uploads/2020/04/66767089.jpg",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        addButton: "Добавить в чит",
        marketButton: "Опубликовать",
        image: "https://guidesgame.ru/wp-content/uploads/2020/04/66767089.jpg",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        addButton: "Добавить в чит",
        marketButton: "Опубликовать",
        image: "https://guidesgame.ru/wp-content/uploads/2020/04/66767089.jpg",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        addButton: "Добавить в чит",
        marketButton: "Опубликовать",
        image: "https://guidesgame.ru/wp-content/uploads/2020/04/66767089.jpg",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        addButton: "Добавить в чит",
        marketButton: "Опубликовать",
        image: "https://guidesgame.ru/wp-content/uploads/2020/04/66767089.jpg",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        addButton: "Добавить в чит",
        marketButton: "Опубликовать",
        image: "https://guidesgame.ru/wp-content/uploads/2020/04/66767089.jpg",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        addButton: "Добавить в чит",
        marketButton: "Опубликовать",
        image: "https://guidesgame.ru/wp-content/uploads/2020/04/66767089.jpg",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        addButton: "Добавить в чит",
        marketButton: "Опубликовать",
        image: "https://guidesgame.ru/wp-content/uploads/2020/04/66767089.jpg",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        addButton: "Добавить в чит",
        marketButton: "Опубликовать",
        image: "https://guidesgame.ru/wp-content/uploads/2020/04/66767089.jpg",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        addButton: "Добавить в чит",
        marketButton: "Опубликовать",
        image: "https://guidesgame.ru/wp-content/uploads/2020/04/66767089.jpg",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        addButton: "Добавить в чит",
        marketButton: "Опубликовать",
        image: "https://guidesgame.ru/wp-content/uploads/2020/04/66767089.jpg",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        addButton: "Добавить в чит",
        marketButton: "Опубликовать",
        image: "https://guidesgame.ru/wp-content/uploads/2020/04/66767089.jpg",
      },
      {
        title: "hysteria.lua",
        date: "01.07.2023 00:53",
        addButton: "Добавить в чит",
        marketButton: "Опубликовать",
        image: "https://guidesgame.ru/wp-content/uploads/2020/04/66767089.jpg",
      },
    ];
    this.marketItemsElements = marketItems;
  },
};
</script>

<style scoped>
.content {
  margin-bottom: 120px;
  display: flex;
}

.inventory__items {
}

.inventory__items-title {
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 16px;
}
</style>
