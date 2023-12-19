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
              ref="inputFilter"
            />
            <default-button-component
              class="products__filter-button filter-button"
              :class="{ 'products__filter-button_bored': isProductFiltered }"
              @click="searchProduct"
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
          @resetFilters="resetFilters"
          :productOptions="productOptions"
          :gameOptions="gameOptions"
          :popularTags="popularTags"
          :sortOptions="sortOptions"
          :sortByPrice="true"
          :sortByScripts="true"
          :isProductFiltered="isProductFiltered"
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
      isProductFiltered: false,

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
    // данные будут приходить с сервера
    const products = [
      {
        image:
          "https://cybersport.metaratings.ru/storage/images/53/5c/535c820edd3ffd35d85198ae27f9195e.jpg",
        name: "r1uk6hj7",
        author: "qeqweqe",
        purchases: 4086,
        rating: 3,
        price: 4790,
        tags: ["hvh"],
        csgo: true,
        type: "script",
      },
      {
        image: "https://i.playground.ru/p/TJ95jOCjmryrUUPB2uSNxw.jpeg",
        name: "l28xgh42",
        author: "hgfhhfg",
        purchases: 9222,
        rating: 4,
        price: 2665,
        tags: ["legit", "free", "visual", "config"],
        csgo: true,
        type: "config",
      },
      {
        image:
          "https://pixelbox.ru/wp-content/uploads/2021/11/cs-go-avatars-vk-pixelbox.ru-3.jpg",
        name: "5nnjafhe",
        author: "qeqeqwe",
        purchases: 1946,
        rating: 2,
        price: 9837,
        tags: ["config", "hvh", "legit", "free"],
        csgo: false,
        type: "config",
      },
      {
        image:
          "http://klubmama.ru/uploads/posts/2022-08/1661780504_41-klubmama-ru-p-cs-go-podelki-foto-43.jpg",
        name: "bwgv08mi",
        author: "qeqeqwe",
        purchases: 2028,
        rating: 3,
        price: 2671,
        tags: ["lua", "legit"],
        csgo: true,
        type: "script",
      },
      {
        image:
          "https://cybersport.metaratings.ru/storage/images/53/5c/535c820edd3ffd35d85198ae27f9195e.jpg",
        name: "5i8ca3lp",
        author: "sdfklsd",
        purchases: 9615,
        rating: 3,
        price: 5056,
        tags: ["config", "rage", "free"],
        csgo: true,
        type: "config",
      },
      {
        image: "https://csgoluxe.ru/wp-content/uploads/2019/03/avatar.jpg",
        name: "cwia02j8",
        author: "sdfsdfsdf",
        purchases: 9169,
        rating: 2,
        price: 6382,
        tags: ["hvh"],
        csgo: false,
        type: "script",
      },
      {
        image: "https://i.playground.ru/p/TJ95jOCjmryrUUPB2uSNxw.jpeg",
        name: "lxuefu7y",
        author: "fghfgh",
        purchases: 5222,
        rating: 3,
        price: 8149,
        tags: ["hvh", "visual", "config"],
        csgo: true,
        type: "script",
      },
      {
        image:
          "https://pixelbox.ru/wp-content/uploads/2021/11/cs-go-avatars-vk-pixelbox.ru-3.jpg",
        name: "kp5mn1ua",
        author: "sdfsdfsdf",
        purchases: 6076,
        rating: 4,
        price: 9636,
        tags: ["free", "legit", "config"],
        csgo: false,
        type: "config",
      },
      {
        image: "https://cs-site.ru/uploads/posts/2020-09/1600522741_22.jpg",
        name: "6y2n5u01",
        author: "dgdfgs",
        purchases: 6921,
        rating: 5,
        price: 7705,
        tags: ["rage", "legit"],
        csgo: false,
        type: "script",
      },
      {
        image: "https://i.playground.ru/p/TJ95jOCjmryrUUPB2uSNxw.jpeg",
        name: "29j96sza",
        author: "sdfklsd",
        purchases: 7110,
        rating: 5,
        price: 5635,
        tags: ["lua", "gamesense"],
        csgo: true,
        type: "script",
      },
      {
        image:
          "https://cybersport.metaratings.ru/storage/images/f2/56/f25690ff5ff3c2fd8012e1450c476f75.jpg",
        name: "osxvrtc5",
        author: "sfsdfsd",
        purchases: 5894,
        rating: 2,
        price: 8151,
        tags: ["hvh", "gamesense", "config"],
        csgo: true,
        type: "script",
      },
      {
        image:
          "http://klubmama.ru/uploads/posts/2022-08/1661780504_41-klubmama-ru-p-cs-go-podelki-foto-43.jpg",
        name: "6yccziaw",
        author: "qeqeqwe",
        purchases: 8379,
        rating: 2,
        price: 2696,
        tags: ["legit", "gamesense", "rage", "hvh"],
        csgo: true,
        type: "script",
      },
      {
        image:
          "http://klubmama.ru/uploads/posts/2022-08/1661780504_41-klubmama-ru-p-cs-go-podelki-foto-43.jpg",
        name: "pb9tjf3b",
        author: "asdsgdhd",
        purchases: 8844,
        rating: 2,
        price: 4040,
        tags: ["hvh"],
        csgo: false,
        type: "script",
      },
      {
        image: "https://csgoluxe.ru/wp-content/uploads/2019/03/avatar.jpg",
        name: "p3ies5u3",
        author: "asdsgdhd",
        purchases: 9238,
        rating: 4,
        price: 3470,
        tags: ["legit"],
        csgo: false,
        type: "config",
      },
      {
        image:
          "http://klubmama.ru/uploads/posts/2022-08/1661780504_41-klubmama-ru-p-cs-go-podelki-foto-43.jpg",
        name: "4abuc5z7",
        author: "asdsgdhd",
        purchases: 1782,
        rating: 1,
        price: 1958,
        tags: ["legit"],
        csgo: true,
        type: "script",
      },
      {
        image: "https://i.playground.ru/p/TJ95jOCjmryrUUPB2uSNxw.jpeg",
        name: "6atp1mgf",
        author: "fghfgh",
        purchases: 9842,
        rating: 5,
        price: 9362,
        tags: ["hvh", "rage", "visual"],
        csgo: false,
        type: "script",
      },
      {
        image:
          "http://klubmama.ru/uploads/posts/2022-08/1661780504_41-klubmama-ru-p-cs-go-podelki-foto-43.jpg",
        name: "4ihz0c8r",
        author: "dgdfgs",
        purchases: 9725,
        rating: 3,
        price: 2415,
        tags: ["rage", "visual", "config"],
        csgo: false,
        type: "script",
      },
      {
        image:
          "http://klubmama.ru/uploads/posts/2022-08/1661780504_41-klubmama-ru-p-cs-go-podelki-foto-43.jpg",
        name: "njgco6xv",
        author: "sdfklsd",
        purchases: 5354,
        rating: 1,
        price: 1982,
        tags: ["gamesense", "legit", "config"],
        csgo: false,
        type: "config",
      },
      {
        image:
          "https://cybersport.metaratings.ru/storage/images/53/5c/535c820edd3ffd35d85198ae27f9195e.jpg",
        name: "hr3n2m3g",
        author: "qeqweqe",
        purchases: 2795,
        rating: 4,
        price: 6553,
        tags: ["gamesense", "visual", "lua"],
        csgo: false,
        type: "script",
      },
      {
        image: "https://i.playground.ru/p/TJ95jOCjmryrUUPB2uSNxw.jpeg",
        name: "1799awx1",
        author: "sdfsdfsdf",
        purchases: 6442,
        rating: 2,
        price: 419,
        tags: ["rage", "config", "gamesense", "visual"],
        csgo: false,
        type: "config",
      },
      {
        image:
          "https://cybersport.metaratings.ru/storage/images/f2/56/f25690ff5ff3c2fd8012e1450c476f75.jpg",
        name: "ztl0f7ej",
        author: "sdfsdf",
        purchases: 7654,
        rating: 4,
        price: 4776,
        tags: ["config", "legit"],
        csgo: true,
        type: "config",
      },
      {
        image:
          "https://pixelbox.ru/wp-content/uploads/2021/11/cs-go-avatars-vk-pixelbox.ru-3.jpg",
        name: "leq3dmqp",
        author: "sfsdfsd",
        purchases: 4950,
        rating: 3,
        price: 2565,
        tags: ["rage", "hvh", "legit"],
        csgo: false,
        type: "script",
      },
      {
        image:
          "https://cybersport.metaratings.ru/storage/images/53/5c/535c820edd3ffd35d85198ae27f9195e.jpg",
        name: "5nm0kg54",
        author: "qeqweqe",
        purchases: 7193,
        rating: 2,
        price: 849,
        tags: ["lua"],
        csgo: true,
        type: "script",
      },
      {
        image:
          "https://cybersport.metaratings.ru/storage/images/f2/56/f25690ff5ff3c2fd8012e1450c476f75.jpg",
        name: "olq6hggu",
        author: "sfsdfsd",
        purchases: 4704,
        rating: 4,
        price: 6952,
        tags: ["visual", "lua", "hvh"],
        csgo: false,
        type: "script",
      },
      {
        image:
          "https://pixelbox.ru/wp-content/uploads/2021/11/cs-go-avatars-vk-pixelbox.ru-3.jpg",
        name: "2rtnuo9a",
        author: "asdsgdhd",
        purchases: 8799,
        rating: 4,
        price: 7895,
        tags: ["config", "free", "legit", "hvh"],
        csgo: true,
        type: "config",
      },
      {
        image:
          "http://klubmama.ru/uploads/posts/2022-08/1661780504_41-klubmama-ru-p-cs-go-podelki-foto-43.jpg",
        name: "vuq1al90",
        author: "qeqweqe",
        purchases: 3397,
        rating: 4,
        price: 8287,
        tags: ["gamesense", "hvh"],
        csgo: true,
        type: "script",
      },
      {
        image:
          "https://cybersport.metaratings.ru/storage/images/f2/56/f25690ff5ff3c2fd8012e1450c476f75.jpg",
        name: "lm014sh7",
        author: "sdfklsd",
        purchases: 3482,
        rating: 2,
        price: 2638,
        tags: ["visual", "gamesense"],
        csgo: false,
        type: "config",
      },
      {
        image:
          "https://pixelbox.ru/wp-content/uploads/2021/11/cs-go-avatars-vk-pixelbox.ru-3.jpg",
        name: "73os0a63",
        author: "asdsgdhd",
        purchases: 6038,
        rating: 5,
        price: 9457,
        tags: ["gamesense", "visual"],
        csgo: false,
        type: "script",
      },
      {
        image:
          "https://pixelbox.ru/wp-content/uploads/2021/11/cs-go-avatars-vk-pixelbox.ru-3.jpg",
        name: "4x5pweq7",
        author: "hgfhhfg",
        purchases: 8081,
        rating: 3,
        price: 7684,
        tags: ["lua", "visual", "config"],
        csgo: false,
        type: "script",
      },
      {
        image:
          "https://cybersport.metaratings.ru/storage/images/f2/56/f25690ff5ff3c2fd8012e1450c476f75.jpg",
        name: "r7qha3tw",
        author: "fghfgh",
        purchases: 4535,
        rating: 2,
        price: 6868,
        tags: ["gamesense"],
        csgo: false,
        type: "script",
      },
      {
        image: "https://csgoluxe.ru/wp-content/uploads/2019/03/avatar.jpg",
        name: "blu86y7g",
        author: "sdfklsd",
        purchases: 9161,
        rating: 1,
        price: 505,
        tags: ["legit", "hvh", "lua"],
        csgo: true,
        type: "config",
      },
      {
        image: "https://csgoluxe.ru/wp-content/uploads/2019/03/avatar.jpg",
        name: "we6gdysj",
        author: "qeqweqe",
        purchases: 4450,
        rating: 3,
        price: 7709,
        tags: ["lua", "rage"],
        csgo: false,
        type: "config",
      },
      {
        image:
          "https://cybersport.metaratings.ru/storage/images/53/5c/535c820edd3ffd35d85198ae27f9195e.jpg",
        name: "z69ovudu",
        author: "dgdfgs",
        purchases: 790,
        rating: 5,
        price: 6118,
        tags: ["gamesense"],
        csgo: false,
        type: "config",
      },
      {
        image: "https://cs-site.ru/uploads/posts/2020-09/1600522741_22.jpg",
        name: "7b1edwi3",
        author: "hgfhhfg",
        purchases: 5048,
        rating: 3,
        price: 6043,
        tags: ["legit", "free"],
        csgo: false,
        type: "config",
      },
      {
        image: "https://i.playground.ru/p/TJ95jOCjmryrUUPB2uSNxw.jpeg",
        name: "n46lmoe6",
        author: "qeqweqe",
        purchases: 1204,
        rating: 4,
        price: 7570,
        tags: ["gamesense"],
        csgo: false,
        type: "script",
      },
      {
        image:
          "https://cybersport.metaratings.ru/storage/images/f2/56/f25690ff5ff3c2fd8012e1450c476f75.jpg",
        name: "mtp01848",
        author: "fghfgh",
        purchases: 8837,
        rating: 2,
        price: 1449,
        tags: ["legit", "gamesense", "hvh", "config"],
        csgo: false,
        type: "config",
      },
      {
        image:
          "https://cybersport.metaratings.ru/storage/images/53/5c/535c820edd3ffd35d85198ae27f9195e.jpg",
        name: "v7oyp34w",
        author: "qeqweqe",
        purchases: 2825,
        rating: 2,
        price: 9026,
        tags: ["legit", "gamesense"],
        csgo: false,
        type: "config",
      },
      {
        image: "https://i.playground.ru/p/TJ95jOCjmryrUUPB2uSNxw.jpeg",
        name: "6f3xykuu",
        author: "sdfsdf",
        purchases: 393,
        rating: 2,
        price: 4756,
        tags: ["rage", "visual", "free", "lua"],
        csgo: true,
        type: "script",
      },
      {
        image:
          "https://cybersport.metaratings.ru/storage/images/53/5c/535c820edd3ffd35d85198ae27f9195e.jpg",
        name: "hx1medjo",
        author: "sdfsdfsdf",
        purchases: 7016,
        rating: 1,
        price: 5457,
        tags: ["hvh"],
        csgo: true,
        type: "script",
      },
      {
        image:
          "https://pixelbox.ru/wp-content/uploads/2021/11/cs-go-avatars-vk-pixelbox.ru-3.jpg",
        name: "c6j80fgz",
        author: "fghfgh",
        purchases: 3189,
        rating: 1,
        price: 2703,
        tags: ["visual", "rage", "free"],
        csgo: false,
        type: "config",
      },
      {
        image: "https://i.playground.ru/p/TJ95jOCjmryrUUPB2uSNxw.jpeg",
        name: "rp25xh3m",
        author: "qeqeqwe",
        purchases: 8883,
        rating: 5,
        price: 2742,
        tags: ["config", "visual", "legit"],
        csgo: true,
        type: "config",
      },
      {
        image:
          "https://cybersport.metaratings.ru/storage/images/f2/56/f25690ff5ff3c2fd8012e1450c476f75.jpg",
        name: "48bnrku2",
        author: "sdfsdfsdf",
        purchases: 5285,
        rating: 4,
        price: 8881,
        tags: ["legit", "visual", "free", "gamesense"],
        csgo: true,
        type: "config",
      },
      {
        image:
          "https://cybersport.metaratings.ru/storage/images/53/5c/535c820edd3ffd35d85198ae27f9195e.jpg",
        name: "ga2xqrt1",
        author: "dgdfgs",
        purchases: 1812,
        rating: 1,
        price: 6297,
        tags: ["visual"],
        csgo: false,
        type: "script",
      },
      {
        image: "https://cs-site.ru/uploads/posts/2020-09/1600522741_22.jpg",
        name: "usehteiq",
        author: "sfsdfsd",
        purchases: 2451,
        rating: 2,
        price: 5390,
        tags: ["hvh", "config"],
        csgo: true,
        type: "script",
      },
      {
        image:
          "https://pixelbox.ru/wp-content/uploads/2021/11/cs-go-avatars-vk-pixelbox.ru-3.jpg",
        name: "fd05j5ye",
        author: "qeqeqwe",
        purchases: 751,
        rating: 5,
        price: 8308,
        tags: ["rage", "visual"],
        csgo: false,
        type: "config",
      },
      {
        image:
          "https://cybersport.metaratings.ru/storage/images/53/5c/535c820edd3ffd35d85198ae27f9195e.jpg",
        name: "vyopi4tz",
        author: "sdfsdfsdf",
        purchases: 6485,
        rating: 3,
        price: 524,
        tags: ["rage"],
        csgo: false,
        type: "script",
      },
      {
        image: "https://cs-site.ru/uploads/posts/2020-09/1600522741_22.jpg",
        name: "vouvh8vz",
        author: "dgdfgs",
        purchases: 8245,
        rating: 3,
        price: 9091,
        tags: ["hvh"],
        csgo: true,
        type: "config",
      },
      {
        image:
          "https://pixelbox.ru/wp-content/uploads/2021/11/cs-go-avatars-vk-pixelbox.ru-3.jpg",
        name: "jpzsrkc4",
        author: "asdsgdhd",
        purchases: 3838,
        rating: 4,
        price: 1022,
        tags: ["free", "config", "visual"],
        csgo: false,
        type: "script",
      },
      {
        image:
          "https://pixelbox.ru/wp-content/uploads/2021/11/cs-go-avatars-vk-pixelbox.ru-3.jpg",
        name: "rice2rhe",
        author: "asdsgdhd",
        purchases: 1315,
        rating: 4,
        price: 8589,
        tags: ["lua", "gamesense", "free", "legit"],
        csgo: false,
        type: "script",
      },
      {
        image:
          "https://pixelbox.ru/wp-content/uploads/2021/11/cs-go-avatars-vk-pixelbox.ru-3.jpg",
        name: "2vvbyjzk",
        author: "hgfhhfg",
        purchases: 7820,
        rating: 3,
        price: 6445,
        tags: ["legit", "config"],
        csgo: true,
        type: "script",
      },
      {
        image: "https://i.playground.ru/p/TJ95jOCjmryrUUPB2uSNxw.jpeg",
        name: "wm7cov5m",
        author: "sfsdfsd",
        purchases: 6928,
        rating: 1,
        price: 4966,
        tags: ["config", "free", "legit", "rage"],
        csgo: false,
        type: "config",
      },
      {
        image:
          "https://cybersport.metaratings.ru/storage/images/f2/56/f25690ff5ff3c2fd8012e1450c476f75.jpg",
        name: "x9e32lms",
        author: "qeqweqe",
        purchases: 7426,
        rating: 4,
        price: 8848,
        tags: ["config"],
        csgo: false,
        type: "config",
      },
      {
        image:
          "https://cybersport.metaratings.ru/storage/images/f2/56/f25690ff5ff3c2fd8012e1450c476f75.jpg",
        name: "hg9vx334",
        author: "qeqweqe",
        purchases: 2437,
        rating: 4,
        price: 8136,
        tags: ["gamesense", "lua", "legit", "hvh"],
        csgo: false,
        type: "config",
      },
      {
        image:
          "https://cybersport.metaratings.ru/storage/images/f2/56/f25690ff5ff3c2fd8012e1450c476f75.jpg",
        name: "jafjjw6o",
        author: "asdsgdhd",
        purchases: 5907,
        rating: 3,
        price: 2037,
        tags: ["hvh"],
        csgo: true,
        type: "script",
      },
      {
        image:
          "https://pixelbox.ru/wp-content/uploads/2021/11/cs-go-avatars-vk-pixelbox.ru-3.jpg",
        name: "sh4bpizx",
        author: "dgdfgs",
        purchases: 8476,
        rating: 2,
        price: 2311,
        tags: ["lua", "rage", "visual", "legit"],
        csgo: false,
        type: "script",
      },
      {
        image:
          "https://pixelbox.ru/wp-content/uploads/2021/11/cs-go-avatars-vk-pixelbox.ru-3.jpg",
        name: "ebfoeao5",
        author: "sdfklsd",
        purchases: 8502,
        rating: 3,
        price: 2975,
        tags: ["free", "hvh", "gamesense"],
        csgo: true,
        type: "script",
      },
      {
        image: "https://i.playground.ru/p/TJ95jOCjmryrUUPB2uSNxw.jpeg",
        name: "wtcqdn5z",
        author: "hgfhhfg",
        purchases: 2340,
        rating: 1,
        price: 7940,
        tags: ["config", "free", "lua", "visual"],
        csgo: false,
        type: "config",
      },
      {
        image: "https://i.playground.ru/p/TJ95jOCjmryrUUPB2uSNxw.jpeg",
        name: "01vb9r64",
        author: "sfsdfsd",
        purchases: 415,
        rating: 1,
        price: 3798,
        tags: ["lua", "rage", "gamesense", "config"],
        csgo: false,
        type: "script",
      },
      {
        image: "https://csgoluxe.ru/wp-content/uploads/2019/03/avatar.jpg",
        name: "2scbn3g0",
        author: "dgdfgs",
        purchases: 7553,
        rating: 4,
        price: 858,
        tags: ["gamesense", "config", "rage"],
        csgo: true,
        type: "config",
      },
      {
        image: "https://csgoluxe.ru/wp-content/uploads/2019/03/avatar.jpg",
        name: "cgcrbinq",
        author: "asdsgdhd",
        purchases: 9370,
        rating: 3,
        price: 2064,
        tags: ["hvh"],
        csgo: false,
        type: "config",
      },
      {
        image:
          "https://cybersport.metaratings.ru/storage/images/f2/56/f25690ff5ff3c2fd8012e1450c476f75.jpg",
        name: "e4xeo8g7",
        author: "qeqweqe",
        purchases: 2762,
        rating: 5,
        price: 6062,
        tags: ["hvh"],
        csgo: false,
        type: "config",
      },
      {
        image: "https://csgoluxe.ru/wp-content/uploads/2019/03/avatar.jpg",
        name: "dz7mh45g",
        author: "asdsgdhd",
        purchases: 9039,
        rating: 2,
        price: 5295,
        tags: ["free"],
        csgo: false,
        type: "script",
      },
      {
        image: "https://csgoluxe.ru/wp-content/uploads/2019/03/avatar.jpg",
        name: "k8dpjuwx",
        author: "sfsdfsd",
        purchases: 6509,
        rating: 2,
        price: 2213,
        tags: ["free", "legit", "visual"],
        csgo: false,
        type: "config",
      },
      {
        image:
          "https://cybersport.metaratings.ru/storage/images/f2/56/f25690ff5ff3c2fd8012e1450c476f75.jpg",
        name: "t6hh5vtr",
        author: "sdfsdfsdf",
        purchases: 2804,
        rating: 3,
        price: 1333,
        tags: ["free"],
        csgo: false,
        type: "script",
      },
      {
        image: "https://csgoluxe.ru/wp-content/uploads/2019/03/avatar.jpg",
        name: "rao61uz3",
        author: "qeqweqe",
        purchases: 8448,
        rating: 5,
        price: 6881,
        tags: ["visual", "gamesense", "lua"],
        csgo: false,
        type: "config",
      },
      {
        image:
          "http://klubmama.ru/uploads/posts/2022-08/1661780504_41-klubmama-ru-p-cs-go-podelki-foto-43.jpg",
        name: "c7vf5a5c",
        author: "qeqeqwe",
        purchases: 3883,
        rating: 5,
        price: 950,
        tags: ["visual", "gamesense", "rage", "hvh"],
        csgo: false,
        type: "script",
      },
      {
        image: "https://i.playground.ru/p/TJ95jOCjmryrUUPB2uSNxw.jpeg",
        name: "gxgab31x",
        author: "qeqeqwe",
        purchases: 9833,
        rating: 2,
        price: 1495,
        tags: ["rage", "config", "gamesense", "lua"],
        csgo: true,
        type: "script",
      },
      {
        image:
          "https://pixelbox.ru/wp-content/uploads/2021/11/cs-go-avatars-vk-pixelbox.ru-3.jpg",
        name: "si57tntp",
        author: "dgdfgs",
        purchases: 2373,
        rating: 3,
        price: 1597,
        tags: ["gamesense", "legit", "rage", "config"],
        csgo: true,
        type: "script",
      },
      {
        image:
          "http://klubmama.ru/uploads/posts/2022-08/1661780504_41-klubmama-ru-p-cs-go-podelki-foto-43.jpg",
        name: "jhujp9x1",
        author: "asdsgdhd",
        purchases: 8880,
        rating: 3,
        price: 4177,
        tags: ["gamesense"],
        csgo: false,
        type: "script",
      },
      {
        image:
          "http://klubmama.ru/uploads/posts/2022-08/1661780504_41-klubmama-ru-p-cs-go-podelki-foto-43.jpg",
        name: "kfdgb72t",
        author: "sfsdfsd",
        purchases: 3748,
        rating: 4,
        price: 6561,
        tags: ["rage"],
        csgo: false,
        type: "config",
      },
      {
        image: "https://cs-site.ru/uploads/posts/2020-09/1600522741_22.jpg",
        name: "ljgnwgd6",
        author: "sdfsdf",
        purchases: 6850,
        rating: 4,
        price: 538,
        tags: ["visual"],
        csgo: false,
        type: "script",
      },
      {
        image: "https://cs-site.ru/uploads/posts/2020-09/1600522741_22.jpg",
        name: "m5j4vele",
        author: "sdfsdfsdf",
        purchases: 5765,
        rating: 4,
        price: 4751,
        tags: ["visual", "lua", "gamesense"],
        csgo: false,
        type: "config",
      },
      {
        image:
          "https://pixelbox.ru/wp-content/uploads/2021/11/cs-go-avatars-vk-pixelbox.ru-3.jpg",
        name: "3caaoqhr",
        author: "sdfklsd",
        purchases: 4267,
        rating: 4,
        price: 5754,
        tags: ["rage", "gamesense"],
        csgo: false,
        type: "script",
      },
      {
        image:
          "https://pixelbox.ru/wp-content/uploads/2021/11/cs-go-avatars-vk-pixelbox.ru-3.jpg",
        name: "eufexno6",
        author: "sfsdfsd",
        purchases: 6208,
        rating: 2,
        price: 3862,
        tags: ["rage"],
        csgo: true,
        type: "script",
      },
      {
        image: "https://i.playground.ru/p/TJ95jOCjmryrUUPB2uSNxw.jpeg",
        name: "v0w847ze",
        author: "sfsdfsd",
        purchases: 7196,
        rating: 3,
        price: 6691,
        tags: ["lua", "hvh"],
        csgo: true,
        type: "script",
      },
      {
        image: "https://csgoluxe.ru/wp-content/uploads/2019/03/avatar.jpg",
        name: "wwtgcpjt",
        author: "fghfgh",
        purchases: 2687,
        rating: 1,
        price: 6302,
        tags: ["lua", "visual"],
        csgo: false,
        type: "config",
      },
      {
        image:
          "https://cybersport.metaratings.ru/storage/images/53/5c/535c820edd3ffd35d85198ae27f9195e.jpg",
        name: "9t2zloyh",
        author: "dgdfgs",
        purchases: 2220,
        rating: 4,
        price: 8889,
        tags: ["gamesense", "lua", "free", "legit"],
        csgo: false,
        type: "config",
      },
      {
        image:
          "https://cybersport.metaratings.ru/storage/images/53/5c/535c820edd3ffd35d85198ae27f9195e.jpg",
        name: "szqps7gh",
        author: "qeqeqwe",
        purchases: 3439,
        rating: 3,
        price: 5682,
        tags: ["legit", "gamesense"],
        csgo: true,
        type: "config",
      },
      {
        image:
          "http://klubmama.ru/uploads/posts/2022-08/1661780504_41-klubmama-ru-p-cs-go-podelki-foto-43.jpg",
        name: "momvxmtj",
        author: "fghfgh",
        purchases: 2708,
        rating: 4,
        price: 3359,
        tags: ["legit", "gamesense", "rage", "free"],
        csgo: false,
        type: "script",
      },
      {
        image:
          "https://cybersport.metaratings.ru/storage/images/53/5c/535c820edd3ffd35d85198ae27f9195e.jpg",
        name: "qrcr6ycx",
        author: "dgdfgs",
        purchases: 2905,
        rating: 4,
        price: 7581,
        tags: ["config", "lua", "visual"],
        csgo: false,
        type: "script",
      },
      {
        image: "https://csgoluxe.ru/wp-content/uploads/2019/03/avatar.jpg",
        name: "3ssgb9iy",
        author: "qeqweqe",
        purchases: 295,
        rating: 1,
        price: 7469,
        tags: ["free"],
        csgo: false,
        type: "config",
      },
      {
        image:
          "https://cybersport.metaratings.ru/storage/images/53/5c/535c820edd3ffd35d85198ae27f9195e.jpg",
        name: "bwv5cys4",
        author: "hgfhhfg",
        purchases: 6822,
        rating: 2,
        price: 1623,
        tags: ["rage"],
        csgo: true,
        type: "script",
      },
      {
        image: "https://cs-site.ru/uploads/posts/2020-09/1600522741_22.jpg",
        name: "88lzb4nb",
        author: "hgfhhfg",
        purchases: 6611,
        rating: 4,
        price: 1921,
        tags: ["visual", "free", "legit", "gamesense"],
        csgo: true,
        type: "config",
      },
      {
        image:
          "https://cybersport.metaratings.ru/storage/images/53/5c/535c820edd3ffd35d85198ae27f9195e.jpg",
        name: "2eulza20",
        author: "dgdfgs",
        purchases: 9179,
        rating: 5,
        price: 1438,
        tags: ["visual", "config", "lua"],
        csgo: false,
        type: "config",
      },
      {
        image: "https://csgoluxe.ru/wp-content/uploads/2019/03/avatar.jpg",
        name: "lnclsoyb",
        author: "sdfklsd",
        purchases: 3298,
        rating: 4,
        price: 8465,
        tags: ["free"],
        csgo: false,
        type: "config",
      },
      {
        image:
          "https://cybersport.metaratings.ru/storage/images/f2/56/f25690ff5ff3c2fd8012e1450c476f75.jpg",
        name: "ktkgc3e5",
        author: "sfsdfsd",
        purchases: 2028,
        rating: 4,
        price: 5753,
        tags: ["legit", "gamesense", "config"],
        csgo: false,
        type: "config",
      },
      {
        image:
          "https://cybersport.metaratings.ru/storage/images/53/5c/535c820edd3ffd35d85198ae27f9195e.jpg",
        name: "r85datb3",
        author: "hgfhhfg",
        purchases: 2317,
        rating: 3,
        price: 3915,
        tags: ["legit", "hvh"],
        csgo: true,
        type: "config",
      },
      {
        image:
          "https://cybersport.metaratings.ru/storage/images/53/5c/535c820edd3ffd35d85198ae27f9195e.jpg",
        name: "1nnt3mgo",
        author: "sdfklsd",
        purchases: 7564,
        rating: 4,
        price: 1388,
        tags: ["gamesense", "lua", "hvh", "free"],
        csgo: true,
        type: "config",
      },
      {
        image:
          "https://cybersport.metaratings.ru/storage/images/53/5c/535c820edd3ffd35d85198ae27f9195e.jpg",
        name: "y1cbpk5t",
        author: "qeqweqe",
        purchases: 9307,
        rating: 5,
        price: 7790,
        tags: ["visual", "rage"],
        csgo: true,
        type: "script",
      },
      {
        image: "https://i.playground.ru/p/TJ95jOCjmryrUUPB2uSNxw.jpeg",
        name: "hxnwl3il",
        author: "qeqeqwe",
        purchases: 4911,
        rating: 4,
        price: 7837,
        tags: ["lua"],
        csgo: true,
        type: "script",
      },
      {
        image:
          "https://cybersport.metaratings.ru/storage/images/53/5c/535c820edd3ffd35d85198ae27f9195e.jpg",
        name: "4m3exxu4",
        author: "sdfsdf",
        purchases: 900,
        rating: 3,
        price: 5114,
        tags: ["hvh"],
        csgo: true,
        type: "script",
      },
      {
        image:
          "https://pixelbox.ru/wp-content/uploads/2021/11/cs-go-avatars-vk-pixelbox.ru-3.jpg",
        name: "ugd929z8",
        author: "sfsdfsd",
        purchases: 1470,
        rating: 4,
        price: 7065,
        tags: ["hvh", "rage", "config"],
        csgo: true,
        type: "config",
      },
      {
        image:
          "https://cybersport.metaratings.ru/storage/images/f2/56/f25690ff5ff3c2fd8012e1450c476f75.jpg",
        name: "qwf9toze",
        author: "dgdfgs",
        purchases: 7409,
        rating: 2,
        price: 5210,
        tags: ["legit"],
        csgo: true,
        type: "script",
      },
      {
        image: "https://csgoluxe.ru/wp-content/uploads/2019/03/avatar.jpg",
        name: "a906qt51",
        author: "sdfsdf",
        purchases: 3483,
        rating: 4,
        price: 805,
        tags: ["legit", "gamesense", "rage", "free"],
        csgo: true,
        type: "script",
      },
      {
        image:
          "http://klubmama.ru/uploads/posts/2022-08/1661780504_41-klubmama-ru-p-cs-go-podelki-foto-43.jpg",
        name: "5emhwapq",
        author: "sfsdfsd",
        purchases: 7742,
        rating: 4,
        price: 4481,
        tags: ["rage", "gamesense"],
        csgo: true,
        type: "script",
      },
      {
        image:
          "https://pixelbox.ru/wp-content/uploads/2021/11/cs-go-avatars-vk-pixelbox.ru-3.jpg",
        name: "zdwyjavd",
        author: "sdfklsd",
        purchases: 5526,
        rating: 5,
        price: 7980,
        tags: ["gamesense", "rage"],
        csgo: false,
        type: "config",
      },
      {
        image: "https://i.playground.ru/p/TJ95jOCjmryrUUPB2uSNxw.jpeg",
        name: "pyqhxpa9",
        author: "sdfsdf",
        purchases: 438,
        rating: 5,
        price: 5229,
        tags: ["legit", "free", "lua"],
        csgo: true,
        type: "config",
      },
      {
        image:
          "https://cybersport.metaratings.ru/storage/images/f2/56/f25690ff5ff3c2fd8012e1450c476f75.jpg",
        name: "qm798u7d",
        author: "asdsgdhd",
        purchases: 1935,
        rating: 4,
        price: 5447,
        tags: ["legit", "free", "lua", "gamesense"],
        csgo: false,
        type: "script",
      },
      {
        image:
          "http://klubmama.ru/uploads/posts/2022-08/1661780504_41-klubmama-ru-p-cs-go-podelki-foto-43.jpg",
        name: "zqs9wfod",
        author: "sdfsdf",
        purchases: 4431,
        rating: 1,
        price: 1095,
        tags: ["gamesense"],
        csgo: true,
        type: "config",
      },
      {
        image: "https://csgoluxe.ru/wp-content/uploads/2019/03/avatar.jpg",
        name: "0lx296pq",
        author: "fghfgh",
        purchases: 1280,
        rating: 4,
        price: 3313,
        tags: ["rage"],
        csgo: false,
        type: "script",
      },
    ];
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
      return this.productItemTypeFiltered.filter((item) => {
        return item.name
          .toUpperCase()
          .startsWith(this.filterInput.toUpperCase());
      });
    },
    filteredByAuthor() {
      return this.productItemTypeFiltered.filter((item) => {
        return item.author
          .toUpperCase()
          .startsWith(this.filterInput.toUpperCase());
      });
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
      return this.isProductFiltered
        ? this.sortProduct.slice(this.startIndex, this.endIndex)
        : this.productItemTypeFiltered.slice(this.startIndex, this.endIndex);
    },
    quantityPages() {
      return Math.ceil(
        this.isProductFiltered
          ? this.sortProduct.length / 9
          : this.productItemTypeFiltered.length / 9
      );
    },
  },
  methods: {
    setFilter(filter) {
      this.filterInput = filter;
    },
    resetFilters() {
      this.isProductFiltered = false;
      this.$refs.inputFilter.inputValue = "";
      this.filterInput = "";
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
    searchProduct() {
      this.isProductFiltered = true;
    },
  },
  watch: {
    filterInput() {
      this.page = 1;
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
