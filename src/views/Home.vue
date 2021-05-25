<template>
  <div class="home">
    <e-spinner v-if="isLoading"></e-spinner>
    <e-slider ref="slider" v-show="!isLoading" :isActive="isSliding"></e-slider>
    <div class="container" v-if="!isLoading && showLandingPage">
      <div class="container">
        <e-hero-banner />
      </div>
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
    this.$refs.slider.$el.children[2].addEventListener("transitionend", (e) => {
      this.showLandingPage = true;
    });
    setTimeout(() => {
      this.isLoading = false;
      this.activateSlider();
    }, 500);
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
  height: 100vh;
  width: 100%;
  position: relative;
  overflow-x: hidden;
  .container {
    width: inherit;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
