<template>
  <div class="e-spinner-simple"></div>
</template>

<script>
export default {
  name: "e-spinner-simple",
};
</script>

<style lang="scss" scoped>
.e-spinner-simple {
  width: 0.9375rem;
  height: 0.9375rem;
  border: 0.0625rem solid #fff;
  border-right: none;
  border-bottom: none;
  border-radius: 50%;
  animation: rotate 1s linear infinite;
  margin-left: 0.3125rem;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>