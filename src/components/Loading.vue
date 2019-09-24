<template>
  <div class="wrapper">
    <h2 class="loading-title">Jive Notes</h2>
    <br>
    <br>
    <div class="dots">
      <div class="dot one"></div>
      <div class="dot two"></div>
      <div class="dot three"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  font-family: "Montserrat", sans-serif;
  font-size: 1.8em;
  background: transparent;
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.dot {
  display: inline-block;
  width: 30px;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  border-radius: 50%;
  margin: 0 8px;
  animation-name: wave;
  animation-duration: 0.5s;
  animation-timing-function: cubic-bezier(0.64, 0.12, 0.79, 0.35);
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

.dots {
  height: 100px;
  width: 100%;
}

@keyframes wave {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(60px);
  }
}

.dot.two {
  animation-delay: 0.3s;
  background-color: rgba(255, 255, 255, 0.7);
}

.dot.three {
  animation-delay: 0.6s;
  background-color: rgba(255, 255, 255, 0.9);
}

.loading-title {
  color: #fff !important;
}
</style>
