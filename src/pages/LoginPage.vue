<template>
  <section
    class="content"
    :style="{ backgroundImage: `url(${backgroundLogin})` }"
  >
    <form-login />
  </section>
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
  background-size: cover;
}
</style>