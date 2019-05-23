<template>
  <div>
    <!-- <LabelInputs autosize="true" labelTitle="Case#:" v-model="$store.state.case"/>
    <LabelInputs autosize="true" placeholder="N/A" labelTitle="Wiki:" v-model="$store.state.wiki"/>
    <LabelInputs
      autosize="true"
      labelTitle="Description of Issue:"
      v-model="$store.state.description"
    />
    <LabelInputs autosize="true" labelTitle="Question:" v-model="$store.state.description"/>
    <LabelInputs
      autosize="true"
      placeholder="N/A"
      labelTitle="Applicable Information:"
      v-model="$store.state.applicable"
    />-->
    <label>Case#:</label>
    <textarea-autosize id="cases" autofocus rows="1" v-model="caseNumber"></textarea-autosize>
    <br>

    <label>Wiki:</label>
    <textarea-autosize rows="1" v-model="wiki"></textarea-autosize>
    <br>

    <label>Description of Issue:</label>
    <textarea-autosize v-model="description" rows="1"></textarea-autosize>
    <br>

    <label>Question:</label>
    <textarea-autosize placeholder="N/A" v-model="question" rows="1"></textarea-autosize>
    <br>

    <label>Applicable Information:</label>
    <textarea-autosize placeholder="N/A" v-model="applicable" rows="1"></textarea-autosize>
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
import { store } from "../store.js";
import LabelInputs from "./LabelInputs";
import Button from "./Button";
import Modal from "./Modal";

export default {
  data: () => ({
    caseNumber: "",
    wiki: "",
    description: "",
    question: "",
    applicable: "",
    showModal: false,
    showStopwatch: false
  }),
  components: {
    LabelInputs,
    Button,
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
      this.caseNumber = "";
      this.wiki = "";
      this.description = "";
      this.question = "";
      this.applicable = "";
      document.getElementById("cases").focus();

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

<style>
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
