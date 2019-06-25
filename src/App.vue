<template>
  <div>
    <section>
      <div v-if="isLoading">
        <span>
          <Loading/>
        </span>
      </div>
      <div id="app" class="z-depth-2" v-else>
        <a id="gotopbtn" v-on:scroll="toTopButton = !toTopButton;" class="gotopbtn" href="#">
          <i class="material-icons no-select">arrow_upward</i>
        </a>
        <div class="app-container">
          <div class="main-title">JiveNotes</div>
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
Notification.requestPermission().then(function(result) {
  if (result === "denied") {
    console.log("Permission wasn't granted. Allow a retry.");
    return;
  }
  if (result === "default") {
    console.log("The permission request was dismissed.");
    return;
  }
});
export default {
  name: "App",
  data() {
    return {
      showStopwatch: false,
      isLoading: true,
      toTopButton: true
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
  watch: {},
  beforeCreate() {
    console.log("beforeCreate");
    Notification.requestPermission().then(function(result) {
      if (result === "denied") {
        console.log("Permission wasn't granted. Allow a retry.");
        return;
      }
      if (result === "default") {
        console.log("The permission request was dismissed.");
        return;
      }
      // Do something with the granted permission.
    });
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
  }
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
body {
  background-color: #212121;
  margin: 0;
  padding: 0;
  color: #f5f5f5;
}
section {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 20px;
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
  margin: 0 auto;
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
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background: #787c80;
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
  background: #b15dc1;
}
.snotify-success {
  background-color: #0091ea;
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
  color: #c4c4c4;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
