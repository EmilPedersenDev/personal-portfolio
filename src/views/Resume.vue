<template>
  <div class="resume">
    <div class="resume-wrapper">
      <h1>Resume</h1>
      <a href="cv.pdf" download="cv.pdf">
        <e-button
          @click.native.stop
          btnText="Download"
          minWidth="150"
        ></e-button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Resume",
};
</script>

<style lang="scss" scoped>
.resume {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .resume-wrapper {
    h1 {
      letter-spacing: 2px;
      font-weight: 200;
      font-size: 45px;
      text-align: center;
      margin-bottom: 30px;
    }
  }
}
</style>