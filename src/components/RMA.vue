<template>
  <div>
    <div class="title rma">RMA</div>
    <label>Ship To Name (Customer/Business/Partner):</label>
    <textarea-autosize id="cases" autofocus rows="1" v-model="shipToName"></textarea-autosize>
    <br>

    <label>Street Address:</label>
    <textarea-autosize rows="1" v-model="streetAddress"></textarea-autosize>
    <br>

    <label>Suite, Building, Floor, Etc:</label>
    <textarea-autosize v-model="suiteBuildingFloor" rows="1"></textarea-autosize>
    <br>

    <label>City, State, Zip:</label>
    <textarea-autosize v-model="cityStateZip" rows="1"></textarea-autosize>
    <br>

    <label>Country:</label>
    <textarea-autosize v-model="country" rows="1"></textarea-autosize>
    <br>

    <label>Contact First/Last Name:</label>
    <textarea-autosize v-model="contactFirstNameLastName" rows="1"></textarea-autosize>
    <br>

    <label>Contact Phone Number:</label>
    <textarea-autosize v-model="contactPhoneNumber" rows="1"></textarea-autosize>
    <br>

    <label>Contact Email Address:</label>
    <textarea-autosize v-model="contactEmailAddress" rows="1"></textarea-autosize>
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
import Modal from "./Modal";

export default {
  data: () => ({
    shipToName: "",
    streetAddress: "",
    suiteBuildingFloor: "",
    cityStateZip: "",
    country: "",
    contactFirstNameLastName: "",
    contactPhoneNumber: "",
    contactEmailAddress: "",
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
      this.shipToName = "";
      this.streetAddress = "";
      this.suiteBuildingFloor = "";
      this.cityStateZip = "";
      this.country = "";
      this.contactFirstNameLastName = "";
      this.contactPhoneNumber = "";
      this.contactEmailAddress = "";
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
    shipToName: {
      handler() {
        console.log("Updated shipToName to: " + this.shipToName);
        localStorage.setItem("shipToName", JSON.stringify(this.shipToName));
      },
      deep: true
    },
    streetAddress: {
      handler() {
        console.log("Updated streetAddress to: " + this.streetAddress);
        localStorage.setItem(
          "streetAddress",
          JSON.stringify(this.streetAddress)
        );
      },
      deep: true
    },
    suiteBuildingFloor: {
      handler() {
        console.log(
          "Updated suiteBuildingFloor to: " + this.suiteBuildingFloor
        );
        localStorage.setItem(
          "suiteBuildingFloor",
          JSON.stringify(this.suiteBuildingFloor)
        );
      },
      deep: true
    },
    cityStateZip: {
      handler() {
        console.log("Updated cityStateZip to: " + this.cityStateZip);
        localStorage.setItem("cityStateZip", JSON.stringify(this.cityStateZip));
      },
      deep: true
    },
    country: {
      handler() {
        console.log("Updated country info to: " + this.country);
        localStorage.setItem("country", JSON.stringify(this.country));
      },
      deep: true
    },
    contactFirstNameLastName: {
      handler() {
        console.log(
          "Updated contactFirstNameLastName info to: " +
            this.contactFirstNameLastName
        );
        localStorage.setItem(
          "contactFirstNameLastName",
          JSON.stringify(this.contactFirstNameLastName)
        );
      },
      deep: true
    },
    contactPhoneNumber: {
      handler() {
        console.log(
          "Updated contactPhoneNumber info to: " + this.contactPhoneNumber
        );
        localStorage.setItem(
          "contactPhoneNumber",
          JSON.stringify(this.contactPhoneNumber)
        );
      },
      deep: true
    },
    contactEmailAddress: {
      handler() {
        console.log(
          "Updated contactEmailAddress info to: " + this.contactEmailAddress
        );
        localStorage.setItem(
          "contactEmailAddress",
          JSON.stringify(this.contactEmailAddress)
        );
      },
      deep: true
    }
  },
  mounted() {
    // console.log("App mounted");
    if (localStorage.getItem("shipToName"))
      this.shipToName = JSON.parse(localStorage.getItem("shipToName"));
    if (localStorage.getItem("streetAddress"))
      this.streetAddress = JSON.parse(localStorage.getItem("streetAddress"));
    if (localStorage.getItem("suiteBuildingFloor"))
      this.suiteBuildingFloor = JSON.parse(
        localStorage.getItem("suiteBuildingFloor")
      );
    if (localStorage.getItem("cityStateZip"))
      this.cityStateZip = JSON.parse(localStorage.getItem("cityStateZip"));
    if (localStorage.getItem("country"))
      this.country = JSON.parse(localStorage.getItem("country"));
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
  border-bottom: 1px solid #666;
  margin-bottom: 25px;
  font-size: 14px;
  background-color: transparent;
  color: #f5f5f5;
  &:focus {
    border-bottom: 2px solid #4fc3f7;
  }
}

.rma {
  color: #ff8d1a;
}
</style>
