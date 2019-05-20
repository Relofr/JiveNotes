import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const state = {
  inputValues: {
    agentName: "",
    contactName: "",
    summary: "",
    devices: "",
    network: "",
    troubleshooting: "",
    resolution: "",
    notes: "",
    case: "",
    wiki: "",
    description: "",
    applicable: "",
    pbx: "",
    server: "",
    to: "",
    from: "",
    dateTime: "",
    callid: "",
    logs: "",
    T2approvedBy: "",
    T2contactName: "",
    T2Issue: "",
    T2Troubleshooting: "",
    T2Configuration: "",
    T2Network: ""
  },
  mutations: {
    resetInputValues(state) {
      Object.keys(state.inputValues).forEach(function(key) {
        state.inputValues[key] = "";
      });
    }
  }
};

export default new Vuex.Store({
  state
});
