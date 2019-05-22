<template>
  <div>
    <div @click="toggleFifteen()">
      15
      <span v-show="fifteen">{{ new Date() | moment("add", "15 m",) | moment("h:m") }}</span>
    </div>
    <div @click="toggleThirty()">
      30
      <span v-show="thirty">{{ new Date() | moment("add", "30 m",) | moment("h:m") }}</span>
    </div>
    <!-- <div @click="toggleSixty()">
      Hour
      <span v-show="sixty">Be back at: {{ new Date() | moment("add", "1 h",) | moment("h:m") }}</span>
    </div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      fifteen: false,
      thirty: false,
      sixty: false
    };
  },
  methods: {
    toggleFifteen() {
      this.fifteen = !this.fifteen;
    },
    toggleThirty() {
      this.thirty = !this.thirty;
    },
    toggleSixty() {
      this.sixty = !this.sixty;
    }
  }
};
</script>

<style>
</style>
