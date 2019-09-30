<template>
  <div>
    <div class="title">Email</div>
    <div class="line">------------------------------------------------------</div>
    <label>Agent Name | {{ new Date() | moment("dddd, MMMM Do YYYY") }}</label>
    <textarea-autosize rows="1" v-model="emailAgentName"></textarea-autosize>
    <br>

    <label>Contact Name / (Admin/User/Partner):</label>
    <textarea-autosize id="contact" rows="1" v-model="emailContact"></textarea-autosize>
    <br>

    <label>Email Received:</label>
    <textarea-autosize v-model="emailReceived" rows="1"></textarea-autosize>
    <br>

    <Tooltip @copyReply="copyReply" tooltip="true" tooltipIcon="file_copy" moreInfo="Copy Reply"/>

    <label>My Reply:</label>
    <textarea-autosize id="replyText" placeholder v-model="emailReply" rows="1"></textarea-autosize>
    <div class="line">------------------------------------------------------</div>
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
import Tooltip from "./Tooltip";

export default {
  data: () => ({
    emailAgentName: "",
    emailContact: "",
    emailReceived: "",
    emailReply: "",
    showModal: false,
    showStopwatch: false
  }),
  components: {
    LabelInputs,
    Button,
    Modal,
    Tooltip
  },
  methods: {
    copyReply() {
      console.log("Copied Reply");
      var copyText = document.getElementById("replyText");
      copyText.select();
      document.execCommand("copy");
      document.execCommand("unselect");
      this.displayNotificationSuccess();
    },
    insertTemplate() {
      var copyTemplate = document.getElementById("templateText");
      copyTemplate.select();
      document.execCommand("copy");
      document.execCommand("unselect");
      this.displayNotificationSuccess();
    },
    copyNotes() {
      document.execCommand("unselect");
      document.execCommand("selectAll");
      document.execCommand("copy");
      document.execCommand("unselect");
      console.log("copy");
      this.displayNotificationSuccess();
    },
    clearNotes() {
      this.emailContact = "";
      this.emailReceived = "";
      this.emailReply = "";
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
    emailAgentName: {
      handler() {
        console.log("Updated emailAgentName to: " + this.emailAgentName);
        localStorage.setItem(
          "emailAgentName",
          JSON.stringify(this.emailAgentName)
        );
      },
      deep: true
    },
    emailContact: {
      handler() {
        console.log("Updated emailContact to: " + this.emailContact);
        localStorage.setItem("emailContact", JSON.stringify(this.emailContact));
      },
      deep: true
    },
    emailReceived: {
      handler() {
        console.log("Updated emailReceived to: " + this.emailReceived);
        localStorage.setItem(
          "emailReceived",
          JSON.stringify(this.emailReceived)
        );
      },
      deep: true
    },
    emailReply: {
      handler() {
        console.log("Updated emailReply to: " + this.emailReply);
        localStorage.setItem("emailReply", JSON.stringify(this.emailReply));
      },
      deep: true
    }
  },
  mounted() {
    // console.log("App mounted");
    if (localStorage.getItem("emailAgentName"))
      this.emailAgentName = JSON.parse(localStorage.getItem("emailAgentName"));
    if (localStorage.getItem("emailContact"))
      this.emailContact = JSON.parse(localStorage.getItem("emailContact"));
    if (localStorage.getItem("emailReceived"))
      this.emailReceived = JSON.parse(localStorage.getItem("emailReceived"));
    if (localStorage.getItem("emailReply"))
      this.emailReply = JSON.parse(localStorage.getItem("emailReply"));
  }
};
</script>

<style lang='less'>
</style>
