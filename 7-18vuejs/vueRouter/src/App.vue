<template>
  <div id="app">
    <p>
      <router-link to="/">第一个美眉</router-link>
      <router-link to="/One">第二个美眉</router-link>
      <router-link to="/Tow">第三个美眉</router-link>
    </p>
   
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
