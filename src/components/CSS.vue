<template>
  <div>
    <LabelInputs labelTitle="Case#:" v-model="$store.state.case"/>
    <LabelInputs placeholder="N/A" labelTitle="Wiki:" v-model="$store.state.wiki"/>
    <LabelInputs
      autosize="true"
      labelTitle="Description of Issue:"
      v-model="$store.state.description"
    />
    <LabelInputs autosize="true" labelTitle="Question:" v-model="$store.state.description"/>
    <LabelInputs
      placeholder="N/A"
      autosize="true"
      labelTitle="Applicable Information:"
      v-model="$store.state.applicable"
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
