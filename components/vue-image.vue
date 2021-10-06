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
    fullUrl() {
      return `background-image: url(${this.url})`
    },
  },
}
</script>