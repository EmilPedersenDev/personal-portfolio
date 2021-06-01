<template>
  <div :class="['hero', showLandingPage && 'mounted']">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <e-about-summary
        :goToProjects="goToProjects"
        :goToAbout="goToAbout"
        :isAboutAnimating="isAboutAnimating"
      ></e-about-summary>
      <e-project-summary
        :isProjectAnimating="isProjectAnimating"
      ></e-project-summary>
      <div class="section" id="summary">
        <div class="summary-wrapper">
          <div class="summary__header">
            <h1>Who am I</h1>
          </div>
          <div class="summary__text">
            <img
              class="summary__gengar"
              src="../../assets/images/gengar.svg"
              alt="gengar"
            />
            <img src="../../assets/images/profil.jpg" alt="profil" />
            <p>
              "I am a developer who thrives on challenging myself and to become
              better than I was yesterday".
            </p>
            <p class="interest">
              "When I'm not coding, It's probably fishing, Pokemon card hunting
              or being out in the wild that takes up my time".
            </p>
            <img
              class="summary__fish"
              src="../../assets/images/fish.png"
              alt="fish"
            />
          </div>

          <div class="summary__mountain">
            <!-- <img src="../../assets/images/mountain.png" alt="" /> -->
          </div>
        </div>
      </div>
    </full-page>
  </div>
</template>

<script>
import ProjectSummary from "../project-summary/ProjectSummary.vue";
import AboutSummary from "../about-summary/AboutSummary.vue";
import { mapMutations } from "vuex";
export default {
  props: {
    showLandingPage: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    "e-about-summary": AboutSummary,
    "e-project-summary": ProjectSummary,
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
      isAboutAnimating: false,
      isProjectAnimating: false,
    };
  },
  watch: {
    showLandingPage(val) {
      if (val) {
        this.options.navigation = true;
        this.isAboutAnimating = true;
      }
    },
  },
  computed: {},
  methods: {
    ...mapMutations({
      setBlackNavbar: "SET_BLACK_NAVBAR",
    }),
    onLeave(origin, destination, direction) {
      this.setBlackNavbar(false);
      this.isAboutAnimating = false;
      this.isProjectAnimating = false;

      if (destination.index === 0) {
        this.isAboutAnimating = true;
      } else if (destination.index === 1) {
        this.setBlackNavbar(true);
        this.isProjectAnimating = true;
      } else {
        this.setBlackNavbar(false);
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
      &#summary {
        .summary-wrapper {
          height: 80%;
          width: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
          .summary__header {
            h1 {
              font-size: 32px;
              position: relative;
              display: flex;
              align-items: center;
              line-height: 1.5;
              letter-spacing: 3px;
              font-weight: 200;

              &::before {
                content: "";
                width: 80px;
                background: #fff;
                height: 1px;
                margin-right: 10px;
              }
            }
          }

          .summary__text {
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
              &.interest {
                display: none;
                @media (min-width: 768px) {
                  display: block;
                }
              }
            }

            img {
              width: 100px;
              height: 100px;
              border-radius: 50%;
            }
            .summary__gengar {
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
            .summary__fish {
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

          .summary__mountain {
            width: 500px;
            height: 200px;
            position: absolute;
            bottom: 0;
            background-image: url(/img/mountain.e0026863.png);
            background-position: -40px 52px;
            background-size: cover;
            background-repeat: no-repeat;
            opacity: 0.5;
            @media (min-width: 768px) {
              opacity: 1;
            }
          }
        }
      }
    }
  }
}
</style>