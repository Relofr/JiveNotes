<template>
  <div class="footer-container">
    <div class="left-container">
      <!-- <QuickTime/> -->
      <!-- <Settings/> -->
    </div>
    <div class="stopwatch-container">
      <Stopwatch2
        :timer="formattedTime"
        :state="timerState"
        @start="start"
        @pause="pause"
        @stop="stop"
        @lap="lap"
        :laps="laps"
        @clearLaps="clearLaps"
      />
    </div>
  </div>
</template>

<script>
import Stopwatch2 from "./Stopwatch2";
import Button from "./Button";
import Settings from "./Settings";
import QuickTime from "./QuickTime";
import Modal from "./Modal";
export default {
  data() {
    return {
      showModal: false,
      showStopwatch: false,
      timerState: "stopped",
      currentTimer: 0,
      formattedTime: "00:00:00",
      ticker: undefined,
      laps: [],
      latestLap: ""
    };
  },
  components: {
    Stopwatch2,
    Button,
    Settings,
    QuickTime,
    Modal
  },
  methods: {
    start() {
      if (this.timerState !== "running") {
        this.tick();
        this.timerState = "running";
      }
    },
    lap() {
      this.laps.push({
        seconds: this.currentTimer,
        formattedTime: this.formatTime(this.currentTimer)
      });
      this.latestLap = this.formatTime(this.currentTimer);
      // this.currentTimer = 0;
    },
    clearLaps() {
      this.laps.pop();
    },
    pause() {
      window.clearInterval(this.ticker);
      this.timerState = "paused";
    },
    stop() {
      window.clearInterval(this.ticker);
      this.currentTimer = 0;
      this.formattedTime = "00:00:00";
      this.timerState = "stopped";
    },
    tick() {
      this.ticker = setInterval(() => {
        this.currentTimer++;
        this.formattedTime = this.formatTime(this.currentTimer);
      }, 1000);
    },
    formatTime(seconds) {
      let measuredTime = new Date(null);
      measuredTime.setSeconds(seconds);
      let MHSTime = measuredTime.toISOString().substr(11, 8);
      return MHSTime;
    }
  }
};
</script>

<style lang='less'>
.left-container {
  display: flex;
  // position: absolute;
}

.buttons,
.button2 {
  float: right;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.button {
  background-color: rgb(229, 57, 53);
  color: #fff;
}

.button2 {
  background-color: rgb(0, 145, 234);
  color: #fff;
  margin-left: 8px;
}

#clearIconModal {
  color: #e53935;
  font-size: 28px;
  padding: 15px 15px;
  margin: 0px 12px;
  &:hover {
    cursor: pointer;
    background-color: #f9d7d6;
    border-radius: 51%;
  }
}
#copyIconModal {
  color: #0091ea;
  font-size: 28px;
  padding: 15px 15px;
  margin: 0px 12px;
  &:hover {
    cursor: pointer;
    background-color: #cce9fa;
    border-radius: 51%;
  }
}

.snotifyToast__inner {
  align-items: center;
}

.snotifyToast__body {
  color: #fff !important;
  font-size: 18px;
}
</style>
