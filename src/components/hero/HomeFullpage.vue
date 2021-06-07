<template>
  <div :class="['hero', showLandingPage && 'mounted']">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <e-landing
        :goToProjects="goToProjects"
        :goToAbout="goToAbout"
        :isLandingAnimating="isLandingAnimating"
      ></e-landing>
      <e-project-summary
        :isProjectAnimating="isProjectAnimating"
      ></e-project-summary>
      <e-about
        :isAboutAnimating="isAboutAnimating"
        :goToLanding="goToLanding"
      ></e-about>
      <e-contact
        :isContactAnimating="isContactAnimating"
        :goToLanding="goToLanding"
      ></e-contact>
    </full-page>
  </div>
</template>

<script>
import ProjectSummary from "../project-summary/ProjectSummary.vue";
import Landing from "../landing/Landing.vue";
import About from "../about/About.vue";
import Contact from "../contact/Contact.vue";
import { mapMutations, mapGetters } from "vuex";
export default {
  props: {
    showLandingPage: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    "e-landing": Landing,
    "e-project-summary": ProjectSummary,
    "e-about": About,
    "e-contact": Contact,
  },
  data() {
    return {
      options: {
        licenseKey: "YOUR_KEY_HEERE",
        menu: "#menu",
        navigation: false,
        sectionsColor: ["#000", "#b9b9b9", "#121212", "#b9b9b9"],
        controlArrows: true,
        scrollBar: false,
        scrollingSpeed: 1200,
        onLeave: this.onLeave,
        afterLoad: this.afterLoad,
        verticalCentered: false,
        afterRender: this.afterRender,
      },
      isLandingAnimating: false,
      isProjectAnimating: false,
      isAboutAnimating: false,
      isContactAnimating: false,
      asideNav: undefined,
    };
  },
  watch: {
    showLandingPage(val) {
      if (val) {
        this.options.navigation = true;
        this.isLandingAnimating = true;
      }
    },
    isBlackNavbar(isBlack) {
      if (!isBlack) {
        this.asideNav.classList.add("white");
        return;
      }
      this.asideNav.classList.remove("white");
    },
  },
  computed: {
    ...mapGetters({
      isBlackNavbar: "IS_BLACK_NAVBAR",
    }),
  },
  methods: {
    ...mapMutations({
      setBlackNavbar: "SET_BLACK_NAVBAR",
      setFullpageLoaded: "SET_FULLPAGE_LOADED",
    }),
    onLeave(origin, destination, direction) {
      this.setBlackNavbar(false);
      this.isLandingAnimating = false;
      this.isProjectAnimating = false;
      this.isAboutAnimating = false;
      this.isContactAnimating = false;

      if (destination.index === 0) {
        this.isLandingAnimating = true;
      } else if (destination.index === 1) {
        this.setBlackNavbar(true);
        this.isProjectAnimating = true;
      } else if (destination.index === 2) {
        this.isAboutAnimating = true;
        this.setBlackNavbar(false);
      } else {
        this.isContactAnimating = true;
        this.setBlackNavbar(true);
      }
    },
    afterRender() {
      this.asideNav = document.getElementById("fp-nav");
      if (!this.asideNav) return;
      this.asideNav.classList.add("white");
    },
    afterLoad() {
      // console.log("loaded");
    },
    goToProjects() {
      this.$refs.fullpage.api.moveTo(2);
    },
    goToAbout() {
      this.$refs.fullpage.api.moveTo(3);
    },
    goToLanding() {
      this.$refs.fullpage.api.moveTo(1);
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
    }
  }
}
</style>