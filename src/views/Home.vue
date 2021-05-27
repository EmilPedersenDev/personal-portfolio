<template>
  <div class="home">
    <e-spinner v-if="isLoading"></e-spinner>
    <e-slider ref="slider" v-show="!isLoading" :isActive="isSliding"></e-slider>
    <transition name="slide-fade">
      <div class="container" v-show="!isLoading && showLandingPage">
        <e-hero-banner></e-hero-banner>
      </div>
    </transition>
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
    document.addEventListener("scroll", (e) => {
      console.log(e, "sdfs");
    });
    setTimeout(() => {
      this.isLoading = false;
      this.activateSlider();
    }, 2000);
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
    transition: all 1.3s ease;
  }
}

.slide-fade-enter-active {
  // transition: all 2.8s ease;
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(300px);
  opacity: 0;
}
</style>
