<template>
  <div class="projects">
    <vue-navbar />
    <vue-hero image="/img/com-hero.jpg">
      <div class="hero__h-wrapper">
        <h1 data-a-h class="h1 hero__h projects__h">Commercial Interiors</h1>
      </div>
    </vue-hero>
    <vue-masonry :items="getImages" @clickItem="openSlider" />
    <vue-footer image="/img/com-hero.jpg" />
    <slider-window
      :items="getImagesToSlider"
      :is-open="isSliderOpen"
      :start-from="startFrom"
      @close="closeSlider"
    />
  </div>
</template>

<script>
import VueFooter from '~/components/vue-footer.vue'
import VueHero from '~/components/vue-hero.vue'
import VueMasonry from '~/components/vue-masonry.vue'
import transition from '~/mixins/transition.vue'
import projects from '~/mixins/projects.vue'

const TITLE = 'Commercial Interiors | KSh Design Buro'
const DESCRIPTION =
  'This section presents our projects in the field of Commercial Interiors. We design Commercial Interiors for restaurants, shops and office real estate'

export default {
  components: { VueHero, VueFooter, VueMasonry },
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

