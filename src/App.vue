<template>
  <div>
    <section
      class="background-color-selection"
      v-bind:style="{ backgroundColor: colorBG,  'background-image': 'url(' + imageData + ')'  }"
    >
      <div v-if="isLoading">
        <span>
          <Loading/>
        </span>
      </div>
      <div id="app" class="z-depth-2" v-else v-bind:style="{ backgroundColor: color}">
        <a id="gotopbtn" v-on:scroll="toTopButton = !toTopButton;" class="gotopbtn" href="#">
          <i class="material-icons no-select">arrow_upward</i>
        </a>
        <div class="app-container" v-bind:style="{ color: colorText}">
          <i @click="showModal = true" class="material-icons no-select" id="settings">settings</i>
          <!-- <div class="main-title">JiveNotes</div> -->
          <Dropdown class="no-select"/>
          <!-- <Navbar class="no-select"/> -->
          <transition name="component-fade" mode="out-in">
            <router-view/>
          </transition>
          <Footer class="no-select footer-container"/>
          <div v-if="showStopwatch" class="stopwatch-container">
            <Stopwatch/>
          </div>
          <vue-snotify class="no-select"></vue-snotify>
        </div>
      </div>
    </section>
    <Modal v-if="showModal" @close="showModal = false">
      <div slot="header">Settings</div>
      <div slot="body">
        <div>
          <div class="grid-container">
            <div class="grid-item">
              <label id="color-selection-labels" for="foreground">Foreground:</label>
            </div>
            <div class="grid-item">
              <input class="color-selection" type="color" v-model="color" value="Color Select">
            </div>
            <div class="grid-item">
              <label id="color-selection-labels" for="foreground">Foreground Hex:</label>
            </div>
            <div class="grid-item">
              <input id="hex" v-model="color">
            </div>

            <div class="grid-item">
              <label id="color-selection-labels" for="foreground">Background:</label>
            </div>
            <div class="grid-item">
              <input class="color-selection" type="color" v-model="colorBG" value="Color Select">
            </div>
            <div class="grid-item">
              <label id="color-selection-labels" for="foreground">Background Hex:</label>
            </div>
            <div class="grid-item">
              <input id="hex" v-model="colorBG">
            </div>

            <!-- <div class="grid-item">
              <label id="color-selection-labels" for="foreground">Text:</label>
            </div>
            <div class="grid-item">
              <input class="color-selection" type="color" v-model="colorText" value="Color Select">
            </div>
            <div class="grid-item">
              <label id="color-selection-labels" for="foreground">Text Color Hex:</label>
            </div>
            <div class="grid-item">
              <input id="hex" v-model="colorText">
            </div>-->
          </div>
          <div class="grid-container2">
            <div class="grid-item">
              <label id="color-selection-labels">Background Image:</label>
              <div class="image-selection-container">
                <input
                  type="file"
                  name
                  accept="image/*"
                  @change="uploadImage"
                  class="inputfile"
                  id="file"
                >
                <!-- <i id="image-icon" @change="uploadImage" class="material-icons">image</i> -->
                <div v-show="this.imageData != ''" class="image-preview">
                  <img :src="imageData">
                </div>
                <label class="color-selection-labels" for="file">
                  <i
                    v-show="this.imageData === ''"
                    id="image-icon"
                    @change="uploadImage"
                    class="material-icons"
                  >image</i>
                </label>
                <i
                  v-show="this.imageData != ''"
                  id="remove-image-icon"
                  class="material-icons"
                  @click="removeImage()"
                >delete</i>
              </div>
              <p id="file-types">Supported Files: .jpeg, .jpg, .png, .gif, .svg</p>
            </div>
          </div>
          <Button
            id="default-button"
            class="button"
            buttonTitle="reset"
            @click="defaultColorScheme()"
          />
        </div>
      </div>
      <i slot="footer" id="clearIconModal" class="material-icons" @click="showModal = false">close</i>
    </Modal>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Dropdown from "./components/Dropdown";
import Modal from "./components/Modal";
import Button from "./components/Button";
import CSS from "./components/CSS";
import Stopwatch2 from "./components/Stopwatch2";

