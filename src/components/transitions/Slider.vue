<template>
  <div class="e-slider">
    <div :class="classList"></div>
    <div :class="classList" id="second"></div>
    <div :class="classList" id="third"></div>
  </div>
</template>

<script>
export default {
  name: "e-slider",
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  methods: {},
  computed: {
    classList() {
      console.log(this.isActive);
      const rootClass = "e-slider__page";
      return [rootClass, this.isActive && `${rootClass}--is-active`];
    },
  },
};
</script>

<style lang="scss" scoped>
.e-slider {
  // height: 100%;
  // width: 100%;
  // position: relative;
  overflow-x: hidden;
  .e-slider__page {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 100%;
    background: #c876ff;
    transition: all 0.9s cubic-bezier(0.645, 0.045, 0.355, 1);

    &--is-active {
      left: -100%;
    }

    &#second {
      background: #7232f2;
      transition-delay: 0.2s;
    }
    &#third {
      background: #20115b;
      transition-delay: 0.3s;
    }
  }
}
</style>