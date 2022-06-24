<template>
  <div id="loader-5">
    <div id="loader-4">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loader1',
  data() {
    return {}
  },
}
</script>

<style scoped>
#loader-5 {
  position: fixed;
  z-index: 999999;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  height: 100%;
  background-color: rgb(0,0,0,0.5);
}
#loader-4 {
  position: relative;
  top: 50%;
  width: 100%;
  text-align: center;
  height: 30px;
  align-self: center;
}

#loader-4 span {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: #e11041;
  margin: 15px 2px;
  opacity: 0;
}

#loader-4 span:nth-child(1) {
  animation: opacitychange 1s ease-in-out infinite;
}

#loader-4 span:nth-child(2) {
  animation: opacitychange 1s ease-in-out 0.33s infinite;
}

#loader-4 span:nth-child(3) {
  animation: opacitychange 1s ease-in-out 0.66s infinite;
}

@keyframes opacitychange {
  0%, 100% {
    opacity: 0;
  }

  60% {
    opacity: 1;
  }
}
</style>
