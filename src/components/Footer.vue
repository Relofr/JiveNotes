<template>
  <div class="footer-container" v-shortkey="['alt', 'c']" @shortkey="copyNotes()">
    <div class="left-container" v-shortkey="['ctrl', 'x']" @shortkey="showModal = true">
      <!-- <QuickTime/> -->
      <Settings/>
      <!-- <i id="stopwatch-icon" class="material-icons" @click="toggleStopWatch()">watch_later</i> -->
    </div>
    <!-- <div class="buttons">
      <Button class="button" buttonTitle="clear" @click="showModal = true"/>
      <Button class="button2" buttonTitle="copy" @click="copyNotes()"/>
    </div>

    <Modal v-if="showModal" @close="showModal = false">
      <span slot="header">Confirm Clear</span>
      <i slot="footer" id="clearIconModal" class="material-icons" @click="showModal = false">close</i>
      <i slot="footer" id="copyIconModal" class="material-icons" @click="clearNotes()">check</i>
    </Modal>-->
    <div class="stopwatch-container">
      <Stopwatch/>
    </div>
  </div>
</template>

<script>
import Stopwatch from "./Stopwatch";
import Button from "./Button";
import Settings from "./Settings";
import QuickTime from "./QuickTime";
import Modal from "./Modal";
export default {
  data() {
    return {
      showModal: false,
      showStopwatch: false
    };
  },
  components: {
    Stopwatch,
    Button,
    Settings,
    QuickTime,
    Modal
  },
  methods: {
    copyNotes() {
      document.execCommand("unselect");
      document.execCommand("selectAll");
      document.execCommand("copy");
      document.execCommand("unselect");
      console.log("copy");
      this.displayNotificationSuccess();
    },
    clearNotes() {
      this.agentName = "";

      this.showModal = false;
      this.displayNotificationWarning();
    },
    displayNotificationSuccess() {
      this.$snotify.success("Copied!");
    },
    displayNotificationWarning() {
      this.$snotify.warning("Cleared!");
    },
    toggleStopWatch() {
      this.showStopwatch = !this.showStopwatch;
    }
  }
};
</script>

<style lang='less'>
.left-container {
  display: flex;
  position: absolute;
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
