<template>
  <div>
    <section
      class="background-color-selection"
      v-bind:style="{ backgroundColor: colorBG,  'background-image': 'url(' + imageData + ')', color: labelColor  }"
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
        <div class="app-container">
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
      <div slot="header">Themes</div>

      <div slot="body">
        <div id="modal-labels" @click="showThemes = !showThemes">
          Video Game Themes
          <i id="theme-arrow" v-if="showThemes" class="material-icons">expand_more</i>
          <i id="theme-arrow" v-if="!showThemes" class="material-icons">expand_less</i>
        </div>
        <div>
          <div class="grid-container3" v-if="!showThemes">
            <div class="grid-item3">
              <label>
                <input
                  @click="greenTunicTheme()"
                  name="greenTunic"
                  type="radio"
                  value="greenTunic"
                  v-model="greenTunic"
                >
                <span id="modal-labels">Kokiri Tunic</span>
              </label>
            </div>
            <div class="grid-item3">
              <label>
                <input
                  @click="blueTunicTheme()"
                  name="blueTunic"
                  type="radio"
                  value="blueTunic"
                  v-model="blueTunic"
                >
                <span id="modal-labels">Zora Tunic</span>
              </label>
            </div>

            <div class="grid-item3">
              <label>
                <input
                  @click="redTunicTheme()"
                  name="redTunic"
                  type="radio"
                  value="redTunic"
                  v-model="redTunic"
                >
                <span id="modal-labels">Goron Tunic</span>
              </label>
            </div>
          </div>
          <hr>
          <div class="grid-container">
            <div class="grid-item">
              <label id="modal-labels" for="foreground">Foreground:</label>
            </div>
            <div class="grid-item">
              <input class="color-selection" type="color" v-model="color" value="Color Select">
            </div>
            <div class="grid-item">
              <label id="modal-labels" for="foreground">Foreground Hex:</label>
            </div>
            <div class="grid-item">
              <input id="hex" v-model="color">
            </div>

            <div class="grid-item">
              <label id="modal-labels" for="foreground">Background:</label>
            </div>
            <div class="grid-item">
              <input class="color-selection" type="color" v-model="colorBG" value="Color Select">
            </div>
            <div class="grid-item">
              <label id="modal-labels" for="foreground">Background Hex:</label>
            </div>
            <div class="grid-item">
              <input id="hex" v-model="colorBG">
            </div>

            <!-- <div class="grid-item">
              <label id="modal-labels" for="foreground">Label Color:</label>
            </div>
            <div class="grid-item">
              <input class="color-selection" type="color" v-model="labelColor" value="Color Select">
            </div>

            <div class="grid-item">
              <label id="modal-labels" for="foreground">Text Color:</label>
            </div>
            <div class="grid-item">
              <input class="color-selection" type="color" v-model="textColor" value="Color Select">
            </div>-->
          </div>

          <div class="grid-container2">
            <div class="grid-item2">
              <label id="modal-labels">Background Image:</label>
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
                <label class="modal-labels" for="file">
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
          <Button class="btn-primary" buttonTitle="reset" @click="defaultColorScheme()"/>
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
      labelColor: "",
      imageData: "",
      greenTunic: false,
      blueTunic: false,
      redTunic: false,
      showModal: false,
      showThemes: true
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
    },
    removeImage() {
      this.imageData = "";
    },
    displayNotificationSuccess() {
      this.$snotify.success("Reset!");
    },
    displayNotificationWarning() {
      this.$snotify.error("Unsupported File");
    },
    defaultColorScheme() {
      this.color = "#353535";
      this.colorBG = "#212121";
      this.labelColor = "#f5f5f5";
      this.imageData = "";
      this.greenTunic = false;
      this.blueTunic = false;
      this.redTunic = false;
      this.displayNotificationSuccess();
    },
    greenTunicTheme() {
      this.colorBG = "#1b3614";
      this.color = "#306424";
      this.greenTunic = true;
      this.blueTunic = false;
      this.redTunic = false;
      this.imageData = "";
    },
    blueTunicTheme() {
      this.colorBG = "#0D2240";
      this.color = "#205399";
      this.greenTunic = false;
      this.blueTunic = true;
      this.redTunic = false;
      this.imageData = "";
    },
    redTunicTheme() {
      this.colorBG = "#401816";
      this.color = "#7d1313";
      this.greenTunic = false;
      this.redTunic = true;
      this.blueTunic = false;
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
    labelColor: {
      handler() {
        console.log("Updated labelColor to: " + this.labelColor);
        localStorage.setItem("labelColor", JSON.stringify(this.labelColor));
      },
      deep: true
    },
    greenTunic() {
      console.log("Updated greenTunic to: " + this.greenTunic);
      localStorage.setItem("greenTunic", JSON.stringify(this.greenTunic));
    },
    blueTunic() {
      console.log("Updated blueTunic to: " + this.blueTunic);
      localStorage.setItem("blueTunic", JSON.stringify(this.blueTunic));
    },
    redTunic() {
      console.log("Updated redTunic to: " + this.redTunic);
      localStorage.setItem("redTunic", JSON.stringify(this.redTunic));
    }
  },
  created() {
    window.addEventListener("scroll", this.toTop);
    if (navigator.userAgent.indexOf("Firefox") !== -1) {
      console.log("Firefox");
      alert("JiveNotes will not work in Firefox, please use Chrome");
    }
    if (navigator.userAgent.indexOf("Chrome") !== -1) {
      console.log("Chrome");
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.toTop);
  },
  mounted() {
    console.log("mounted");
    setTimeout(() => {
      this.isLoading = false;
    }, 2800);

    var i;
    console.log("local storage");
    for (i = 0; i < localStorage.length; i++) {
      console.log(
        localStorage.key(i) + " = " + localStorage.getItem(localStorage.key(i))
      );
    }

    if (localStorage.getItem("color"))
      this.color = JSON.parse(localStorage.getItem("color"));
    if (localStorage.getItem("colorBG"))
      this.colorBG = JSON.parse(localStorage.getItem("colorBG"));
    if (localStorage.getItem("labelColor"))
      this.labelColor = JSON.parse(localStorage.getItem("labelColor"));
    if (localStorage.getItem("imageData"))
      this.imageData = JSON.parse(localStorage.getItem("imageData"));
    if (localStorage.getItem("greenTunic"))
      this.greenTunic = JSON.parse(localStorage.getItem("greenTunic"));
    if (localStorage.getItem("blueTunic"))
      this.blueTunic = JSON.parse(localStorage.getItem("blueTunic"));
    if (localStorage.getItem("redTunic"))
      this.redTunic = JSON.parse(localStorage.getItem("redTunic"));
  }
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
body {
  background-color: #212121;
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
  font-family: Montserrat !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #353535;
  border-radius: 4px;
  padding: 12px;
  width: 92%;
  max-width: 900px;
  height: 100%;
  /* min-height: 518px; */
  margin: 25px auto;
  overflow-y: auto;
  overflow-x: hidden;
  /* box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2); */
}

.no-select {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
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

input {
  /* font-family: Montserrat; */
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

label,
span {
  font-size: 14px;
  color: #f5f5f5;
}
input,
textarea {
  font-family: Montserrat;
  color: #f5f5f5;
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
  color: #fff !important;
}

.sub-title {
  color: #fff;
}

.text {
  color: #fff;
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
.grid-item {
  text-align: left;
  height: 35px;
}
.grid-container2 {
  display: grid;
  grid-template-columns: auto;
}
.grid-item2 {
  text-align: left;
}

.grid-container3 {
  display: grid;
  grid-template-columns: auto auto;
}
.grid-item3 {
  text-align: left;
}

#modal-labels {
  font-size: 12px;
  color: #000 !important;
  font-family: Montserrat;
  text-align: left;
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

::selection {
  background: #c2d500;
  color: #fff;
}
::-moz-selection {
  background: #c2d500;
  color: #fff;
}

#theme-arrow {
  font-size: 24px;
  vertical-align: bottom;
  cursor: pointer;
}

.extra-notes > li {
  padding-left: 15px;
}
</style>
