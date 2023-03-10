<template>
  <main class="home">
    <vue-navbar state="dir" />
    <vue-hero style="z-index: 2">
      <div class="hero__h-wrapper">
        <h1 data-a-h class="h1 hero__h">KSh DESIGN</h1>
      </div>
      <div class="hero__text-wrapper">
        <div data-a-o class="hero__bottom-text">Ukraine</div>
        <div data-a-o class="hero__discover">Discover our services</div>
      </div>
    </vue-hero>
    <VueService
      v-for="(service, idx) in story?.content?.services"
      :key="service._uid"
      :parallax="idx === 0"
      :title="service?.title"
      :text="service?.text"
      :image="service?.image?.filename"
      :mask="service?.mask?.filename"
      :subtitle1="service?.subtitle_1"
      :subtitle2="service?.subtitle_2"
    />

    <vue-footer />
  </main>
</template>

<script>
import emitter from 'tiny-emitter/instance'

import VueHero from '~/components/vue-hero.vue'
import VueService from '~/components/vue-service.vue'
import VueNavbar from '~/components/vue-navbar.vue'
import VueFooter from '~/components/vue-footer.vue'
import transition from '~/mixins/transition.vue'
import HomeStory from '~/mixins/homeStory.vue'

const TITLE = 'KSH Design Buro | Private Residential and Commercial Interiors'
const DESCRIPTION =
  'We create interior design and architecture. We work in two directions: private residences and commercial interiors. From the development of layout and rough sketch to designing one-off home decor items'

export default {
  components: { VueNavbar, VueHero, VueFooter, VueService },
  mixins: [transition, HomeStory],

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

    console.log(this.story.content)
  },
}
</script>
