<template>
  <div>
    <label>Approved By:</label>
    <textarea-autosize id="approved" autofocus rows="1" v-model="T2approved"></textarea-autosize>
    <br>

    <label>Contact Name and Number (If different than Case Requester):</label>
    <textarea-autosize rows="1" v-model="T2contact"></textarea-autosize>
    <br>

    <label>Issue (Full Scope of Issue, Devices Affected):</label>
    <textarea-autosize v-model="T2issue" rows="1"></textarea-autosize>
    <br>

    <label>Troubleshooting/Replication Steps:</label>
    <textarea-autosize placeholder="N/A" v-model="T2replication" rows="1"></textarea-autosize>
    <br>

    <label>Configuration Changes:</label>
    <textarea-autosize placeholder="N/A" v-model="T2configuration" rows="1"></textarea-autosize>
    <br>

    <label>Network Layout (IP info, ISP, Equipment, Logon Credentials, etc.):</label>
    <textarea-autosize placeholder="N/A" v-model="T2networkLayout" rows="1"></textarea-autosize>
    <br>

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
    T2approved: "",
    T2contact: "",
    T2issue: "",
    T2replication: "",
    T2configuration: "",
    T2networkLayout: "",
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
      this.T2approved = "";
      this.T2contact = "";
      this.T2issue = "";
      this.T2replication = "";
      this.T2configuration = "";
      this.T2networkLayout = "";
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
  },
  watch: {
    T2approved: {
      handler() {
        console.log("Updated T2approved to: " + this.T2approved);
        localStorage.setItem("T2approved", JSON.stringify(this.T2approved));
      },
      deep: true
    },
    T2contact: {
      handler() {
        console.log("Updated T2contact to: " + this.T2contact);
        localStorage.setItem("T2contact", JSON.stringify(this.T2contact));
      },
      deep: true
    },
    T2issue: {
      handler() {
        console.log("Updated T2issue to: " + this.T2issue);
        localStorage.setItem("T2issue", JSON.stringify(this.T2issue));
      },
      deep: true
    },
    T2replication: {
      handler() {
        console.log("Updated T2replication to: " + this.T2replication);
        localStorage.setItem(
          "T2replication",
          JSON.stringify(this.T2replication)
        );
      },
      deep: true
    },
    T2configuration: {
      handler() {
        console.log("Updated T2configuration to: " + this.T2configuration);
        localStorage.setItem(
          "T2configuration",
          JSON.stringify(this.T2configuration)
        );
      },
      deep: true
    },
    T2networkLayout: {
      handler() {
        console.log("Updated T2networkLayout to: " + this.T2networkLayout);
        localStorage.setItem(
          "T2networkLayout",
          JSON.stringify(this.T2networkLayout)
        );
      },
      deep: true
    }
  },
  mounted() {
    console.log("App mounted");
    if (localStorage.getItem("T2approved"))
      this.T2approved = JSON.parse(localStorage.getItem("T2approved"));
    if (localStorage.getItem("T2contact"))
      this.T2contact = JSON.parse(localStorage.getItem("T2contact"));
    if (localStorage.getItem("T2issue"))
      this.T2issue = JSON.parse(localStorage.getItem("T2issue"));
    if (localStorage.getItem("T2replication"))
      this.T2replication = JSON.parse(localStorage.getItem("T2replication"));
    if (localStorage.getItem("T2configuration"))
      this.T2configuration = JSON.parse(
        localStorage.getItem("T2configuration")
      );
    if (localStorage.getItem("T2networkLayout"))
      this.T2networkLayout = JSON.parse(
        localStorage.getItem("T2networkLayout")
      );
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