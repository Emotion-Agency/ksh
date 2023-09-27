<template>
  <div class="projects">
    <vue-navbar />
    <section class="projects-section">
      <ul class="projects-section__items">
        <li
          v-for="item in stories"
          :key="item.uuid"
          class="projects-section__item"
        >
          {{ item.name }}
        </li>
      </ul>
    </section>
    <vue-footer />
  </div>
</template>

<script>
import VueFooter from '~/components/vue-footer.vue'
import transition from '~/mixins/transition.vue'
import projects from '~/mixins/projects.vue'

const TITLE = 'Commercial Interiors | KSh Design Buro'
const DESCRIPTION =
  'This section presents our projects in the field of Commercial Interiors. We design Commercial Interiors for restaurants, shops and office real estate'

export default {
  components: { VueFooter },
  mixins: [transition, projects],

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

  mounted() {
    console.log(this.stories)
  },
}
</script>
