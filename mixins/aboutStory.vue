<script>
import storybridge from './storybridge.vue'

export default {
  mixins: [storybridge],
  asyncData(context) {
    return context.app.$storyapi
      .get(`cdn/stories/about`, {
        version: 'draft',
      })
      .then(res => {
        return res.data
      })
  },

  data() {
    return {
      story: { content: {} },
    }
  },
}
</script>
