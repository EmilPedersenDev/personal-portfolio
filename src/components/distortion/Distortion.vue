<template>
  <div class="wrapper">
    <h1
      :class="['glitch', isDistortionAnimating && 'animate']"
      :data-text="text"
    >
      {{ text }}
    </h1>
  </div>
</template>

<script>
export default {
  name: "e-distortion",
  props: {
    text: {
      type: String,
      default: "",
    },
    isDistortionAnimating: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .glitch {
    color: white;
    font-family: sans-serif;
    font-weight: 800;
    position: relative;
    font-size: 80px;
    @media (min-width: 768px) {
      font-size: 100px;
    }
    padding: 0px;
    transition: transform $animation-duration ease $animation-third-item-delay,
      opacity $animation-duration ease-in $animation-third-item-delay,
      visibility $animation-short-duration ease-in $animation-third-item-delay;
    transform: translateY(400px);
    opacity: 0;
    visibility: hidden;
    &.animate {
      transform: translateY(0px);
      opacity: 1;
      visibility: visible;
    }
  }

  .glitch::before,
  .glitch::after {
    padding: 0px;
    color: white;
    content: attr(data-text);
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000;
    overflow: hidden;
    top: 0;
  }

  .glitch::before {
    left: 3px;
    text-shadow: -2px 0 red;
    animation-name: glitch-animation-1;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: reverse-alternate;
  }

  .glitch::after {
    left: -3px;
    text-shadow: -2px 0 blue;
    animation-name: glitch-animation-2;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: reverse-alternate;
  }
}

@keyframes glitch-animation-1 {
  $steps: 20;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      clip: rect(random(150) + px, 350px, random(150) + px, 0px);
    }
  }
}

@keyframes glitch-animation-2 {
  $steps: 20;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      clip: rect(random(150) + px, 350px, random(150) + px, 0px);
    }
  }
}
</style>