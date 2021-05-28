<template>
  <div class="home">
    <e-spinner v-if="isLoading"></e-spinner>
    <e-slider
      ref="slider"
      v-show="!isLoading"
      :isActive="isSliding"
      v-on:loaded="showLandingPage = true"
    ></e-slider>
    <div class="container">
      <e-hero-banner :showLandingPage="showLandingPage"></e-hero-banner>
    </div>
  </div>
</template>

<script>
import HeroBanner from "../components/hero/HeroBanner.vue";
export default {
  name: "Home",
  components: {
    "e-hero-banner": HeroBanner,
  },
  data() {
    return {
      isLoading: true,
      isSliding: false,
      showLandingPage: false,
    };
  },
  mounted() {
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
  },
};
</script>
<style lang="scss">
.home {
  // height: 100vh;
  // width: 100%;
  // position: relative;
  // overflow-x: hidden;
  .container {
    // width: inherit;
    // height: inherit;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // transition: all 1.3s ease;
    // overflow-y: hidden;
  }
}
</style>
