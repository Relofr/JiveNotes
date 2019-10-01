<template>
  <div>
    <div class="title">Sip Request</div>

    <div
      class="no-select text"
    >If the customer DOES NOT have previously approved SIP credential requests within the last 12 months, you must submit the request to a supervisor by following the steps continued below.
      <br>
      <br>Obtain the following information from the customer:
    </div>
    <br>

    <label>Customer Name:</label>
    <textarea-autosize id="contact" rows="1" v-model="sipReqCustomerName"></textarea-autosize>
    <br>

    <label>Company Name:</label>
    <textarea-autosize v-model="sipReqCompanyName" rows="1"></textarea-autosize>
    <br>

    <label>Type of device the customer is wanting to provision:</label>
    <textarea-autosize v-model="sipReqDevice" rows="1"></textarea-autosize>
    <br>

    <label>Device name, Extension name and number the customer wants SIP credentials for:</label>
    <textarea-autosize v-model="sipReqDeviceExtension" rows="1"></textarea-autosize>
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
import Modal from "./Modal";
import Tooltip from "./Tooltip";

export default {
  data: () => ({
    sipReqCustomerName: "",
    sipReqCompanyName: "",
    sipReqDevice: "",
    sipReqDeviceExtension: "",
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
      this.sipReqCustomerName = "";
      this.sipReqCompanyName = "";
      this.sipReqDevice = "";
      this.sipReqDeviceExtension = "";
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
    sipReqCustomerName: {
      handler() {
        console.log(
          "Updated sipReqCustomerName to: " + this.sipReqCustomerName
        );
        localStorage.setItem(
          "sipReqCustomerName",
          JSON.stringify(this.sipReqCustomerName)
        );
      },
      deep: true
    },
    sipReqCompanyName: {
      handler() {
        console.log("Updated sipReqCompanyName to: " + this.sipReqCompanyName);
        localStorage.setItem(
          "sipReqCompanyName",
          JSON.stringify(this.sipReqCompanyName)
        );
      },
      deep: true
    },
    sipReqDevice: {
      handler() {
        console.log("Updated sipReqDevice to: " + this.sipReqDevice);
        localStorage.setItem("sipReqDevice", JSON.stringify(this.sipReqDevice));
      },
      deep: true
    },
    sipReqDeviceExtension: {
      handler() {
        console.log(
          "Updated sipReqDeviceExtension to: " + this.sipReqDeviceExtension
        );
        localStorage.setItem(
          "sipReqDeviceExtension",
          JSON.stringify(this.sipReqDeviceExtension)
        );
      },
      deep: true
    }
  },
  mounted() {
    if (localStorage.getItem("sipReqCustomerName"))
      this.sipReqCustomerName = JSON.parse(
        localStorage.getItem("sipReqCustomerName")
      );
    if (localStorage.getItem("sipReqCompanyName"))
      this.sipReqCompanyName = JSON.parse(
        localStorage.getItem("sipReqCompanyName")
      );
    if (localStorage.getItem("sipReqDevice"))
      this.sipReqDevice = JSON.parse(localStorage.getItem("sipReqDevice"));
    if (localStorage.getItem("sipReqDeviceExtension"))
      this.sipReqDeviceExtension = JSON.parse(
        localStorage.getItem("sipReqDeviceExtension")
      );
  }
};
</script>

<style lang='less'>
</style>
