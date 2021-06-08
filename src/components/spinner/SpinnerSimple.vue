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
  width: 15px;
  height: 15px;
  border: 1px solid #fff;
  border-right: none;
  border-bottom: none;
  border-radius: 50%;
  animation: rotate 1s linear infinite;
  margin-left: 5px;
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