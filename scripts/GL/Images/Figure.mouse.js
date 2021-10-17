import gsap from 'gsap'

export const ease = 'power2.out'

export class FigureMouse {
  constructor(instance) {
    this.instance = instance
    this.bounds()
  }

  bounds() {
    this.mouseEnter = this.mouseEnter.bind(this)
    this.mouseLeave = this.mouseLeave.bind(this)
    this.mouseClick = this.mouseClick.bind(this)
  }

  addEvents() {
    this.instance.$el
      .closest('.work')
      ?.addEventListener('mouseenter', this.mouseEnter)

    this.instance.$el
      .closest('.work')
      ?.addEventListener('mouseleave', this.mouseLeave)

    this.instance.$el
      .closest('.work')
      ?.addEventListener('click', this.mouseClick)
  }

  removeEvents() {
    this.instance.$el
      .closest('.work')
      ?.removeEventListener('mouseenter', this.mouseEnter)

    this.instance.$el
      .closest('.work')
      ?.removeEventListener('mouseleave', this.mouseLeave)

    this.instance.$el
      .closest('.work')
      ?.removeEventListener('click', this.mouseClick)
  }

  mouseClick() {
    this.instance.material.uniforms.uTexture.value = this.instance.bigTexture

    this.mouseEnter()

    this.instance.$el
      .closest('.work')
      ?.removeEventListener('mouseleave', this.mouseLeave)
  }

  mouseEnter() {
    if (!this.instance.rendering) {
      return
    }

    gsap.to(this.instance.material.uniforms.uDistortion, {
      duration: 1.6,
      value: 1,
      overwrite: true,
      ease,
    })

    gsap.to(this.instance.material.uniforms.uScale, {
      duration: 1.5,
      value: 1,
      delay: 0.1,
      overwrite: true,
      ease,
    })
    if (
      this.instance.$el.classList.contains('img-hidden') &&
      window.innerWidth > 960
    ) {
      gsap.to(this.instance.material.uniforms.uVisible, {
        duration: 0.6,
        value: 1,
        overwrite: true,
        ease,
      })
    }
  }

  mouseLeave() {
    if (!this.instance.rendering) {
      return
    }
    gsap.to(this.instance.material.uniforms.uDistortion, {
      duration: 1.8,
      value: 0,
      overwrite: true,
      ease: 'power4.out',
    })
    gsap.to(this.instance.material.uniforms.uScale, {
      duration: 2,
      value: 0,
      delay: 0,
      overwrite: true,
      ease: 'power4.out',
    })

    if (
      this.instance.$el.classList.contains('img-hidden') &&
      window.innerWidth > 960
    ) {
      gsap.to(this.instance.material.uniforms.uVisible, {
        duration: 0.6,
        value: 0,
        overwrite: true,
        ease,
      })
    }
  }
}
