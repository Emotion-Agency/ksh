<template>
  <main class="home">
    <vue-navbar state="dir" />
    <vue-hero style="z-index: 2">
      <div class="hero__h-wrapper">
        <h1 data-a-h class="h1 hero__h">KSh DESIGN</h1>
      </div>
      <div class="hero__text-wrapper">
        <div data-a-o class="hero__bottom-text">Ukraine</div>
        <div data-a-o class="hero__discover">Discover our services</div>
      </div>
    </vue-hero>
    <div data-parallax-wrapper>
      <div v-multi-ref:parallax data-offset="0">
        <vue-hero
          class="service-section"
          image="/img/services/1.jpg"
          mask="/img/services/1-mask.png"
        >
          <div class="container service-section__wrapper">
            <h2 class="service-section__title">Private Architecture</h2>
          </div>
        </vue-hero>
        <section class="section home-1">
          <div class="container home-1__wrapper">
            <div class="home-1__left-block">
              <h3 class="home-1__title">
                Timeless architecture that <br />
                stays relevant forever
              </h3>
            </div>
            <div class="home-1__right-block">
              <p class="home-1__text">
                The concept is always based on the customer request, specifics
                of the plot and environment. In our approach to project
                development, we try and enhance the feeling of interaction with
                the shape and light, which exert a secret, but deep influence on
                the level of sensations our clients experience every minute they
                stay in the space. That is why each project is an open
                conversation with the client.
              </p>
              <p class="home-1__text">
                Architecture is the basis for design, which remains for many
                years and is inherited. For this reason, in designing, we always
                carefully and neatly recheck many times and test all our
                audacious ideas that we generate for each project.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
    <vue-hero
      class="service-section"
      image="/img/services/2.jpg"
      mask="/img/services/2-mask.png"
      :is-animating="false"
    >
      <div class="container service-section__wrapper">
        <h2 class="service-section__title">Landscape Design</h2>
        <p class="service-section__text">Simple things find a deep sense</p>
      </div>
    </vue-hero>
    <section class="section home-1">
      <div class="container home-1__wrapper">
        <div class="home-1__left-block">
          <h3 class="home-1__title">
            A landscape where you can meditate, contemplate and feel the soul
            inside you
          </h3>
        </div>
        <div class="home-1__right-block">
          <p class="home-1__text">
            In landscape architecture our bureau covers variety of typologies:
            from private gardens and small parks to green roofs and city
            squares. Our work differs from project to project, however, our
            style in design is always breezy, pure and uncluttered. Our methods
            direct to establish a connection between places, people and nature.
          </p>
          <h3 class="home-1__text-title">Private environment</h3>
          <p class="home-1__text">
            Creating designs that meet your functional and lifestyle needs,
            complementing and enhancing the architecture of your property. To
            achieve this, we will work with you to create a custom landscape
            design that is as unique as you are.
          </p>
          <p class="home-1__text">
            KSH Design bureau easily go beyond the design of the privat plot,
            and also create public environments of landscape architectyre:
            shopping malls, housing estates, apartment compounds, plazas,
            playgrounds, squares, gardens, museums, schools, universities. Our
            works with the public environment is always a great opportunity to
            the city shaping that allows government and citizens to create
            better places for all.
          </p>
        </div>
      </div>
    </section>
    <vue-hero
      class="service-section"
      image="/img/services/3.jpg"
      mask="/img/services/3-mask.png"
      :is-animating="false"
    >
      <div class="container service-section__wrapper">
        <h2 class="service-section__title">Interior Design</h2>
        <p class="service-section__text">
          Interiors to clients to enjoy their life
        </p>
      </div>
    </vue-hero>
    <section class="section home-1">
      <div class="container home-1__wrapper">
        <div class="home-1__left-block">
          <h3 class="home-1__title">
            Our projects raise the value <br />of real estate
          </h3>
        </div>
        <div class="home-1__right-block">
          <p class="home-1__text">
            Interior design is our special passion. We started as an interior
            design studio and have earned amazingly deep expertise in this area,
            both for private homes and commercial space.
          </p>
          <p class="home-1__text">
            Our team create high-end interiors, bring out the beauty of real
            estate and let the client’s uniqueness enter the picture.
            Functionality, aesthetics, comfort and durability are integrated
            into every our concept, from the development of layout and rough
            sketch to designing one-off bespoke furniture and art objects.
          </p>
          <p class="home-1__text">
            In our approach we cover everything completely in interior
            developing, using genuine and pleasantly tactile materials,
            transform it into a pure timeless design.
          </p>
        </div>
      </div>
    </section>
    <vue-hero
      class="service-section"
      image="/img/services/3.jpg"
      mask="/img/services/3-mask.png"
      :is-animating="false"
    >
      <div class="container service-section__wrapper">
        <h2 class="service-section__title">Furniture design</h2>
        <p class="service-section__text">simple form find a deep sense</p>
      </div>
    </vue-hero>
    <section class="section home-1">
      <div class="container home-1__wrapper">
        <div class="home-1__left-block">
          <h3 class="home-1__title">
            Individual design is present <br />in every touch
          </h3>
        </div>
        <div class="home-1__right-block">
          <p class="home-1__text">
            Furniture design is one of our strong features. For each projects,
            we design something special, something that makes this project
            unique. Our creativity is absolutely endless. Every projects get
            special custom furniture. Every client becomes the owner of a
            uniqueness.
          </p>
        </div>
      </div>
    </section>
    <vue-hero
      class="service-section"
      image="/img/services/3.jpg"
      mask="/img/services/3-mask.png"
      :is-animating="false"
    >
      <div class="container service-section__wrapper">
        <h2 class="service-section__title">Bespoke furniture production</h2>
      </div>
    </vue-hero>
    <section class="section home-1">
      <div class="container home-1__wrapper">
        <div class="home-1__left-block">
          <h3 class="home-1__title">
            Our presence and control of the object design implementation process
          </h3>
        </div>
        <div class="home-1__right-block">
          <p class="home-1__text">
            Designed and made especially for you . We cooperate with the highest
            quality manufacturers and craft shops to create custom made
            furniture for our customers. Every time we offer you products made
            according to our design especially for your project in
            uncompromising quality.
          </p>
          <p class="home-1__text">
            We love produce our designed piece of furniture, deliver and
            assemble on side. It adds value to our projects and we just love
            doing it. Immersion in the production process has a special magic
            for us.
          </p>
          <p class="home-1__text">
            Over the years of work, we have selected and tested dozens of
            manufacturers, moving on to partnership only with the best. Wooden
            furniture, Natural stone products, Metal, Glass, Upholstered
            furniture. Noble materials, expertise and control of production
            gives a perfect match between the project and reality.
          </p>
        </div>
      </div>
    </section>
    <vue-footer />
  </main>
