<template>
  <div class="masonry">
    <div class="container masonry__container">
      <div class="grid">
        <div v-for="item in items" :key="item._id" class="grid__item">
          <img class="grid__img" :src="item.img" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },

  async mounted() {
    const { default: Masonry } = await import('masonry-layout')
    const elem = document.querySelector('.grid')

    new Masonry(elem, {
      // options
      itemSelector: '.grid__item',
    })
  },
}
</script>