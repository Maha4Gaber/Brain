<template>
  <div class="row my-5 pt-3">
    <div class=" apphead text-center fs-3">
      Appointments Status
    </div>
  </div>
  <div class="row mt-5">
    <div class="boxs">
      <div class="box">
        <div class="name">
          Ali Maher
        </div>
        <div class="day">
          Sunday
        </div>
        <div class="appointment">
          <i class="fa-solid fa-clock"></i>
          11:00 Am 
          . 
          02:00 Pm 
          
        </div>
        <div class="location">
          <p>
            <i class="fa-solid fa-location-dot"></i>
            Egypt
          </p>
        </div>
        <div class="status">
          <i class="fa-solid fa-clock"></i>
          Watiting
        </div>
      </div>
      <div class="box">
        <div class="name">
          Ali Maher
        </div>
        <div class="day">
          Sunday
        </div>
        <div class="appointment">
          <i class="fa-solid fa-clock"></i>
          11:00 Am 
          . 
          02:00 Pm 
          
        </div>
        <div class="location">
          <p>
            <i class="fa-solid fa-location-dot"></i>
            Egypt
          </p>
        </div>
        <div class="status">
          <i class="fa-solid fa-clock"></i>
          Watiting
        </div>
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
}
.boxs{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  .box{
    background-color: #EBEBEB;
    box-shadow:  0 0 4px 0 #0000002d;    
    padding:7px  20px ;
      border-radius: 10px;
    width: 30%;
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
  }
}
</style>