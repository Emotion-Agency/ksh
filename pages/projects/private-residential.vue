<template>
  <div class="projects">
    <vue-navbar />
    <vue-hero image="/img/pr-hero.jpg">
      <div class="hero__h-wrapper">
        <h1 class="h1 hero__h projects__h">Private Residential</h1>
      </div>
    </vue-hero>
    <vue-masonry :items="getImages" @clickItem="openSlider" />
    <vue-footer image="/img/pr-hero.jpg" />
    <slider-window
      :items="getImagesToSlider"
      :is-open="isSliderOpen"
      :start-from="startFrom"
    />
  </div>
</template>

<script>
import SliderWindow from '~/components/slider/slider-window.vue'
import VueFooter from '~/components/vue-footer.vue'
import VueHero from '~/components/vue-hero.vue'
import VueMasonry from '~/components/vue-masonry.vue'
import transition from '~/mixins/transition.vue'
import { keysGenerator } from '~/scripts/utils/keysGenerator'
export default {
  components: { VueHero, VueFooter, VueMasonry, SliderWindow },
  mixins: [transition],
  data() {
    return {
      isSliderOpen: false,
      startFrom: 0,
    }
  },
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
    getImagesToSlider() {
      const length = 3
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
  methods: {
    openSlider(idx = 0) {
      console.log(idx)
      this.startFrom = idx
      this.isSliderOpen = true
    },
  },
}
</script>