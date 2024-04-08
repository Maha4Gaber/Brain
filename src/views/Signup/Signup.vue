<template>
  <div class="container">
    <div class="div">
      <div class="row">
        <div class="col-lg-5 col-md-12">
          <img src="../../assets/Login.png" alt="" />
        </div>
        <div class="col-lg-7 col-md-12">
          <div class="form p-5">
            <h2>Create an account</h2>
            <p>Sing up to continue</p>
            <form @submit.prevent="">
              <div class="row">
                <div class="col-6">
                  <label for="">Name : </label>
                  <div class="input">
                    <input type="text" placeholder="Enter your Name" />
                  </div>
                </div>
                <div class="col-6">
                  <label for="">LastName : </label>
                  <div class="input">
                    <input
                      v-bind:type="'text'"
                      placeholder="Enter your LastName"
                    />
                  </div>
                </div>
              </div>
              <div class="row ">
                <label for="">Email : </label>
              <div class="input">
                <input type="text" placeholder="Please enter your email" />
              </div>
              <label for="">Password : </label>
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
              </div>
            </form>
            <div class="row mt-4">
              <div class="col-12">
                <button class="btnlink">Sign Up</button>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-12">
                <span>Olready have an account? </span>
                <router-link to="/signup"> Login</router-link>
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
      let x = document.querySelector(".fa-eye-slash")
        ? document.querySelector(".fa-eye-slash")
        : document.querySelector(".fa-eye");
      x.classList.toggle("fa-eye-slash");
      x.classList.toggle("fa-eye");
    },
  },
};
</script>

<style lang="scss">
.div {
  margin: 80px 0 0 0;
}
</style>