<template>
  <div class="login">
    <h2>Đăng nhập</h2>
    <form action="" class="form">
      <div class="form__group">
        <label for="email">Email: </label>
        <input
          type="email"
          placeholder="Nhập email của bạn..."
          v-model.trim="$v.email.$model"
          :class="{
            'is-invalid': $v.email.$error,
            'is-valid': !$v.email.$invalid,
          }"
        />
      </div>
      <span class="invalid-feedback">
        <span v-if="!$v.email.required">Email is required</span>
        <span v-if="!$v.email.minLength"
          >Email must have at least
          {{ $v.email.$params.minLength.min }} letters</span
        >
        <span v-if="!$v.email.maxLength"
          >Emails have a maximum of
          {{ $v.email.$params.maxLength.max }} letters</span
        >
      </span>

      <div class="form__group">
        <label for="password">Mật khẩu: </label>
        <input
          type="password"
          id="password"
          placeholder="Nhập mật khẩu của bạn..."
          v-model.trim="$v.password.$model"
          :class="{
            'is-invalid': $v.password.$error,
            'is-valid': !$v.password.$invalid,
          }"
        />
      </div>
      <span class="invalid-feedback">
        <span v-if="!$v.password.required">Password is required</span>
        <span v-if="!$v.password.minLength"
          >Password must have at least
          {{ $v.password.$params.minLength.min }} letters</span
        >
        <span v-if="!$v.password.maxLength"
          >Password have a maximum of
          {{ $v.password.$params.maxLength.max }} letters</span
        >
      </span>

      <input
        type="submit"
        value="Đăng nhập"
        class="submit"
        @click.prevent="handleSubmit"
      />
    </form>
    <notifications group="infoLogin" width="50%" position="top center" />
  </div>
</template>

<script>
import {
  required,
  email,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";

import { mapActions, mapState } from "vuex";
export default {
  name: "FormLogin",
  data() {
    return {
      email: "",
      password: "",
      submitstatus: null,
    };
  },
  validations: {
    email: {
      required,
      minLength: minLength(10),
      maxLength: maxLength(30),
      email,
    },
    password: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(200),
    },
  },

  methods: {
    async handleSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitstatus = "FAIL";
      } else {
        this.submitstatus = "SUCCESS";
        const data = {
          email: this.email,
          password: this.password,
        };
        await this.$store.dispatch('login/LoginAction',data)

        if (this.login.isLogin) {
          this.$notify({
            group: "infoLogin",
            title: "Đăng nhập thành công",
            text: "Bạn sẽ được chuyển đến trang chủ",
            duration: 2000,
          });
          setTimeout(() => {
            this.$router.push({ name: "homePage" });
          }, 2000);
        } else {
          this.$notify({
            group: "infoLogin",
            title: "Đăng nhập thất bại",
            text: "Kiểm tra email và password sau đó thử đăng nhập lại!",
            type: "warn",
            duration: 3000,
          });
        }
      }
    },
    ...mapActions(["login/LoginAction"]),
  },
  computed: {
    ...mapState(['login'])
  }
};
</script>

<style lang="scss" scoped>
.login {
  margin: auto;
  width: 550px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 24px 32px;
  box-shadow: 0 1px 5px red;
  background-color: #ecf0f1;

  h2 {
    text-align: center;
    text-transform: uppercase;
  }

  .form {
    &__group {
      margin: 12px 0;
      display: flex;
      align-items: center;

      label {
        width: 22%;
        font-weight: 700;
        font-size: 18px;
      }

      input {
        flex: 1;
        border: 1px solid #be2edd;
        padding: 5px 12px;
        border-radius: 5px;

        &:focus {
          border: none;
          outline: 1px solid;
          background: #dff9fb;
        }
      }
    }

    input.submit {
      margin: 12px auto;
      display: block;
      padding: 8px 12px;
      background-color: #4834d4;
      color: #fff;
      border: none;
      border-radius: 5px;
    }
  }

  .is-invalid {
    border: 1px solid red !important;
    color: red;
  }

  .is-valid {
    border: 1px solid blue !important;
    color: blue;
  }

  .invalid-feedback {
    text-align: center;

    span {
      display: block;
    }
  }
}
</style>