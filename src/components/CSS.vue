<template>
  <div>
    <div class="title">CSS</div>
    <span id="slack-bold">*</span>
    <label>Case#:</label>
    <span id="slack-bold">*</span>
    <textarea-autosize id="cases" autofocus rows="1" v-model="caseNumber"></textarea-autosize>
    <br>

    <span id="slack-bold">*</span>
    <label>Domain:</label>
    <span id="slack-bold">*</span>
    <textarea-autosize placeholder v-model="cssPBX" rows="1"></textarea-autosize>
    <br>

    <span id="slack-bold">*</span>
    <label>Wiki: (If yes, post applicable article here, if no, post search term used)</label>
    <span id="slack-bold">*</span>
    <textarea-autosize rows="1" v-model="wiki"></textarea-autosize>
    <br>

    <span id="slack-bold">*</span>
    <label>Description of Issue:</label>
    <span id="slack-bold">*</span>
    <textarea-autosize v-model="description" rows="1"></textarea-autosize>
    <br>

    <span id="slack-bold">*</span>
    <label>Question:</label>
    <span id="slack-bold">*</span>
    <textarea-autosize placeholder v-model="question" rows="1"></textarea-autosize>
    <br>

    <span id="slack-bold">*</span>
    <label>Applicable Information:</label>
    <span id="slack-bold">*</span>
    <textarea-autosize placeholder="N/A" v-model="applicable" rows="1"></textarea-autosize>

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
import Modal from "./Modal";

export default {
  data: () => ({
    caseNumber: "",
    wiki: "",
    description: "",
    question: "",
    applicable: "",
    cssPBX: "",
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
      this.cssPBX = "";
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
  },
  watch: {
    caseNumber: {
      handler() {
        console.log("Updated caseNumber to: " + this.caseNumber);
        localStorage.setItem("caseNumber", JSON.stringify(this.caseNumber));
      },
      deep: true
    },
    wiki: {
      handler() {
        console.log("Updated wiki to: " + this.wiki);
        localStorage.setItem("wiki", JSON.stringify(this.wiki));
      },
      deep: true
    },
    description: {
      handler() {
        console.log("Updated description to: " + this.description);
        localStorage.setItem("description", JSON.stringify(this.description));
      },
      deep: true
    },
    question: {
      handler() {
        console.log("Updated question to: " + this.question);
        localStorage.setItem("question", JSON.stringify(this.question));
      },
      deep: true
    },
    applicable: {
      handler() {
        console.log("Updated applicable info to: " + this.applicable);
        localStorage.setItem("applicable", JSON.stringify(this.applicable));
      },
      deep: true
    },
    cssPBX: {
      handler() {
        console.log("Updated cssPBX info to: " + this.cssPBX);
        localStorage.setItem("cssPBX", JSON.stringify(this.cssPBX));
      },
      deep: true
    }
  },
  mounted() {
    // console.log("App mounted");
    if (localStorage.getItem("caseNumber"))
      this.caseNumber = JSON.parse(localStorage.getItem("caseNumber"));
    if (localStorage.getItem("wiki"))
      this.wiki = JSON.parse(localStorage.getItem("wiki"));
    if (localStorage.getItem("description"))
      this.description = JSON.parse(localStorage.getItem("description"));
    if (localStorage.getItem("question"))
      this.question = JSON.parse(localStorage.getItem("question"));
    if (localStorage.getItem("applicable"))
      this.applicable = JSON.parse(localStorage.getItem("applicable"));
    if (localStorage.getItem("cssPBX"))
      this.cssPBX = JSON.parse(localStorage.getItem("cssPBX"));
  }
};
</script>

<style lang='less'>
.star {
  color: transparent;
}

#slack-bold {
  color: transparent;
  margin-left: -4px;
}
</style>
