<template>
  <div id="loader-4">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: 'Loader',
  data() {
    return {}
  },
}
</script>

<style scoped>
#loader-4 {
  width: 100%;
  text-align: center;
  height: 40px;
}

#loader-4 span {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: #3498db;
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
