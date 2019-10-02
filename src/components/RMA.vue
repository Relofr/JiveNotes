<template>
  <div>
    <div class="title">RMA</div>
    <span
      class="sub-title no-select"
    >The warranty starts from the ShipDate, or Shipping Date, found in the Comments section of the Fusion ticket.
      <ul class="extra-notes">
        <li>Customer Owned: 1 Year (12 Months) unless noted otherwise</li>
        <li>Rentals: 3 Years (36 Months)</li>
        <li>Returns for Credit: 30 Days (1 Month)</li>
      </ul>
    </span>
    <div class="sub-title">- RMA -</div>
    <label>Ship To Name (Customer/Business/Partner):</label>
    <textarea-autosize id="cases" autofocus rows="1" v-model="shipToName"></textarea-autosize>
    <br>

    <label>Mac address(es):</label>
    <textarea-autosize placeholder="N/A" v-model="RMAmac" rows="1"></textarea-autosize>
    <br>

    <label>Model(s):</label>
    <textarea-autosize placeholder="N/A" v-model="models" rows="1"></textarea-autosize>
    <br>

    <label>Fusion Ticket Link::</label>
    <textarea-autosize placeholder="N/A" v-model="fusionlink" rows="1"></textarea-autosize>
    <br>

    <label>Verified Shipping Address:</label>
    <textarea-autosize rows="1" v-model="streetAddress"></textarea-autosize>
    <br>

    <label>Purchased/Rental:</label>
    <textarea-autosize rows="1" v-model="purchasedrental"></textarea-autosize>
    <br>

    <label>Warranty? Yes/No:</label>
    <textarea-autosize rows="1" v-model="warranty"></textarea-autosize>
    <br>

    <!-- <label>Suite, Building, Floor, Etc:</label>
    <textarea-autosize placeholder="N/A" v-model="suiteBuildingFloor" rows="1"></textarea-autosize>
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
    <br>-->
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
    shipToName: "",
    RMAmac: "",
    models: "",
    fusionlink: "",
    streetAddress: "",
    purchasedrental: "",
    warranty: "",
    // suiteBuildingFloor: "",
    // cityStateZip: "",
    // country: "",
    // contactFirstNameLastName: "",
    // contactPhoneNumber: "",
    // contactEmailAddress: "",
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
      this.RMAmac = "";
      this.models = "";
      this.fusionlink = "";
      this.streetAddress = "";
      this.purchasedrental = "";
      this.warranty = "";
      // this.suiteBuildingFloor = "";
      // this.cityStateZip = "";
      // this.country = "";
      // this.contactFirstNameLastName = "";
      // this.contactPhoneNumber = "";
      // this.contactEmailAddress = "";
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
    RMAmac: {
      handler() {
        console.log("Updated RMAmac to: " + this.RMAmac);
        localStorage.setItem("RMAmac", JSON.stringify(this.RMAmac));
      },
      deep: true
    },
    // suiteBuildingFloor: {
    //   handler() {
    //     console.log(
    //       "Updated suiteBuildingFloor to: " + this.suiteBuildingFloor
    //     );
    //     localStorage.setItem(
    //       "suiteBuildingFloor",
    //       JSON.stringify(this.suiteBuildingFloor)
    //     );
    //   },
    //   deep: true
    // },
    models: {
      handler() {
        console.log("Updated models to: " + this.models);
        localStorage.setItem("models", JSON.stringify(this.models));
      },
      deep: true
    },
    fusionlink: {
      handler() {
        console.log("Updated fusionlink to: " + this.fusionlink);
        localStorage.setItem("fusionlink", JSON.stringify(this.models));
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
    purchasedrental: {
      handler() {
        console.log("Updated purchasedrental to: " + this.purchasedrental);
        localStorage.setItem("purchasedrental", JSON.stringify(this.models));
      },
      deep: true
    },
    warranty: {
      handler() {
        console.log("Updated warranty to: " + this.warranty);
        localStorage.setItem("warranty", JSON.stringify(this.models));
      },
      deep: true
    }
    // cityStateZip: {
    //   handler() {
    //     console.log("Updated cityStateZip to: " + this.cityStateZip);
    //     localStorage.setItem("cityStateZip", JSON.stringify(this.cityStateZip));
    //   },
    //   deep: true
    // },
    // country: {
    //   handler() {
    //     console.log("Updated country info to: " + this.country);
    //     localStorage.setItem("country", JSON.stringify(this.country));
    //   },
    //   deep: true
    // },
    // contactFirstNameLastName: {
    //   handler() {
    //     console.log(
    //       "Updated contactFirstNameLastName info to: " +
    //         this.contactFirstNameLastName
    //     );
    //     localStorage.setItem(
    //       "contactFirstNameLastName",
    //       JSON.stringify(this.contactFirstNameLastName)
    //     );
    //   },
    //   deep: true
    // },
    // contactPhoneNumber: {
    //   handler() {
    //     console.log(
    //       "Updated contactPhoneNumber info to: " + this.contactPhoneNumber
    //     );
    //     localStorage.setItem(
    //       "contactPhoneNumber",
    //       JSON.stringify(this.contactPhoneNumber)
    //     );
    //   },
    //   deep: true
    // },
    // contactEmailAddress: {
    //   handler() {
    //     console.log(
    //       "Updated contactEmailAddress info to: " + this.contactEmailAddress
    //     );
    //     localStorage.setItem(
    //       "contactEmailAddress",
    //       JSON.stringify(this.contactEmailAddress)
    //     );
    //   },
    //   deep: true
    // }
  },
  mounted() {
    // console.log("App mounted");
    if (localStorage.getItem("shipToName"))
      this.shipToName = JSON.parse(localStorage.getItem("shipToName"));
    if (localStorage.getItem("streetAddress"))
      this.streetAddress = JSON.parse(localStorage.getItem("streetAddress"));
    // if (localStorage.getItem("suiteBuildingFloor"))
    //   this.suiteBuildingFloor = JSON.parse(
    //     localStorage.getItem("suiteBuildingFloor")
    //   );
    if (localStorage.getItem("RMAmac"))
      this.RMAmac = JSON.parse(localStorage.getItem("RMAmac"));
    if (localStorage.getItem("models"))
      this.models = JSON.parse(localStorage.getItem("models"));
    if (localStorage.getItem("fusionlink"))
      this.fusionlink = JSON.parse(localStorage.getItem("fusionlink"));
    if (localStorage.getItem("purchasedrental"))
      this.purchasedrental = JSON.parse(
        localStorage.getItem("purchasedrental")
      );
    if (localStorage.getItem("warranty"))
      this.warranty = JSON.parse(localStorage.getItem("warranty"));
    // if (localStorage.getItem("cityStateZip"))
    //   this.cityStateZip = JSON.parse(localStorage.getItem("cityStateZip"));
    // if (localStorage.getItem("country"))
    //   this.country = JSON.parse(localStorage.getItem("country"));
    // if (localStorage.getItem("contactFirstNameLastName"))
    //   this.contactFirstNameLastName = JSON.parse(
    //     localStorage.getItem("contactFirstNameLastName")
    //   );
    // if (localStorage.getItem("contactPhoneNumber"))
    //   this.contactPhoneNumber = JSON.parse(
    //     localStorage.getItem("contactPhoneNumber")
    //   );
    // if (localStorage.getItem("contactEmailAddress"))
    //   this.contactEmailAddress = JSON.parse(
    //     localStorage.getItem("contactEmailAddress")
    //   );
  }
};
</script>

<style lang='less'>
</style>
