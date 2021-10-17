<template>
  <div class="projects">
    <vue-navbar />
    <vue-hero image="/img/pr-hero.jpg">
      <div class="hero__h-wrapper">
        <h1 class="h1 hero__h projects__h">Private Residential</h1>
      </div>
    </vue-hero>
    <vue-masonry :items="getImages" />
    <vue-footer image="/img/pr-hero.jpg" />
  </div>
</template>

<script>
import VueFooter from '~/components/vue-footer.vue'
import VueHero from '~/components/vue-hero.vue'
import VueMasonry from '~/components/vue-masonry.vue'
import transition from '~/mixins/transition.vue'
import { keysGenerator } from '~/scripts/utils/keysGenerator'
export default {
  components: { VueHero, VueFooter, VueMasonry },
  mixins: [transition],

  computed: {
    getImages() {
      const length = 18
      const images = []

      for (let i = 0; i < length; i++) {
        images.push({
          _id: keysGenerator(8),
          img: `/img/pr/${i + 1}.jpg`,
        })
      }
      return images
    },
  },
}
</script>