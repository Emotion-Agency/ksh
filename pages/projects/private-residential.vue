<template>
  <div class="projects">
    <vue-navbar />
    <vue-hero image="/img/pr-hero.jpg">
      <div class="hero__h-wrapper">
        <h1 data-a-h class="h1 hero__h projects__h">Private Residential</h1>
      </div>
    </vue-hero>
    <vue-masonry :items="getImages" @clickItem="openSlider" />
    <vue-footer image="/img/pr-hero.jpg" />
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

export default {
  components: { VueHero, VueFooter, VueMasonry, SliderWindow },
  mixins: [transition, projects],
}
</script>