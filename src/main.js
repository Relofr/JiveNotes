import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import Snotify, { SnotifyPosition } from "vue-snotify";
import VTooltip from "v-tooltip";
import "vue-snotify/styles/material.css";
import VueTextareaAutosize from "vue-textarea-autosize";

import "@/assets/css/global.css";

// Vue.use(require("vue-shortkey"));
Vue.use(require("vue-moment"));
Vue.use(VTooltip);
Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

const options = {
  toast: {
    position: SnotifyPosition.centerBottom,
    showProgressBar: false,
    pauseOnHover: false
    // timeout: 100000
  }
};
Vue.use(Snotify, options);

Notification.requestPermission().then(function(result) {
  if (result === "denied") {
    return;
  }
  if (result === "default") {
    return;
  }
});

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
