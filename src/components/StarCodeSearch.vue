<template>
  <div>
    <div class="title star">Star Codes</div>
    <div class="search">
      <input
        autocomplete="off"
        autocorrect="off"
        autocapitalize="off"
        spellcheck="false"
        type="text"
        v-model="search"
        placeholder
        id="search_bar"
      >
      <i id="search-icon" class="material-icons">search</i>
    </div>

    <table id="customers">
      <tr>
        <th>Code</th>
        <th>Description</th>
      </tr>

      <tr v-for="starCode in filterredStarCodes" :key="starCode[0]">
        <td id="starCode">{{ starCode.starCode }}</td>
        <td>{{ starCode.starDesc }}</td>
      </tr>
    </table>
    <!-- <div id="error_four" v-if="filterredStarCodes.length === 0">
      <div class="error-title">404: SIP Code Not Found</div>
      <img id="gif" src="../assets/stormtrooper.gif">
    </div>-->
  </div>
</template>

<script>
import starCodeJson from "../StarCodes";
import Dropdown from "./Dropdown";
export default {
  data() {
    return {
      search: "",
      starCodeJson
    };
  },
  components: {
    Dropdown
  },
  computed: {
    filterredStarCodes() {
      var self = this;
      return this.starCodeJson.StarCodes.filter(function(starCode) {
        return (
          starCode.starCode.toLowerCase().indexOf(self.search.toLowerCase()) >=
            0 ||
          starCode.starDesc.toLowerCase().indexOf(self.search.toLowerCase()) >=
            0
        );
      });
    }
  }
};
</script>

<style lang='less' scoped>
.search {
  text-align: center;
  margin: 20px 0px 60px 0px;
  height: 0;
}

#search-icon {
  position: absolute;
  margin-left: -35px;
  font-size: 26px;
  line-height: 32px;
  color: #2a3a4a;
  border-radius: 50px;
  cursor: pointer;
}

.search:hover > #search_bar {
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  border-color: rgba(223, 225, 229, 0);
}

#search_bar {
  height: 28px;
  width: 45%;
  max-width: 650px;
  border-radius: 50px;
  outline: none;
  border: 1px solid #dfe1e5;
  padding-left: 15px;
  padding-right: 40px;
  background-color: #f5f5f5;
  color: rgba(0, 0, 0, 0.87);
  z-index: 3;
}

#search_bar:focus,
#search_bar:hover {
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  border-color: rgba(223, 225, 229, 0);
}

.error-title {
  margin-bottom: 10px;
}

#error_four {
  text-align: center;
  font-size: 22px;
  color: #f5f5f5;
  padding-bottom: 30px;
}

.title {
  text-align: center;
  font-size: 22px;
  color: #f5f5f5;
}

.face {
  font-size: 3em;
}

#customers {
  border-collapse: collapse;
  width: 100%;
  margin: 75px 0px 35px 0px;
  font-size: 14px;
}

#customers td,
#customers th {
  // border-bottom: 0.5px solid #5b5b5b;
  padding: 8px;
}

#customers tr:nth-child(even) {
  // background-color: rgba(242, 242, 242, 0.5);
}

#customers tr:hover {
  background-color: #5b5b5b;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #212121;
  color: #f5f5f5;
  border: 1px solid #212121;
}

#gif {
  border-radius: 4px;
  width: 100%;
  max-width: 500px;
}

td:nth-child(1) {
  border-radius: 4px 0px 0px 4px;
}
td:nth-child(4) {
  border-radius: 0px 4px 4px 0px;
}

#starCode {
  min-width: 100px;
}

.star {
  color: #ffd700;
}
</style>
