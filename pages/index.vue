<template>
  <main class="home">
    <vue-navbar />
    <vue-hero>
      <div class="hero__h-wrapper">
        <h1 class="h1 hero__h">KSh DESIGN</h1>
      </div>
      <div class="hero__bottom-text">Ukraine</div>
    </vue-hero>
    <section class="section home-2">
      <div class="home-2__content">
        <div class="home-2__images">
          <div class="home-2__image-wrapper">
            <div
              class="home-2__img"
              style="background-image: url('/img/comm-1.webp')"
            ></div>
          </div>
          <div class="home-2__image-wrapper">
            <div
              class="home-2__img"
              style="background-image: url('/img/comm-2.webp')"
            ></div>
          </div>
          <div class="home-2__image-wrapper">
            <div
              class="home-2__img"
              style="background-image: url('/img/comm-3.webp')"
            ></div>
          </div>
        </div>
        <vue-ticker
          class="home-2__ticker"
          text="Commercial interiors"
          divider=" "
        />
        <vue-btn class="home-2__btn" text="View more" to="/" />
      </div>
    </section>
    <section class="section home-3">
      <div class="container home-3__container">
        <div class="home-3__text-wrapper">
          <div class="h2 home-3__text-line">Private</div>
          <div class="h2 home-3__text-line">Residential</div>
          <vue-btn text="View more" class="home-3__btn" />
          <div class="h2 home-3__text-line">Interiors</div>
        </div>
        <div class="home-3__image-container">
          <div class="home-3__image-wrapper">
            <div
              class="home-3__img"
              style="background-image: url('/img/home-3.webp')"
            ></div>
          </div>
        </div>
      </div>
    </section>
    <footer class="section hero footer">
      <div class="hero__images-container">
        <div class="hero__images-wrapper">
          <div
            class="hero__img"
            style="background-image: url('/img/footer-img.webp')"
          ></div>
          <div
            class="hero__img-mask"
            style="background-image: url('/img/footer-mask.webp')"
          ></div>
        </div>
      </div>
      <div class="container hero__container">
        <div class="hero__h-wrapper">
          <h1 class="h1 footer__h">Contact us</h1>
        </div>
      </div>
    </footer>
  </main>
</template>

<script>
import VueBtn from '~/components/vue-btn.vue'
import VueHero from '~/components/vue-hero.vue'
import VueNavbar from '~/components/vue-navbar.vue'
import VueTicker from '~/components/vue-ticker.vue'
export default {
  components: { VueNavbar, VueTicker, VueBtn, VueHero },
}
</script>