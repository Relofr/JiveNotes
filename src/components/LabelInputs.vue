<template>
  <div>
    <label>{{ labelTitle | capitalize }}</label>
    <span v-show="showDate">{{ new Date() | moment("dddd, MMMM Do YYYY") }}</span>
    <textarea-autosize :placeholder="placeholder" v-if="autosize" rows="1"></textarea-autosize>
    <input v-else :placeholder="placeholder" :value="value">
    <br>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["labelTitle", "value", "placeholder", "showDate", "autosize"],
  components: {},
  methods: {
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>

<style lang='less'>
label,
span {
  font-size: 12px;
}
input,
textarea {
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid #666;
  margin-bottom: 25px;
  font-size: 14px;
  background-color: transparent;
  color: #f5f5f5;
  &:focus {
    border-bottom: 2px solid #4fc3f7;
  }
}
</style>
