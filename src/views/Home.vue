<template>
  <div class="home">
    <e-spinner v-if="isLoading && fullPageRefresh"></e-spinner>
    <e-slider
      ref="slider"
      v-show="!isLoading && fullPageRefresh"
      :isActive="isSliding"
      v-on:loaded="showLandingPage = true"
    ></e-slider>
    <div class="container">
      <e-home-fullpage :showLandingPage="showLandingPage"></e-home-fullpage>
    </div>
  </div>
</template>

<script>
import HomeFullpage from "../components/hero/HomeFullpage.vue";
export default {
  name: "Home",
  components: {
    "e-home-fullpage": HomeFullpage,
  },
  beforeRouteEnter(to, from, next) {
    if (from.path !== "/") {
      next((vm) => vm.setIsFullpageRefresh(false));
    } else {
      next((vm) => vm.setIsFullpageRefresh(true));
    }
  },
  data() {
    return {
      isLoading: true,
      isSliding: false,
      showLandingPage: false,
      fullPageRefresh: false,
    };
  },
  mounted() {
    if (!this.fullPageRefresh) {
      this.isLoading = false;
      this.showLandingPage = true;
      return;
    }
    setTimeout(() => {
      this.isLoading = false;
      this.activateSlider();
    }, 1000);
  },
  methods: {
    activateSlider() {
      setTimeout(() => {
        this.isSliding = true;
      }, 200);
    },
    setIsFullpageRefresh(bool) {
      this.fullPageRefresh = bool;
    },
  },
};
</script>

