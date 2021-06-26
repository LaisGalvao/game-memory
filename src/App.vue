<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
<script>
//import VueMask from 'v-mask'

import router from "@/router"
export default {
  name: 'App',
  router: router
}
</script>

