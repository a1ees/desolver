<template>
  <footer class="footer">
    <div class="footer__content">
      <img
        src="../assets/images/logo/header-logo-full.svg"
        alt="логотип"
        class="footer__logo-full"
      />
      <img
        src="../assets/images/logo/header-logo.svg"
        alt="logo"
        class="footer__logo"
      />
      <div class="footer__contacts">
        <div class="footer__contact contact">
          <h3 class="contact__title">Продукт</h3>
          <a href="/" class="contact__link">Поддержка</a>
        </div>
        <div class="footer__contact contact">
          <h3 class="contact__title">Политика</h3>
          <a href="/" class="contact__link">Соглашение</a>
        </div>
        <div class="footer__contact contact">
          <h3 class="contact__title">Связь</h3>
          <a href="/" class="contact__link">info@desolver.gg</a>
        </div>
      </div>
      <div class="footer__social social">
        <a href="/" class="social__icon social__icon_discord"></a>
        <a href="/" class="social__icon social__icon_telegram"></a>
        <a href="/" class="social__icon social__icon_vk"></a>
        <a href="/" class="social__icon social__icon_youtube"></a>
      </div>
    </div>
    <div class="footer__copyright copyright">
      <p class="footer__address">
        Desolver Ltd, reg. no. HE 389299<br />
        Address: 33 rue La Fayette 75009 PARIS
      </p>
      <div class="copyright__icons">
        <img
          src="../assets/images/logo/visa-logo.svg"
          alt="visa"
          class="copyright__icon"
        />
        <img
          src="../assets/images/logo/mir-logo.svg"
          alt="mir"
          class="copyright__icon"
        />
        <img
          src="../assets/images/logo/mastercard-logo.svg"
          alt="mastercard"
          class="copyright__icon"
        />
        <img
          src="../assets/images/logo/language-logo.svg"
          alt="language"
          class="copyright__icon copyright__icon_language-selector"
        />
      </div>
    </div>
  </footer>
</template>

<script>
import "../assets/vendor/fonts/font.css";
import "../assets/vendor/normalize.css";

export default {
  name: "FooterComponent",
};
</script>

<style src="../assets/styles/footer.css" scoped></style>
