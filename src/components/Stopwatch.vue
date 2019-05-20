<template>
  <div>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      running: false,
      timer: 0,
      formattedTime: "-- : -- : --",
      interval: null
    };
  },
  methods: {
    toggleTimer() {
      if (this.running) {
        this.running = false;

        clearInterval(this.interval);

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
    }
  }
};
</script>

<style>
.formatted-time {
  display: inline-block;
  vertical-align: super;
  font-family: montserrat;
  font-size: 26px;
  line-height: 0px;
  color: #4fc3f7;
}

#play_icon,
#pause_icon {
  font-size: 30px;
  line-height: 26px;
  cursor: pointer;
  color: #f5f5f5;
}

.timer-button {
  background-color: transparent;
  width: 50px;
}

@media only screen and (max-width: 460px) {
  .formatted-time {
    font-size: 22px;
  }
}
</style>
