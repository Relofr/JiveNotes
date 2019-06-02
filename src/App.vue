<template>
  <div>
    <section>
      <div v-if="isLoading">
        <span>
          <Loading/>
        </span>
      </div>
      <div id="app" v-else>
        <a id="gotopbtn" v-on:scroll="toTopButton = !toTopButton;" class="gotopbtn" href="#">
          <i class="material-icons">arrow_upward</i>
        </a>
        <div class="app-container">
          <Navbar class="no-select"/>
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
import Stopwatch from "./components/Stopwatch";
import Loading from "./components/Loading";

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
    Stopwatch,
    Footer
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
  beforeCreate() {
    console.log("beforeCreate");
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
    }, 2900);
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
  border-radius: 8px;
  padding: 20px;
  width: 80%;
  max-width: 700px;
  height: 100%;
  margin: 0 auto;
  overflow-y: auto;
  overflow-x: hidden;
}

.app-container {
  width: 100%;
  max-width: 800px;
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
  background: #e53935;
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
</style>
