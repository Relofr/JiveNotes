<template>
  <div>
    <input v-model="agentName">
    <button @click="addNumber(agentName)">Add new number</button>
  </div>
</template>

<script>
export default {
  name: "NumberSubmit",
  data() {
    return {
      agentName: ""
    };
  },
  methods: {
    addNumber(agentName) {
      this.$store.dispatch("addNumber", agentName);
    }
  }
};
</script>
