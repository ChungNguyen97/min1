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
        <span class="invalid-feedback">
          <span v-if="!$v.email.required">Email là bắt buộc</span>
          <span v-if="!$v.email.isUnique">Email không hợp lệ</span>
          <span v-if="!$v.email.minLength"
            >Email phải có ít nhất là {{ $v.email.$params.minLength.min }} ký
            tự</span
          >
          <span v-if="!$v.email.maxLength"
            >Email có tối đa là {{ $v.email.$params.maxLength.max }} ký tự</span
          >
        </span>
      </div>
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
        <span class="invalid-feedback">
          <span v-if="!$v.password.required">Mật khẩu là bắt buộc</span>
          <span v-if="!$v.password.minLength"
            >Password phải có ít nhất là
            {{ $v.password.$params.minLength.min }} ký tự</span
          >
          <span v-if="!$v.password.maxLength"
            >Password có nhiều nhất là
            {{ $v.password.$params.maxLength.max }} ký tự</span
          >
        </span>
      </div>
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
      isUnique(value) {
        if (value === "") return true;
        var email_regex =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(email_regex.test(value));
          }, 350 + Math.random() * 300);
        });
      },
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
        await this.LoginAction(data);

        if (this.login.isLogin) {
          this.$notify({
            group: "infoLogin",
            title: "Đăng nhập thành công",
            text: "Bạn sẽ được chuyển đến trang chủ",
            duration: 2000,
          });
          setTimeout(() => {
            this.$router.push({ path: "/" });
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
    ...mapActions(["LoginAction"]),
  },
  computed: {
    ...mapState(["login"]),
  },
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
      label {
        width: 30%;
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