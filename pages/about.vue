<template>
  <main class="about">
    <vue-navbar color="black" />
    <section data-a-o class="section about-1">
      <div class="container about-1__container">
        <div class="about-1__left">
          <vue-image prefix="about-1" url="/img/about/about.jpg" />
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
                `Our approach to project development is underpinned by the pursuit to create a bespoke design, externalize the intended atmosphere and improve perception of the space.`
              "
            ></p>
            <p
              class="tb__text"
              v-html="
                `We prioritize collaboration with our clients to get a precise understanding of what they wish and prefer, hear their aesthetic views, make balanced decisions that will help us deliver carefully crafted, functional, comfortable, and beautiful spaces matching the life style and rhythm of our clients.`
              "
            ></p>
          </div>
        </div>
      </div>
    </section>
    <section class="section about-2">
      <div class="container about-2__wrapper">
        <ul class="about-2__list">
          <li v-for="(el, idx) in profiles" :key="idx" class="about-2__item">
            <vue-image prefix="about-2" :url="el.img" />
            <div class="about-2__text-block">
              <h2 class="about-2__title">{{ el.title }}</h2>
              <p class="about-2__career">{{ el.career }}</p>
            </div>
          </li>
        </ul>
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
  data() {
    return {
      profiles: [
        {
          title: 'Kostiantyn Sharlykov',
          career: 'Founder Architect',
          img: '/img/about/1.jpg',
        },
        {
          title: 'Kate Lu',
          career: 'Partner, Creative Director',
          img: '/img/about/2.jpg',
        },
        {
          title: 'Igor Stets',
          career: 'Senior Architect, Project Manager',
          img: '/img/about/3.jpg',
        },
        {
          title: 'Mykola Mondych',
          career: 'Interior Designer',
          img: '/img/about/4.jpg',
        },
        {
          title: 'Tanya Poberezhnik',
          career: 'Designer, Decoration & Styling Manager',
          img: '/img/about/5.jpg',
        },
        {
          title: 'Kyryl Nikitenko',
          career: 'Interior Designer',
          img: '/img/about/6.jpg',
        },
        {
          title: 'Mariia Hasiuk',
          career: 'Designer, Landscape Project Manager',
          img: '/img/about/7.jpg',
        },
        {
          title: 'Yurii Henyk',
          career: 'Architect, CAD Designer',
          img: '/img/about/8.jpg',
        },
        {
          title: 'Roman Yanevych',
          career: 'Architect, CAD Designer',
          img: '/img/about/9.jpg',
        },
      ],
    }
  },

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
