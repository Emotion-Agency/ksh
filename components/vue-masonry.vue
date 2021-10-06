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
import imagesLoaded from 'imagesloaded'
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },

  async mounted() {
    const { default: Masonry } = await import('masonry-layout')
    const { delayPromise } = await import('~/scripts/utils/delay')
    const elem = document.querySelector('.grid')

    await delayPromise(100)
    imagesLoaded(document.querySelector('.masonry'), () => {
      new Masonry(elem, {
        // options
        itemSelector: '.grid__item',
      })
      window.ss?.reset()
    })
  },
}
</script>