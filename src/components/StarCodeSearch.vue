<template>
  <div>
    <div class="title">Star Codes</div>

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

    <span class="no-select">Below are some extra functions that can be used on the Jive system.</span>
    <ul class="extra-notes">
      <li>Dial 0 in front of an extension, such as 0111, to be directed straight to that extension’s voicemail.</li>
      <li>Press the asterisk (*) while listening to a voicemail greeting to gain access to that extension’s voicemail box. This is useful when a user wants to listen to their messages but doesn't have access to a Jive phone.</li>
      <li>Dial 611 from a Jive phone to dial Jive Support.</li>
    </ul>

    <table id="customers" class="text">
      <tr>
        <th>Code</th>
        <th>Description</th>
      </tr>

      <tr v-for="starCode in filterredStarCodes" :key="starCode[0]">
        <td id="starCode">{{ starCode.starCode }}</td>
        <td>{{ starCode.starDesc }}</td>
      </tr>
    </table>

    <div id="error_four" v-if="filterredStarCodes.length === 0">
      <div class="error-title">404: Star Code Not Found</div>
      <img id="gif" src="../assets/stormtrooper.gif">
    </div>
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

<style lang='less'>
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
  padding: 8px;
}

#customers tr:nth-child(even) {
  // background-color: rgba(242, 242, 242, 0.5);
}

#customers tr:hover {
  background-color: rgba(0, 0, 0, 0.5);
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: rgba(0, 0, 0, 0.5);
  color: #f5f5f5;
}

#gif {
  border-radius: 4px;
  width: 100%;
  max-width: 500px;
}

td:nth-child(1) {
  // border-radius: 4px 0px 0px 4px;
}
td:nth-child(4) {
  // border-radius: 0px 4px 4px 0px;
}

#starCode {
  min-width: 100px;
}

ul,
li {
  color: #f5f5f5;
}
</style>
