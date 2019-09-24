<template>
  <div>
    <div class="left-container"></div>
    <div class="stopwatch-container">
      <Stopwatch2
        :timer="formattedTime"
        :state="timerState"
        @start="start"
        @pause="pause"
        @notifyMe5="notifyMe5"
        @notifyMe10="notifyMe10"
        @notifyMe30="notifyMe30"
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
    notifyMe5() {
      console.log("Notifcation 5");
      if (Notification.permission !== "granted")
        Notification.requestPermission();
      else {
        var img3 = "../assets/navi.png";
        var img2 =
          "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Navi_%28The_Legend_of_Zelda%29.png/220px-Navi_%28The_Legend_of_Zelda%29.png";
        var img =
          "https://is2-ssl.mzstatic.com/image/thumb/Purple113/v4/b6/b8/28/b6b82810-9c47-ec19-1ee7-e1e06d35b4e9/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-6.png/246x0w.jpg";
        var text = "Hey, listen! \n5 Minutes";
        new Notification("Jive Notes", {
          body: text,
          icon: img2
        });
        // notification.onclick = function() {};
      }
    },
    notifyMe10() {
      console.log("Notifcation 10");
      if (Notification.permission !== "granted")
        Notification.requestPermission();
      else {
        var img3 = "../assets/navi.png";
        var img2 =
          "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Navi_%28The_Legend_of_Zelda%29.png/220px-Navi_%28The_Legend_of_Zelda%29.png";
        var img =
          "https://is2-ssl.mzstatic.com/image/thumb/Purple113/v4/b6/b8/28/b6b82810-9c47-ec19-1ee7-e1e06d35b4e9/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-6.png/246x0w.jpg";
        var text = "Hey, listen! \n10 Minutes";
        new Notification("Jive Notes", {
          body: text,
          icon: img2
        });
        // notification.onclick = function() {};
      }
    },
    notifyMe30() {
      console.log("Notifcation 30");
      if (Notification.permission !== "granted")
        Notification.requestPermission();
      else {
        var img3 = "../assets/navi.png";
        var img2 =
          "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Navi_%28The_Legend_of_Zelda%29.png/220px-Navi_%28The_Legend_of_Zelda%29.png";
        var img =
          "https://is2-ssl.mzstatic.com/image/thumb/Purple113/v4/b6/b8/28/b6b82810-9c47-ec19-1ee7-e1e06d35b4e9/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-6.png/246x0w.jpg";
        var text = "Hey, listen! \n30 Minutes";
        new Notification("Jive Notes", {
          body: text,
          icon: img2
        });
        // notification.onclick = function() {};
      }
    },
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
    },
    clearLaps(index) {
      this.laps.splice(index, 1);
    },
    pause() {
      window.clearInterval(this.ticker);
      this.timerState = "paused";
      console.log(this.timerState);
    },
    stop() {
      window.clearInterval(this.ticker);
      this.currentTimer = 0;
      this.formattedTime = "00:00:00";
      this.timerState = "stopped";
      console.log(this.timerState);
    },
    tick() {
      this.ticker = setInterval(() => {
        this.currentTimer++;
        this.formattedTime = this.formatTime(this.currentTimer);
        if (this.currentTimer === 300) {
          return this.notifyMe5();
        }
        if (this.currentTimer === 600) {
          return this.notifyMe10();
        }
        if (this.currentTimer === 1800) {
          return this.notifyMe30();
        }
      }, 1000);
    },
    formatTime(seconds) {
      let measuredTime = new Date(null);
      measuredTime.setSeconds(seconds);
      let MHSTime = measuredTime.toISOString().substr(11, 8);
      return MHSTime;
    }
  },
  watch: {
    fiveMinuteWatcher() {
      if (this.timerState === "running") {
        this.timerState = setInterval(() => {
          console.log("5 Minutes");
        }, 3000);
      } else {
        clearInterval(this.timerState);
      }
    }
  }
};
</script>

<style lang='less'>
.left-container {
  display: flex;
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
  &:focus {
    background-color: rgb(229, 57, 53);
  }
}

.button2 {
  background-color: rgb(0, 145, 234);
  color: #fff;
  margin-left: 8px;
  &:focus {
    background-color: rgb(0, 145, 234);
  }
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
