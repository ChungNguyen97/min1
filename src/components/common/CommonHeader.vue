<template>
  <header class="header">
    <div class="loadingLogout" v-if="loadingLogout">
      <loading-page />
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
          {{ $t("header.home") }}
        </router-link>
        <router-link
          exact-active-class="exact-active"
          :to="{ name: 'productPage' }"
          >{{ $t("header.product") }}
        </router-link>

        <router-link exact-active-class="exact-active" :to="{ name: 'tagPage' }"
          >{{ $t("header.tag") }}
        </router-link>
      </div>

      <div class="account">
        <div class="settingLang">
          <iconsvg
            width="14"
            height="14"
            name="gear-solid"
            color="#fff"
            class="iconSetting"
            @click="isShowLang = !isShowLang"
          />
          <div class="languages" v-if="isShowLang">
            <span
              v-for="(lang, i) in languages"
              :key="i"
              @click="handleChangeLanguage(lang.lang, i)"
              :class="{ activeLang: i === indexLang }"
            >
              {{ lang.title }}
            </span>
          </div>
        </div>
        <router-link
          v-if="!accessToken"
          exact-active-class="exact-active"
          class="loginBtn"
          :to="{ name: 'loginPage' }"
          >{{ $t("header.login") }}</router-link
        >
        <button v-else class="logout" @click="handleLogout">
          {{ $t("header.logout") }}
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
import LoadingPage from "@/components/common/LoadingPage.vue";
import i18n from "@/plugins/i18n";

import "@/assets/icons";
export default {
  name: "CommonHeader",
  data() {
    return {
      loadingLogout: false,
      isShowLang: false,
      indexLang: 0,
      languages: [
        { lang: "en", title: "English" },
        { lang: "vi", title: "Tiếng Việt" },
        { lang: "cn", title: "中国语訳" },
      ],
    };
  },
  components: {
    LoadingPage,
  },

  computed: {
    ...mapState("auth", ["accessToken"]),
  },
  methods: {
    ...mapActions({
      logoutAction: "login/logoutAction",
    }),
    async handleLogout() {
      this.loadingLogout = true;
      console.log("1");
      await this.logoutAction();
      console.log("2");

      if (this.accessToken === "") {
        console.log("3");

        this.loadingLogout = false;
        this.$notify({
          group: "infoLogout",
          title: "Logout successfully",
          text: "You will be redirected to the login page",
          duration: 2000,
        });
        this.$router.push({ name: "loginPage" });
      }
    },
    handleChangeLanguage(title, i) {
      i18n.locale = title;
      this.isShowLang = false;
      this.indexLang = i;
    },
  },
};
</script>

<style lang="scss" scoped>
header.header {
  .iconSetting {
    &:hover {
      cursor: pointer;
    }
  }
  .activeLang {
    color: #c0392b !important;
  }
  .settingLang {
    position: relative;
    .languages {
      background: #ecf0f1;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      position: absolute;
      right: -80%;
      width: fit-content;
      width: 120px;
      span {
        color: #333;
        padding: 6px 20px;
        &:hover {
          background: #3498db;
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }

  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
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
}

.account {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0 34px;

  .loginBtn {
    text-transform: uppercase;
  }
  .logout {
    background: none;
    color: #fff;
    border: none;
    padding: 10px 12px;
    font-weight: 600;
    text-transform: uppercase;
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