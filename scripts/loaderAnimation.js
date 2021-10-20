import gsap from 'gsap'

const noop = () => {}

export const loaderAnimation = (duration = 2, delay = 1.5) => {
  const $el = document.querySelector('.loader')
  const $bg = document.querySelector('[data-a-bg]')
  const $mask = document.querySelector('[data-a-mask]')
  const $h = document.querySelector('[data-a-h]')
  const $o = document.querySelector('[data-a-o]')

  const animateOut = cb => {
    const callback = cb ?? noop
    if (!$el) return

    $el.style.cssText = ''
    setTimeout(() => {
      $el.style.cssText = `
        clip-path: ellipse(100% 100% at 15% 50%);
        animation-name: loaderOut;
        animation-duration: ${duration}s;
        animation-timing-function: cubic-bezier(0.91, 0.04, 0.45, 0.83);
        animation-play-state: paused;
        animation-fill-mode: forwards;
    `
      $el.style.animationPlayState = 'running'

      setTimeout(() => {
        callback()
      }, delay * 1000)

      const tl = gsap.timeline()
      $bg &&
        tl.to(
          $bg,
          { duration: 1.5, scale: 1, ease: 'power1.inOut' },
          duration - 0.7
        )
      $mask &&
        tl.to(
          $mask,
          { duration: 1.5, opacity: 1, ease: 'power1.inOut' },
          duration
        )
      $h && tl.to($h, { duration: 1.5, y: '0%', ease: 'power2.out' }, duration)
      $o && tl.to($o, { duration: 1.5, opacity: 1 }, duration - 0.5)
    }, 100)
  }

  const animateIn = cb => {
    const callback = cb ?? noop

    if (!$el) return

    $el.style.cssText = `
    clip-path: ellipse(100% 0% at 15% 50%);
    animation-name: loaderIn;
    animation-duration: ${duration - 0.5}s;
    animation-timing-function: ease;
    animation-play-state: paused;
    animation-fill-mode: forwards;
    `
    $el.style.animationPlayState = 'running'

    setTimeout(() => {
      callback()
    }, delay * 1000)

    const tl = gsap.timeline()

    $bg && tl.to($bg, { duration: 1.2, scale: 1.2, ease: 'power1.inOut' })
    $mask &&
      tl.to(
        $mask,
        { duration: 1.2, opacity: 0, ease: 'power1.inOut' },
        duration - 1
      )
    $h && tl.to($h, { duration: 1.2, y: '100%', ease: 'power2.out' })
    $o && tl.to($o, { duration: 1.2, opacity: 0 })
  }

  return { animateOut, animateIn }
}
