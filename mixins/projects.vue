<script>
import { keysGenerator } from '~/scripts/utils/keysGenerator'
import { transformImage } from '~/scripts/utils/storyblokImage'
import { imgix } from '~/scripts/imgix'

export default {
  asyncData(context) {
    return context.app.$storyapi
      .get(`cdn/stories${context.route.path}`, {
        version: 'draft',
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

  methods: {
    openSlider(idx = 0) {
      this.startFrom = idx
      this.isSliderOpen = true
    },
    closeSlider() {
      this.startFrom = 0
      this.isSliderOpen = false
    },
  },
}
</script>