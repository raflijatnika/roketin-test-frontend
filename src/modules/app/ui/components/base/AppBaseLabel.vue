<template>
  <label :class="renderFontClass" :style="styleLabel" @click="handleOnClick">
    {{ text }}
  </label>
</template>

<script>
export default {
  name: 'AppBaseLabel',
  props: {
    text: { type: [Number, String, Boolean], default: null },
    color: { type: String, default: 'black' },
    fontSize: { type: String, default: '13' },
    bold: { type: Boolean, default: false },
    medium: { type: Boolean, default: false },
    noMargin: { type: Boolean, default: false },
    italic: { type: Boolean, default: false },
    upperCase: { type: Boolean, default: false },
    lowerCase: { type: Boolean, default: false },
    underline: { type: Boolean, default: false },
    isCursor: { type: Boolean, default: false },
  },
  computed: {
    styleLabel() {
      return { 'text-decoration': this.underline ? 'underline' : undefined, cursor: this.isCursor ? 'pointer' : undefined };
    },
    /**
     * @description Render font size
     *
     * @return {object}
     */
    renderFontSize() {
      return {
        [`font-${this.fontSize}`]: true,
      };
    },

    /**
     * @description Render font weight
     *
     * @return {object}
     */
    renderFontWeight() {
      return {
        'font-weight-bold': this.bold,
      };
    },

    /**
     * @description Render font weight
     *
     * @return {object}
     */
    renderFontMedium() {
      return {
        'font-weight-medium': this.medium,
      };
    },

    /**
     * @description Render margin
     *
     * @return {object}
     */
    renderMargin() {
      return {
        'mb-1': !this.noMargin,
      };
    },

    /**
     * @description Render font color
     *
     * @return {object}
     */
    renderFontColor() {
      return {
        [`${this.color}--text`]: true,
      };
    },

    /**
     * @description Render font class
     *
     * @return {object}
     */
    renderFontClass() {
      return {
        ['d-block']: true,
        ['font-italic']: this.italic,
        ['text-uppercase']: this.upperCase,
        ['text-lowercase']: this.lowerCase,
        ...this.renderFontSize,
        ...this.renderFontWeight,
        ...this.renderFontMedium,
        ...this.renderMargin,
        ...this.renderFontColor,
      };
    },
  },
  methods: {
    /**
     * @description Handle on click in label
     *
     * @return {void}
     */
    handleOnClick: function () {
      this.$emit('click');
    },
  },
};
</script>
