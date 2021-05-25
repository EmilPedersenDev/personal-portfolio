<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
  components: {},
});
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  width: 100%;
}
</style>
