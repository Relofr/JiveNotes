import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  agentName: [1, 2, 3]
};

const mutations = {
  ADD_NUMBER(state, payload) {
    state.agentName.push(payload);
  }
};

const actions = {
  addNumber(context, number) {
    context.commit("ADD_NUMBER", number);
  }
};

const getters = {
  getNumbers(state) {
    return state.agentName;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
