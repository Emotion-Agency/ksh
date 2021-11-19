<script>
export default {
  mounted() {
    this.$storybridge(
      () => {
        // eslint-disable-next-line no-undef
        const storyblokInstance = new StoryblokBridge()

        storyblokInstance.on(['input', 'published', 'change'], event => {
          if (event.action === 'input') {
            if (event.story.id === this.story.id) {
              this.story.content = event.story.content
            }
          } else {
            window.location.reload()
            setTimeout(() => {
              if (event.story.id === this.story.id) {
                this.story.content = event.story.content
              }
            }, 1000)
          }
        })
      },
      error => {
        console.log(error)
      }
    )
  },
}
</script>