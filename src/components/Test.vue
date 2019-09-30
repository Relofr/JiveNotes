<template>
  <div>
    <label v-bind:style="{ color: labelColor}">Ship To Name (Customer/Business/Partner):</label>
    <textarea-autosize
      v-bind:style="{ color: textColor}"
      id="cases"
      autofocus
      rows="1"
      v-model="shipToName"
    ></textarea-autosize>
    <br>
    <!-- <div class="grid-item">
      <label id="color-selection-labels" for="foreground">Label Color:</label>
    </div>
    <div class="grid-item">
      <input class="color-selection" type="color" v-model="labelColor" value="Color Select">
    </div>

    <div class="grid-item">
      <label id="color-selection-labels" for="foreground">Text Color:</label>
    </div>
    <div class="grid-item">
      <input class="color-selection" type="color" v-model="textColor" value="Color Select">
    </div>-->
  </div>
</template>

<script>
export default {
  name: "NumberSubmit",
  data() {
    return {
      shipToName: "",
      labelColor: "",
      textColor: ""
    };
  },
  methods: {}
};
</script>

<style>
label,
span {
  font-size: 12px;
}
input,
textarea {
  width: 100%;
  border: none;
  outline: none;
  margin-bottom: 25px;
  font-size: 14px;
  background-color: transparent;
}
</style>
