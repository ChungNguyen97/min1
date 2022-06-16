<template>
  <div id="app" ref="app">
    <common-header v-if="accessToken" />
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CommonHeader from "./components/common/CommonHeader.vue";

export default {
  name: "App",
  components: {
    CommonHeader,
  },
  computed: {
    ...mapState("auth", ["accessToken"]),
  },
};
</script>

<style lang="scss">
@import "./styles/_reset.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  background: #ecf0f1;
}
</style>
