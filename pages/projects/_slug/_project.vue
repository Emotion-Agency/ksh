<template>
  <div class="projects">
    <vue-navbar />
    <!-- <vue-footer
      :image="getFooterImages.image"
      :mask="getFooterImages.mask"
      :webp="false"
    /> -->
  </div>
</template>

<script>
// import VueFooter from '~/components/vue-footer.vue'
import transition from '~/mixins/transition.vue'
import project from '~/mixins/project.vue'

const TITLE = 'Commercial Interiors | KSh Design Buro'
const DESCRIPTION =
  'This section presents our projects in the field of Commercial Interiors. We design Commercial Interiors for restaurants, shops and office real estate'

export default {
  // components: { VueFooter },
  mixins: [transition, project],

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
    console.log(this.story)
  },
}
</script>
