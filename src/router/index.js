import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("../views/Projects.vue"),
  },
  {
    path: "/resume",
    name: "Resume",
    component: () => import("../views/Resume.vue"),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path !== "/") {
    let body = document.getElementsByTagName("body")[0];
    body.style.overflowY = "auto";
  }
  next();
});

export default router;
