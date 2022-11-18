<template>
  <div class="3d-tour">
    <iframe
      width="1920px"
      height="1080px"
      style="width:100%;height:100vh;"
      :src="iframeSrc"
    ></iframe>
  </div>
</template>

<script>
export default {
  computed: {
    iframeSrc() {
      const path = this.$route.params.id
      if (!path) {
        return ''
      }

      return `https://kshdesignbureau.com/tours/${path}/`
    }
  }
}
</script>