<template>
  <div>
    <LabelInputs autosize="true" labelTitle="PBX Domain:" v-model="$store.state.pbx"/>
    <LabelInputs autosize="true" labelTitle="Server:" v-model="$store.state.server"/>
    <LabelInputs labelTitle="To:" v-model="$store.state.to"/>
    <LabelInputs labelTitle="From:" v-model="$store.state.from"/>
    <LabelInputs autosize="true" labelTitle="Date/Time:" v-model="$store.state.dateTime"/>
    <LabelInputs autosize="true" labelTitle="Call ID:" v-model="$store.state.callid"/>
    <LabelInputs autosize="true" labelTitle="Logs:" v-model="$store.state.logs"/>
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
