<template>
  <div class="content" :style="{ backgroundImage: `url(${backgroundLogin})` }" >
    <form-login-vue/>
  </div>
</template>
<script>
import FormLoginVue from '@/components/login/FormLogin.vue';
import backgroundLogin from '@/assets/image/background_login.jpg';

export default {
  name: "LoginPage",
  data() {
    return {
      backgroundLogin
    };
  },
  components: {
    FormLoginVue
  },

};
</script>


<style lang="scss" scoped >
.content{
  width: 100%;
  height:100vh;
  display: flex;
  .notification-status-login{
    color:#fff;
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
  }
}

</style>