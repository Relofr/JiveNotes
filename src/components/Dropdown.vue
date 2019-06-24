<template>
  <div class="dropdown">
    <i @click="myFunction()" id="app-switcher" class="material-icons dropdown-button">apps</i>
    <div id="dropdown-options" class="dropdown-content">
      <router-link to="/notes">
        Notes
        <i id="notes-icon" class="material-icons">assignment</i>
      </router-link>
      <router-link to="/css">
        CSS
        <i id="css-icon" class="material-icons">question_answer</i>
      </router-link>
      <router-link to="/callexample">
        Call
        <i id="callexample-icon" class="material-icons">poll</i>
      </router-link>
      <router-link to="/t2escalation">
        T2
        <i id="escalation-icon" class="material-icons">priority_high</i>
      </router-link>
      <router-link disabled to="/rma">
        RMA
        <i id="rma-icon" class="material-icons">local_shipping</i>
      </router-link>
      <router-link to="/sip">
        SIP Codes
        <i id="sip-icon" class="material-icons">dialer_sip</i>
      </router-link>
      <router-link to="/star">
        Star Codes
        <i id="star-icon" class="material-icons">star</i>
      </router-link>
    </div>
  </div>
</template>

<script>
window.onclick = function(event) {
  if (!event.target.matches(".dropdown-button")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
export default {
  data() {
    return {};
  },
  methods: {
    myFunction() {
      document.getElementById("dropdown-options").classList.toggle("show");
    }
  }
};
</script>

<style scoped lang='less'>
.dropdown-button {
  color: white;
  border: none;
  cursor: pointer;
}

.dropdown-button:hover,
.dropdown-button:focus {
  outline: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #424242;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  font-size: 14px;
  z-index: 99;
  border-radius: 4px;
  opacity: 1 !important;
  top: 32px;
  left: 4px;
}

.dropdown-content a {
  /* border-bottom: 1px solid #5b5b5b; */
  color: #fff;
  padding: 10px 5px;
  text-decoration: none;
  display: block;
  text-align: center;
}

.dropdown a:hover {
  background-color: #686868;
}

.show {
  display: block;
}

#notes-icon,
#css-icon,
#callexample-icon,
#escalation-icon,
#rma-icon,
#sip-icon,
#star-icon {
  float: right;
  line-height: 18px;
  font-size: 28px;
  margin-right: 18px;
}
#notes-icon {
  color: #76bf79;
}
#css-icon {
  color: #0091ea;
}
#callexample-icon {
  color: #fff;
}
#escalation-icon {
  color: #ec407a;
}
#rma-icon {
  color: #ff8d1a;
}
#sip-icon {
  color: #d24dff;
}
#star-icon {
  color: #ffd700;
}

#app-switcher {
  z-index: -1;
  font-size: 28px;
}
.router-link-exact-active,
.router-link-active {
  background-color: #686868;
  color: #000;
}
</style>
