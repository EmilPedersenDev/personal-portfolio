<template>
  <div class="e-error">
    <p>{{ error.message }}</p>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    error: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.e-error {
  p {
    font-size: 12px;
    color: $error-bright;
    margin-bottom: 10px;
    text-align: center;
  }
}
</style>