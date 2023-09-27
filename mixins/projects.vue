<script>
import storybridge from './storybridge.vue'
// import { transformImage } from '~/scripts/utils/storyblokImage'

export default {
  mixins: [storybridge],
  asyncData(context) {
    const path = context.route.path
      .replace('projects', 'new-projects')
      .replace('/', '')

    return context.app.$storyapi
      .get(`cdn/stories?by_slugs=${path}/*`, {
        version: 'draft',
      })
      .then(res => {
        return res.data
      })
  },

  data() {
    return {
      story: { content: {} },
      stories: [],
    }
  },

  // computed: {
  //   getFooterImages() {
  //     return {
  //       image: transformImage(
  //         this.story.content.footer_images[0].image.filename,
  //         this.getFilters
  //       ),
  //       mask: transformImage(
  //         this.story.content.footer_images[0].mask.filename,
  //         this.getFilters
  //       ),
  //     }
  //   },
  // },
}
</script>