</template>

<script>
import emitter from 'tiny-emitter/instance'

import VueHero from '~/components/vue-hero.vue'
import VueNavbar from '~/components/vue-navbar.vue'
import VueFooter from '~/components/vue-footer.vue'
import transition from '~/mixins/transition.vue'

const TITLE = 'KSH Design Buro | Private Residential and Commercial Interiors'
const DESCRIPTION =
  'We create interior design and architecture. We work in two directions: private residences and commercial interiors. From the development of layout and rough sketch to designing one-off home decor items'

export default {
  components: { VueNavbar, VueHero, VueFooter },
  mixins: [transition],

  head: {
    title: TITLE,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: DESCRIPTION,
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: TITLE,
      },
      {
        hid: 'og:description',
        name: 'og:title',
        content: DESCRIPTION,
      },
    ],
  },

  async mounted() {
    const { initImages } = await import('~/scripts/GL/Images/init')
    this.sectionParallaxInit()
    if (window.scetch) {
      initImages()
    } else {
      emitter.on('scetchCreated', initImages)
    }
  },

  beforeDestroy() {
    this.sp && this.sp.destroy()
  },

  methods: {
    async sectionParallaxInit() {
      const { SectionParallax } = await import('~/scripts/SectionParallax')

      this.sp = new SectionParallax(this.$refs.parallax)
      this.sp.init()
    },
  },
}
</script>
