<template>
  <svg :class="[iconSizeClass, iconTestClass]" aria-hidden="true" v-on="$listeners">
    <use v-bind="{ 'xlink:href': spriteHref }" />
  </svg>
</template>
<script>
import iconsPath from '@gitlab/svgs/dist/icons.svg';

// only allow classes in images.scss e.g. s12
const validSizes = [8, 10, 12, 14, 16, 18, 24, 32, 48, 72];
let iconValidator = () => true;


/** This is a re-usable vue component for rendering a svg sprite icon
 *  @example
 *  <icon
 *    name="retry"
 *    :size="32"
 *    class="top"
 *  />
 */
export default {
  props: {
    name: {
      type: String,
      required: true,
      validator: iconValidator,
    },

    size: {
      type: Number,
      required: false,
      default: 16,
      validator: value => validSizes.includes(value),
    },
  },

  computed: {
    spriteHref() {
      return `${iconsPath}#${this.name}`;
    },
    iconTestClass() {
      return `ic-${this.name}`;
    },
    iconSizeClass() {
      return this.size ? `s${this.size}` : '';
    },
  },
};
</script>