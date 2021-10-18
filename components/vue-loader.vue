<template>
  <div ref="loader" class="loader">
    <div class="loader__bg">
      <div class="loader__logo">
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
  async mounted() {
    await delayPromise(100)
    imagesloaded(document.body, () => {
      loaderAnimation().animateOut()
      window.innerWidth > 960 && window.ss?.reset()
    })
  },
}
</script>