<template>
  <div class="section" id="about">
    <div class="about-wrapper">
      <div :class="['about__header', isAboutAnimating && 'animate']">
        <span></span>
        <h1>Who am I</h1>
      </div>
      <div class="about__text">
        <img
          class="about__gengar"
          src="../../assets/images/gengar.svg"
          alt="gengar"
        />
        <img src="../../assets/images/profil.jpg" alt="profil" />
        <p :class="{ animate: isAboutAnimating }">
          "I am a developer who thrives on challenging myself and to become
          better than I was yesterday".
        </p>
        <p :class="{ animate: isAboutAnimating }">
          "When I'm not coding, It's probably fishing, Pokemon card hunting or
          being out in the wild that takes up my time".
        </p>
        <img
          class="about__fish"
          src="../../assets/images/fish.png"
          alt="fish"
        />
      </div>

      <div class="about__back-to-top" @click="goToPage(1)">
        <img src="../../assets/icons/arrow-down.svg" alt="back to top" />
        <p>Back to top</p>
      </div>

      <div class="about__mountain"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "e-about",
  props: {
    isAboutAnimating: {
      type: Boolean,
      default: false,
    },
    goToPage: {
      type: Function,
    },
  },
};
</script>

<style lang="scss" scoped>
#about {
  .about-wrapper {
    height: 80%;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    .about__header {
      display: flex;
      align-items: center;
      &.animate {
        span {
          transform: translateX(0px);
        }
        h1 {
          transform: translateX(0px);
        }
      }

      span {
        width: 50px;
        background: #fff;
        height: 1px;
        transition: transform $animation-duration ease
          $animation-second-item-delay;
        transform: translateX(-500px);
        margin-right: 10px;
      }
      h1 {
        font-size: 32px;
        position: relative;
        line-height: 1.5;
        letter-spacing: 3px;
        font-weight: 200;
        transition: transform $animation-duration ease $animation-delay;
        transform: translateX(-300px);
      }
    }

    .about__text {
      position: absolute;
      @media (min-width: 768px) {
        top: 40%;
        left: 60%;
        transform: translate(-60%, -40%);
      }
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 80%;
      max-width: 300px;
      text-align: center;
      p {
        margin-top: 30px;
        line-height: 1.5;
        letter-spacing: 2px;
        &:first-of-type {
          transition: transform $animation-duration ease $animation-delay,
            opacity $animation-duration ease-in $animation-delay,
            visibility $animation-short-duration ease-in $animation-delay;
          transform: translateY(300px);
          opacity: 0;
          visibility: hidden;
        }
        &:last-of-type {
          display: none;
          @media (min-width: 768px) {
            display: block;
            transition: transform $animation-duration ease
                $animation-second-item-delay,
              opacity $animation-duration ease-in $animation-second-item-delay,
              visibility $animation-short-duration ease-in
                $animation-second-item-delay;
            transform: translateY(300px);
            opacity: 0;
            visibility: hidden;
          }
        }
        &.animate {
          transform: translateX(0px);
          opacity: 1;
          visibility: visible;
        }
      }

      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
      .about__gengar {
        position: absolute;
        bottom: 50%;
        right: 50%;
        width: 200px;
        height: 200px;
        transform: translate(50%, 50%);
        opacity: 0.03;
        @media (min-width: 768px) {
          bottom: -80%;
          right: -100%;
          transform: translate(-100%, -80%);
        }
      }
      .about__fish {
        position: absolute;
        top: -20%;
        left: -30%;
        width: 300px;
        height: 300px;
        transform: translate(-30%, -20%);
        opacity: 0.05;
        display: none;
        @media (min-width: 768px) {
          display: inline;
        }
      }
    }

    .about__mountain {
      width: 500px;
      height: 200px;
      position: absolute;
      bottom: 0;
      background-image: url("../../assets/images/mountain.png");
      background-position: -40px 52px;
      background-size: cover;
      background-repeat: no-repeat;
      opacity: 0.5;
      @media (min-width: 768px) {
        opacity: 1;
      }
    }

    .about__back-to-top {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      position: absolute;
      cursor: pointer;
      @media (max-width: 768px) {
        left: 50%;
        bottom: 5%;
        right: auto;
        transform: translateX(-50%);
        background: $main-background;
        opacity: 0.9;
        border-radius: 5px;
        padding: 10px;
        z-index: 100;
        img {
          display: none;
        }
        p {
          margin: 0 !important;
          text-decoration: underline;
        }
      }
      right: 5%;
      bottom: 5%;
      img {
        height: 20px;
        width: 20px;
        flex-basis: 100%;
        transform: rotate(180deg);
        animation: bounceUpDown 2s infinite;
      }
      p {
        margin-top: 12px;
        font-size: 12px;
        letter-spacing: 2px;
      }
    }
  }
}
@keyframes bounceUpDown {
  0% {
    transform: translateY(0px) rotate(180deg);
  }
  50% {
    transform: translateY(10px) rotate(180deg);
  }

  100% {
    transform: translateY(0px) rotate(180deg);
  }
}
</style>