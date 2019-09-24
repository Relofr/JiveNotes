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
        <i id="stopwatch-icons" @click="$emit('pause')" class="material-icons">stop</i>
        <i id="stopwatch-icons" @click="$emit('stop')" class="material-icons">replay</i>
        <i
          v-if="!showTable"
          id="stopwatch-icons"
          @click="showTable = !showTable"
          class="material-icons"
        >timer_off</i>
        <i v-else id="stopwatch-icons" @click="showTable = !showTable" class="material-icons">timer</i>
        <i v-if="showTable" id="stopwatch-icons" @click="$emit('lap')" class="material-icons">flag</i>
      </div>
    </div>
    <div v-if="showTable">
      <table>
        <tr v-if="this.laps.length > 0">
          <th>Breakpoints</th>
          <th>Time</th>
        </tr>
        <tr v-else>
          <th>No Data</th>
        </tr>
        <tr v-for="(lap, index) in laps" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ lap.formattedTime }}</td>
          <td>
            <i id="clear-icon" class="material-icons" @click="clearLaps(index)">delete</i>
          </td>
        </tr>
      </table>
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
  },
  methods: {
    clearLaps(index) {
      this.laps.splice(index, 1);
    }
  },
  watch: {
    showTable: {
      handler() {
        console.log("Updated showTable to: " + this.showTable);
        localStorage.setItem("showTable", JSON.stringify(this.showTable));
      },
      deep: true
    }
  },
  mounted() {
    if (localStorage.getItem("showTable"))
      this.showTable = JSON.parse(localStorage.getItem("showTable"));
  }
};
</script>

<style lang='less' scoped>
#timer {
  font-family: montserrat;
  // color: rgba(255, 255, 255, 0.6);
  color: #4fc3f7;
  width: 115px;
}
#stopwatch-icons {
  cursor: pointer;
  &:hover {
    // color: rgba(0, 0, 0, 0.8);
  }
}

#clear-icon {
  // margin: 15px;
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
  background-color: rgba(0, 0, 0, 0.5);
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
@media only screen and (max-width: 588px) {
  #stopwatch-icons {
    font-size: 20px;
  }
}

@media only screen and (max-width: 640px) {
  #timer {
    font-size: 26px;
    margin-right: 10px;
    line-height: 40px;
  }
}

@media only screen and (max-width: 542px) {
  #timer {
    font-size: 22px;
    margin-right: -15px;
  }
}

@media only screen and (max-width: 542px) {
  #stopwatch-icons {
    font-size: 17px;
  }
}
</style>
