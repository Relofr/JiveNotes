import Vue from "vue";
import Router from "vue-router";
import Notes from "@/components/Notes";
import CSS from "@/components/CSS";
import CallExample from "@/components/CallExample";
import T2Escalation from "@/components/T2Escalation";
import sipSearch from "@/components/sipSearch";
import StarCodeSearch from "@/components/StarCodeSearch";
import RMA from "@/components/RMA";
import Email from "@/components/Email";
import Test from "@/components/Test";
import FraudSherlock from "@/components/FraudSherlock";
import jiveViewResults from "@/components/jiveViewResults";

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
    },
    {
      path: "/rma",
      name: "RMA",
      component: RMA
    },
    {
      path: "/email",
      name: "Email",
      component: Email
    },
    {
      path: "/test",
      name: "test",
      component: Test
    },
    {
      path: "/fraud",
      name: "fraud",
      component: FraudSherlock
    },
    {
      path: "/jiveview",
      name: "jiveview",
      component: jiveViewResults
    }
  ]
});
export default router;
