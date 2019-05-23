<template>
  <div>
    <div class="line">------------------------------------------------------</div>
    <Tooltip tooltip="true" moreInfo="This field will not clear"/>

    <label>Agent Name/Date of Contact: {{ new Date() | moment("dddd, MMMM Do YYYY") }}</label>
    <textarea-autosize rows="1" v-model="agentName"></textarea-autosize>
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

    <div class="line">--------------------------------------</div>
    <Tooltip tooltip="true" moreInfo="This field will not clear or copy"/>

    <label class="no-select">Notes:</label>
    <div class="no-select">
      <textarea-autosize v-shortkey.avoid rows="1"></textarea-autosize>
    </div>

    <!--
    <LabelInputs
      tooltip="true"
      autosize="true"
      labelTitle="Agent Name/Date of Contact: "
      v-model="agentName"
      showDate="true"
    />
    
    <LabelInputs
      autosize="true"
      labelTitle="Contact Name / (Admin/User/Partner):"
      v-model="contactName"
    />
    <LabelInputs autosize="true" labelTitle="Summary of Issue/Request:" v-model="summary"/>
    <LabelInputs
      autosize="true"
      placeholder="N/A"
      labelTitle="Device Ext/MAC (if applicable):"
      v-model="devices"
    />
    <LabelInputs
      autosize="true"
      placeholder="N/A"
      labelTitle="Network Topology(IP info, ISP, Router Model #, Router Password, etc. if applicable):"
      v-model="network"
    />
    <LabelInputs
      autosize="false"
      placeholder="N/A"
      labelTitle="Troubleshooting/Replication Steps (Dial Plan Changes, PBX Changes, Network Changes, Device Interface Changes, include call examples/sip logs if applicable):"
      v-model="troubleshooting"
    />
    <LabelInputs
      autosize="true"
      labelTitle="Resolution/Escalation(Was issue resolved or escalated?):"
      v-model="resolution"
    />
    <div class="line">------------------------------------------------------</div>
    <Tooltip tooltip="true" moreInfo="This field will not clear or copy"/>
    <LabelInputs
      v-shortkey.avoid
      autosize="true"
      class="no-select"
      labelTitle="Notes:"
      v-model="notes"
    />-->
    <div class="buttons">
      <Button class="button" buttonTitle="clear" @click="showModal = true"/>
      <Button class="button2" buttonTitle="copy" @click="copyNotes()"/>
    </div>
    <!-- <div v-if="showStopwatch" class="stopwatch-container">
      <Stopwatch/>
    </div>-->
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
</style>
