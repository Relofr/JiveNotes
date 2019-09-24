<template>
  <div>
    <div class="title">Important Notes</div>
    <div class="line">------------------------------------------------------</div>
    <Tooltip tooltip="true" tooltipIcon="help_outline" moreInfo="Agent Name will not clear"/>

    <label>Agent Name | {{ new Date() | moment("dddd, MMMM Do YYYY") }}</label>
    <textarea-autosize @keydown="checkNumber()" rows="1" v-model="agentName" required></textarea-autosize>
    <br>

    <label>Contact Name:</label>
    <textarea-autosize id="contact" rows="1" autofocus v-model="contact" required></textarea-autosize>
    <br>

    <label>Permissions:</label>
    <input v-model="permissions" list="permissions" name="permissions" required>
    <datalist id="permissions">
      <option value="Super Admin"></option>
      <option value="Admin"></option>
      <option value="User"></option>
      <option value="Non User"></option>
      <option value="Partner"></option>
    </datalist>
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
    <textarea-autosize
      v-on:keyup="addDash()"
      id="troubleshooting"
      placeholder
      v-model="troubleshooting"
      rows="1"
    ></textarea-autosize>

    <br>
    <label>Resolution/Escalation(Was issue resolved or escalated?):</label>
    <textarea-autosize rows="1" v-model="resolution"></textarea-autosize>
    <div class="line">------------------------------------------------------</div>
    <Tooltip tooltip="true" tooltipIcon="help_outline" moreInfo="Notes will not clear or copy"/>

    <label class="no-select">Notes:</label>
    <div class="no-select">
      <textarea-autosize rows="1" v-model="notes"></textarea-autosize>
    </div>

    <div class="buttons">
      <Button id="button" class="button" buttonTitle="clear" @click="showModal = true"/>
      <Button
        class="button2"
        buttonTitle="copy"
        @click="copyNotes()"
        :disabled="!permissions || !agentName || !contact"
      />
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
    agentName: "",
    contact: "",
    permissions: "",
    summary: "",
    devices: "",
    network: "",
    troubleshooting: "",
    resolution: "",
    notes: "",
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
    collapse() {
      var acc = document.getElementsByClassName("accordion");
      var i;

      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
        });
      }
    },
    addDash(e) {
      if (e.keyCode === 13) {
        console.log("Enter");
        document.getElementById("troubleshooting").innerHTML += "-";
      }
    },
    checkNumber() {
      console.log("checkNumber function");
      var adminInput = this.contact;
      adminInput.replace(1, "Admin");
    },
    copyNotes() {
      document.execCommand("unselect");
      if (document.execCommand("selectAll")) {
        console.log("Select All");
      }
      if (document.execCommand("copy")) {
        console.log("Copy");
      }
      if (document.execCommand("unselect")) {
        console.log("Unselect");
      }
      this.displayNotificationSuccess();
    },
    clearNotes() {
      this.contact = "";
      this.permissions = "";
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
    },
    displayNotificationError() {
      this.$snotify.error("Error!");
    }
  },
  watch: {
    agentName: {
      handler() {
        console.log("Updated agentName to: " + this.agentName);
        localStorage.setItem("agentName", JSON.stringify(this.agentName));
      },
      deep: true
    },
    contact: {
      handler() {
        console.log("Updated contact to: " + this.contact);
        localStorage.setItem("contact", JSON.stringify(this.contact));
      },
      deep: true
    },
    permissions: {
      handler() {
        console.log("Updated permissions to: " + this.permissions);
        localStorage.setItem("permissions", JSON.stringify(this.permissions));
      },
      deep: true
    },
    summary: {
      handler() {
        console.log("Updated summary to: " + this.summary);
        localStorage.setItem("summary", JSON.stringify(this.summary));
      },
      deep: true
    },
    devices: {
      handler() {
        console.log("Updated devices to: " + this.devices);
        localStorage.setItem("devices", JSON.stringify(this.devices));
      },
      deep: true
    },
    network: {
      handler() {
        console.log("Updated network to: " + this.network);
        localStorage.setItem("network", JSON.stringify(this.network));
      },
      deep: true
    },
    troubleshooting: {
      handler() {
        console.log("Updated troubleshooting to: " + this.troubleshooting);
        localStorage.setItem(
          "troubleshooting",
          JSON.stringify(this.troubleshooting)
        );
      },
      deep: true
    },
    resolution: {
      handler() {
        console.log("Updated resolution to: " + this.resolution);
        localStorage.setItem("resolution", JSON.stringify(this.resolution));
      },
      deep: true
    },
    notes: {
      handler() {
        console.log("Updated notes to: " + this.notes);
        localStorage.setItem("notes", JSON.stringify(this.notes));
      },
      deep: true
    }
  },
  mounted() {
    if (localStorage.getItem("agentName"))
      this.agentName = JSON.parse(localStorage.getItem("agentName"));
    if (localStorage.getItem("contact"))
      this.contact = JSON.parse(localStorage.getItem("contact"));
    if (localStorage.getItem("permissions"))
      this.permissions = JSON.parse(localStorage.getItem("permissions"));
    if (localStorage.getItem("summary"))
      this.summary = JSON.parse(localStorage.getItem("summary"));
    if (localStorage.getItem("devices"))
      this.devices = JSON.parse(localStorage.getItem("devices"));
    if (localStorage.getItem("network"))
      this.network = JSON.parse(localStorage.getItem("network"));
    if (localStorage.getItem("troubleshooting"))
      this.troubleshooting = JSON.parse(
        localStorage.getItem("troubleshooting")
      );
    if (localStorage.getItem("resolution"))
      this.resolution = JSON.parse(localStorage.getItem("resolution"));
    if (localStorage.getItem("notes"))
      this.notes = JSON.parse(localStorage.getItem("notes"));
  }
};
</script>

<style lang='less' scoped>
.line {
  color: transparent;
}

label {
  // color: #c4c4c4;
}

label,
span {
  font-size: 12px;
}
input,
textarea {
  width: 100%;
  height: 21px;
  border: none;
  outline: none;
  margin-bottom: 25px;
  font-size: 14px;
  background-color: transparent;
  // color: #f5f5f5;
}

input:not([type]):focus:not([readonly]) {
  // border-bottom: 1px solid #4fc3f7;
}

.no-select {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

:disabled {
  background-color: lightgray;
  color: #696969;
  cursor: not-allowed;
}

input:invalid {
  border-bottom: 1.5px solid #ec407a !important;
  box-shadow: none !important;
}
textarea:invalid {
  border-bottom: 1.5px solid #ec407a !important;
  box-shadow: none !important;
}

.accordion {
  color: #444;
  cursor: pointer;
  padding: 18px;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: 0.4s;
}

.panel {
  padding: 0 18px;
  display: none;
  overflow: hidden;
}
</style>
