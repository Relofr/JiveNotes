<template>
  <div>
    <select v-model="selected">
      <option v-for="option in options" v-bind:value="option.value" :key="option">{{ option.text }}</option>
    </select>
    <span id="selected">{{ selected }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "Open",
      options: [
        { text: "Open", value: "Open" },
        { text: "Pending", value: "Pending" },
        { text: "Solved", value: "Solved" },
        { text: "Hold", value: "Hold" }
      ]
    };
  }
};
</script>

<style>
#selected {
  color: #353535;
}
</style>
