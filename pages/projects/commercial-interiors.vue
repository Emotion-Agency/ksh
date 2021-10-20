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

export default {
  components: { VueHero, VueFooter, VueMasonry },
  mixins: [transition, projects],
}
</script>

