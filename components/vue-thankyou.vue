<template>
  <div class="thankyou" :class="[isOpen && 'thankyou--open']">
    <div class="thankyou__backdrop" @click="close"></div>
    <div class="thankyou__window ty-window">
      <button class="ty-window__close" aria-label="close popup" @click="close">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="28.2843"
            width="40"
            height="2"
            transform="rotate(-45 0 28.2843)"
            fill="#221E1D"
          />
          <rect
            x="1.41406"
            width="40"
            height="2"
            transform="rotate(45 1.41406 0)"
            fill="#221E1D"
          />
        </svg>
      </button>
      <div class="ty__h">Thank you</div>
      <p class="ty__t">Your request has been successfully sent</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isOpen() {
      return this.$store.state.app.isPopupOpen
    },
  },
  methods: {
    close() {
      this.$store.commit('app/setPopup', false)
    },
  },
}
</script>