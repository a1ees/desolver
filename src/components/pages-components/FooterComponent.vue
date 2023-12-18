<template>
  <footer class="footer">
    <div class="footer__content">
      <img
        src="../../assets/images/logo/header-logo-full.svg"
        alt="логотип"
        class="footer__logo-full"
      />
      <img
        src="../../assets/images/logo/header-logo.svg"
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
          src="../../assets/images/logo/visa-logo.svg"
          alt="visa"
          class="copyright__icon"
        />
        <img
          src="../../assets/images/logo/mir-logo.svg"
          alt="mir"
          class="copyright__icon"
        />
        <img
          src="../../assets/images/logo/mastercard-logo.svg"
          alt="mastercard"
          class="copyright__icon"
        />
        <img
          src="../../assets/images/logo/language-logo.svg"
          alt="language"
          class="copyright__icon copyright__icon_language-selector"
        />
      </div>
    </div>
  </footer>
</template>

<script>
import "../../assets/vendor/fonts/font.css";
import "../../assets/vendor/normalize.css";

export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.footer {
  padding: 64px 0px;
}

@media screen and (max-width: 1440px) {
  .footer {
    padding: 64px 72px 64px 72px;
  }
}

@media screen and (max-width: 900px) {
  .footer {
    padding: 0px 0px 64px 0px;
  }
}

.footer__content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
}

@media screen and (max-width: 1420px) {
  .footer__content {
    grid-template-rows: min-content 1fr;
    grid-template-columns: 1fr 1fr;
    row-gap: 64px;
  }
}

@media screen and (max-width: 580px) {
  .footer__content {
    display: flex;
    flex-direction: column;
  }
}

.footer__logo {
  display: none;
  width: 32px;
  height: 51px;
}

.footer__logo-full {
  display: block;
  width: 196px;
  height: 51px;
}

@media screen and (max-width: 1420px) {
  .footer__logo {
    grid-row-start: 1;
    grid-column-start: 1;
    grid-row-end: 2;
    grid-column-end: 2;
    justify-content: flex-start;
  }
}

@media screen and (max-width: 1420px) {
  .footer__logo_full {
    display: block;
    grid-row-start: 1;
    grid-column-start: 1;
    grid-row-end: 2;
    grid-column-end: 2;
    justify-content: flex-start;
  }
  .footer__logo {
    display: none;
  }
}

@media screen and (max-width: 580px) {
  .footer__logo_full {
    order: 1;
  }
}

.footer__contacts {
  display: flex;
  gap: 180px;
}

@media screen and (max-width: 1420px) {
  .footer__contacts {
    grid-row-start: 2;
    grid-column-start: 1;
    grid-row-end: 3;
    grid-column-end: 3;
    justify-content: center;
  }
}
@media screen and (max-width: 580px) {
  .footer__contacts {
    order: 2;
    flex-direction: column;
  }
}

@media screen and (max-width: 740px) {
  .footer__contacts {
    gap: 136px;
  }
}

@media screen and (max-width: 712px) {
  .footer__contacts {
    gap: 110px;
  }
}

@media screen and (max-width: 580px) {
  .footer__contacts {
    gap: 48px;
  }
}

.contact__title {
  padding: 0px 0px 32px 0px;
  margin: 0;
  color: #8c8e94;
  font-size: 20px;
  line-height: 24px;
}

@media screen and (max-width: 360px) {
  .footer__contact {
    font-size: 16px;
    line-height: 19px;
  }
}
.contact__link {
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  line-height: 19.2px;
}

@media screen and (max-width: 360px) {
  .contact__link {
    font-size: 14px;
    line-height: 16px;
  }
}

.footer__social {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
}

@media screen and (max-width: 1420px) {
  .footer__social {
    justify-content: flex-end;
    margin-right: 0px;
    grid-row-start: 1;
    grid-column-start: 2;
    grid-row-end: 2;
    grid-column-end: 3;
  }
}

@media screen and (max-width: 580px) {
  .footer__social {
    order: 0;
    justify-content: flex-start;
  }
}

.social__icon {
  display: block;
  width: 24px;
  height: 24px;
  background: no-repeat;
  background-position: center;
}
.social__icon_discord {
  background-image: url("../../assets/images/logo/discord-logo.svg");
}
.social__icon_telegram {
  background-image: url("../../assets/images/logo/telegram-logo.svg");
}
.social__icon_vk {
  background-image: url("../../assets/images/logo/vk-logo.svg");
}
.social__icon_youtube {
  background-image: url("../../assets/images/logo/youtube-logo.svg");
}
.footer__copyright {
  margin-top: 64px;
}

@media screen and (max-width: 580px) {
  .footer__copyright {
    margin-top: 48px;
  }
}

.copyright {
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 580px) {
  .copyright {
    flex-direction: column;
    justify-content: flex-start;
  }
}

@media screen and (max-width: 360px) {
  .copyright {
    flex-direction: column-reverse;
  }
}

.footer__address {
  padding: 0;
  margin: 0;
  color: #8c8e94;
  font-size: 16px;
  line-height: 19px;
}

@media screen and (max-width: 580px) {
  .footer__address {
    margin-bottom: 48px;
  }
}

@media screen and (max-width: 360px) {
  .footer__address {
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 0px;
  }
}

.copyright__icons {
  display: flex;
  gap: 20px;
}

.copyright__icon_language-selector:hover {
  cursor: pointer;
  opacity: 0.9;
}

@media screen and (max-width: 360px) {
  .copyright__icons {
    margin-bottom: 48px;
  }
}
</style>
