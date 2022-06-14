<template>
  <header class="header">
    <div class="loadingLogout" v-if="loadingLogout">
      <div class="content">
        <h3>Logout in progress</h3>
        <div class="iconLoading"></div>
      </div>
    </div>

    <nav class="container nav">
      <div class="general">
        <router-link
          exact-active-class="exact-active"
          :to="{ name: 'homePage' }"
        >
          <iconsvg
            name="home-1"
            color="#fff"
            width="15"
            height="15"
            class="icon-home"
          />
          Home</router-link
        >
        <router-link
          exact-active-class="exact-active"
          :to="{ name: 'productPage' }"
          >Product
        </router-link>

        <router-link exact-active-class="exact-active" :to="{ name: 'tagPage' }"
          >Tags
        </router-link>
      </div>

      <div class="account">
        <router-link
          v-if="!isLogin"
          exact-active-class="exact-active"
          :to="{ name: 'loginPage' }"
          >Login</router-link
        >
        <button v-else class="logout" @click="handleLogout">
          LOGOUT
          <iconsvg
            width="14"
            height="14"
            name="logout-1"
            color="#fff"
            class="icon-logout"
          />
        </button>
      </div>
    </nav>
    <notifications group="infoLogout" width="100%" position="top right" />
  </header>
</template>

<script>
import { mapActions, mapState } from "vuex";
import "@/assets/icons";
export default {
  name: "CommonHeader",
  data() {
    return {
      loadingLogout: false,
    };
  },

  computed: {
    ...mapState("login", ["isLogin"]),
  },
  methods: {
    ...mapActions({
      logoutAction: "login/logoutAction",
    }),
    async handleLogout() {
      this.loadingLogout = true;
      await this.logoutAction();
      if (!this.isLogin) {
        this.loadingLogout = false;
        this.$notify({
          group: "infoLogout",
          title: "Logout successfully",
          text: "You will be redirected to the login page",
          duration: 2000,
        });
        setTimeout(() => {
          this.$router.push({ name: "loginPage" });
        }, 2000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
header.header {
  box-shadow: 0 1px 5px #777;
  background-color: #0984e3;
  nav {
    display: flex;
    justify-content: space-between;
    align-content: center;
    a {
      display: inline-block;
      margin-right: 12px;
      padding: 12px 12px;
      text-decoration: none;
      text-transform: uppercase;
      color: #fff;
      font-weight: 700;
    }
    .icon-home {
      position: relative;
      top: 1px;
      right: -2px;
    }
  }
  .loadingLogout {
    position: absolute;
    top: 38px;
    left: 0;
    right: 0;
    bottom: 0;
    background: #333;
    display: flex;
    z-index: 99999;
    opacity: 0.8;
    h3 {
      color: #fff;
    }
    .content {
      margin: auto;
    }
    .iconLoading {
      width: 35px;
      height: 35px;
      border: 5px solid #fff;
      border-radius: 100rem;
      border-top-color: transparent;
      border-bottom-color: transparent;
      margin: auto;
      animation: loadtime 1s linear infinite;
      @keyframes loadtime {
        from {
          transform: rotate(0);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }
  }
}

.account {
  .logout {
    background: none;
    color: #fff;
    border: none;
    padding: 10px 12px;
    font-weight: 600;
    &:hover {
      background: #fff;
      color: #c0392b;
      cursor: pointer;
    }
    .icon-logout {
      position: relative;
      top: 1px;
      left: 2px;
    }
  }
}

.exact-active {
  color: #c0392b !important;
  background-color: #fff;
}
</style>