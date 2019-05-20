import Vue from "vue";
import Router from "vue-router";
import Notes from "@/components/Notes";
import CSS from "@/components/CSS";
import CallExample from "@/components/CallExample";
import T2Escalation from "@/components/T2Escalation";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Notes",
      component: Notes
    },
    {
      path: "/CSS",
      name: "Css",
      component: CSS
    },
    {
      path: "/callexample",
      name: "Callexample",
      component: CallExample
    },
    {
      path: "/t2escalation",
      name: "t2escalation",
      component: T2Escalation
    }
  ]
});
