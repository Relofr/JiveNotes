<template>
  <div>
    <i
      v-shortkey="['ctrl', 'space']"
      @shortkey="toggleTimer"
      @click="toggleTimer"
      class="timer-button"
    >
      <span v-if="running">
        <i id="pause_icon" class="material-icons">clear</i>
      </span>
      <span v-else>
        <i id="play_icon" class="material-icons">play_arrow</i>
      </span>
    </i>
    <div class="formatted-time">{{formattedTime}}</div>
    <br>
    <label>Title</label>
    <input placeholder="N/A" type="text" v-model="sessionName">
    <table>
      <tr>
        <th>Title</th>
        <th>Time</th>
      </tr>
      <tr v-for="(session, index) in sessions" :key="index">
        <td>{{session.name }}</td>
        <td>{{session.time }}</td>
      </tr>
    </table>
    <i id="clear_icon" class="material-icons" @click="clearSession()">delete</i>
  </div>
  <!-- <div>
    <button
      v-shortkey="['ctrl', 'space']"
      @shortkey="toggleTimer"
      @click="toggleTimer"
      class="timer-button"
    >
      <span v-if="running">
        <i id="pause_icon" class="material-icons">pause</i>
      </span>
      <span v-else>
        <i id="play_icon" class="material-icons">play_arrow</i>
      </span>
    </button>
    <div class="formatted-time">{{formattedTime}}</div>
  </div>-->
</template>

<script>
import LabelInputs from "./LabelInputs";
export default {
  data() {
    return {
      running: false,
      timer: 0,
      formattedTime: "-- : -- : --",
      interval: null,
      sessionName: "",
      sessions: [{ name: "", time: "" }]
    };
  },
  components: {
    LabelInputs
  },
  methods: {
    toggleTimer() {
      if (this.running) {
        this.running = false;

        clearInterval(this.interval);

        this.saveSession();

        this.timer = 0;
        this.formattedTime = "-- : -- : --";
        return;
      }

      this.running = true;

      this.interval = setInterval(
        function() {
          this.timer++;
          this.formattedTime = this.convertSecondsToTime(this.timer);
        }.bind(this),
        1000
      );
    },

    convertSecondsToTime(seconds) {
      var date = new Date(null);
      date.setSeconds(seconds);
      return date.toISOString().substr(11, 8);
    },

    saveSession() {
      this.sessions.push({
        name: this.sessionName,
        time: this.formattedTime
      });

      this.sessionName = "";
    },
    clearSession() {
      this.sessions.pop({
        name: this.sessionName,
        time: this.formattedTime
      });
    }
  }
};
</script>

<style scoped>
.formatted-time {
  display: inline-block;
  vertical-align: super;
  font-family: montserrat;
  font-size: 26px;
  color: #4fc3f7;
  margin-left: 10px;
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

#play_icon,
#pause_icon,
#clear_icon {
  font-size: 30px;
  /* line-height: 32px; */
  cursor: pointer;
  color: #f5f5f5;
}
#clear_icon {
  margin: 0;
}

.timer-button {
  background-color: transparent;
  margin-left: 70px;
}

@media only screen and (max-width: 460px) {
  .formatted-time {
    font-size: 22px;
  }
}
</style>
