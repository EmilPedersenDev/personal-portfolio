<template>
  <div :class="['success', isActive && 'animate']">
    <img src="../../assets/icons/ok.svg" alt="check mark" />
    <h1>Message Sent!</h1>
  </div>
</template>

<script>
export default {
  name: "e-success",
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.success {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 30px 0px 50px;
  opacity: 0;
  visibility: hidden;
  transition: all $animation-short-duration ease;
  &.animate {
    opacity: 1;
    visibility: visible;
  }

  img {
    width: 80px;
    height: auto;
  }

  h1 {
    margin-top: 20px;
    letter-spacing: 2px;
    font-weight: 200;
  }
}
</style>