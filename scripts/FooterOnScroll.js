import { raf } from '@emotionagency/utils'
import gsap from 'gsap'

const ease = 'power1.inOut'

export class FooterOnScroll {
  isInAnimated = false
  isOutAnimated = false

  constructor($el) {
    this.$footer = $el
    this.$footerImage = $el.querySelector('[data-footer-image]')
    this.$footerMask = $el.querySelector('[data-footer-mask]')

    this.$sc = document.querySelector('#scroll-container')

    this.animate = this.animate.bind(this)

    this.init()
  }

  init() {
    raf.on(this.animate)
  }

  get position() {
    return this.$footer.getBoundingClientRect().y
  }

  in() {
    if (!this.isInAnimated) {
      gsap.to(this.$footerImage, { duration: 1.2, scale: 1, ease })
      gsap.to(this.$footerMask, { duration: 1.2, opacity: 1, ease, delay: 1 })
      this.isInAnimated = true
      this.isOutAnimated = false
    }
  }

  out() {
    if (!this.isOutAnimated) {
      gsap.to(this.$footerImage, { duration: 1.2, scale: 1.1, ease })
      gsap.to(this.$footerMask, { duration: 1.2, opacity: 0, ease })
      this.isOutAnimated = true
      this.isInAnimated = false
    }
  }

  animate() {
    this.position > window.innerHeight / 2 ? this.out() : this.in()
  }

  destroy() {
    raf.off(this.animate)
  }
}
