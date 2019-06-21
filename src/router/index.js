import Vue from "vue";
import Router from "vue-router";
import Notes from "@/components/Notes";
import CSS from "@/components/CSS";
import CallExample from "@/components/CallExample";
import T2Escalation from "@/components/T2Escalation";
import sipSearch from "@/components/sipSearch";
import StarCodeSearch from "@/components/StarCodeSearch";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "notes"
    },
    {
      path: "/notes",
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
    },
    {
      path: "/sip",
      name: "sipsearch",
      component: sipSearch
    },
    {
      path: "/star",
      name: "StarCodeSearch",
      component: StarCodeSearch
    }
  ]
});
export default router;
