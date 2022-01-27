import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
// import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
// import "./fullpage.scrollHorizontally.min"; // Optional. When using fullpage extensions
import VueFullPage from "vue-fullpage.js";
import Vuelidate from "vuelidate";

Vue.use(VueFullPage);
Vue.use(Vuelidate);

import "./components/common/index.js";
// import "./assets/styles/main.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
