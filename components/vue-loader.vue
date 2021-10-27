<template>
  <div ref="loader" class="loader">
    <div class="loader__bg">
      <div class="loader__logo" :class="[isLoaded && 'loaded']">
        <vue-logo />
      </div>
    </div>
  </div>
</template>

<script>
import imagesloaded from 'imagesloaded'
import vueLogo from './vue-logo.vue'
import { delayPromise } from '~/scripts/utils/delay'
import { loaderAnimation } from '~/scripts/loaderAnimation'
export default {
  components: { vueLogo },
  data() {
    return {
      isLoaded: false,
    }
  },
  async mounted() {
    const { winSizes } = await import('~/scripts/utils/winSizes')
    const { resize } = await import('@emotionagency/utils')
    resize.on(winSizes)

    await delayPromise(300)
    imagesloaded(document.body, () => {
      this.isLoaded = true
      loaderAnimation().animateOut()
      window.innerWidth > 960 && window.ss?.reset()
    })
  },
}
</script>