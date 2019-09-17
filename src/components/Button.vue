<template>
  <button @click="handleClick">{{ buttonTitle }}</button>
</template>

<script>
export default {
  props: ["buttonTitle"],
  methods: {
    handleClick() {
      this.$emit("click");
    }
  }
};
</script>

<style lang='less'>
button {
  outline: none;
  border: none;
  height: 36px;
  width: 88px;
  border-radius: 3px;
  text-transform: uppercase;
  cursor: pointer;
  // opacity: 0.5;
  // animation: btn-clicked 2s forwards;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    opacity: 0.9;
  }
}

@keyframes btn-clicked {
  100% {
    opacity: 0;
    transform: scale(1.5);
  }
}
</style>
