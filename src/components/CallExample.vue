<template>
  <div>
    <LabelInputs labelTitle="To:" v-model="$store.state.to"/>
    <LabelInputs labelTitle="From:" v-model="$store.state.from"/>
    <LabelInputs autosize="true" labelTitle="Date/Time" v-model="$store.state.dateTime"/>
    <LabelInputs autosize="true" labelTitle="Logs:" v-model="$store.state.logs"/>
  </div>
</template>

<script>
import { store } from "../store.js";
import LabelInputs from "./LabelInputs";

export default {
  data() {
    return {
    };
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
