<template>
  <div>
    <section class="background-color-selection" v-bind:style="{ backgroundColor: colorBG}">
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
          <div class="main-title">JiveNotes</div>
          <div class="box-container">
            <div class="box">
              <div class="color-selection no-select">
                <!-- <label for="color-selection">Front</label> -->
                <input class="color-selection" type="color" v-model="color" value="Color Select">
              </div>
              <div class="background-color-selection no-select">
                <!-- <label for="color-selection">Back</label> -->
                <input
                  class="background-color-selection"
                  type="color"
                  v-model="colorBG"
                  value="Color Select"
                >
              </div>
            </div>
          </div>
          <Dropdown class="no-select"/>
          <!-- <Navbar class="no-select"/> -->
          <transition name="component-fade" mode="out-in">
            <router-view/>
          </transition>
          <Footer class="no-select"/>
          <div v-if="showStopwatch" class="stopwatch-container">
            <Stopwatch/>
          </div>
          <vue-snotify class="no-select"></vue-snotify>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Dropdown from "./components/Dropdown";
export default {
  name: "App",
  data() {
    return {
      showStopwatch: false,
      isLoading: true,
      toTopButton: true,
      color: "",
      colorBG: ""
    };
  },
  components: {
    Navbar,
    Loading,
    Footer,
    Dropdown
  },
  methods: {
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
    }
  },
  created() {
    window.addEventListener("scroll", this.toTop);
    console.log("created");
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
  color: #f5f5f5;
}
.background-color-selection {
  /* margin: 0;
  padding: 0; */
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
  padding: 20px;
  width: 90%;
  max-width: 900px;
  height: 100%;
  min-height: 495px;
  margin: 35px auto;
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
  background: #e53935;
}
.snotify-success {
  background-color: #0091ea;
}

.snotify-error {
  background-color: #ffa726;
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
}

input,
textarea {
  border-bottom: 1px solid rgba(255, 255, 255, 0.7) !important;
}

input:focus {
  border-bottom: 3px solid rgba(255, 255, 255, 0.7) !important;
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
}

.main-title {
  float: right;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.3);
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

input[type="color"] {
  /* opacity: 0; */
  /* display: flex; */
  /* flex-direction: row; */
  border: none;
  /* float: right; */
  /* position: relative; */
  /* top: 0; */
  /* right: 0; */
  /* margin-right: 15px; */
  width: 20px;
  height: 20px;
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

.box-container {
  /* background-color: red;
  width: 50px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 99; */
}

.title {
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  /* color: rgba(0, 0, 0, 0.5); */
  color: rgba(255, 255, 255, 0.8);
}

label {
  color: rgba(255, 255, 255, 0.6) !important;
}
</style>
