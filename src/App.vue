<template>
  <div id="app">
    <HomePageVue msg="Welcome to Your Vue.js App"/>
    <CollectionCom />
  </div>
</template>

<script>
import HomePageVue from './components/pages/HomePage.vue'
import CollectionCom from './components/collection/CollectionCom'

export default {
  name: 'App',
  components: {
    HomePageVue,
    CollectionCom
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
