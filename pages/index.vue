<template>
  <main class="home">
    <vue-navbar state="dir" />
    <vue-hero>
      <div class="hero__h-wrapper">
        <h1
          data-a-h
          class="h1 hero__h"
        >KSh DESIGN</h1>
      </div>
      <div class="hero__bottom-text">Ukraine</div>
    </vue-hero>
    <section class="section home-2">
      <div class="home-2__content">
        <div class="home-2__images">
          <div class="home-2__image-wrapper">
            <vue-img
              class="home-2__img js-gl-img"
              url="/img/comm-1.jpg"
              data-src="/img/comm-1.jpg"
              data-gl-parallax="1"
            ></vue-img>
          </div>
          <div class="home-2__image-wrapper">
            <vue-img
              class="home-2__img js-gl-img"
              url="/img/comm-2.jpg"
              data-src="/img/comm-2.jpg"
              data-gl-parallax="1"
            ></vue-img>
          </div>
          <div class="home-2__image-wrapper">
            <div
              class="home-2__img js-gl-img"
              style="background-image: url('/img/comm-3.jpg')"
              data-gl
              data-gl-parallax="1"
              data-src="/img/comm-3.jpg"
            ></div>
          </div>
        </div>
        <vue-ticker
          class="home-2__ticker"
          text="Commercial interiors"
          divider=" "
        />
        <h2 class="h2 home-2__h2-mob">Commercial interiors</h2>
        <vue-btn
          class="home-2__btn"
          text="View more"
          to="/projects/commercial-interiors"
        />
      </div>
    </section>
    <section class="section home-3">
      <div class="container home-3__container">
        <div class="home-3__text-wrapper">
          <div class="h2 home-3__text-line">Private</div>
          <div class="h2 home-3__text-line">Residential</div>
          <vue-btn
            text="View more"
            class="home-3__btn"
            to="/projects/private-residential"
          />
          <div class="h2 home-3__text-line">Interiors</div>
        </div>
        <div class="home-3__image-container">
          <div class="home-3__image-wrapper">
            <div
              class="home-3__img js-gl-img"
              style="background-image: url('/img/home-3.jpg')"
              data-src="/img/home-3.jpg"
              data-gl-parallax="1"
            ></div>
          </div>
        </div>
      </div>
    </section>
    <vue-footer />
  </main>
</template>

<script>
import emitter from 'tiny-emitter/instance'

import VueBtn from '~/components/vue-btn.vue'
import VueHero from '~/components/vue-hero.vue'
import VueNavbar from '~/components/vue-navbar.vue'
import VueTicker from '~/components/vue-ticker.vue'
import VueFooter from '~/components/vue-footer.vue'
import VueImg from '~/components/vue-img.vue'
import transition from '~/mixins/transition.vue'

const TITLE = 'KSH Design Buro | Private Residential and Commercial Interiors'
const DESCRIPTION =
  'We create interior design and architecture. We work in two directions: private residences and commercial interiors. From the development of layout and rough sketch to designing one-off home decor items'

export default {
  components: { VueNavbar, VueTicker, VueBtn, VueHero, VueFooter, VueImg },
  mixins: [transition],

  head: {
    title: TITLE,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: DESCRIPTION,
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: TITLE,
      },
      {
        hid: 'og:description',
        name: 'og:title',
        content: DESCRIPTION,
      },
    ],
  },

  async mounted() {
    const { initImages } = await import('~/scripts/GL/Images/init')
    if (window.scetch) {
      initImages()
    } else {
      emitter.on('scetchCreated', initImages)
    }
  },
}
</script>