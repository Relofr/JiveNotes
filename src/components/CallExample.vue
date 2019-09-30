<template>
  <div>
    <div class="title">Call Example</div>
    <div class="sub-title">- Call Example -</div>
    <label>PBX Domain:</label>
    <textarea-autosize id="pbx" autofocus rows="1" v-model="pbx"></textarea-autosize>
    <br>

    <label>Server:</label>
    <textarea-autosize rows="1" v-model="server"></textarea-autosize>
    <br>

    <label>To:</label>
    <textarea-autosize v-model="to" rows="1"></textarea-autosize>
    <br>

    <label>From:</label>
    <textarea-autosize placeholder v-model="from" rows="1"></textarea-autosize>
    <br>

    <label>Date/Time:</label>
    <textarea-autosize placeholder v-model="dateTime" rows="1"></textarea-autosize>
    <br>

    <label>Call ID:</label>
    <textarea-autosize placeholder v-model="callID" rows="1"></textarea-autosize>
    <br>

    <label>Logs:</label>
    <textarea-autosize placeholder v-model="logs" rows="1"></textarea-autosize>
    <br>

    <div class="buttons">
      <Button class="btn btn-error" buttonTitle="clear" @click="showModal = true"/>
      <Button class="btn btn-primary" buttonTitle="copy" @click="copyNotes()"/>
    </div>

    <Modal v-if="showModal" @close="showModal = false">
      <span slot="header">Confirm Clear</span>
      <i slot="footer" id="clearIconModal" class="material-icons" @click="showModal = false">close</i>
      <i slot="footer" id="copyIconModal" class="material-icons" @click="clearNotes()">check</i>
    </Modal>
  </div>
</template>

<script>
import LabelInputs from "./LabelInputs";
import Button from "./Button";
import Tooltip from "./Tooltip";
import Modal from "./Modal";

export default {
  data: () => ({
    pbx: "",
    server: "",
    to: "",
    from: "",
    dateTime: "",
    callID: "",
    logs: "",
    showModal: false,
    showStopwatch: false
  }),
  components: {
    LabelInputs,
    Button,
    Tooltip,
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
      this.pbx = "";
      this.server = "";
      this.to = "";
      this.from = "";
      this.dateTime = "";
      this.callID = "";
      this.logs = "";
      document.getElementById("pbx").focus();

      this.showModal = false;
      this.displayNotificationWarning();
    },
    displayNotificationSuccess() {
      this.$snotify.success("Copied!");
    },
    displayNotificationWarning() {
      this.$snotify.warning("Cleared!");
    }
  },
  watch: {
    pbx: {
      handler() {
        console.log("Updated pbx to: " + this.pbx);
        localStorage.setItem("pbx", JSON.stringify(this.pbx));
      },
      deep: true
    },
    server: {
      handler() {
        console.log("Updated server to: " + this.server);
        localStorage.setItem("server", JSON.stringify(this.server));
      },
      deep: true
    },
    to: {
      handler() {
        console.log("Updated 'to' to: " + this.to);
        localStorage.setItem("to", JSON.stringify(this.to));
      },
      deep: true
    },
    from: {
      handler() {
        console.log("Updated from to: " + this.from);
        localStorage.setItem("from", JSON.stringify(this.from));
      },
      deep: true
    },
    dateTime: {
      handler() {
        console.log("Updated dateTime to: " + this.dateTime);
        localStorage.setItem("dateTime", JSON.stringify(this.dateTime));
      },
      deep: true
    },
    callID: {
      handler() {
        console.log("Updated callID to: " + this.callID);
        localStorage.setItem("callID", JSON.stringify(this.callID));
      },
      deep: true
    },
    logs: {
      handler() {
        console.log("Updated logs to: " + this.logs);
        localStorage.setItem("logs", JSON.stringify(this.logs));
      },
      deep: true
    }
  },
  mounted() {
    // console.log("App mounted");
    if (localStorage.getItem("pbx"))
      this.pbx = JSON.parse(localStorage.getItem("pbx"));
    if (localStorage.getItem("server"))
      this.server = JSON.parse(localStorage.getItem("server"));
    if (localStorage.getItem("to"))
      this.to = JSON.parse(localStorage.getItem("to"));
    if (localStorage.getItem("from"))
      this.from = JSON.parse(localStorage.getItem("from"));
    if (localStorage.getItem("dateTime"))
      this.dateTime = JSON.parse(localStorage.getItem("dateTime"));
    if (localStorage.getItem("callID"))
      this.callID = JSON.parse(localStorage.getItem("callID"));
    if (localStorage.getItem("logs"))
      this.logs = JSON.parse(localStorage.getItem("logs"));
  }
};
</script>

<style lang='less'>
</style>

