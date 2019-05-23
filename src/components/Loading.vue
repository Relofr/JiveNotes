<template>
  <div class="wrapper">
    <h2>Jive Notes</h2>
    <br>
    <br>
    <section class="dots">
      <div class="dot one"></div>
      <div class="dot two"></div>
      <div class="dot three"></div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style>
.wrapper {
  background-color: #212121;
  font-size: 1.8em;
  padding-top: 50%;
  height: 100%;
  text-align: center;
}

.dot {
  display: inline-block;
  width: 30px;
  height: 30px;
  background-color: #C4D600;
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
}

.dot.three {
  animation-delay: 0.6s;
}
</style>
