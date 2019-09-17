<template>
  <div>
    <div class="title">Fraud | Sherlock</div>
    <div class="line">------------------------------------------------------</div>
    <label>Agent Name | {{ new Date() | moment("dddd, MMMM Do YYYY") }}</label>
    <textarea-autosize rows="1" v-model="fraudAgentName"></textarea-autosize>
    <br>

    <label>Account Name:</label>
    <textarea-autosize id="fraudAccountName" rows="1" v-model="fraudAccountName"></textarea-autosize>
    <br>

    <label>Case:</label>
    <textarea-autosize id="fraudCaseNumber" rows="1" v-model="fraudCaseNumber"></textarea-autosize>
    <br>

    <label>Domain:</label>
    <textarea-autosize v-model="fraudDomain" rows="1"></textarea-autosize>
    <br>

    <label>Are they a Super Admin?</label>
    <textarea-autosize id="replyText" placeholder v-model="fraudSuperAdmin" rows="1"></textarea-autosize>
    <br>

    <label>Bill up to date?</label>
    <textarea-autosize id="replyText" placeholder v-model="fraudBill" rows="1"></textarea-autosize>
    <br>

    <label>How many phones are on the account?</label>
    <textarea-autosize id="replyText" placeholder v-model="fraudPhones" rows="1"></textarea-autosize>
    <br>

    <label>How long have they been a customer?</label>
    <textarea-autosize id="replyText" placeholder v-model="fraudHowLong" rows="1"></textarea-autosize>
    <br>

    <label>How often do they call number/country? (Hours and days)</label>
    <textarea-autosize id="replyText" placeholder v-model="fraudHowOften" rows="1"></textarea-autosize>
    <br>

    <label>How long do their calls last? (hours per day)</label>
    <textarea-autosize id="replyText" placeholder v-model="fraudLongCalls" rows="1"></textarea-autosize>
    <br>

    <label>What countries?</label>
    <textarea-autosize id="replyText" placeholder v-model="fraudCountries" rows="1"></textarea-autosize>
    <br>

    <label>What is the nature of their calls? (personal, upselling, lead generation, support, etc)</label>
    <textarea-autosize id="replyText" placeholder v-model="fraudNatureOfCalls" rows="1"></textarea-autosize>
    <br>

    <label>What Numbers are being dialed or is it the whole country?</label>
    <textarea-autosize id="replyText" placeholder v-model="fraudNumbers" rows="1"></textarea-autosize>
    <br>

    <label>Call example - To: From: Date/Time(timezone): Result: Kibana: Call ID:</label>
    <textarea-autosize id="replyText" placeholder v-model="fraudCallExample" rows="1"></textarea-autosize>
    <div class="line">------------------------------------------------------</div>
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
    fraudAgentName: "",
    fraudAccountName: "",
    fraudCaseNumber: "",
    fraudDomain: "",
    fraudSuperAdmin: "",
    fraudBill: "",
    fraudPhones: "",
    fraudHowLong: "",
    fraudHowOften: "",
    fraudLongCalls: "",
    fraudCountries: "",
    fraudNatureOfCalls: "",
    fraudNumbers: "",
    fraudCallExample: "",
    showModal: false,
    showStopwatch: false
  }),
  components: {
    LabelInputs,
    Button,
    Modal
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
    copyNotes() {
      document.execCommand("unselect");
      document.execCommand("selectAll");
      document.execCommand("copy");
      document.execCommand("unselect");
      console.log("copy");
      this.displayNotificationSuccess();
    },
    clearNotes() {
      this.fraudAccountName = "";
      this.fraudCaseNumber = "";
      this.fraudDomain = "";
      this.fraudSuperAdmin = "";
      this.fraudBill = "";
      this.fraudPhones = "";
      this.fraudHowOften = "";
      this.fraudLongCalls = "";
      this.fraudHowLong = "";
      this.fraudCountries = "";
      this.fraudNatureOfCalls = "";
      this.fraudNumbers = "";
      this.fraudCallExample = "";
      document.getElementById("fraudAccountName").focus();

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
    fraudAgentName: {
      handler() {
        console.log("Updated fraudAgentName to: " + this.fraudAgentName);
        localStorage.setItem(
          "fraudAgentName",
          JSON.stringify(this.fraudAgentName)
        );
      },
      deep: true
    },
    fraudAccountName: {
      handler() {
        console.log("Updated fraudAccountName to: " + this.fraudAccountName);
        localStorage.setItem(
          "fraudAccountName",
          JSON.stringify(this.fraudAccountName)
        );
      },
      deep: true
    },
    fraudCaseNumber: {
      handler() {
        console.log("Updated fraudCaseNumber to: " + this.fraudCaseNumber);
        localStorage.setItem(
          "fraudCaseNumber",
          JSON.stringify(this.fraudCaseNumber)
        );
      },
      deep: true
    },
    fraudDomain: {
      handler() {
        console.log("Updated fraudDomain to: " + this.fraudDomain);
        localStorage.setItem("fraudDomain", JSON.stringify(this.fraudDomain));
      },
      deep: true
    },
    fraudSuperAdmin: {
      handler() {
        console.log("Updated fraudSuperAdmin to: " + this.fraudSuperAdmin);
        localStorage.setItem(
          "fraudSuperAdmin",
          JSON.stringify(this.fraudSuperAdmin)
        );
      },
      deep: true
    },
    fraudBill: {
      handler() {
        console.log("Updated fraudBill to: " + this.fraudBill);
        localStorage.setItem("fraudBill", JSON.stringify(this.fraudBill));
      },
      deep: true
    },
    fraudPhones: {
      handler() {
        console.log("Updated fraudPhones to: " + this.fraudPhones);
        localStorage.setItem("fraudPhones", JSON.stringify(this.fraudPhones));
      },
      deep: true
    },
    fraudHowLong: {
      handler() {
        console.log("Updated fraudHowLong to: " + this.fraudHowLong);
        localStorage.setItem("fraudHowLong", JSON.stringify(this.fraudHowLong));
      },
      deep: true
    },
    fraudHowOften: {
      handler() {
        console.log("Updated fraudHowOften to: " + this.fraudHowOften);
        localStorage.setItem(
          "fraudHowOften",
          JSON.stringify(this.fraudHowOften)
        );
      },
      deep: true
    },
    fraudLongCalls: {
      handler() {
        console.log("Updated fraudLongCalls to: " + this.fraudLongCalls);
        localStorage.setItem(
          "fraudLongCalls",
          JSON.stringify(this.fraudLongCalls)
        );
      },
      deep: true
    },
    fraudCountries: {
      handler() {
        console.log("Updated fraudCountries to: " + this.fraudCountries);
        localStorage.setItem(
          "fraudCountries",
          JSON.stringify(this.fraudCountries)
        );
      },
      deep: true
    },
    fraudNatureOfCalls: {
      handler() {
        console.log(
          "Updated fraudNatureOfCalls to: " + this.fraudNatureOfCalls
        );
        localStorage.setItem(
          "fraudNatureOfCalls",
          JSON.stringify(this.fraudNatureOfCalls)
        );
      },
      deep: true
    },
    fraudNumbers: {
      handler() {
        console.log("Updated fraudNumbers to: " + this.fraudNumbers);
        localStorage.setItem("fraudNumbers", JSON.stringify(this.fraudNumbers));
      },
      deep: true
    },
    fraudCallExample: {
      handler() {
        console.log("Updated fraudCallExample to: " + this.fraudCallExample);
        localStorage.setItem(
          "fraudCallExample",
          JSON.stringify(this.fraudCallExample)
        );
      },
      deep: true
    }
  },
  mounted() {
    if (localStorage.getItem("fraudAgentName"))
      this.fraudAgentName = JSON.parse(localStorage.getItem("fraudAgentName"));
    if (localStorage.getItem("fraudAccountName"))
      this.fraudAccountName = JSON.parse(
        localStorage.getItem("fraudAccountName")
      );
    if (localStorage.getItem("fraudCaseNumber"))
      this.fraudCaseNumber = JSON.parse(
        localStorage.getItem("fraudCaseNumber")
      );
    if (localStorage.getItem("fraudDomain"))
      this.fraudDomain = JSON.parse(localStorage.getItem("fraudDomain"));
    if (localStorage.getItem("fraudSuperAdmin"))
      this.fraudSuperAdmin = JSON.parse(
        localStorage.getItem("fraudSuperAdmin")
      );
    if (localStorage.getItem("fraudBill"))
      this.fraudBill = JSON.parse(localStorage.getItem("fraudBill"));
    if (localStorage.getItem("fraudPhones"))
      this.fraudPhones = JSON.parse(localStorage.getItem("fraudPhones"));
    if (localStorage.getItem("fraudHowLong"))
      this.fraudHowLong = JSON.parse(localStorage.getItem("fraudHowLong"));
    if (localStorage.getItem("fraudHowOften"))
      this.fraudHowOften = JSON.parse(localStorage.getItem("fraudHowOften"));
    if (localStorage.getItem("fraudLongCalls"))
      this.fraudLongCalls = JSON.parse(localStorage.getItem("fraudLongCalls"));
    if (localStorage.getItem("fraudCountries"))
      this.fraudCountries = JSON.parse(localStorage.getItem("fraudCountries"));
    if (localStorage.getItem("fraudNatureOfCalls"))
      this.fraudNatureOfCalls = JSON.parse(
        localStorage.getItem("fraudNatureOfCalls")
      );
    if (localStorage.getItem("fraudNumbers"))
      this.fraudNumbers = JSON.parse(localStorage.getItem("fraudNumbers"));
    if (localStorage.getItem("fraudCallExample"))
      this.fraudCallExample = JSON.parse(
        localStorage.getItem("fraudCallExample")
      );
  }
};
</script>

<style lang='less' scoped>
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
}

.line {
  color: transparent;
}
</style>
