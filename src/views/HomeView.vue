<template>
  <div class="container home">
    <div class="row">
      <div class="col-7 mt-5">
        <h1>What is Brain Tumor ?</h1>
        <p>
          A brain tumor is a growth of cells in the brain or near it.Brain
          tumors can happen in the brain tissue.Brain tumors also can happen
          near the brain tissue .Nearby locations include nerves; the pituitary
          gland; the pineal gland; and the membranes that cover the surface of
          the brain.
        </p>
        <router-link to="/about" class="btnlink mt-5" >Read More</router-link>
      </div>
      <div class="col-5 ">
        <img src="../assets/home1.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
<style lang="scss">
.home {
  h1 {
    color: var(--maincolor);
    font-size: 48px;
  }
  p{
    font-size: 24px;
    padding: 10px 20px 0 0;
  }
  img {
    max-width: 100%;
  }
}
</style>
