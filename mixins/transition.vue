<script>
import { resetScroll } from '~/scripts/utils/resetScroll'

export default {
  transition() {
    return {
      mode: 'out-in',
      enter(_, done) {
        resetScroll()
        done()
      },
      leave(_, done) {
        window.ss && (window.ss.isFixed = true)
        done()
      },
    }
  },
}
</script>