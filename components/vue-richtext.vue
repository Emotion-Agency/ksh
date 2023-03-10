<template>
  <div v-html="richtext"></div>
</template>

<script>
export default {
  props: {
    text: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    richtext() {
      return this.$storyapi.richTextResolver.render(this.text)
    },
  },
}
</script>
