<script>
import storybridge from './storybridge.vue'

export default {
  mixins: [storybridge],
  asyncData(context) {
    return context.app.$storyapi
      .get(`cdn/stories/home`, {
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

  async mounted() {
    try {
      const data = await this.$storyapi
        .get(`cdn/stories/home`, {
          version: 'draft',
        })
        .then(res => {
          return res.data
        })

      this.story.content = data.story.content
    } catch (error) {
      console.log(error)
    }
  },
}
</script>
