<template>
  <div class="section" id="projects">
    <div class="projects-wrapper">
      <div
        :class="['project-card', isProjectAnimating && 'animate']"
        v-for="(project, i) in projects"
        :key="i"
        :style="{ 'background-image': 'url(' + project.img + ')' }"
      >
        <p>{{ project.name }}</p>
      </div>
    </div>
    <div
      :class="['all-projects', isProjectAnimating && 'animate']"
      @click="$router.push('/projects')"
    >
      <h2>View all projects</h2>
      <img src="../../assets/icons/arrow-right.svg" alt="arrow right" />
    </div>
  </div>
</template>

<script>
import allProjects from "../../services/models/projects.js";
export default {
  name: "e-project-summary",
  props: {
    isProjectAnimating: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    this.projects = allProjects.filter((project) => project.id < 5);
  },
};
</script>

<style lang="scss" scoped>
#projects {
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 1200px) {
    justify-content: space-between;

    .projects-wrapper {
      flex: 2;
    }

    .all-projects {
      flex: 1;
    }
  }
  align-items: center;

  .projects-header {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .projects-wrapper {
    padding-top: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 220px));
    width: 80%;
    justify-content: center;
    align-items: flex-end;
    grid-gap: 10px;
    position: relative;
    .project-card {
      height: 250px;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
        rgba(0, 0, 0, 0.22) 0px 10px 10px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
      transition: transform $animation-duration ease $animation-delay,
        opacity $animation-short-duration ease-in $animation-delay,
        visibility $animation-short-duration ease-in $animation-delay,
        background-size $animation-short-duration ease 0s;
      border-radius: 5px;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: auto 100%;
      position: relative;
      &:nth-child(odd),
      &:nth-child(even) {
        opacity: 0;
        visibility: hidden;
      }
      &:nth-child(odd) {
        transform: translateY(-200px);
      }
      &:nth-child(even) {
        transform: translateY(300px);
      }

      &.animate {
        &:nth-child(odd),
        &:nth-child(even) {
          opacity: 1;
          visibility: visible;
          transform: translateY(0px);
        }

        @media (min-width: 1200px) {
          &:nth-child(even) {
            opacity: 1;
            transform: translateY(-30px);
          }
        }
      }
      &:last-child {
        background-position: left center;
      }
      @media (max-width: 576px) {
        height: 100px;
      }

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 5px;
        background: linear-gradient(to bottom, transparent 0%, black 80%);
      }

      p {
        color: #fff;
        position: absolute;
        bottom: 5%;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        text-align: center;
        font-weight: 700;
        letter-spacing: 1.5px;
      }

      &:hover {
        @media (min-width: 768px) {
          background-size: auto 120%;
        }
        cursor: pointer;
      }
    }
  }

  .all-projects {
    display: flex;
    align-items: center;
    padding-top: 20px;
    transition: transform $animation-duration ease $animation-delay,
      visibility $animation-short-duration ease-in $animation-delay,
      opacity $animation-short-duration ease-in $animation-delay;
    transform: translateX(-400px);
    opacity: 0;
    visibility: hidden;
    &.animate {
      transform: translateX(0px);
      opacity: 1;
      visibility: visible;
    }
    h2 {
      margin-right: 10px;
      font-size: clamp(14px, 6vw, 32px);
      color: #000;
    }
    img {
      height: 30px;
      width: 30px;
      animation: bounceRight 2s infinite;
      animation-play-state: paused;
    }

    &:hover {
      cursor: pointer;
      img {
        animation-play-state: running;
      }
    }
  }
}

@keyframes bounceRight {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(10px);
  }

  100% {
    transform: translateX(0px);
  }
}
</style>