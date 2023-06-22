<template>
  <v-app class="app-main">
    <v-container>
      <slot />
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'AppLayoutsPublic',
};
</script>

<style lang="scss" scoped>
.app-main {
  background-color: #e1e1ed;
}
</style>
