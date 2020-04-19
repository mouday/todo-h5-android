<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("loadList");
  }
};
</script>  

<style lang="scss">
</style>
