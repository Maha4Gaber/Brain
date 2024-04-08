<template>
  <div class="container">
    <div class="div">
      <div class="row">
        <div class="col-lg-5 col-md-12">
          <img src="../../assets/Login.png" alt="" />
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="form p-5">
            <h2>Welcome Back!</h2>
            <p>Login to continue</p>
            <form @submit.prevent="">
              <label for="">Email</label>
              <div class="input">
                <input type="text" placeholder="Please enter your email" />
              </div>
              <label for="">Password</label>
              <div class="input">
                <input
                  v-bind:type="[showPassword ? 'text' : 'password']"
                  placeholder="Please enter your Password"
                />
                <button class="toggle" @click="toggleShowPassword">
                  <i
                    class=' fas fa-eye-slash'
                  ></i>
                </button>
              </div>
              <div class="row mt-2">
                <router-link to="/c" class="text-end"
                  >Forget Pasword!</router-link
                >
              </div>
            </form>
            <div class="row mt-2">
              <div class="col-12">
                <button  class="btnlink">Login</button>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-12">
                <span>New User? </span>
                <router-link to="/signup"> Create Account</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPassword: false,
      password: null,
    };
  },
  // computed: {
  //   buttonLabel() {
  //     return this.showPassword ? "Hide" : "Show";
  //   },
  // },
  methods: {
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
      let x=document.querySelector('.fa-eye-slash')?document.querySelector('.fa-eye-slash'):document.querySelector('.fa-eye')
      x.classList.toggle('fa-eye-slash')
      x.classList.toggle('fa-eye')
    },
  },
};
</script>

<style lang="scss">
.div {
  margin: 80px 0 0 0;
  .toggle {
    background: none;
    border: none;
    cursor: pointer;
  }
  img {
    max-width: 100%;
  }
  h2 {
    color: var(--textcolor);
    font-weight: bold;
  }
  p {
    font-size: 15px;
    margin: 0;
  }
  form {
    label {
      color: var(--textcolor);
      font-weight: bold;
      margin: 10px 0;
    }
    .input {
      width: 100%;
      background-color: #e6f0ed;
      padding: 5px;
      border-radius: 10px;
      input {
        background-color: #e6f0ed;
        width: 95%;
        border: none;
        outline: none;
        padding: 0px 10px;
      }
      svg {
        color: var(--textcolor) !important;
      }
    }
    span {
      margin-right: 10px;
    }
  }
  a {
    color: var(--textcolor);
    text-decoration: none;
    display: inline;
  }
}
</style>