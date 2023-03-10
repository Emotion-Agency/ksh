<template>
  <main class="about">
    <vue-navbar color="black" />
    <section data-a-o class="section about-1">
      <div class="container about-1__container">
        <div class="about-1__left">
          <vue-image
            prefix="about-1"
            :url="story?.content?.main_image?.filename"
            :storyblok="true"
          />
        </div>
        <div class="about-1__right">
          <div class="about-1__text-block tb">
            <h2 class="tb__h2">
              {{ story.content.title }}
            </h2>
            <p class="tb__text" v-html="story.content.text"></p>
          </div>
        </div>
      </div>
    </section>
    <section v-if="story?.content?.team?.length" class="section about-2">
      <div class="container about-2__wrapper">
        <ul class="about-2__list">
          <li
            v-for="(el, idx) in story.content.team"
            :key="idx"
            class="about-2__item"
          >
            <vue-image
              prefix="about-2"
              :url="el?.image?.filename"
              :storyblok="true"
            />
            <div class="about-2__text-block">
              <h2 class="about-2__title">{{ el.name }}</h2>
              <p class="about-2__career">{{ el.occupation }}</p>
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
import AboutStory from '~/mixins/aboutStory.vue'
import transition from '~/mixins/transition.vue'

const TITLE = 'About | KSh Design Buro'
const DESCRIPTION =
  'We are a team of experienced designers and architects. Our main specialization is the creation of individual interiors for residential and commercial real estate'

export default {
  components: { VueNavbar, VueImage, VueFooter },
  mixins: [transition, AboutStory],

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

  mounted() {},
}
</script>
