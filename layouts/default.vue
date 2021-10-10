<template>
  <div id="app">
    <div id="scroll-container">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  async mounted() {
    const { SmoothScroll } = await import('@emotionagency/smoothscroll')
    const { raf } = await import('@emotionagency/utils')

    window.ss = new SmoothScroll({
      mobile: false,
      breakpoint: 960,
      passive: false,
      isFixed: false,
      friction: 0.03,
      stepSize: 0.9,
      scrollbar: false,
      raf,
    })

    this.parallaxInit()
  },

  methods: {
    async parallaxInit() {
      const { Parallax } = await import('~/scripts/Parallax')
      window.parallax = new Parallax()
    },
  },
}
</script>