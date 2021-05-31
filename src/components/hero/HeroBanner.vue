<template>
  <div :class="['hero', showLandingPage && 'mounted']">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section" id="about" data-anchor="section1">
        <div class="twinkling-stars"></div>
        <div class="section-info">
          <h2>Hello There!</h2>
          <h2>I'm</h2>
          <e-distortion text="EMIL"></e-distortion>
          <h2 class="section-info__job-title">[&nbsp;Web Developer&nbsp;]</h2>
          <div class="section-info__lines"></div>
        </div>
        <div class="section-links">
          <div class="section-links__cta" @click="goToProjects">
            <p>Projects</p>
            <img src="../../assets/icons/arrow-down.svg" alt="arrow down" />
          </div>
          <div class="section-links__cta" @click="goToAbout">
            <p>About</p>
            <img src="../../assets/icons/arrow-down.svg" alt="arrow down" />
          </div>
        </div>
      </div>
      <div class="section" id="projects"><h1>Projects</h1></div>
      <div class="section" id="resume"><h1>Resume</h1></div>
    </full-page>
  </div>
</template>

<script>
import Distortion from "../distortion/Distortion.vue";
export default {
  props: {
    showLandingPage: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    "e-distortion": Distortion,
  },
  data() {
    return {
      options: {
        licenseKey: "YOUR_KEY_HEERE",
        menu: "#menu",
        navigation: false,
        sectionsColor: ["#000", "#b9b9b9", "#121212"],
        controlArrows: true,
        scrollBar: false,
        scrollingSpeed: 1200,
        onLeave: this.onLeave,
        afterLoad: this.afterLoad,
        verticalCentered: false,
      },
    };
  },
  watch: {
    showLandingPage(val) {
      if (val) {
        this.options.navigation = true;
      }
    },
  },
  methods: {
    onLeave(origin, destination, direction) {
      const section = destination.item;
      let tl = new TimelineMax({ delay: 0.8 });

      if (destination.index === 0) {
        const sectionInfo = section.querySelector(".section-info");
        tl.fromTo(
          sectionInfo,
          0.7,
          { x: "-20%", y: "-10%", opacity: 0 },
          { x: "-20%", y: "-40%", opacity: 1 }
        );
        console.log(about);
      } else {
        const title = section.querySelector("h1");
        tl.fromTo(
          title,
          0.7,
          { x: 0, y: 0, opacity: 0 },
          { x: 0, y: 0, opacity: 1 }
        );
      }
    },
    afterLoad() {
      console.log("loaded");
    },
    goToProjects() {
      this.$refs.fullpage.api.moveTo(2);
    },
    goToAbout() {
      this.$refs.fullpage.api.moveTo(3);
    },
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
  opacity: 0;
  visibility: hidden;
  transition: opacity 2.3s ease;
  &.mounted {
    opacity: 1;
    visibility: visible;
  }
  #fullpage {
    .section {
      position: relative;

      &#about {
        background: $main-background
          url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png)
          repeat;
        .section-info {
          position: absolute;
          top: 40%;
          left: 20%;
          transform: translate(-20%, -40%);

          h1 {
            font-size: 120px;
            margin: 0;
            line-height: 1;
          }
          p {
            padding-bottom: 20px;
          }

          h2 {
            &:first-child {
              font-size: 30px;
              margin-bottom: 10px;
              transform: translateX(-30px);
            }
            &:nth-child(2) {
              padding: 0px 5px;
            }
            &.section-info__job-title {
              padding: 10px 0px;
              text-align: right;
            }
          }
        }

        .section-links {
          position: absolute;
          top: 90%;
          left: 50%;
          transform: translate(-50%, -90%);
          display: flex;
          justify-content: space-between;
          width: 150px;
          @media (min-width: 576px) {
            left: 90%;
            transform: translate(-90%, -90%);
          }
          .section-links__cta {
            text-align: center;
            p {
              transition: all 0.3s ease;
              margin-bottom: 10px;
            }
            img {
              animation: bounceUpDown 2s infinite;
              width: 20px;
              height: 20px;
            }
            &:hover {
              cursor: pointer;
              p {
                transform: scale(1.2);
              }
            }
          }
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

      &#projects,
      &#resume {
        h1 {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%) !important;
        }
      }
    }
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