<template>
  <div id="app">
    <div id="scroll-container">
      <Nuxt />
      <div id="gl"></div>
    </div>
  </div>
</template>

<script>
import emitter from 'tiny-emitter/instance'

export default {
  async mounted() {
    const { Scetch } = await import('@emotionagency/glhtml')
    const { SmoothScroll } = await import('@emotionagency/smoothscroll')
    const { raf } = await import('@emotionagency/utils')

    window.ss = new SmoothScroll({
      mobile: false,
      breakpoint: 960,
      passive: false,
      isFixed: false,
      friction: 0.03,
      stepSize: 0.9,
      scrollbar: true,
      raf,
    })

    this.parallaxInit()

    if (screen.width > 960) {
      window.scetch = new Scetch('#gl', {
        raf,
        dpr: window.devicePixelRatio,
      })

      emitter.emit('scetchCreated')
    }
  },

  methods: {
    async parallaxInit() {
      const { Parallax } = await import('~/scripts/Parallax')
      window.parallax = new Parallax()
    },
  },
}
</script>