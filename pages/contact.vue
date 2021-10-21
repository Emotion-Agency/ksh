<template>
  <main class="contact">
    <vue-navbar />
    <vue-footer />
  </main>
</template>

<script>
import VueNavbar from '~/components/vue-navbar.vue'
import VueFooter from '~/components/vue-footer.vue'
import transition from '~/mixins/transition.vue'

const TITLE = 'Contact | KSh Design Buro '
const DESCRIPTION =
  'Stay connected with KSh Design Buro: send a request or write to us via e-mail or Instagram'

export default {
  components: { VueNavbar, VueFooter },
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