<template>
  <main class="home">
    <vue-navbar state="dir" />
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
              style="background-image: url('/img/comm-1.jpg')"
            ></div>
          </div>
          <div class="home-2__image-wrapper">
            <div
              class="home-2__img"
              style="background-image: url('/img/comm-2.jpg')"
            ></div>
          </div>
          <div class="home-2__image-wrapper">
            <div
              class="home-2__img"
              style="background-image: url('/img/comm-3.jpg')"
            ></div>
          </div>
        </div>
        <vue-ticker
          class="home-2__ticker"
          text="Commercial interiors"
          divider=" "
        />
        <h2 class="h2 home-2__h2-mob">Commercial interiors</h2>
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
              style="background-image: url('/img/home-3.jpg')"
            ></div>
          </div>
        </div>
      </div>
    </section>
    <vue-footer />
  </main>
</template>

<script>
import VueBtn from '~/components/vue-btn.vue'
import VueHero from '~/components/vue-hero.vue'
import VueNavbar from '~/components/vue-navbar.vue'
import VueTicker from '~/components/vue-ticker.vue'
import VueFooter from '~/components/vue-footer.vue'
import transition from '~/mixins/transition.vue'
export default {
  components: { VueNavbar, VueTicker, VueBtn, VueHero, VueFooter },
  mixins: [transition],
}
</script>