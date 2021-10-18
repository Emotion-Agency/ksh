<template>
  <div class="slider-window" :class="[isOpen && 'slider-window--open']">
    <button class="slider-window__close" @click="close">
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="28.2843"
          width="40"
          height="2"
          transform="rotate(-45 0 28.2843)"
          fill="#221E1D"
        />
        <rect
          x="1.41406"
          width="40"
          height="2"
          transform="rotate(45 1.41406 0)"
          fill="#221E1D"
        />
      </svg>
    </button>
    <div class="slider-window__slider">
      <vue-slider :items="items" :current="startFrom" />
    </div>
  </div>
</template>

<script>
import VueSlider from './vue-slider.vue'
export default {
  components: { VueSlider },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    startFrom: {
      type: Number,
      default: 0,
    },
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>