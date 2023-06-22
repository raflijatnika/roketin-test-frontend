<template>
  <div class="app-base-card" :style="styleAppBaseCard">
    <template v-if="title">
      <AppBaseLabel :text="title" :color="titleColor" fontSize="16" bold class="my-4" />
    </template>
    <template v-else-if="this.$slots.title">
      <slot name="title" class="title" />
    </template>

    <div class="h-100" @click="onCardClick">
      <slot />
      <slot name="body" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppBaseCard',
  props: {
    isUsingTitle: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    borderRadius: {
      type: String,
      default: '8px',
    },
    titleColor: {
      type: String,
      default: '',
    },
    backgroundColor: {
      type: String,
      default: 'white',
    },
  },
  computed: {
    styleAppBaseCard() {
      return {
        'border-radius': this.borderRadius,
        'background-color': this.backgroundColor,
      };
    },
  },
  methods: {
    /**
     * @description Emit card click
     *
     * @return {void} void
     */
    onCardClick: function () {
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" scoped>
.app-base-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 7px 15px 0 rgba(0, 0, 0, 0.06);
  padding: 20px;
}

.title {
  margin-bottom: 20px;
}
</style>
