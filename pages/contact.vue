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
export default {
  components: { VueNavbar, VueFooter },
  mixins: [transition],
}
</script>