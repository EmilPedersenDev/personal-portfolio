<template>
  <div class="observer"></div>
</template>

<script>
export default {
  name: "e-observer",
  props: {
    isDisconnected: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      observer: null,
    };
  },
  watch: {
    isDisconnected(val) {
      if (!val) return;
      this.disconnect();
    },
  },
  mounted() {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.$emit("intersecting");
      }
    });

    this.observer.observe(this.$el);
  },
  methods: {
    disconnect() {
      this.observer.disconnect();
    },
  },
};
</script>

<style lang="scss" scoped>
.observer {
  height: 100px;
  width: 100%;
}
</style>