export default {
  name: "App",
  data() {
    return {
      showStopwatch: false,
      isLoading: true,
      toTopButton: true,
      color: "",
      colorBG: "",
      colorText: "",
      imageData: "",
      showModal: false
    };
  },
  components: {
    Navbar,
    Loading,
    Footer,
    Dropdown,
    Modal,
    Button,
    CSS,
    Stopwatch2
  },
  methods: {
    uploadImage(event) {
      var input = document.getElementById("file");
      var filePath = input.value;
      var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
      if (!allowedExtensions.exec(filePath)) {
        this.displayNotificationWarning();
        input.value = "";
        return false;
      } else {
        //Image preview
        if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = e => {
            this.imageData = e.target.result;
          };
          reader.readAsDataURL(input.files[0]);
        }
      }
      // var input = event.target;
      // if (input.files && input.files[0]) {
      //   var reader = new FileReader();
      //   reader.onload = e => {
      //     this.imageData = e.target.result;
      //   };
      //   reader.readAsDataURL(input.files[0]);
      // }
    },
    removeImage() {
      this.imageData = "";
    },
    displayNotificationWarning() {
      this.$snotify.error("Unsupported File");
    },
    defaultColorScheme() {
      this.color = "#353535";
      this.colorBG = "#212121";
      this.colorText = "#f5f5f5";
      this.imageData = "";
    },
    toTop() {
      if (
        document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500
      ) {
        document.getElementById("gotopbtn").style.visibility = "visible";
      } else {
        document.getElementById("gotopbtn").style.visibility = "hidden";
      }
    }
  },
  computed: {
    compTheme() {
      return {
        light: this.light
      };
    }
  },
  watch: {
    idleWatcher: {
      //       idleTimer() {
      //     var t;
      //     //window.onload = resetTimer;
      //     window.onmousemove = resetTimer; // catches mouse movements
      //     window.onmousedown = resetTimer; // catches mouse movements
      //     window.onclick = resetTimer;     // catches mouse clicks
      //     window.onscroll = resetTimer;    // catches scrolling
      //     window.onkeypress = resetTimer;  //catches keyboard actions
      //    reload() {
      //           window.location = self.location.href;  //Reloads the current page
      //    }
      //    resetTimer() {
      //         clearTimeout(t);
      //         t= setTimeout(reload, 300000);  // time is in milliseconds (1000 is 1 second)
      //     }
      // }
    },
    imageData: {
      handler() {
        // console.log("Updated imageData to: " + this.imageData);
        localStorage.setItem("imageData", JSON.stringify(this.imageData));
      },
      deep: true
    },
    color: {
      handler() {
        console.log("Updated color to: " + this.color);
        localStorage.setItem("color", JSON.stringify(this.color));
      },
      deep: true
    },
    colorBG: {
      handler() {
        console.log("Updated colorBG to: " + this.colorBG);
        localStorage.setItem("colorBG", JSON.stringify(this.colorBG));
      },
      deep: true
    },
    colorText: {
      handler() {
        console.log("Updated colorText to: " + this.colorText);
        localStorage.setItem("colorText", JSON.stringify(this.colorText));
      },
      deep: true
    }
  },
  created() {
    window.addEventListener("scroll", this.toTop);
    // var self = this;
    // setTimeout(function() {
    //   self.location.forceUpdate(true);
    // }, 5);
  },
  destroyed() {
    window.removeEventListener("scroll", this.toTop);
  },
  mounted() {
    console.log("mounted");
    setTimeout(() => {
      this.isLoading = false;
    }, 2800);

    if (navigator.userAgent.indexOf("Firefox") !== -1) {
      console.log("Firefox");
    }
    if (navigator.userAgent.indexOf("Chrome") !== -1) {
      console.log("Firefox");
    }
    if (localStorage.getItem("color"))
      this.color = JSON.parse(localStorage.getItem("color"));
    if (localStorage.getItem("colorBG"))
      this.colorBG = JSON.parse(localStorage.getItem("colorBG"));
    if (localStorage.getItem("colorText"))
      this.colorText = JSON.parse(localStorage.getItem("colorText"));
    if (localStorage.getItem("imageData"))
      this.imageData = JSON.parse(localStorage.getItem("imageData"));
  }
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
body {
  background-color: #212121;
  /* margin: 0;
  padding: 0; */
  color: #9e9e9e;
  /* font-weight: 700; */
}
section {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  height: auto;
  box-sizing: border-box;
  /* padding: 20px; */
}
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #353535;
  border-radius: 4px;
  padding: 12px;
  width: 92%;
  max-width: 900px;
  height: 100%;
  min-height: 518px;
  margin: 25px auto;
  overflow-y: auto;
  overflow-x: hidden;
  /* box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2); */
}

