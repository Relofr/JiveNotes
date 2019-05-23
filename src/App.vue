<template>
  <div id="app">
    <div v-if="!isLoading">
      <Loading/>
    </div>
    <div class="app-container" v-else>
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
      isLoading: false
    };
  },
  components: {
    Navbar,
    Loading,
    Stopwatch,
    Footer
  },
  methods: {},
  created() {},
  watch: {},
  computed: {}
};
</script>

<style>
body {
  background-color: #212121;
  color: #f5f5f5;
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

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
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
</style>
