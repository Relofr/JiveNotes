<template>
  <div>
    <i
      @click="$emit('copyReply')"
      id="help-icon"
      v-show="tooltip"
      v-tooltip.top-center="moreInfo"
      class="material-icons"
    >{{ tooltipIcon }}</i>
  </div>
</template>

<script>
export default {
  props: ["moreInfo", "tooltip", "tooltipIcon"],
  data() {
    return {};
  }
};
</script>

<style lang='less'>
#help-icon {
  display: block;
  float: right;
  color: #f5f5f5;
  z-index: 99;
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.tooltip {
  display: block !important;
  z-index: 10000;
  font-family: "Montserrat", sans-serif;

  .tooltip-inner {
    background: #fff;
    color: rgba(0, 0, 0, 0.87);
    border-radius: 16px;
    padding: 5px 18px 4px;
  }

  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: #fff;
    z-index: 1;
  }

  &[x-placement^="top"] {
    margin-bottom: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 0 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      bottom: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }
  &[aria-hidden="true"] {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.15s, visibility 0.15s;
  }

  &[aria-hidden="false"] {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.15s;
  }
}

.no-select {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
