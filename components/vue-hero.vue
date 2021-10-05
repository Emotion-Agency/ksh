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
          style="background-image: url('/img/home.jpg')"
        ></div>
        <div
          class="hero__img-mask parallax-img"
          data-section-parallax="-0.13"
          data-scale="1.07"
          style="background-image: url('/img/home-mask.png')"
        ></div>
      </div>
    </div>
    <div class="container hero__container">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
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