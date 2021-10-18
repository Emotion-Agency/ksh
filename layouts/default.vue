<template>
  <div id="app">
    <div id="scroll-container">
      <Nuxt />
      <div id="gl"></div>
    </div>
    <vue-loader />
  </div>
</template>

<script>
import emitter from 'tiny-emitter/instance'
import vueLoader from '~/components/vue-loader'

export default {
  components: { vueLoader },
  async mounted() {
    const { default: supportsWebP } = await import('supports-webp')

    if (await supportsWebP) {
      this.$store.commit('app/setIsWebp', true)
    } else {
      this.$store.commit('app/setIsWebp', false)
    }

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

    const { default: NavbarPos } = await import('~/scripts/utils/navbarPos')
    this.navbarPos = new NavbarPos()
    this.navbarPos.init()
  },

  methods: {
    async parallaxInit() {
      const { Parallax } = await import('~/scripts/Parallax')
      window.parallax = new Parallax()
    },
  },
}
</script>