<template>
  <div>
    <span class="icon">
      <i id="settings-icon" @click="showSettingsModal = true" class="material-icons">settings</i>
    </span>

    <Modal v-if="showSettingsModal" @close="showSettingsModal = false">
      <span slot="version">v4.0</span>
      <span slot="body">
        <p>Hotkeys</p>
        <p>Ctrl + C | Copy Notes</p>
        <p>Ctrl + X | Clear Notes</p>
        <!-- <p>Ctrl + B | Toggle Theme</p> -->
      </span>
      <Button slot="footer" class="button" buttonTitle="Close" @click="showSettingsModal = false"/>
    </Modal>
  </div>
</template>

<script>
import Modal from "./Modal";
import Button from "./Button";
export default {
  data() {
    return {
      showSettingsModal: false
    };
  },
  components: {
    Modal,
    Button
  }
};
</script>

<style lang='less'>
.icon i {
  font-size: 26px;
  line-height: 32px;
  -webkit-transition: -webkit-transform 2s ease-in-out;
  -ms-transition: -ms-transform 2s ease-in-out;
  transition: transform 2s ease-in-out;
  cursor: pointer;
  &:hover {
    &:hover {
      transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
    }
  }
}

// @-moz-keyframes spin {
//   100% {
//     -moz-transform: rotate(360deg);
//   }
// }
// @-webkit-keyframes spin {
//   100% {
//     -webkit-transform: rotate(360deg);
//   }
// }
// @keyframes spin {
//   100% {
//     -webkit-transform: rotate(360deg);
//     transform: rotate(360deg);
//   }
// }
</style>
