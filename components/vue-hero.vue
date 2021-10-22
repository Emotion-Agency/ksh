<template>
  <section class="section hero">
    <div class="hero__images-container">
      <div
        class="hero__images-wrapper parallax-wrapper"
        data-section-parallax="0.2"
      >
        <div
          class="hero__img parallax-img"
          data-section-parallax="-0.13"
          data-scale="1.07"
        >
          <vue-img class="hero__img-inner" data-a-bg :url="image"></vue-img>
        </div>
        <div
          class="hero__img-mask parallax-img"
          data-section-parallax="-0.13"
          data-scale="1.07"
        >
          <vue-img class="hero__mask-inner" data-a-mask :url="mask"></vue-img>
        </div>
      </div>
    </div>
    <div class="container hero__container">
      <slot />
    </div>
  </section>
</template>

<script>
import VueImg from '~/components/vue-img.vue'

export default {
  components: { VueImg },

  props: {
    image: {
      type: String,
      default: '/img/home.jpg',
    },
    mask: {
      type: String,
      default: '/img/home-mask.png',
    },
  },
}
</script>