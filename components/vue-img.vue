<template>
  <div class="e-img" :style="{ backgroundImage: `url('${fullUrl}')` }"></div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: '',
    },
    webp: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    getWebpUrl() {
      const reg = /\.(jpe?g|png)/gm
      const ext = '.webp'

      return this.url.replace(reg, '') + ext
    },

    fullUrl() {
      if (this.webp) {
        return this.$store.state.app.isWebp ? this.getWebpUrl : this.url
      } else {
        return this.url
      }
    },
  },
}
</script>