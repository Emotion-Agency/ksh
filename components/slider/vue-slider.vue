<template>
  <div class="slider">
    <ul class="slider__slides">
      <li
        v-for="(item, idx) in items"
        :key="item._id"
        class="slider__slide slide"
        :class="[currentSlide === idx && 'slide--active']"
      >
        <img :src="item.img" alt="" class="slide__img" />
      </li>
    </ul>
    <nav class="slider__nav">
      <button class="slider__nav-item slider__nav-item--left" @click="prev">
        <vue-arrow-icon />
      </button>
      <button class="slider__nav-item slider__nav-item--right" @click="next">
        <vue-arrow-icon />
      </button>
    </nav>
  </div>
</template>

<script>
import VueArrowIcon from './vue-arrow-icon.vue'
export default {
  components: { VueArrowIcon },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    current: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      currentSlide: this.current,
    }
  },

  watch: {
    current() {
      this.currentSlide = this.current
    },
  },

  methods: {
    prev() {
      if (this.currentSlide > 0) {
        this.currentSlide--
      } else {
        this.currentSlide = this.items.length - 1
      }
    },
    next() {
      if (this.currentSlide < this.items.length - 1) {
        this.currentSlide++
      } else {
        this.currentSlide = 0
      }
    },
  },
}
</script>