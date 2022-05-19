<template>
  <div id="app">
    <CommonHeaderVue />
    <main class="main container">
      <router-view />
    </main>
  </div>
</template>

<script>
import CommonHeaderVue from './components/common/CommonHeader.vue'

export default {
  name: 'App',
  components: {
    CommonHeaderVue
  }
}
</script>

<style>
@import './styles/_reset.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
