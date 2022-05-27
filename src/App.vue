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
    ...mapMutations(["login/CHECK_STATUS_BEGIN"]),
  },
  created() {
    const { auth } = JSON.parse(localStorage.getItem("token")) || { auth: "" };
    if (auth.accessToken) {
      this.$store.commit("login/CHECK_STATUS_BEGIN", true);
    } else {
      this.$store.commit("login/CHECK_STATUS_BEGIN", false);
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
body {
  background: #ecf0f1;
}
</style>
