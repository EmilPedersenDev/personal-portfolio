<template>
  <div class="hero">
    <div ref="slides" class="slides">
      <div
        ref="slideHome"
        class="slide slide__home active"
        data-index="0"
      ></div>
      <div ref="slideAbout" class="slide slide__about" data-index="1"></div>
    </div>
    <div ref="slideAction" class="slide-action">
      <div class="slide-circle active" @click="setImageIndex(0)"></div>
      <div class="slide-circle" @click="setImageIndex(1)"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "e-hero-banner",
  data() {
    return {
      currentIndex: 0,
      scrollTop: 0,
      allSlides: undefined,
      isSliderIdle: true,
      timer: undefined,
    };
  },

  created() {
    window.addEventListener("wheel", this.scrollDetector);
  },

  mounted() {
    this.allSlides = [...this.$refs.slides.children];

    // this.startInterval();

    this.allSlides.forEach((slide) => {
      slide.addEventListener("transitionstart", () => {
        this.isSliderIdle = false;
        this.cancelInterval();
      });
      slide.addEventListener("transitionend", () => {
        this.isSliderIdle = true;
        this.startInterval();
      });
    });
  },

  methods: {
    previous() {
      if (this.currentIndex === 0) {
        this.currentIndex = this.numberOfSlides - 1;
      } else {
        --this.currentIndex;
      }
      this.setImageIndex();
    },

    next() {
      if (this.currentIndex === this.numberOfSlides - 1) {
        this.currentIndex = 0;
      } else {
        ++this.currentIndex;
      }
      this.setImageIndex();
    },

    setImageIndex(elIndex) {
      this.currentIndex =
        typeof elIndex !== "undefined" ? elIndex : this.currentIndex;

      let allSlideActions = this.$refs.slideAction.children;

      [...allSlideActions].map((el, i) => {
        if (this.currentIndex === i) {
          el.classList.add("active");
          return;
        }
        el.classList.remove("active");
      });
      this.imageToShow();
    },

    scrollDetector(e) {
      if (!this.isSliderIdle) return;
      if (e.deltaY > 0) {
        this.previous();
      } else {
        this.next();
      }
    },

    imageToShow() {
      [...this.allSlides].map((slide) => {
        let slideIndex = slide?.dataset?.index;
        if (parseInt(slideIndex) === this.currentIndex) {
          slide.classList.add("active");
          return;
        }
        slide.classList.remove("active");
      });
    },

    startInterval() {
      this.cancelInterval();
      this.timer = setInterval(() => {
        this.next();
      }, 5000);
    },

    cancelInterval() {
      clearInterval(this.timer);
    },
  },

  computed: {
    numberOfSlides() {
      return this.$refs.slides.childElementCount;
    },
  },

  beforeDestroy() {
    window.removeEventListener("wheel", this.scrollDetector);

    this.allSlides.forEach((slide) => {
      slide.removeEventListener("transitionstart", (e) => {
        this.isSliderIdle = false;
      });
      slide.removeEventListener("transitionend", (e) => {
        this.isSliderIdle = true;
      });
    });

    this.cancelInterval();
  },
};
</script>

<style lang="scss" scoped>
@mixin background-style {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.hero {
  @include fullHeightAndWidth;
  position: relative;
  .slides {
    @include fullHeightAndWidth;
    display: flex;
    .slide {
      @include fullHeightAndWidth;
      @include background-style;
      flex: 0 0 0%;
      transition: all 1.3s ease;
      opacity: 0;
      visibility: hidden;
      &.active {
        @include fullHeightAndWidth;
        flex: 1 1 100%;
        opacity: 1;
        visibility: visible;
      }

      &.slide__home {
        background-image: url("../../assets/images/beach.jpg");
      }
      &.slide__about {
        background-image: url("../../assets/images/space.jpg");
      }
    }
  }
  .slide-action {
    position: absolute;
    left: 95%;
    bottom: 50%;
    transform: translateY(-50%);
    .slide-circle {
      background-color: #000;
      border-radius: 50%;
      height: 7px;
      width: 7px;
      transition: all 0.3s ease;
      &:not(:last-child) {
        margin-bottom: 20px;
      }
      &:hover {
        transform: scale(1.5);
        cursor: pointer;
      }
      &.active {
        transform: scale(1.8);
        background: #aaa;
      }
    }
  }
}
</style>