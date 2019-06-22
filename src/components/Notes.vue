<template>
  <div>
    <div class="title">Notes</div>
    <div class="line">------------------------------------------------------</div>
    <Tooltip tooltip="true" moreInfo="This field will not clear"/>

    <label>Agent Name/Date of Contact: {{ new Date() | moment("dddd, MMMM Do YYYY") }}</label>
    <textarea-autosize rows="1" v-model="agentName"></textarea-autosize>
    <!-- <input v-debounce:400ms="agentName"/> -->
    <br>

    <label>Contact Name / (Admin/User/Partner):</label>
    <textarea-autosize id="contact" rows="1" autofocus v-model="contact"></textarea-autosize>
    <br>

    <label>Summary of Issue/Request:</label>
    <textarea-autosize v-model="summary" rows="1"></textarea-autosize>
    <br>

    <label>Device Ext/MAC (if applicable):</label>
    <textarea-autosize placeholder="N/A" v-model="devices" rows="1"></textarea-autosize>
    <br>

    <label>Network Topology(IP info, ISP, Router Model #, Router Password, etc. if applicable):</label>
    <textarea-autosize placeholder="N/A" v-model="network" rows="1"></textarea-autosize>
    <br>

    <label>Troubleshooting/Replication Steps (Dial Plan Changes, PBX Changes, Network Changes, Device Interface Changes, include call examples/sip logs if applicable):</label>
    <textarea-autosize id="troubleshooting" placeholder="N/A" v-model="troubleshooting" rows="1"></textarea-autosize>
    <br>

    <label>Resolution/Escalation(Was issue resolved or escalated?):</label>
    <textarea-autosize rows="1" v-model="resolution"></textarea-autosize>
    <div class="line">------------------------------------------------------</div>
    <Tooltip tooltip="true" moreInfo="This field will not clear or copy"/>

    <label class="no-select">Notes:</label>
    <div class="no-select">
      <textarea-autosize v-shortkey.avoid rows="1" v-model="notes"></textarea-autosize>
    </div>

    <div class="buttons">
      <Button class="button" buttonTitle="clear" @click="showModal = true"/>
      <Button class="button2" buttonTitle="copy" @click="copyNotes()"/>
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
    agentName: "",
    contact: "",
    summary: "",
    devices: "",
    network: "",
    troubleshooting: "",
    resolution: "",
    notes: "",
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
      this.contact = "";
      this.summary = "";
      this.devices = "";
      this.network = "";
      this.troubleshooting = "";
      this.resolution = "";
      document.getElementById("contact").focus();

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
    agentName: {
      handler() {
        console.log("Updated agentName to: " + this.agentName);
        localStorage.setItem("agentName", JSON.stringify(this.agentName));
      },
      deep: true
    },
    contact: {
      handler() {
        console.log("Updated contact to: " + this.contact);
        localStorage.setItem("contact", JSON.stringify(this.contact));
      },
      deep: true
    },
    summary: {
      handler() {
        console.log("Updated summary to: " + this.summary);
        localStorage.setItem("summary", JSON.stringify(this.summary));
      },
      deep: true
    },
    devices: {
      handler() {
        console.log("Updated devices to: " + this.devices);
        localStorage.setItem("devices", JSON.stringify(this.devices));
      },
      deep: true
    },
    network: {
      handler() {
        console.log("Updated network to: " + this.network);
        localStorage.setItem("network", JSON.stringify(this.network));
      },
      deep: true
    },
    troubleshooting: {
      handler() {
        console.log("Updated troubleshooting to: " + this.troubleshooting);
        localStorage.setItem(
          "troubleshooting",
          JSON.stringify(this.troubleshooting)
        );
      },
      deep: true
    },
    resolution: {
      handler() {
        console.log("Updated resolution to: " + this.resolution);
        localStorage.setItem("resolution", JSON.stringify(this.resolution));
      },
      deep: true
    },
    notes: {
      handler() {
        console.log("Updated notes to: " + this.notes);
        localStorage.setItem("notes", JSON.stringify(this.notes));
      },
      deep: true
    }
  },
  mounted() {
    if (localStorage.getItem("agentName"))
      this.agentName = JSON.parse(localStorage.getItem("agentName"));
    if (localStorage.getItem("contact"))
      this.contact = JSON.parse(localStorage.getItem("contact"));
    if (localStorage.getItem("summary"))
      this.summary = JSON.parse(localStorage.getItem("summary"));
    if (localStorage.getItem("devices"))
      this.devices = JSON.parse(localStorage.getItem("devices"));
    if (localStorage.getItem("network"))
      this.network = JSON.parse(localStorage.getItem("network"));
    if (localStorage.getItem("troubleshooting"))
      this.troubleshooting = JSON.parse(
        localStorage.getItem("troubleshooting")
      );
    if (localStorage.getItem("resolution"))
      this.resolution = JSON.parse(localStorage.getItem("resolution"));
    if (localStorage.getItem("notes"))
      this.notes = JSON.parse(localStorage.getItem("notes"));
  }
};
</script>

<style lang='less'>
.line {
  color: transparent;
}

label {
  color: #c4c4c4;
}

label,
span {
  font-size: 12px;
}
input,
textarea {
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid #666;
  margin-bottom: 25px;
  font-size: 14px;
  background-color: transparent;
  color: #f5f5f5;
  &:focus {
    border-bottom: 2px solid #4fc3f7;
  }
}

.no-select {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
