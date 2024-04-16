
<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="layout-wrapper layout-blank">
    <RouterView />
  </div>
</template>

<style scoped>
.layout-wrapper {
  height: 100vh;
  background: linear-gradient(135deg, #1de9b6, #1dc4e9);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>

