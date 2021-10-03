<template>
  <component :is="wrapperTag" class="input-wrapper form__input-wrapper">
    <input
      :id="id"
      ref="input"
      data-input
      class="input form__input"
      :class="[focus && 'js-focus', error && 'js-error']"
      :type="type"
      :name="name"
      :value="value"
      @input="inputHandler"
      @focus="focusHandler"
      @blur="blurHandler"
    />
    <label class="label form__label" :for="id">
      <span>{{ label }}</span>
      <abbr v-if="required">*</abbr>
    </label>
    <small v-if="validationText" class="input-validate form__validation-text">
      {{ validationText }}
    </small>
    <slot />
  </component>
</template>

<script>
import validator from '~/scripts/utils/Validation'

export default {
  props: {
    wrapperTag: {
      type: String,
      default: 'div',
    },
    type: {
      type: String,
      default: 'text',
    },
    id: {
      type: String,
    },
    label: {
      type: String,
    },
    name: {
      type: String,
    },

    validation: {
      type: String,
      default: '',
    },
    validationText: {
      type: String,
    },
    required: {
      type: Boolean,
    },
    default: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      value: this.default,
      focus: false,
      isShow: false,
      error: false,
    }
  },
  mounted() {
    this.updateFields()
  },
  methods: {
    updateFields() {
      if (this.value.trim() !== '') {
        this.$emit('inputValue', {
          id: this.id,
          value: this.value,
          error: this.error,
        })
      }
    },
    inputHandler(e) {
      const target = e.target
      this.value = target.value

      if (this.type === 'textarea') {
        this.textAreaResize(target)
      }

      this.error = this.validationResult().includes(true)

      this.$emit('inputValue', {
        id: this.id,
        value: this.value,
        error: this.error,
      })
    },
    focusHandler() {
      this.focus = true
    },

    blurHandler() {
      if (!this.value.trim().length) {
        this.focus = false
      }
    },

    togglePass() {
      this.isShow = !this.isShow
    },

    validationResult() {
      if (!this.validation) {
        return [false]
      }
      const options = this.validation.split(' ')

      const validators = options.map(option => {
        const method = option.replace(/[\d(].{0,}/gm, '')
        const param = option.replace(/.{0,}\(|\)/gm, '')
        return { method, param }
      })

      return validators.map(
        v => !validator[v.method](this.value, v.param && v.param)
      )
    },
    throwError() {
      if (this.validationResult().includes(true)) {
        this.focus = true
        this.error = true
        this.$refs.input.focus()
      }
    },
    reset() {
      this.value = ''
      this.error = false
      this.blurHandler()
      this.updateFields()
    },
  },
}
</script>