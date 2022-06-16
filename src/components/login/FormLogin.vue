<template>
  <section class="login" v-if="!isLogin">
    <div v-if="loadingLogin">
      <h3 class="loadingLogin">Login in progress...</h3>
      <div class="iconLoading"></div>
    </div>

    <div class="login__content" v-else>
      <h2 class="title">LOGIN</h2>
      <form action="" class="form">
        <div class="form__group">
          <label for="email"> Email: </label>
          <input
            type="email"
            placeholder="Enter your email..."
            v-model.trim="$v.email.$model"
            :class="{
              'is-invalid': $v.email.$error,
              'is-valid': !$v.email.$invalid,
            }"
          />
        </div>
        <span class="invalid-feedback">
          <span class="is-invalid" v-if="isRequired && !email"
            >Email is required</span
          >
          <span class="is-invalid" v-if="!$v.email.minLength"
            >Email must have at least
            {{ $v.email.$params.minLength.min }} letters</span
          >
          <span v-if="!$v.email.maxLength"
            >Emails have a maximum of
            {{ $v.email.$params.maxLength.max }} letters</span
          >
        </span>

        <div class="form__group">
          <label for="password">Password: </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password..."
            v-model.trim="$v.password.$model"
            :class="{
              'is-invalid': $v.password.$error,
              'is-valid': !$v.password.$invalid,
            }"
          />
        </div>
        <span class="invalid-feedback">
          <span class="is-invalid" v-if="isRequired && !password"
            >Password is required</span
          >
          <span class="is-invalid" v-if="!$v.password.minLength"
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
          value="LOGIN"
          class="submit"
          @click.prevent="handleSubmit"
        />
      </form>
    </div>
    <notifications group="infoLogin" width="50%" position="top center" />
  </section>
</template>

<script>
import {
  email,
  minLength,
  maxLength,
  required,
} from "vuelidate/lib/validators";
import { mapActions, mapState } from "vuex";
// import '@/assets/icons'
export default {
  name: "FormLogin",
  data() {
    return {
      email: "",
      password: "",
      checkLogin: false,
      isRequired: false,
      loadingLogin: false,
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
        this.isRequired = true;
      } else {
        this.isRequired = false;
        this.loadingLogin = true;
        const data = {
          email: this.email,
          password: this.password,
        };
        await this.loginAction(data);
        this.loadingLogin = false;

        if (this.isLogin) {
          this.$notify({
            group: "infoLogin",
            title: "Sign in successfully",
            text: "You will be redirected to the homepage",
            duration: 2000,
          });
          setTimeout(() => {
            this.$router.push({ name: "homePage" });
          }, 2000);
        } else {
          this.$notify({
            group: "infoLogin",
            title: "Login failed",
            text: "Check your email and password then try logging in again!",
            type: "warn",
            duration: 3000,
          });
        }
      }
    },
    ...mapActions("login", ["loginAction"]),
  },
  computed: {
    ...mapState({
      accessToken: (state) => state.auth.accessToken,
      isLogin: (state) => state.login.isLogin,
    }),
  },
};
</script>

<style lang="scss" scoped>
.login {
  margin: auto;
  width: 550px;
  border-radius: 10px;
  padding: 24px 32px;
  box-shadow: 0 1px 5px #ccc;
  background-color: #fff;
  border: none;

  .title {
    text-align: center;
    text-transform: uppercase;
  }
  .loadingLogin {
    text-align: center;
    font-weight: 700;
    font-size: 20px;
    color: #2980b9;
  }
  .iconLoading {
    width: 35px;
    height: 35px;
    border: 5px solid blue;
    margin: auto;
    border-radius: 100rem;
    border-top-color: transparent;
    border-bottom-color: transparent;
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
        border: 1px solid #2980b9;
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
      margin: 32px auto 12px;
      display: block;
      padding: 8px 36px;
      background-color: #4834d4;
      color: #fff;
      border: none;
      border-radius: 5px;
      &:hover {
        cursor: pointer;
        opacity: 0.85;
      }
    }
  }

  .is-invalid {
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