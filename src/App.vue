<template>
  <div id="app">
    <HeaderVue />
    <main class="main container">
      <router-view />
    </main>
    <FooterVue />
  </div>
</template>

<script>
import HeaderVue from "./components/pages/common/Header.vue";
import FooterVue from "./components/pages/common/Footer.vue";
export default {
  name: "App",
  components: {
    HeaderVue,
    FooterVue,
  },
};
</script>

<style lang="scss">
@import "../src/assets/reset";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 100%;
  background-color: #ecf0f1;
}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
