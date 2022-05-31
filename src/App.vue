<template>
  <div id="app">
    <common-header />
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import CommonHeader from "./components/common/CommonHeader.vue";
import { store } from "@/store";

export default {
  name: "App",
  components: {
    CommonHeader,
  },
  methods: {
    ...mapMutations(["login/CHECK_STATUS_BEGIN"]),
  },
  created() {
    const token = store.state.auth.accessToken || "";
    if (token) {
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
