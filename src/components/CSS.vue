<template>
  <div>
    <div class="title">CSS</div>
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
    <textarea-autosize placeholder v-model="question" rows="1"></textarea-autosize>
    <br>

    <label>PBX:</label>
    <textarea-autosize placeholder v-model="cssPBX" rows="1"></textarea-autosize>
    <br>

    <label>Applicable Information:</label>
    <textarea-autosize placeholder="N/A" v-model="applicable" rows="1"></textarea-autosize>

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

<style lang='less' scoped>
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
  margin-bottom: 25px;
  font-size: 14px;
  background-color: transparent;
  color: #f5f5f5;
}

.star {
  color: transparent;
}
</style>
