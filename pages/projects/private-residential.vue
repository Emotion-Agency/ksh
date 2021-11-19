<template>
  <div class="projects">
    <vue-navbar />
    <vue-hero
      :image="getHeroImages.image"
      :mask="getHeroImages.mask"
      :webp="false"
    >
      <div class="hero__h-wrapper">
        <h1 data-a-h class="h1 hero__h projects__h">Private Residential</h1>
      </div>
    </vue-hero>
    <vue-masonry :items="getImages" @clickItem="openSlider" />
    <vue-footer
      :image="getFooterImages.image"
      :mask="getFooterImages.mask"
      :webp="false"
    />
    <slider-window
      :items="getImagesToSlider"
      :is-open="isSliderOpen"
      :start-from="startFrom"
      @close="closeSlider"
    />
  </div>
</template>

<script>
import SliderWindow from '~/components/slider/slider-window.vue'
import VueFooter from '~/components/vue-footer.vue'
import VueHero from '~/components/vue-hero.vue'
import VueMasonry from '~/components/vue-masonry.vue'
import transition from '~/mixins/transition.vue'
import projects from '~/mixins/projects.vue'

const TITLE = 'Private Residential | KSh Design Buro'
const DESCRIPTION =
  'This section presents our projects in the field of Residential Interiors. We create an interior design according to the wishes of the customer and the best solutions in the field of residential interiors. We work with customers all over the world'

export default {
  components: { VueHero, VueFooter, VueMasonry, SliderWindow },
  mixins: [transition, projects],

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
}
</script>