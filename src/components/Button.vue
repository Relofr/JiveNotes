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
  &:hover {
    opacity: 0.9;
  }
}
</style>
