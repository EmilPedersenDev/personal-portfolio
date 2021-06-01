<template>
  <div id="app">
    <e-navigation />
    <router-view />
  </div>
</template>


<script>
import Navigation from "./components/navigation/Navigation.vue";
export default {
  components: {
    "e-navigation": Navigation,
  },
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}

#fp-nav {
  span {
    background: #000;
  }
  &.white {
    span {
      background: #fff;
    }
  }
}
</style>
