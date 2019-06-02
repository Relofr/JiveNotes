<template>
  <div v-cloak class="toggle">
    <label class="switch">
      <input
        v-shortkey="['ctrl', 'b']"
        @shortkey="toggleDarkLight()"
        @click="toggleDarkLight()"
        type="checkbox"
      >
      <span class="slider round"></span>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: "light"
    };
  },
  methods: {
    toggleDarkLight() {
      console.log(this.theme);
      switch (this.theme) {
        case "light":
          this.theme = "dark";
          document.querySelector("body").classList.add("dark");
          break;
        case "dark":
          this.theme = "light";
          document.querySelector("body").classList.remove("dark");
          break;
        default:
      }
    }
  }
};
</script>

<style lang='less'>
.toggle {
  // float: left;
  text-align: center;
  color: white;
  text-decoration: none;
  font-size: 0px;
  padding: 12px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 54px;
  height: 28px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  &:focus {
    outline: -webkit-focus-ring-color auto 0px;
  }
}

.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
  &:focus {
    outline: -webkit-focus-ring-color auto 0px;
  }
}

.slider.round:before {
  border-radius: 50%;
}

// .dark label {
//   background: blue;
//   color: white;
// }
</style>
