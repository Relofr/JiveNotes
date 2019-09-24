<template>
  <div>
    <div>
      <div id="timer">{{ subTimer }}</div>
      <div class="stopwatch-icons-container">
        <i id="stopwatch-icons" @click="$emit('subStart')" class="material-icons">play_arrow</i>
        <i id="stopwatch-icons" @click="$emit('subPause')" class="material-icons">stop</i>
        <i id="stopwatch-icons" @click="$emit('subStop')" class="material-icons">replay</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["subTimer", "state", "laps"],
  data() {
    return {};
  },
  methods: {},
  watch: {}
};
</script>

<style lang='less' scoped>
#timer {
  font-family: montserrat;
  color: #4fc3f7;
  width: 115px;
}
#stopwatch-icons {
  cursor: pointer;
  &:hover {
    color: #0091ea;
  }
}

#clear-icon {
  cursor: pointer;
  &:hover {
    color: #e53935;
  }
}

table,
table,
td,
th {
  text-align: center;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  padding: 10px 0px 10px 0px;
}
td:nth-child(1) {
  border-radius: 8px 0px 0px 8px;
}
td:nth-child(3) {
  border-radius: 0px 8px 8px 0px;
}
tr:nth-child(even) {
  background-color: #424242;
}

#stopwatch-icons {
  border-radius: 50px;
  line-height: 40px;
  font-size: 24px;
  padding-right: 8px;
  padding-left: 4px;
}
#timer {
  float: left;
  font-size: 26px;
  margin-right: 10px;
}

@media only screen and (max-width: 640px) {
  #stopwatch-icons {
    font-size: 22px;
  }
}

@media only screen and (max-width: 640px) {
  #timer {
    font-size: 26px;
    margin-right: 10px;
    line-height: 40px;
  }
}

@media only screen and (max-width: 625px) {
  #stopwatch-icons {
    // float: left;
    // margin-left: -5px;
  }
}
</style>
