<script>
import storybridge from './storybridge.vue'

export default {
  mixins: [storybridge],
  asyncData(context) {
    const path = context.route.path.replace('projects', 'new-projects')
    return context.app.$storyapi
      .get(`cdn/stories${path}`, {
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
