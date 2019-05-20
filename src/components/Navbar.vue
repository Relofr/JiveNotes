<template>
  <div class="topnav">
    <router-link to="/">Notes</router-link>
    <router-link to="/css">CSS</router-link>
    <router-link to="/callexample">Call Example</router-link>
    <router-link to="/t2escalation">T2 Escalation</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
.topnav {
  background-color: #C4D600;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 25px;
}

.topnav a {
  float: left;
  color: #000;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  color: black;
}

.topnav a.active {
  color: white;
}
</style>
