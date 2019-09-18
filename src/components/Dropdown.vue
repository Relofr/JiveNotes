<template>
  <div class="dropdown">
    <i @click="openMenu()" id="app-switcher" class="material-icons dropdown-button">apps</i>
    <div id="dropdown-options" class="dropdown-content z-depth-2">
      <router-link to="/notes">
        Notes
        <span class="icon-container">
          <i id="notes-icon" class="material-icons">assignment</i>
        </span>
      </router-link>
      <router-link to="/css">
        CSS
        <i id="css-icon" class="material-icons">question_answer</i>
      </router-link>
      <router-link to="/email">
        Email
        <i id="email-icon" class="material-icons">email</i>
      </router-link>
      <router-link to="/callexample">
        Call Example
        <i id="callexample-icon" class="material-icons">poll</i>
      </router-link>
      <router-link to="/jiveview">
        Jive View
        <i id="jive-view-icon" class="material-icons">network_check</i>
      </router-link>
      <router-link to="/t2escalation">
        Escalate
        <i id="escalation-icon" class="material-icons">priority_high</i>
      </router-link>
      <router-link disabled to="/rma">
        RMA
        <i id="rma-icon" class="material-icons">local_shipping</i>
      </router-link>
      <router-link disabled to="/fraud">
        Fraud/Sherlock
        <i id="fraud-icon" class="material-icons">security</i>
      </router-link>
      <router-link disabled to="/siprequest">
        SIP Request
        <i id="sipreq-icon" class="material-icons">vpn_key</i>
      </router-link>
      <router-link to="/sip">
        SIP Codes
        <i id="sip-icon" class="material-icons">dialer_sip</i>
      </router-link>
      <router-link to="/star">
        Star Codes
        <i id="star-icon" class="material-icons">star</i>
      </router-link>
      <router-link to="/feedback">
        Feedback
        <i id="feedback-icon" class="material-icons">feedback</i>
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
    openMenu() {
      document.getElementById("dropdown-options").classList.toggle("show");
    }
  }
};
</script>

<style scoped lang='less'>
.dropdown-button {
  color: #f5f5f5;
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
  font-size: 14px;
  z-index: 99;
  border-radius: 4px;
  opacity: 1 !important;
}

.dropdown-content a {
  // border-bottom: 1px solid #5b5b5b;
  color: rgba(255, 255, 255, 0.9);
  padding: 10px 5px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown a:hover {
  // background-color: #686868;
  background-color: rgba(0, 0, 0, 0.2);
}

.show {
  display: flex;
  flex-direction: column;
}

#app-switcher {
  z-index: -1;
  font-size: 28px;
}

#notes-icon,
#email-icon,
#jive-view-icon,
#css-icon,
#callexample-icon,
#escalation-icon,
#rma-icon,
#fraud-icon,
#sipreq-icon,
#sip-icon,
#star-icon,
#feedback-icon {
  float: left;
  line-height: 18px;
  font-size: 24px;
  margin-right: 10px;
}

// #notes-icon {
//   color: #76bf79;
// }
// #email-icon {
//   color: #ad3232;
// }

// #jive-view-icon {
//   color: #00cdcd;
// }
// #css-icon {
//   color: #0091ea;
// }
// #callexample-icon {
//   color: #fff;
// }
// #escalation-icon {
//   color: #ec407a;
// }
// #rma-icon {
//   color: #ff8d1a;
// }
// #sip-icon {
//   color: #d24dff;
// }
// #fraud-icon {
//   color: red;
// }
// #sipreq-icon {
//   color: #fff;
// }
// #star-icon {
//   color: #ffd700;
// }
// #feedback-icon:hover {
//   color: #007AFF;
// }

i:hover {
  opacity: 0.9;
}

.dropdown a:hover {
  // color: #0091ea !important;
}

.router-link-exact-active,
.router-link-active {
  color: rgba(0, 0, 0, 0.2);
  background-color: #0091ea !important;
}
</style>
