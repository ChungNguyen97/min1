<template>
  <div class="content" :style="{ backgroundImage: `url(${backgroundLogin})` }">
    <form-login />
  </div>
</template>
<script>
import FormLogin from "@/components/login/FormLogin.vue";
import backgroundLogin from "@/assets/image/background_login4.jpg";

export default {
  name: "LoginPage",
  data() {
    return {
      backgroundLogin,
    };
  },
  components: {
    FormLogin,
  },
};
</script>


<style lang="scss" scoped >
.content {
  height: 100vh;
  display: flex;
  background-size:cover;
  .notification-status-login {
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>