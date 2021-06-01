import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isBlackNavbar: false,
  },
  mutations: {
    SET_BLACK_NAVBAR: (state, payload) => {
      state.isBlackNavbar = payload;
    },
  },
  getters: {
    IS_BLACK_NAVBAR: (state) => {
      return state.isBlackNavbar;
    },
  },
});
