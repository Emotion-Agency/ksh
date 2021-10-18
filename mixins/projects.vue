<script>
export default {
  data() {
    return {
      isSliderOpen: false,
      startFrom: 0,
    }
  },
  methods: {
    openSlider(idx = 0) {
      this.startFrom = idx
      this.isSliderOpen = true
    },
    closeSlider() {
      this.startFrom = 0
      this.isSliderOpen = false
    },
  },
}
</script>