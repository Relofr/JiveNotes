<template>
  <div>
    <div class="line">------------------------------------------------------</div>
    <LabelInputs
      labelTitle="Agent Name/Date of Contact: "
      v-model="$store.state.inputValues.agentName"
      showDate="true"
    />
    <LabelInputs
      labelTitle="Contact Name / (Admin/User/Partner):"
      v-model="$store.state.contactName"
    />
    <LabelInputs
      autosize="true"
      labelTitle="Summary of Issue/Request:"
      v-model="$store.state.summary"
    />
    <LabelInputs
      autosize="true"
      placeholder="N/A"
      labelTitle="Device Ext/MAC (if applicable):"
      v-model="$store.state.devices"
    />
    <LabelInputs
      autosize="true"
      placeholder="N/A"
      labelTitle="Network Topology(IP info, ISP, Router Model #, Router Password, etc. if applicable):"
      v-model="$store.state.network"
    />
    <LabelInputs
      autosize="false"
      placeholder="N/A"
      labelTitle="Troubleshooting/Replication Steps (Dial Plan Changes, PBX Changes, Network Changes, Device Interface Changes, include call examples/sip logs if applicable):"
      v-model="$store.state.troubleshooting"
    />
    <LabelInputs
      labelTitle="Resolution/Escalation(Was issue resolved or escalated?):"
      v-model="$store.state.resolution"
    />
    <div class="line">------------------------------------------------------</div>
    <LabelInputs
      v-shortkey.avoid
      autosize="true"
      class="no-select"
      labelTitle="Notes:"
      v-model="$store.state.notes"
    />
  </div>
</template>

<script>
import { store } from "../store.js";
import LabelInputs from "./LabelInputs";
import Button from "./Button";

export default {
  data() {
    return {};
  },
  components: {
    LabelInputs,
    Button
  },
  methods: {}
};
</script>

<style>
.line {
  color: transparent;
}

label {
  color: #c4c4c4;
}
</style>
