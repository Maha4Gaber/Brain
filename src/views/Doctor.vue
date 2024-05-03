<template>
  <div class="doctor container mb-5">
    <div class="row">
       <div class="col-lg-3 col-md-4">
        <div class="image">
          <!-- <img :src="state.filteredItems.img" alt=""> -->
        </div>
      </div>
      <div class="col-lg-9 col-md-8">
        <div class="details">
          <h2>{{ filteredItems.firstName +' '+filteredItems.lastName }}</h2>
          <h3>{{ filteredItems.desc }}</h3>
          <p>
            <i class="fa-solid fa-location-dot"></i>
            {{ filteredItems.location }}</p>
          <div class="stars">
            <h4>Rate here</h4>
            <i
              v-for="(star, index) in 5"
              class="fa fa-star"
              :key="index"
            >
            </i>
          </div>
        </div>
      </div> 
    </div>
    <Appointments :id=id></Appointments>
    <Booked :appid=id></Booked>
  </div>
</template>
<script>
import { reactive,computed,onMounted } from "vue";
import Appointments from '@/components/Doctor/Appointments'
import Booked from '@/components/Doctor/Booked.vue'
import axios from "axios";
export default {
  components:{
    Appointments,
    Booked
  },

data() {
    return {
      filteredItems:{}
    };
  },
  props: {
    id: String,
  },

  async mounted() {
    await axios
      .get(
        "api/v1/user/"+this.id 
        )
      .then((res) => {
        this.filteredItems=res.data;
      // console.log(this.filteredItems);
      })
      .catch((error) => {
        console.log(error);
        // console.log(error.response.s);
      });
  },

  

}
</script>

<style lang="scss">
.doctor{
  margin-top: 120px;
  img{
    width: 100%;
  }
  .details{
    padding: 10px 20px;
    h2{
      font-size: 35px;
    }
    h3{
      font-size: 18px;
      color: var(--textcolor);
    }
    p ,.stars{
      color: #CCC7C7;
      font-size: 18px;
      svg{
        cursor: pointer;
        margin: 0 5px;
        :hover{
          color:#F1C40F ;
          font-size: 20px;


        }
      }
    }
    
  }
}
</style>