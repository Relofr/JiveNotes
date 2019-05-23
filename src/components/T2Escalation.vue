<template>
  <div>
    <!-- <LabelInputs autosize="true" labelTitle="Approved by:" v-model="$store.state.T2approvedBy"/>
    <LabelInputs
      autosize="true"
      labelTitle="Contact Name and Number (If different than Case Requester):"
      v-model="$store.state.T2contactName"
    />
    <LabelInputs
      autosize="true"
      labelTitle="Issue (Full Scope of Issue, Devices Affected):"
      v-model="$store.state.T2Issue"
    />
    <LabelInputs
      autosize="true"
      labelTitle="Troubleshooting/Replication Steps:"
      v-model="$store.state.T2Troubleshooting"
    />
    <LabelInputs
      autosize="true"
      labelTitle="Configuration Changes:"
      v-model="$store.state.T2Configuration"
    />
    <LabelInputs
      autosize="true"
      labelTitle="Network Layout (IP info, ISP, Equipment, Logon Credentials, etc.):"
      v-model="$store.state.T2Network"
    />-->
    <label>Approved By:</label>
    <textarea-autosize id="approved" autofocus rows="1" v-model="approved"></textarea-autosize>
    <br>

    <label>Contact Name and Number (If different than Case Requester):</label>
    <textarea-autosize rows="1" v-model="contact"></textarea-autosize>
    <br>

    <label>Issue (Full Scope of Issue, Devices Affected):</label>
    <textarea-autosize v-model="issue" rows="1"></textarea-autosize>
    <br>

    <label>Troubleshooting/Replication Steps:</label>
    <textarea-autosize placeholder="N/A" v-model="replication" rows="1"></textarea-autosize>
    <br>

    <label>Configuration Changes:</label>
    <textarea-autosize placeholder="N/A" v-model="configuration" rows="1"></textarea-autosize>
    <br>

    <label>Network Layout (IP info, ISP, Equipment, Logon Credentials, etc.):</label>
    <textarea-autosize placeholder="N/A" v-model="networkLayout" rows="1"></textarea-autosize>
    <br>

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
    approved: "",
    contact: "",
    issue: "",
    replication: "",
    configuration: "",
    networkLayout: "",
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
      this.approved = "";
      this.contact = "";
      this.issue = "";
      this.replication = "";
      this.configuration = "";
      this.networkLayout = "";
      document.getElementById("approved").focus();

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