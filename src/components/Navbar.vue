<template>
  <div class="navbar2">
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
      <i id="call-icon" class="material-icons">call</i>
    </router-link>
    <router-link to="/t2escalation">
      T2
      <i id="t2-icon" class="material-icons">priority_high</i>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
.navbar2 {
  width: 100%;
  overflow: hidden;
  padding-bottom: 20px;
}

.navbar2 a {
  font-family: "Montserrat", sans-serif;
  float: left;
  color: white;
  text-decoration: none;
  font-size: 1em;
  width: 25%;
  height: 39px;
  line-height: 39px;
  text-align: center;
  border-radius: 8px;
  text-transform: uppercase;
  font-weight: 600;
}

// .navbar2 a:hover {
//   background-color: #C4D600;
//   color: #000;
// }

.router-link-exact-active,
.router-link-active a {
  background-color: #fff;
  color: #000 !important;
}

.router-link-exact-active,
.router-link-active #notes-icon {
  color: #76bf79;
}

.router-link-exact-active,
.router-link-active #css-icon {
  color: #45bbf6;
}

.router-link-exact-active,
.router-link-active #call-icon {
  color: #ffa726;
}

.router-link-exact-active,
.router-link-active #t2-icon {
  color: #ec407a;
}

.navbar2 i {
  line-height: 36px;
  font-size: 28px;
  height: 39px;
  vertical-align: middle;
}

:focus {
  outline: none;
}

@media only screen and (max-width: 630px) {
  .navbar2 a {
    font-size: 0.8em;
  }
}
</style>
