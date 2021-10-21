<script>
import { loaderAnimation } from '~/scripts/loaderAnimation'
import { resetScroll } from '~/scripts/utils/resetScroll'

export default {
  transition() {
    window.scetch?.figures?.forEach(f => {
      window.scetch.removeFigure(f._id)
    })

    return {
      mode: 'out-in',
      enter(_, done) {
        resetScroll()
        loaderAnimation().animateOut(done)
      },
      leave(_, done) {
        window.ss && (window.ss.isFixed = true)
        loaderAnimation(2, 1).animateIn(done)
      },
    }
  },
}
</script>