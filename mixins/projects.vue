<script>
import { keysGenerator } from '~/scripts/utils/keysGenerator'
import { transformImage } from '~/scripts/utils/storyblokImage'
import { imgix } from '~/scripts/imgix'

export default {
  asyncData(context) {
    return context.app.$storyapi
      .get(`cdn/stories${context.route.path}`, {
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
      })
      .then(res => {
        return { storyblok: res.data.story.content }
      })
  },

  data() {
    return {
      isSliderOpen: false,
      startFrom: 0,
    }
  },

  computed: {
    getFilters() {
      return this.$store.state.app.isWebp
        ? 'filters:quality(92):format(webp)'
        : 'filters:quality(92)'
    },
    getImages() {
      return this.storyblok.body[0].images.map(img => ({
        _id: keysGenerator(8),
        img: imgix.buildURL(
          transformImage(img.preview_image.filename, this.getFilters),
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