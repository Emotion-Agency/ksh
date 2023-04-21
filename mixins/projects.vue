<script>
import storybridge from './storybridge.vue'
import { keysGenerator } from '~/scripts/utils/keysGenerator'
import { transformImage } from '~/scripts/utils/storyblokImage'
import { imgix } from '~/scripts/imgix'

export default {
  mixins: [storybridge],
  asyncData(context) {
    return context.app.$storyapi
      .get(`cdn/stories${context.route.path}`, {
        version: 'draft',
      })
      .then(res => {
        return res.data
      })
  },

  data() {
    return {
      isSliderOpen: false,
      startFrom: 0,
      story: { content: {} },
    }
  },

  computed: {
    getFilters() {
      return this.$store.state.app.isWebp
        ? 'filters:quality(92):format(webp)'
        : 'filters:quality(92)'
    },
    getImages() {
      const imgs = this.story.content.body[0].images.filter(
        img => img.preview_image.filename
      )
      return imgs.map(img => ({
        _id: keysGenerator(8),
        img: imgix.buildURL(
          transformImage(img.preview_image.filename, this.getFilters),
          {}
        ),
      }))
    },
    getImagesToSlider() {
      return this.story.content.body[0].images.map(img => ({
        _id: keysGenerator(8),
        img: transformImage(
          img.big_image.filename,
          'filters:quality(92):format(webp)'
        ),
      }))
    },
    getHeroImages() {
      return {
        image: transformImage(
          this.story.content.hero_images[0].image.filename,
          this.getFilters
        ),
        mask: transformImage(
          this.story.content.hero_images[0].mask.filename,
          this.getFilters
        ),
      }
    },

    getFooterImages() {
      return {
        image: transformImage(
          this.story.content.footer_images[0].image.filename,
          this.getFilters
        ),
        mask: transformImage(
          this.story.content.footer_images[0].mask.filename,
          this.getFilters
        ),
      }
    },
  },

  async mounted() {
    // this.story.content =
    const data = await this.$storyapi
      .get(`cdn/stories${this.$route.path}`, {
        version: 'draft',
      })
      .then(res => {
        return res.data
      })

    this.story.content = data.story.content
  },

  methods: {
    openSlider(idx = 0) {
      this.startFrom = idx
      this.isSliderOpen = true
      window.ss && (window.ss.isFixed = true)
    },
    closeSlider() {
      this.startFrom = 0
      this.isSliderOpen = false
      window.ss && (window.ss.isFixed = false)
    },
  },
}
</script>
