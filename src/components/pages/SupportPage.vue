<template>
  <main-component>
    <template #content>
      <div class="support">
        <p class="support__text">
          При возникновении любых проблем обратитесь в техподдержку.
        </p>
        <p class="support__text-link">
          Поддержка осуществляется через
          <a href="/" class="support__link">Discord</a>
        </p>
      </div>
    </template>
  </main-component>
</template>

<script>
import MainComponent from "../pages-components/MainComponent.vue";
export default {
  name: "SupportPage",
  components: { MainComponent },
};
</script>

<style scoped>
.support {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  margin: 0px 0px 100px 0px;
}

@media screen and (max-width: 340px) {
  .support {
    padding: 0px 20px;
  }
}

.support__text {
  font-size: 20px;
  padding: 0;
  margin: 0;
  word-wrap: break-word;
}
.support__text-link {
  font-size: 20px;
  padding: 0;
  margin: 0;
  color: #828289;
  word-wrap: break-word;
}
.support__link {
  color: #b2b6ff;
}
</style>
