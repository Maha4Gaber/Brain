<template>
  <div class=" container-fluid  ">
    <div class="navbare ">
    <router-link to="/" class="logo col-3">
      <img src="../../assets/brain.png" alt="" />
      <div>Brain&Troma</div>
    </router-link>
    <div class="list col-5">
      <ul>
        <li><router-link to="/"> Home</router-link></li>
        <li><router-link to="/12"> Services</router-link></li>
        <li><router-link to="/about"> About</router-link></li>
        <!-- <li><router-link to="/"> Home</router-link></li> -->
      </ul>
    </div>
    <div class="log col-3">
      <router-link class="abtn abtn1" to="/login"> Login </router-link>
      <router-link class="abtn abtn2" to="/signup"> Sign Up</router-link>
    </div>
  </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.container-fluid {
  margin: 0 !important;
  width: 100% !important;
  padding: 0 !important;
}
.navbare {
  background-color: var(--maincolor);
  color: var(--whitecolor);
  width: 100%;
  height: 70px;
  padding: 10px 40px 10px 40px;
  display: flex;
  align-items: center;
  // justify-content: space-evenly;
  gap: 20px;
  .logo {
    display: flex;
    align-items: center;
    justify-items: flex-end;
    gap: 10px;
    padding: 0 0 0 30px;
    // flex: 1;
    text-decoration: none;
    color: inherit;
    div {
      font-size: 25px;
      font-weight: bold;
    }
  }
  .list {
    // flex: 3;
    ul {
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 10px;
      list-style: none;
      margin: 0;
      a {
        color: var(--whitecolor);
        text-decoration: none;
        font-family: Poppins;
        font-size: 17px;
        font-weight: 400;
        line-height: 30px;
        text-align: center;
        opacity: .7;
      }
      a.router-link-active{
        font-weight: 700;
        font-size: 20px ;
        opacity: 1;
      }
    }
  }
  .log {
    // flex: 1;
    display: flex;
    align-items:center ;
    gap: 20px;

  }
}

</style>