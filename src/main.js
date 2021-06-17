import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
// import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
// import "./fullpage.scrollHorizontally.min"; // Optional. When using fullpage extensions
import VueFullPage from "vue-fullpage.js";
import Vuelidate from "vuelidate";
import VueGtag from "vue-gtag";

Vue.use(VueFullPage);
Vue.use(Vuelidate);

Vue.use(
  VueGtag,
  {
    config: {
      id: "UA-199745855-1",
    },
  },
  router
);

import "./components/index.js";
import "./assets/styles/main.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
