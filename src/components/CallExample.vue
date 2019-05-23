<template>
  <div>
    <!-- <LabelInputs autosize="true" labelTitle="PBX Domain:" v-model="$store.state.pbx"/>
    <LabelInputs autosize="true" labelTitle="Server:" v-model="$store.state.server"/>
    <LabelInputs autosize="true" labelTitle="To:" v-model="$store.state.to"/>
    <LabelInputs autosize="true" labelTitle="From:" v-model="$store.state.from"/>
    <LabelInputs autosize="true" labelTitle="Date/Time:" v-model="$store.state.dateTime"/>
    <LabelInputs autosize="true" labelTitle="Call ID:" v-model="$store.state.callid"/>
    <LabelInputs autosize="true" labelTitle="Logs:" v-model="$store.state.logs"/>-->
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
    <textarea-autosize placeholder="N/A" v-model="from" rows="1"></textarea-autosize>
    <br>

    <label>Date/Time:</label>
    <textarea-autosize placeholder="N/A" v-model="dateTime" rows="1"></textarea-autosize>
    <br>

    <label>Call ID:</label>
    <textarea-autosize placeholder="N/A" v-model="callID" rows="1"></textarea-autosize>
    <br>

    <label>Logs:</label>
    <textarea-autosize placeholder="N/A" v-model="logs" rows="1"></textarea-autosize>
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

