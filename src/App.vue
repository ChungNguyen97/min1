<template>
  <div id="app">
    <common-header-vue />
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import CommonHeaderVue from "./components/common/CommonHeader.vue";

export default {
  name: "App",
  components: {
    CommonHeaderVue,
  },
  methods: {
    ...mapMutations(["CHECK_STATUS_BEGIN"]),
  },
  created() {
    const { auth } = JSON.parse(localStorage.getItem("token"));
    console.log(auth);
    if (auth.accessToken) {
      this.$store.commit("CHECK_STATUS_BEGIN", true);
    } else {
      this.$store.commit("CHECK_STATUS_BEGIN", false);
    }
  },
};
</script>

<style>
@import "./styles/_reset.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
