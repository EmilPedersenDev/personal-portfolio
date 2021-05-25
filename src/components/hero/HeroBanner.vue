<template>
  <div class="e-hero-banner">
    <img
      ref="landingBkg"
      class="background-img projects"
      src="../../assets/space.jpg"
      @load="imgLoaded"
      alt="space"
    />
    <!-- <img class="background-img about" src="../assets/beach.jpg" alt="beach" /> -->
    <div class="landing-wrapper" v-show="isBkgLoaded">
      <h1>Welcome</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "e-hero-banner",
  data() {
    return {
      isBkgLoaded: false,
    };
  },
  methods: {
    imgLoaded(e) {
      this.$refs.landingBkg.classList.add("background-img--active");
      this.isBkgLoaded = true;
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.e-hero-banner {
  .background-img {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: all 0.3s ease;
    z-index: -1;
    &--active {
      opacity: 1;
    }
  }
  .landing-wrapper {
    transition: all 3.3s ease;
    h1 {
      font-size: 72px;
    }
  }
}
</style>