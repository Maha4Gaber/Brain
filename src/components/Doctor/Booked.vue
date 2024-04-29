<template>
  <div class="row mt-5 pt-3">
    <div class=" apphead text-center fs-3">
      <img src="../../assets/date.png" alt="" srcset="">
      Available Appointments
    </div>
  </div>
  <div class="row mt-5">
    <div class="boxs">
      <div class="box text-center">
        
        <div class="day">
          Sunday
        </div>
        <div class="appointment">
          <i class="fa-solid fa-clock"></i>
          From :   11:00 Am 
          <br>
          <i class="fa-solid fa-clock"></i>
          to :
          02:00 Pm 
        </div>
        <button>Book</button>
      </div>
      <div class="box text-center">
        
        <div class="day">
          Sunday
        </div>
        <div class="appointment">
          <i class="fa-solid fa-clock"></i>
          From :   11:00 Am 
          <br>
          <i class="fa-solid fa-clock"></i>
          to :
          02:00 Pm 
        </div>
        <button>Book</button>
      </div>
      <div class="box text-center">
        
        <div class="day">
          Sunday
        </div>
        <div class="appointment">
          <i class="fa-solid fa-clock"></i>
          From :   11:00 Am 
          <br>
          <i class="fa-solid fa-clock"></i>
          to :
          02:00 Pm 
        </div>
        <button>Book</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.apphead{
  color: var(--maincolor);
  font-size: 40px;
  font-weight: 500;
  img{
    width: 64px;
  }
}
.boxs{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  .box{
    // background-color: #EBEBEB;
    box-shadow:  0 0 4px 0 #0000002d;    
    padding:7px  20px ;
      border-radius: 10px;
    width: 25%;
    border: 2px solid var(--maincolor);
    .name{
      font-size: 24px;
      color: var(--maincolor);
      margin: 7px 0;
    }
    .day{
      font-size: 20px;
      margin: 7px 0;
    }
    .appointment,
    .location,
    .status
    {
      color: #868383;
      margin: 7px 0;
      svg{
        margin-right: 10px;
      }
    }
    .status
    {
      text-align: right;
    }
    button{
      background-color: var(--maincolor);
      border: none;
      outline: none;
      color: white;
      padding: 7px 25px;
      margin-top: 10px;
      border-radius: 8px;
      // font-weight: bold;
    }
  }
}
</style>