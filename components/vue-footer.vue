<template>
  <footer
    ref="footer"
    class="section hero footer"
    :class="[isOpen && 'footer--open']"
  >
    <div class="hero__images-container" @click.stop="closeFooter">
      <div class="hero__images-wrapper">
        <vue-img data-footer-image class="hero__img" :url="image"></vue-img>
        <vue-img data-footer-mask class="hero__img-mask" :url="mask"></vue-img>
      </div>
    </div>
    <div class="container hero__container" @click.stop="closeFooter">
      <div class="hero__h-wrapper">
        <button class="h1 footer__h" @click.stop="openFooter">
          Contact us
        </button>
      </div>
    </div>
    <div class="container footer__container footer__bottom f-b">
      <div class="f-b__inner">
        <div class="f-b__col f-b__col--1">
          <ul class="f-b__items">
            <li data-c="01" class="f-b__item">
              <a
                :href="`tel:${story.phone.replace(/\D/gm, '')}`"
                class="f-b__link"
                >Tel: {{ story.phone }}</a
              >
            </li>
            <li data-c="02" class="f-b__item">
              <a :href="`mailto:${story.email}`" class="f-b__link">{{
                story.email
              }}</a>
            </li>
          </ul>
        </div>
        <div class="f-b__col f-b__col--2">
          <ul class="f-b__items">
            <li data-c="03" class="f-b__item">
              <a :href="story.instagram" class="f-b__link">Instagram</a>
            </li>
          </ul>
        </div>
        <div class="f-b__col f-b__col--3">
          <div class="f-b__h">Have a question?</div>
          <div class="f-b__form">
            <vue-form />
          </div>
        </div>
      </div>
      <div class="footer__end">
        <a href="/" class="footer__privacy">
          © 2021. KSh design / Privacy Policy
        </a>
        <button aria-label="go top" class="footer__go-top" @click="goTop">
          <svg
            width="28"
            height="29"
            viewBox="0 0 28 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.8889 15.3721L14.9241 0.430716C14.8069 0.295515 14.662 0.187085 14.4992 0.112773C14.3365 0.0384597 14.1596 0 13.9807 0C13.8018 0 13.6249 0.0384597 13.4622 0.112773C13.2994 0.187085 13.1545 0.295515 13.0373 0.430716L0.0764078 15.3721C0.0372424 15.4172 0.0118475 15.4725 0.00324843 15.5316C-0.00535066 15.5906 0.00320829 15.6509 0.0279057 15.7052C0.0526031 15.7596 0.0923981 15.8057 0.14255 15.838C0.192703 15.8704 0.251099 15.8876 0.310783 15.8877H3.47485C3.65453 15.8877 3.82641 15.8096 3.9475 15.6729L12.4983 5.81743V27.8135C12.4983 27.9854 12.6389 28.126 12.8108 28.126H15.1545C15.3264 28.126 15.467 27.9854 15.467 27.8135V5.81743L24.0178 15.6729C24.135 15.8096 24.3069 15.8877 24.4905 15.8877H27.6545C27.9202 15.8877 28.0647 15.5752 27.8889 15.3721Z"
              fill="white"
            />
          </svg>
        </button>
        <div class="footer__logo">
          <svg
            width="29"
            height="62"
            viewBox="0 0 29 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29 27.5191L28.9964 26.7619C28.9964 24.1914 27.5834 21.4639 24.0365 21.1264C20.9866 20.9075 19.0875 23.0548 18.5741 25.4557V24.3282L18.5722 23.8575V22.9526V22.9508L18.5704 22.4783L18.4885 0.384946V0H15.8155V0.384946L15.9011 33.7785H14.6011C10.9722 33.7767 9.29522 35.477 9.19144 38.1954C9.19144 41.0122 11.6623 42.5593 15.8155 42.7016V48.7476H14.6174C13.9274 48.7093 13.3374 48.5999 12.8367 48.4266C11.1798 47.7716 10.4023 46.2008 10.3859 44.5424C10.3859 44.5424 8.63245 44.5424 8.32837 44.5424C8.32837 44.5588 8.32837 44.5734 8.33019 44.5899C8.34112 45.5002 8.70528 46.8412 9.84146 47.85L7.31965 50.2272L5.30037 52.1301L2.67295 54.6058V0H0V62H2.67295V55.5362L5.62812 52.7522L10.4951 62H13.5159L7.64739 50.8493L10.3877 48.266C11.2435 48.8224 12.4234 49.2092 14.0311 49.2366C14.093 49.2384 14.155 49.2384 14.2187 49.2384H15.8155V62H18.4885L18.5668 28.3145C18.5522 25.6071 19.7248 22.7811 21.6621 22.0204C24.661 20.8473 26.3034 22.949 26.3453 26.8258L26.3507 27.6796H26.3489L26.3471 31.8575L26.2524 62H28.8999L29 27.5191ZM15.8155 40.1949C14.3298 40.1292 10.8283 39.7151 10.8666 37.2485C10.9358 35.5172 12.265 34.3514 14.4609 34.3332H15.9011L15.8155 40.1949Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import gsap from 'gsap'
import vueImg from './vue-img.vue'
export default {
  components: { vueImg },
  props: {
    image: {
      type: String,
      default: '/img/footer-img.jpg',
    },
    mask: {
      type: String,
      default: '/img/footer-mask.png',
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
  async fetch() {
    const data = await this.$storyapi
      .get('cdn/stories/contacts', {
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
      })
      .then(res => {
        return res.data.story.content
      })
    this.$store.commit('footer/setContent', data)
  },
  computed: {
    story() {
      return this.$store.state.footer.content
    },
  },
  async mounted() {
    await this.initFooterAnimation()
  },
  beforeDestroy() {
    this.fos && this.fos.destroy()
  },
  methods: {
    openFooter() {
      this.isOpen = true
    },
    closeFooter() {
      this.isOpen = false
    },
    async initFooterAnimation() {
      const { FooterOnScroll } = await import('~/scripts/FooterOnScroll')

      this.fos = new FooterOnScroll(this.$refs.footer)
    },
    goTop() {
      gsap.to(window.ss.state, { duration: 0.5, target: 0 })
      this.closeFooter()
    },
  },
}
</script>