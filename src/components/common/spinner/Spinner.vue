<template>
  <div class="e-spinner">
    <div class="e-spinner__wrapper">
      <div
        class="e-spinner__particles"
        v-for="(item, i) in numOfParticlesToShow"
        :key="i"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "e-spinner",
  data() {
    return {
      deviceWidth: 0,
    };
  },
  mounted() {
    this.deviceWidth = window.innerWidth;

    window.addEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      this.deviceWidth = window.innerWidth;
    },
  },
  computed: {
    numOfParticlesToShow() {
      if (this.deviceWidth > 768) return 9;
      return 5;
    },
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>

<style lang="scss" scoped>
$particle-padding: 1.5rem;
$animation-duration: 2s;
.e-spinner {
  display: grid;
  width: 100%;
  height: 100vh;
  place-content: center;
  background: $loading-background;
  &::before {
    content: "";
    grid-column: 1;
    grid-row: 1;
    transform: scale(0.7);
    @include rw-respond-above(m) {
      transform: scale(0.8);
    }
    background: linear-gradient(90deg, #7232f2, #c876ff, #20115b);
  }
  .e-spinner__wrapper {
    grid-column: 1;
    grid-row: 1;
    display: flex;
    align-items: center;
    padding: 6em;
    background: inherit;
    filter: blur(0.5625rem) contrast(18);
    mix-blend-mode: multiply;
    .e-spinner__particles {
      width: 0;
      padding: $particle-padding;
      border-radius: 50%;
      background: #fff;
      &:first-child,
      &:last-child {
        padding: 0.5 * $particle-padding;
      }
      &:nth-child(odd) {
        animation: pulse $animation-duration ease-in-out $animation-duration
          infinite;
      }
      &:nth-child(2n) {
        transform: rotate(0deg) translate(2 * $particle-padding);
        animation: spin $animation-duration linear infinite;
      }
      &:nth-child(4n) {
        animation-direction: reverse;
        animation-duration: calc(1.2 * #{$animation-duration});
      }
    }
  }
}

@keyframes pulse {
  50% {
    transform: scale(1.8);
  }
  70% {
    transform: scale(0.6);
  }
}

@keyframes spin {
  to {
    transform: rotate(1turn) translate(2 * $particle-padding);
  }
}
</style>