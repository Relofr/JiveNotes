import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    agentName: "Default",
    links: ["hi", "hi2", "hi3"]
  },
  getters: {
    getValue: state => {
      return state.agentName.length;
    }
  },
  mutations: {
    ADD_LINK: (state, link) => {
      state.links.push(link);
    }
  },
  actions: {}
});
