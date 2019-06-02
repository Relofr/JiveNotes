<template>
  <div id="mySidenav" class="sidenav">
    <router-link id="notes" to="/notes">
      Notes
      <i class="material-icons">note</i>
    </router-link>
    <router-link id="css" to="/css">
      CSS
      <i class="material-icons">question_answer</i>
    </router-link>
    <router-link id="callexample" to="/callexample">
      Call E.g.
      <i class="material-icons">call</i>
    </router-link>
    <router-link id="t2escalation" to="/t2escalation">
      T2
      <i class="material-icons">priority_high</i>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
#mySidenav a {
  position: fixed;
  left: -80px;
  transition: 0.3s;
  padding: 15px;
  width: 100px;
  height: 28px;
  text-decoration: none;
  font-size: 1em;
  color: white;
  border-radius: 0 8px 8px 0;
  z-index: 99;
  line-height: 28px;
}
#mySidenav i {
  float: right;
  width: 20px;
  padding-right: 5px;
  font-size: 28px;
}

#mySidenav a:hover {
  left: 0;
}

#notes {
  top: 8px;
  background-color: #4CAF50;
}

#css {
  top: 78px;
  background-color: #2196F3;
}

#callexample {
  top: 148px;
  background-color: #555;
}

#t2escalation {
  top: 218px;
  background-color: #f44336;
}

@media only screen and (max-width: 730px) {
  #mySidenav a {
    width: 95px;
  }
}

@media only screen and (max-width: 660px) {
  #mySidenav a {
    width: 85px;
  }
  #mySidenav i {
    float: right;
    width: 15px;
    padding-right: 0;
    font-size: 24px;
  }
}

@media only screen and (max-width: 530px) {
  #mySidenav a {
    width: 80px;
  }
  #mySidenav i {
    float: right;
    width: 15px;
    padding-right: 0;
    font-size: 24px;
  }
}
</style>
