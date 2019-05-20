import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const state = {
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
  to: "",
  from: "",
  dateTime: "",
  logs: ""
};

export default new Vuex.Store({
  state
});
