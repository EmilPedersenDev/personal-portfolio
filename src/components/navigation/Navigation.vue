<template>
  <div class="navigation">
    <div class="navigation__left">
      <router-link to="/">
        <img
          class="navigation__logo"
          v-if="!isBlackNavbar"
          src="../../assets/images/ep-logo-white.png"
          alt="logo white"
        />
        <img
          class="navigation__logo"
          v-else
          src="../../assets/images/ep-logo-black.png"
          alt="logo black"
        />
      </router-link>
    </div>
    <div class="navigation__right">
      <div
        ref="navigationBtn"
        class="navigation__icon-wrapper"
        @click="toggleMenu"
      >
        <div
          class="navigation__hamburger"
          :class="{ isBlackNavbar: isBlackNavbar }"
        ></div>
      </div>
    </div>
    <div ref="menuOverlay" class="navigation-overlay">
      <div class="navigation-overlay__wrapper">
        <ul>
          <li>
            <router-link @click.native.prevent="toggleMenu" to="/"
              >Home</router-link
            >
          </li>
          <li>
            <router-link @click.native.prevent="toggleMenu" to="/projects"
              >Projects</router-link
            >
          </li>
          <li>
            <router-link @click.native.prevent="toggleMenu" to="/"
              >About</router-link
            >
          </li>
          <li>
            <router-link @click.native.prevent="toggleMenu" to="/resume"
              >Resume</router-link
            >
          </li>
          <li>
            <router-link @click.native.prevent="toggleMenu" to="/"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "e-navigation",
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    ...mapGetters({
      isBlackNavbar: "IS_BLACK_NAVBAR",
    }),
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
      let navBtn = this.$refs.navigationBtn;
      let navOverlay = this.$refs.menuOverlay;

      if (this.isOpen) {
        navBtn.classList.add("open");
        navOverlay.classList.add("open");
      } else {
        navBtn.classList.remove("open");
        navOverlay.classList.remove("open");
      }
    },
    toggleMenuOverlay() {},
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  .navigation__left {
    display: flex;
    justify-content: space-between;
    .navigation__logo {
      width: 30px;
      height: auto;
    }
  }
  .navigation__right {
    z-index: 25;
    .navigation__icon-wrapper {
      height: 80px;
      width: 80px;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        cursor: pointer;
      }

      &.open {
        .navigation__hamburger {
          transform: translateX(-50px);
          background: transparent;
          box-shadow: none;
          &::before {
            background: #fff !important;
            transform: rotate(45deg) translate(35px, -35px);
          }
          &::after {
            background: #fff !important;
            transform: rotate(-45deg) translate(35px, 35px);
          }
        }
      }
      .navigation__hamburger {
        width: 20px;
        height: 2px;
        border-radius: 5px;
        background: #fff;
        box-shadow: 0px 2px 5px rgba(255, 101, 47, 0.2);
        transition: all 0.3s ease;
        &.isBlackNavbar {
          background: #000;
          &::before,
          &::after {
            background: #000;
          }
        }
        &::before,
        &::after {
          content: "";
          position: absolute;
          width: 30px;
          height: 2px;
          background: #fff;
          border-radius: 5px;
          transition: all 0.3s ease;
          box-shadow: 0px 2px 5px rgba(255, 101, 47, 0.2);
        }

        &::before {
          transform: translateY(-12px);
        }

        &::after {
          transform: translateY(12px);
        }
      }
    }
  }

  .navigation-overlay {
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 0%;
    z-index: 20;
    background: #000;
    transition: all 0.5s ease;
    opacity: 0;
    visibility: hidden;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    .navigation-overlay__wrapper {
      ul {
        margin: 0;
        padding: 0;
        display: none;
        li {
          list-style-type: none;
          a {
            position: relative;
            text-decoration: none;
            color: #fff;
            font-size: 42px;
            &::after {
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
              &::after {
                opacity: 1;
                height: 2px;
                width: 100%;
              }
            }
          }
        }
      }
    }
    &.open {
      height: 100vh;
      width: 100%;
      opacity: 1;
      visibility: visible;
      .navigation-overlay__wrapper {
        ul {
          display: block;
        }
      }
    }
  }
}
</style>