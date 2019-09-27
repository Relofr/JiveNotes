<template>
  <div>
    <div class="title">SIP Response Codes</div>
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

    <table id="table-wrapper" class="text">
      <tr>
        <th>Code</th>
        <th>Name</th>
        <th>Description</th>
        <th>Type</th>
      </tr>

      <tr v-for="codes in filteredSIPcodes" :key="codes[0]">
        <td>{{ codes.code }}</td>
        <td>{{ codes.name }}</td>
        <td>{{ codes.desc }}</td>
        <td>{{ codes.type }}</td>
      </tr>
    </table>
    <div id="error_four" v-if="filteredSIPcodes.length === 0">
      <div class="error-title">404: SIP Code Not Found</div>
      <img id="gif" src="../assets/stormtrooper.gif">
      <!-- <div class="face">¯\_(ツ)_/¯</div> -->
    </div>
  </div>
</template>

<script>
import sipJson from "../Codes";
export default {
  data() {
    return {
      search: "",
      showDesc: true,
      sipJson
    };
  },
  computed: {
    filteredSIPcodes() {
      var self = this;
      return this.sipJson.SIPcodes.filter(function(code) {
        return (
          code.code.toLowerCase().indexOf(self.search.toLowerCase()) >= 0 ||
          code.name.toLowerCase().indexOf(self.search.toLowerCase()) >= 0 ||
          code.desc.toLowerCase().indexOf(self.search.toLowerCase()) >= 0 ||
          code.type.toLowerCase().indexOf(self.search.toLowerCase()) >= 0
        );
      });
    }
  },
  methods: {
    toggleDesc() {
      this.showDesc = !this.showDesc;
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
.face {
  font-size: 3em;
}

#table-wrapper {
  border-collapse: collapse;
  width: 100%;
  margin: 75px 0px 35px 0px;
  font-size: 14px;
}

#table-wrapper td,
#table-wrapper th {
  // border-bottom: 0.5px solid #5b5b5b;
  padding: 8px;
}

#table-wrapper tr:nth-child(odd) {
  // background-color: rgba(0, 0, 0, 0.2);
}

#table-wrapper tr:hover {
  border: none;
  background-color: rgba(0, 0, 0, 0.5);
}

#table-wrapper th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: rgba(0, 0, 0, 0.5);
  color: #f5f5f5;
  // border: 1px solid rgba(0, 0, 0, 0.5);
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
</style>
