<template>
  <div class="e-img" :style="{ backgroundImage: `url('${fullUrl}')` }"></div>
</template>

<script>
import { transformImage } from '~/scripts/utils/storyblokImage'

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
    storyblok: {
      type: Boolean,
      default: false,
    },
    quality: {
      type: Number,
      default: 82,
    },
  },

  computed: {
    getWebpUrl() {
      const reg = /\.(jpe?g|png)/gm
      const ext = '.webp'

      return this.url.replace(reg, '') + ext
    },

    fullUrl() {
      if (this.storyblok) {
        const finalUrl = transformImage(
          this.url,
          `filters:quality(${this.quality}):format(webp)`
        )

        return finalUrl
      }

      if (this.webp) {
        return this.$store.state.app.isWebp ? this.getWebpUrl : this.url
      } else {
        return this.url
      }
    },
  },
}
</script>