.app-container {
  width: 100%;
  max-width: 900px;
}

::-webkit-scrollbar {
  width: 9px;
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.5);
}

::-webkit-scrollbar-track {
  background: #ccc;
}

.snotify-centerTop,
.snotify-centerCenter,
.snotify-centerBottom {
  left: calc(50% - 250px / 2);
  bottom: 0px;
}

.snotify {
  width: 250px;
}
.snotifyToast__inner {
  min-height: 70px;
}

.snotifyToast {
  margin: 5px 0px 10px;
}

.snotify-warning {
  background: #ffa726;
}
.snotify-success {
  background-color: #0091ea;
}

.snotify-error {
  background-color: #e53935;
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}

.no-select {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

input,
textarea,
label {
  font-family: Montserrat;
  color: #f5f5f5;
}

input,
textarea {
  border-bottom: 1px solid rgba(255, 255, 255, 0.5) !important;
}

input:focus {
  box-shadow: 0 2px 0 0 rgba(255, 255, 255, 0.5);
}

textarea:focus {
  box-shadow: 0 2px 0 0 rgba(255, 255, 255, 0.5);
}

input:not([type]):focus:not([readonly]) {
  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.5);
}

.gotopbtn {
  visibility: hidden;
  position: fixed;
  width: 18px;
  height: 18px;
  bottom: 15px;
  right: 20px;
  text-align: center;
  color: #fff;
  padding: 0px;
  border-radius: 50px;
}

.title {
  text-align: center;
  font-size: 24px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.main-title {
  float: right;
  font-size: 12px;
  /* color: rgba(255, 255, 255, 0.3); */
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

#settings {
  color: rgba(255, 255, 255, 0.9);
  float: right;
  font-size: 22px;
  cursor: pointer;
  -webkit-transition: -webkit-transform 1.5s ease-in-out;
  -ms-transition: -ms-transform 2s ease-in-out;
  transition: transform 1.5s ease-in-out;
}

#settings:hover {
  transform: rotate(360deg);
  -ms-transform: rotate(360deg);
  -webkit-transform: rotate(360deg);
}

input[type="color"] {
  border: none;
  width: 70px;
  height: 30px;
  cursor: pointer;
}
input[type="color"]::-webkit-color-swatch-wrapper {
  padding: 0px;
}
input[type="color"]::-webkit-color-swatch {
  border: none;
}

.box {
  position: fixed;
  bottom: 0;
  left: 0;
}

.title {
  text-align: center;
  font-size: 22px;
  font-weight: 600;

  /* color: rgba(255, 255, 255, 0.9); */
}

label {
  color: rgba(255, 255, 255, 0.7);
}

#hex {
  text-align: right;
  height: 25px;
  color: #000 !important;
}

.color-selection {
  float: right;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto;
}
.grid-container2 {
  display: grid;
  grid-template-columns: auto;
  margin-bottom: 15px;
}
.grid-item {
  text-align: left;
}

#default-button {
  background-color: #0091ea;
}

#color-selection-labels {
  font-size: 12px;
  color: #000 !important;
}

.background-color-selection {
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  /* background-position: 50% 50%; */
}

.inputfile {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
  color: #000;
}

.inputfile > label {
  border-radius: 4px;
  display: inline-block;
  padding: 5px 10px;
}

.image-selection-container {
  display: flex;
  position: relative;
  margin-top: 15px;
}

.image-selection-container > label {
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  color: #000;
  line-height: 35px;
  cursor: pointer;
  outline: 2px dashed grey;
  border-radius: 4px;
  width: 100%;
  height: 100px;
  outline-offset: 2px;
}

#image-icon,
#remove-image-icon {
  font-size: 35px;
  cursor: pointer;
}

#remove-image-icon {
  position: absolute;
  top: 0px;
  right: 0px;
  font-size: 24px;
  z-index: 99;
  color: #fff;
}

#remove-image-icon:hover {
  color: #e53935;
}

.image-preview img {
  position: absolute;
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
}

#file-types {
  font-size: 12px;
  color: grey;
  text-transform: initial;
}
</style>
