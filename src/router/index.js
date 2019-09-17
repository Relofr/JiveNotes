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
import Feedback from "@/components/Feedback";
import FraudSherlock from "@/components/FraudSherlock";
import jiveViewResults from "@/components/jiveViewResults";
import sipRequest from "@/components/sipRequest";
import Test from "@/components/Test";

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
      path: "/feedback",
      name: "feedback",
      component: Feedback
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
    },
    {
      path: "/siprequest",
      name: "siprequest",
      component: sipRequest
    },
    {
      path: "/test",
      name: "test",
      component: Test
    }
  ]
});
export default router;
