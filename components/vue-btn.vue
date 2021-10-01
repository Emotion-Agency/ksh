<template>
  <nuxt-link class="btn" :to="to">
    {{ text }}
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: '/',
    },
    text: {
      type: String,
      default: 'Button',
    },
  },
}
</script>