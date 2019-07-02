<template>
  <div>
    <div v-for="label in labels" :key="label[0]" class="row">
      <label>{{ label.text }}</label>
      <div v-for="(text, index) in settings.text" :key="text[0]">
        <textarea
          v-model="settings.text[index]"
          id="textarea1"
          class="materialize-textarea validate"
        ></textarea>
      </div>
      <br>
    </div>
    <Button class="button2" buttonTitle="copy" @click="copyNotes()"/>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  data() {
    return {
      settings: [{ text: "hi" }, { text: "hi2" }],
      labels: [
        { text: "Agent Name/Date of Contact:", data: "agentName" },
        { text: "Contact Name / (Admin/User/Partner):" },
        { text: "Summary of Issue/Request:" },
        { text: "Device Ext/MAC (if applicable):" },
        {
          text:
            "Network Topology(IP info, ISP, Router Model #, Router Password, etc. if applicable):"
        },
        {
          text:
            "Troubleshooting/Replication Steps (Dial Plan Changes, PBX Changes, Network Changes, Device Interface Changes, include call examples/sip logs if applicable):"
        },
        { text: "Resolution/Escalation(Was issue resolved or escalated?):" },
        { text: "Notes:" }
      ],
      values: [{ text: "1" }, { text: "2" }]
    };
  },
  components: {
    Button
  },
  methods: {
    copyNotes() {
      console.log(this.vmodelData.data);
      document.execCommand("unselect");
      document.execCommand("selectAll");
      document.execCommand("copy");
      document.execCommand("unselect");
      console.log("copy");
      this.displayNotificationSuccess();
    },
    displayNotificationSuccess() {
      this.$snotify.success("Copied!");
    }
  }
};
</script>

<style>
textarea.materialize-textarea.valid {
  border-bottom: 1px solid #C4D600;
  box-shadow: 0 1px 0 0 #C4D600;
}

textarea.materialize-textarea:focus:not([readonly]) {
  border-bottom: 1px solid #0091ea;
  box-shadow: 0 1px 0 0 #0091ea;
}

textarea.materialize-textarea {
  line-height: normal;
  overflow-y: hidden;
  padding: 0.8rem 0 0.8rem 0;
  resize: none;
  min-height: 2rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #f5f5f5;
  margin: 0 0 -10px 0;
}

label {
  color: #c4c4c4;
  font-size: 12px;
}
</style>
