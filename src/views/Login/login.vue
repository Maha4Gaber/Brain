<template>
  <div class="container">
    <div class="div">
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <img src="../../assets/Login.png" alt="" />
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="form">
            <h2>Welcome Back!</h2>
            <p>Login to continue</p>
            <label for="">Email</label>
            <div class="input-group mb-3">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Please enter your email"
                />
                <div class="input-group-append">
                  <span
                    class="input-group-text"
                    @click="showPassword = !showPassword"
                  >
                    <i
                    class="fa"
                    :class="showPassword?' fa-eye ':'fa-eye-slash '"
                    ></i>
                  </span>
                </div>
              </div>
            <label for="">Password</label>
            <div class="input">
              <div class="input-group mb-3">
                <input
                  v-bind:type="[showPassword ? 'text' : 'password']"
                  class="form-control"
                  placeholder="Please enter your Password"
                />
                <div class="input-group-append">
                  <span
                    class="input-group-text"
                    @click="showPassword = !showPassword"
                  >
                    <i
                    class="fa"
                    :class="showPassword?' fa-eye ':'fa-eye-slash '"
                    ></i>
                  </span>
                </div>
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
  computed: {
    buttonLabel() {
      return this.showPassword ? "Hide" : "Show";
    },
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<style>
span{
  cursor: pointer;
}
</style>