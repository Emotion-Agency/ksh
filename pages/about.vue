<template>
  <main class="about">
    <vue-navbar color="black" />
    <section data-a-o class="section about-1">
      <div class="container about-1__container">
        <div class="about-1__left">
          <vue-image prefix="about-1" url="/img/about.jpg" />
          <div class="about-1__aim aim">
            <h2 class="aim__h2">Aim:</h2>
            <ul class="aim__items">
              <li class="aim__item">
                To create timeless architecture that is always chic
              </li>
              <li class="aim__item">
                To create interiors for clients to enjoy their life
              </li>
            </ul>
          </div>
        </div>
        <div class="about-1__right">
          <div class="about-1__text-block tb">
            <h2 class="tb__h2">
              KSh Design Bureau is a team of skilled designers and architects
              specializing in private architecture and interior design for
              residential and commercial facilities
            </h2>
            <p
              class="tb__text"
              v-html="
                `Our approach to project development is underpinned by the pursuit to create a bespoke design, externalize the intended atmosphere and improve perception of the space. We prioritize collaboration with our clients to get a precise understanding of what they wish and prefer, hear their aesthetic views, make balanced decisions that will help us deliver carefully crafted, functional, comfortable, and beautiful spaces matching the life style and rhythm of our clients.`
              "
            ></p>
          </div>
          <div class="about-1__text-block tb">
            <h2 class="tb__h2">Private Architecture</h2>
            <p
              class="tb__text"
              v-html="
                `The concept is always based on the customer request, specifics of the plot and environment.

In our approach to project development, we try and enhance the feeling of interaction with the shape and light, which exert a secret, but deep influence on the level of sensations our clients experience every minute they stay in the space. That is why each project is an open conversation with the client.`
              "
            ></p>
          </div>
          <div class="about-1__text-block tb">
            <h2 class="tb__h2">Interior Design</h2>
            <p
              class="tb__text"
              v-html="
                `We create hi-end interiors, bring out the beauty of real estate and let the client’s uniqueness enter the picture. Functionality, durability and comfort are integrated into every our concept, from the development of layout and rough sketch to designing one-off home decor items.

We use genuine and pleasantly tactile materials and transform them into a pure, timeless design.`
              "
            ></p>
          </div>
        </div>
      </div>
    </section>
    <vue-footer />
  </main>
</template>

<script>
import VueFooter from '~/components/vue-footer.vue'
import VueImage from '~/components/vue-image.vue'
import VueNavbar from '~/components/vue-navbar.vue'
import transition from '~/mixins/transition.vue'

const TITLE = 'About | KSh Design Buro'
const DESCRIPTION =
  'We are a team of experienced designers and architects. Our main specialization is the creation of individual interiors for residential and commercial real estate'

export default {
  components: { VueNavbar, VueImage, VueFooter },
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
}
</script>