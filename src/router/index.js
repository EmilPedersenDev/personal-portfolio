import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    name: 'Not found',
    component: () => import('../views/NotFound.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/Projects.vue'),
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import('../views/Resume.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path !== '/') {
    let body = document.getElementsByTagName('body')[0];
    body.style.overflowY = 'auto';
  }
  next();
});

export default router;
