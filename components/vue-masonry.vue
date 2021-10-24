<template>
  <div class="masonry">
    <div class="container masonry__container">
      <div class="grid">
        <div
          v-for="(item, idx) in items"
          :key="item._id"
          class="grid__item"
          @click="clickItem(idx)"
        >
          <img
            class="grid__img js-gl-img"
            :src="item.img"
            :data-src="item.img"
            data-gl-parallax="0"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from 'tiny-emitter/instance'
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
      this.masonry = new Masonry(elem, {
        // options
        itemSelector: '.grid__item',
      })
      window.innerWidth > 960 && window.ss?.reset()
    })

    const { initImages } = await import('~/scripts/GL/Images/init')
    if (window.scetch) {
      initImages()
    } else {
      emitter.on('scetchCreated', initImages)
    }
  },
  methods: {
    clickItem(idx = 0) {
      this.$emit('clickItem', idx)
    },
  },
}
//
</script>
