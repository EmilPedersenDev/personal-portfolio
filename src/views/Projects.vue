<template>
  <div class="e-container projects">
    <div class="e-wrapper">
      <div class="showcase-projects">
        <h1>Projects</h1>
        <div
          :ref="'projectCard-' + i"
          class="showcase-projects__card"
          v-for="(project, i) in renderedProjects"
          :key="i"
          :id="'project-' + i"
        >
          <div class="showcase-projects__wrapper">
            <h3>{{ project.name }}</h3>
            <p>"{{ project.description }}"</p>
            <div class="showcase-projects__link">
              <a :href="project.url" target="_blank">Visit site</a>
            </div>
          </div>
        </div>
        <e-observer
          :isDisconnected="isDisconnected"
          v-on:intersecting="loadProject"
        ></e-observer>
      </div>
    </div>
  </div>
</template>

<script>
import allProjects from "../services/models/projects.js";
import Observer from "../components/observer/Observer.vue";
import { mapMutations } from "vuex";

export default {
  components: {
    "e-observer": Observer,
  },
  data() {
    return {
      projects: allProjects,
      renderedProjects: [],
      currentIndex: 4,
      numberOfProjects: 7,
      isDisconnected: false,
    };
  },
  mounted() {
    this.setBlackNavbar(false);
    this.renderedProjects = this.projects.filter((project) => project.id < 5);
  },
  methods: {
    ...mapMutations({
      setBlackNavbar: "SET_BLACK_NAVBAR",
    }),
    loadProject() {
      if (this.currentIndex === this.numberOfProjects) {
        this.isDisconnected = true;
        return;
      }
      let project = this.projects.find((item, i) => {
        if (this.currentIndex === i) {
          return item;
        }
      });

      this.renderedProjects = [...this.renderedProjects, project];

      this.$nextTick(() => {
        this.$refs["projectCard-" + this.currentIndex][0].classList.add(
          "animate"
        );
        this.currentIndex++;
      });
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.e-wrapper {
  .showcase-projects {
    width: 100%;
    h1 {
      margin: 0 auto 50px;
      width: 100%;
      max-width: 600px;
      font-weight: 200;
      letter-spacing: 3px;
    }
    .showcase-projects__card {
      position: relative;
      width: 100%;
      @media (min-width: 768px) {
        height: 200px;
      }
      height: 250px;

      max-width: 600px;
      background-color: #2d3436;
      background-image: linear-gradient(315deg, #2d3436 0%, #1f1f1f 74%);
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
        0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
        0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
      border-left: 5px solid #7232f2;
      margin: 0 auto 25px;
      padding: 0 0 0 10px;
      overflow: hidden;
      &::after {
        animation: slideFromRight 1s ease;
        content: "";
        position: absolute;
        width: 0%;
        height: 100%;
        background: #7232f2;
        z-index: 2;
        top: 0;
        left: 0;
      }

      &:last-child {
        margin: 0 auto;
      }
      .showcase-projects__wrapper {
        position: relative;
        height: 100%;
        width: 100%;
        position: relative;
        animation: expand 1s ease 1s, fadeIn 2s ease;

        h3,
        p,
        .showcase-projects__link {
          display: flex;
          align-items: center;
        }

        .showcase-projects__link {
          position: absolute;
          bottom: 8%;
          right: 4%;
          transform: translate(-4%, -8%);
          a {
            font-size: 12px;
            position: relative;
            &::before {
              transition: all 0.3s ease-in-out;
              position: absolute;
              bottom: 0;
              left: 0;
              content: "";
              background: #fff;
              width: 0px;
              height: 0px;
              opacity: 0;
            }

            &:hover {
              &::before {
                opacity: 1;
                height: 1px;
                width: 100%;
              }
            }
          }
        }

        h3 {
          flex: 1;
          font-weight: 900;
          padding-top: 15px;
        }
        p {
          flex: 3;
          line-height: 1.5;
          font-size: 13px;
          width: 100%;
          padding: 0px 15px;
          @media (min-width: 768px) {
            max-width: 300px;
          }
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-style: italic;
        }
      }
    }
  }
}

@keyframes expand {
  0% {
    transform: translateY(100px);
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes slideFromRight {
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
}
</style>