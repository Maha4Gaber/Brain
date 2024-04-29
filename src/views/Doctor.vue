<template>
  <div class="doctor container mb-5">
    <div class="row">
       <div class="col-lg-3 col-md-4">
        <div class="image">
          <img :src="require(`../assets/${state.filteredItems.img}.png`)" alt="">
        </div>
      </div>
      <div class="col-lg-9 col-md-8">
        <div class="details">
          <h2>{{ state.filteredItems.name }}</h2>
          <h3>{{ state.filteredItems.desc }}</h3>
          <p>
            <i class="fa-solid fa-location-dot"></i>
            {{ state.filteredItems.location }}</p>
          <div class="stars">
            <h4>Rate here</h4>
            <i
              v-for="(star, index) in state.filteredItems.rate"
              class="fa fa-star"
              :key="index"
            >
            </i>
          </div>
        </div>
      </div> 
    </div>
    <Appointments></Appointments>
    <Booked></Booked>
  </div>
</template>
<script>
import { reactive,computed,onMounted } from "vue";
import Appointments from '@/components/Doctor/Appointments'
import Booked from '@/components/Doctor/Booked.vue'
export default {
  components:{
    Appointments,
    Booked
  },

data() {
    return {
      
    };
  },
  props: {
    id: String,
  },
  setup(props) {
    const state = reactive({
      filteredItems:{},
      doctors: [
        {
          id: 1,
          name: "Dr.Sama",
          location: "Egypt",
          rate: 5,
          img: "doc1",
          desc:'Tumor specialist1'
        },
        {
          id: 2,
          name: "Dr.Eslam",
          location: "Egypt",
          rate: 5,
          img: "doc2",
          desc:'Tumor specialist2'
        },
        {
          id: 3,
          name: "Dr.Alia",
          location: "Egypt",
          rate: 5,
          img: "doc3",
          desc:'Tumor specialist3'
        },
      ],
    });
    onMounted:{
      state.filteredItems=state.doctors.filter(item => item.id == props.id);
      state.filteredItems=state.filteredItems[0];
      console.log(state.filteredItems.img);
    }
  return { state };
}
  

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