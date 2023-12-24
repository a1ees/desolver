<template>
  <div>
    <container-main-component>
      <div class="notfound">
        <h1 class="notfound__title">Страницы не существует</h1>
        <a @click="$router.push('/')" class="notfound__link"
          >Перейти на главную</a
        >
      </div>
    </container-main-component>
  </div>
</template>
<script>
import ContainerMainComponent from "@/components/pages-components/ContainerMainComponent.vue";

export default {
  components: { ContainerMainComponent },
};
</script>

<style scoped>
.notfound {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0 0 0;
}
.notfound__title {
  padding: 0;
  margin: 0 0 20px 0;
  font-size: 64px;
  line-height: 76px;
  color: #6c6c7a;
}
.notfound__link {
  padding: 0;
  margin: 0;
  font-size: 20px;
  color: #b2b6ff;
  transition: opacity 0.3s ease;
}
.notfound__link:hover {
  cursor: pointer;
  opacity: 0.7;
}
</style>
