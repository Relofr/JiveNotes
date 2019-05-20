<template>
  <div>
    <LabelInputs autosize="true" labelTitle="Approved by:" v-model="$store.state.T2approvedBy"/>
    <LabelInputs
      autosize="true"
      labelTitle="Contact Name and Number (If different than Case Requester):"
      v-model="$store.state.T2contactName"
    />
    <LabelInputs
      labelTitle="Issue (Full Scope of Issue, Devices Affected):"
      v-model="$store.state.T2Issue"
    />
    <LabelInputs
      labelTitle="Troubleshooting/Replication Steps:"
      v-model="$store.state.T2Troubleshooting"
    />
    <LabelInputs
      autosize="true"
      labelTitle="Configuration Changes:"
      v-model="$store.state.T2Configuration"
    />
    <LabelInputs
      autosize="true"
      labelTitle="Network Layout (IP info, ISP, Equipment, Logon Credentials, etc.):"
      v-model="$store.state.T2Network"
    />
  </div>
</template>

<script>
import { store } from "../store.js";
import LabelInputs from "./LabelInputs";

export default {
  data() {
    return {};
  },
  components: {
    LabelInputs
  },
  methods: {}
};
</script>

<style>
label {
  color: #c4c4c4;
}
</style>
