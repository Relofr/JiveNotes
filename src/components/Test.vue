<template>
  <div id="app" v-bind:style="{ backgroundColor: color}">
    <div class="color">
      <input
        type="text"
        v-bind:style="{ color: color}"
        v-model="color"
        maxlength="7"
        placeholder="#000000"
      >
      <input type="color" v-model="color">
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    color: ""
  }),
  watch: {
    color: {
      handler() {
        console.log("Updated color to: " + this.color);
        localStorage.setItem("color", JSON.stringify(this.color));
      },
      deep: true
    }
  },
  mounted() {
    if (localStorage.getItem("color"))
      this.color = JSON.parse(localStorage.getItem("color"));
  }
};
</script>

<style>
</style>
