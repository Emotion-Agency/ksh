<template>
  <div class="image-wrapper" :class="[prefix + '__image-wrapper']">
    <div class="img" :class="[prefix + '__img']" :style="fullUrl"></div>
  </div>
</template>

<script>
export default {
  props: {
    prefix: {
      type: String,
      default: 'vue',
    },
    url: {
      type: String,
      default: '/img/comm-1.jpg',
    },
  },
  computed: {
    getWebpUrl() {
      const reg = /\.(jpe?g|png)/gm
      const ext = '.webp'

      return this.url.replace(reg, '') + ext
    },

    fullUrl() {
      const url = this.$store.state.app.isWebp ? this.getWebpUrl : this.url

      return `background-image: url(${url})`
    },
  },
}
</script>