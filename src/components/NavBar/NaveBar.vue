<template>
  <div class="nav">
    <div class="logo">
      <img src="../../assets/brain.png" alt="" />
      <div>Brain&Troma</div>
    </div>
    <div class="list">
      <ul>
        <li><router-link to="/"> Home</router-link></li>
        <li><router-link to="/12"> Services</router-link></li>
        <li><router-link to="/about"> About</router-link></li>
        <!-- <li><router-link to="/"> Home</router-link></li> -->
      </ul>
    </div>
    <div class="log">
      pS(Dfseow9)
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.nav {
  background-color: var(--maincolor);
  color: var(--whitecolor);
  width: 100%;
  height: 50px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  .logo {
    display: flex;
    align-items: center;
    justify-items: center;
    gap: 20px;
    flex: 1;
    div {
      font-size: 25px;
      font-weight: bold;
    }
  }
  .list {
    flex: 3;
    ul {
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 10px;
      list-style: none;
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
    flex: 1;
    display: flex;
    align-items:center ;
    gap: 20px;

  }
}
.abtn{
  padding: 5px 25px;
  gap: 10px;
  border-radius: 21px;
  opacity: 0px;
  color: inherit;
  text-decoration: none;
  text-align: center;
  display: inline-block;
  
}
.abtn1{
  background:var(--graycolor);
  color: black;
}
.abtn2{
  background:white;
  color:var(--textcolor);
}
</style>