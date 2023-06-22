<template>
  <div></div>
</template>

<script>
export default {
  name: 'AppEntryPoint',
  mounted() {
    this.$router.replace({ name: 'DashboardIndex' }).catch(() => {
      //
    });
  },
};
</script>
