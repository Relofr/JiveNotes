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
    <md-table class="table-wrapper" md-card>
      <md-table-row>
        <md-table-head>Code</md-table-head>
        <md-table-head>Name</md-table-head>
        <md-table-head>Description</md-table-head>
        <md-table-head>Type</md-table-head>
      </md-table-row>

      <md-table-row v-for="codes in filteredHeroes" :key="codes[0]">
        <md-table-cell md-label="Code" md-sort-by="id">{{ codes.code }}</md-table-cell>
        <md-table-cell md-label="Name" md-sort-by="name">{{ codes.name }}</md-table-cell>
        <md-table-cell md-label="Description" md-sort-by="desc">{{ codes.desc }}</md-table-cell>
        <md-table-cell md-label="Type" md-sort-by="type">{{ codes.type }}</md-table-cell>
        <!-- <md-table-cell>
          <div class="code">{{ codes.code }}</div>
        </md-table-cell>
        <md-table-cell>
          <div class="type">{{ codes.name }}</div>
        </md-table-cell>
        <md-table-cell>
          <div class="desc">{{ codes.desc }}</div>
        </md-table-cell>
        <md-table-cell>
          <div class="type">{{ codes.type }}</div>
        </md-table-cell>-->
      </md-table-row>
    </md-table>
    <div id="error_four" v-if="filteredHeroes.length === 0">
      <md-table-empty-state md-label="404" :md-description="`SIP Code: '${search}' Not Found`"></md-table-empty-state>
      <div class="face">¯\_(ツ)_/¯</div>
    </div>
  </div>
</template>

<script>
import json from "../Codes";
export default {
  data() {
    return {
      search: "",
      showDesc: true,
      json
    };
  },
  computed: {
    filteredHeroes() {
      var self = this;
      return this.json.SIPcodes.filter(function(code) {
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
  },
  watch() {
    if (filteredHeroes.length === 0) {
      var element = document.getElementById("myDIV");
      element.classList.add("mystyle");
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
  margin-left: -40px;
  font-size: 25px;
  line-height: 40px;
  color: #2a3a4a;
  background-color: #f5f5f5;
  border-radius: 50px;
  cursor: pointer;
}

.search:hover > #search_bar {
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  border-color: rgba(223, 225, 229, 0);
}

#search_bar {
  height: 40px;
  width: 50%;
  max-width: 650px;
  border-radius: 50px;
  outline: none;
  border: 1px solid #dfe1e5;
  padding-left: 15px;
  background-color: #f5f5f5;
  color: rgba(0, 0, 0, 0.87);
  z-index: 3;
}

#search_bar:focus,
#search_bar:hover {
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  border-color: rgba(223, 225, 229, 0);
}

.code {
  font-size: 18px;
  font-weight: bold;
}
.desc {
  font-size: 16px;
}
.md-table-row:hover:not(:first-child) {
  /* transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1); */
  background-color: #5b5b5b;
  color: #f5f5f5;
}

#error_four {
  text-align: center;
  font-size: 22px;
  color: #f5f5f5;
}

.title {
  text-align: center;
  font-size: 22px;
  color: #f5f5f5;
}

tbody {
  background: #353535;
  color: #f5f5f5;
}

tbody .md-table-row td {
  border-top: 1px solid #5b5b5b;
}

.md-table-row:nth-child(:first-child) {
  border-radius: 8px;
}
.face {
  font-size: 3em;
}
</style>
