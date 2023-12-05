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
import MainComponent from "../MainComponent.vue";
export default {
  name: "SupportPage",
  components: { MainComponent },
};
</script>

<style src="../../assets/styles/support-page.css" scoped></style>
