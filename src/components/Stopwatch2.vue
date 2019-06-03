<template>
  <div>
    <div>
      <div id="timer">{{ timer }}</div>
      <!-- <button @click="$emit('start')">
        Start
        <i class="material-icons">play_arrow</i>
      </button>-->
      <div class="stopwatch-icons-container">
        <i id="stopwatch-icons" @click="$emit('start')" class="material-icons">play_arrow</i>
        <!-- <button @click="$emit('pause')">Pause</button> -->
        <i id="stopwatch-icons" @click="$emit('pause')" class="material-icons">pause</i>
        <!-- <button @click="$emit('lap')">Lap</button> -->
        <i id="stopwatch-icons" @click="$emit('lap')" class="material-icons">outlined_flag</i>
        <!-- <button @click="$emit('stop')">Reset</button> -->
        <i id="stopwatch-icons" @click="$emit('stop')" class="material-icons">replay</i>
        <i id="stopwatch-icons" @click="showTable = !showTable" class="material-icons">timer</i>
      </div>
    </div>
    <div v-if="showTable">
      <table>
        <tr>
          <th>Title</th>
          <th>Time</th>
        </tr>
        <tr v-for="(lap, index) in laps" :key="index">
          <td>Lap: {{ index + 1 }}</td>
          <td>{{ lap.formattedTime }}</td>
        </tr>
      </table>
      <i id="clear_icon" class="material-icons" @click="$emit('clearLaps')">delete</i>
    </div>
  </div>
</template>

<script>
export default {
  props: ["timer", "state", "laps"],
  data() {
    return {
      showTable: false
    };
  }
};
</script>

<style lang='less' scoped>
#timer {
  font-family: montserrat;
  color: #4fc3f7;
}
#stopwatch-icons {
  cursor: pointer;
  &:hover {
    color: #4fc3f7;
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
  padding: 15px;
}
td:nth-child(1) {
  border-radius: 8px 0px 0px 8px;
}
td:nth-child(2) {
  border-radius: 0px 8px 8px 0px;
}
tr:nth-child(even) {
  background-color: #424242;
}

#stopwatch-icons {
  border-radius: 50px;
  line-height: 32px;
  font-size: 25px;
  padding-right: 8px;
}
#timer {
  float: left;
  font-size: 26px;
  margin-right: 10px;
}
// #pause_icon,
// #clear_icon {
//   font-size: 27px;
//   cursor: pointer;
//   color: #f5f5f5;
// }
// #play_icon,
// #pause_icon {
//   font-size: 27px;
//   margin-left: 5px;
// }
// #clear_icon {
//   margin-top: 15px;
//   margin-bottom: 0px;
// }
// #clock-icon {
//   margin-left: 45px;
// }
// #session-icon {
//   margin-left: 35px;
//   font-size: 27px;
// }

// .timer-button {
//   background-color: transparent;
//   font-size: 30px;
//   cursor: pointer;
// }

@media only screen and (max-width: 640px) {
  #stopwatch-icons {
    font-size: 22px;
    padding-right: 4px;
  }
}

@media only screen and (max-width: 620px) {
  #timer {
    font-size: 22px;
    line-height: 34px;
  }
}

@media only screen and (max-width: 575px) {
  .stopwatch-icons-container {
    float: left;
    margin-left: -5px;
  }
}
</style>
