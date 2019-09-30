<template>
  <button type="button" class="btn" @click="handleClick">{{ buttonTitle }}</button>
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

<style lang='less' scoped>
.btn {
  width: auto;
  height: 35px;
  padding: 10px 25px;
  margin: 8px;
  outline: none;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  text-transform: uppercase;
  line-height: 0px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    opacity: 0.9;
  }
}

.btn-primary {
  background-color: #0091ea;
  color: #fff;
}

.btn-success {
  background-color: #c2d500;
  color: #fff;
}

.btn-disabled {
  background-color: grey;
  color: #fff;
  cursor: not-allowed;
}

.btn-warning {
  background-color: #ffa726;
  color: #fff;
}

.btn-error {
  background-color: #e53935;
  color: #fff;
}
</style>
