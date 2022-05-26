<template>
  <header class="header">
    <nav class="container nav">
      <div class="general">
        <router-link exact-active-class="exact-active" :to="{name:'home-page'}">Home</router-link>
        <router-link exact-active-class="exact-active" :to="{name:'product-page'}"
          >Product</router-link
        >
      </div>

      <div class="account">
        <router-link  exact-active-class="exact-active" :to="{name:'login-page'}"
          >Login</router-link
        >
      </div>
    </nav>
  </header>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "CommonHeader",
  computed: {
    ...mapMutations(['SET_LOGIN'])
  },
  methods: {
    handleLogout(){
      this.$store.commit('SET_LOGIN')
    } 
  }
};
</script>

<style lang="scss" scoped>
header.header {
  box-shadow: 0 1px 5px #777;
  background-color: #333;
  nav {
    display: flex;
    justify-content: space-between;
    align-content: center;
    a {
      display: inline-block;
      margin-right: 12px;
      padding: 10px 12px;
      text-decoration: none;
      text-transform: uppercase;
      color: #fff;
      font-weight: 700;
    }
  }
  
}

.exact-active {
  color: #c0392b !important;
  background-color: #fff;
}
</style>