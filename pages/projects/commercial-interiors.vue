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

import { keysGenerator } from '~/scripts/utils/keysGenerator'
import { transformImage } from '~/scripts/utils/storyblokImage'
import { imgix } from '~/scripts/imgix'

export default {
  components: { VueHero, VueFooter, VueMasonry },
  mixins: [transition, projects],

  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories/projects/commercial-interiors', {
        version: 'draft',
      })
      .then(res => {
        return { storyblok: res.data.story.content }
      })
  },

  computed: {
    getImages() {
      return this.storyblok.body[0].images.map(img => ({
        _id: keysGenerator(8),
        img: imgix.buildURL(
          transformImage(
            img.preview_image.filename,
            'filters:quality(92):format(webp)'
          ),
          {}
        ),
      }))
    },
    getImagesToSlider() {
      return this.storyblok.body[0].images.map(img => ({
        _id: keysGenerator(8),
        img: transformImage(
          img.big_image.filename,
          'filters:quality(92):format(webp)'
        ),
      }))
    },
  },
}
</script>

