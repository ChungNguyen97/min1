<template>
  <div id="app">
<<<<<<< HEAD
    <HomePageVue msg="Welcome to Your Vue.js App"/>
    <CollectionCom />
=======
    <HeaderVue />
    <main class="main container">
      <router-view />
    </main>
    <FooterVue />
>>>>>>> feature/collection_feature
  </div>
</template>

<script>
<<<<<<< HEAD
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
=======
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
>>>>>>> feature/collection_feature
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
<<<<<<< HEAD
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
=======
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
>>>>>>> feature/collection_feature
}
</style>
