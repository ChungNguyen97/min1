<template>
  <div id="app">
    <CommonHeader />
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script>
import CommonHeader from "./components/common/CommonHeader.vue";

export default {
  name: "App",
  components: {
    CommonHeader,
  },
};
</script>

<style lang="scss">
@import './assets/reset';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
