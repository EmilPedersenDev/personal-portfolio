<template>
  <div class="section" id="landing" data-anchor="section1">
    <div class="twinkling-stars"></div>
    <div :class="['section-info', isLandingAnimating && 'animate']">
      <h2>Hello There!</h2>
      <h2>I'm</h2>
      <e-distortion
        text="EMIL"
        :isDistortionAnimating="isLandingAnimating"
      ></e-distortion>
      <h2>[Web Developer]</h2>
    </div>
    <div class="section-link" @click="goToPage(2)">
      <img src="../../assets/icons/arrow-down.svg" alt="arrow down" />
    </div>
  </div>
</template>

<script>
import Distortion from "../distortion/Distortion.vue";
export default {
  name: "e-landing",
  components: {
    "e-distortion": Distortion,
  },
  props: {
    goToPage: {
      type: Function,
    },
    isLandingAnimating: {
      tupe: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
#landing {
  background: $main-background
    url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png) repeat;
  .section-info {
    position: absolute;
    top: 40%;
    left: 20%;
    transform: translate(-20%, -40%);

    p {
      padding-bottom: 20px;
    }

    h2 {
      letter-spacing: 3px;
      font-weight: 200;
      &:first-child {
        font-size: 30px;
        margin-bottom: 10px;
        transition: transform $animation-duration ease $animation-delay,
          opacity $animation-duration ease-in $animation-delay,
          visibility $animation-short-duration ease-in $animation-delay;
        transform: translate(-30px, 400px);
        opacity: 0;
        visibility: hidden;
      }
      &:nth-child(2) {
        padding: 0px 5px;
        transition: transform $animation-duration ease
            $animation-second-item-delay,
          opacity $animation-duration ease-in $animation-second-item-delay,
          visibility $animation-short-duration ease-in
            $animation-second-item-delay;
        transform: translateY(400px);
        opacity: 0;
        visibility: hidden;
      }
      &:last-child {
        padding: 10px 0px;
        transition: transform $animation-duration ease
            $animation-fourth-item-delay,
          opacity $animation-duration ease-in $animation-fourth-item-delay,
          visibility $animation-short-duration ease-in
            $animation-fourth-item-delay;
        text-align: right;
        transform: translateY(400px);
        opacity: 0;
        visibility: hidden;
      }
    }

    &.animate {
      h2 {
        &:first-child {
          transform: translate(-30px, 0px);
          opacity: 1;
          visibility: visible;
        }
        &:nth-child(2) {
          padding: 0px 5px;
          transform: translateY(0px);
          opacity: 1;
          visibility: visible;
        }
        &:last-child {
          transform: translateY(0px);
          opacity: 1;
          visibility: visible;
        }
      }
    }
  }

  .section-link {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    img {
      height: 30px;
      width: 30px;
      animation: bounceUpDown 2s infinite;
    }
  }

  .section-about-me {
    position: absolute;
    left: 80%;
    top: 20%;
    transform: translate(-80%, -20%);
  }

  .twinkling-stars {
    width: 10000px;
    height: 100%;
    position: absolute;
    right: 0;
    left: -9000px;
    bottom: 0;
    background: transparent
      url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/twinkling.png")
      repeat;
    background-size: 1000px 1000px;
    animation: stars 50s linear infinite;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 10px;
    background: $gray-main-background;
    background-image: linear-gradient(
      to bottom,
      rgba(185, 185, 185, 0) 0% rgba(185, 185, 185, 1) 100%
    );
    box-shadow: 0px 0px 15px 10px $gray-main-background,
      0px 0px 15px 10px $gray-main-background;
  }
}

@keyframes stars {
  from {
    transform: translate3d(0px, 0px, 0px);
  }
  to {
    transform: translate3d(1000px, 0px, 0px);
  }
}

@keyframes bounceUpDown {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(10px);
  }

  100% {
    transform: translateY(0px);
  }
}
</style>