<template>
  <div :data-parallax-wrapper="parallax">
    <div ref="parallax" data-offset="0">
      <vue-hero
        class="service-section"
        :image="image"
        :mask="mask"
        :storyblok="true"
        :is-animating="parallax"
      >
        <div class="container service-section__wrapper">
          <h2 class="service-section__title">{{ title }}</h2>
          <p v-if="subtitle1" class="service-section__text">{{ subtitle1 }}</p>
        </div>
      </vue-hero>
      <section class="section home-1">
        <div class="container home-1__wrapper">
          <div class="home-1__left-block">
            <h3
              class="home-1__title"
              v-html="subtitle2.replace(/\n/gm, '<br>')"
            />
          </div>
          <div class="home-1__right-block">
            <vue-rich-text :text="text" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import VueHero from '~/components/vue-hero.vue'
import VueRichText from '~/components/vue-richtext.vue'

export default {
  components: { VueHero, VueRichText },
  props: {
    parallax: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    subtitle1: {
      type: String,
      default: '',
    },
    subtitle2: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    mask: {
      type: String,
      default: '',
    },
    text: {
      type: Object,
      default: () => {},
    },
  },
  async mounted() {
    if (this.parallax) {
      await this.sectionParallaxInit()
    }
  },
  beforeDestroy() {
    this.sp && this.sp.destroy()
  },

  methods: {
    async sectionParallaxInit() {
      const { SectionParallax } = await import('~/scripts/SectionParallax')

      this.sp = new SectionParallax([this.$refs.parallax])
      this.sp.init()
    },
  },
}
</script>
