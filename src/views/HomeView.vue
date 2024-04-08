<template>
  <div class="container home">
    <div class="row section1">
      <div class="col-lg-7 mt-5  col-sm-12">
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
      <div class="col-lg-5 ">
        <img src="../assets/home1.png" alt="" />
      </div>
    </div>
  </div>
  <Section2 />
  <Doctor />
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Section2 from '@/components/home/Section2'
import Doctor from '@/components/Doctor/Doctor.vue';
export default {
  name: "HomeView",
  components: {
    HelloWorld,
    Section2,
    Doctor
  },
};
</script>
<style lang="scss">
.home {
  margin-top: 80px;
  @media (max-width: 768px) {
  .section1{
    flex-direction: column-reverse;
}
  }
  h1 {
    color: var(--maincolor);
    font-size: 35px;
  }
  p{
    font-size: 20px;
    padding: 10px 50px 0 0;
  }
  img {
    max-width: 100%;
  }
}
</style>
