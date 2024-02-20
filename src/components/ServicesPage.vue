<template>
  <v-layout class="mt-10 pt-10">
    <v-row
      class="d-flex justify-lg-space-around  justify-md-space-around  justify-sm-center justify-center  align-center text-center flex-wrap"
      style="margin: 100px 0;">
      <v-col lg="10" md="10" sm="10" class="v-col-10  title__card">
        <h1>
          Services
        </h1>
      </v-col>
      <v-col lg="4" md="5" sm="10" class="v-col-10 d-flex justify-center  " v-for="item in items" :key="item">
        <Tilt parallax="true" :options="options">
          <v-card class="servics_about text-start d-flex justify-start align-center flex-column position-relative ">
            <tilt>
              <img :src="item.image" alt="" class="w-100 h-100 img__title">
              <div class="p__h">
                <h2 class="w-100">{{ item.title }}</h2>
                <p class="text-lg-body-2  text-md-body-2  text-sm-body-2 text-caption">
                  {{ item.description }}
                </p>

              </div>

            </tilt>


            <!-- <img src="../assets/image/pattern.svg" alt="" class="position-absolute bg__img"> -->
          </v-card>
        </Tilt>


      </v-col>
    </v-row>
  </v-layout>
</template>
<script>
import axios from 'axios';
import Tilt from 'vanilla-tilt-vue'


export default {
  data() {
    return {
      items: [

      ],
      options: {
        scale: 1,
        speed: 1000,



      }
    }


  },
  components: { Tilt },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    fetchData() {
      axios.get('GetAllServices') // Relative URL, will be appended to the base URL
        .then(response => {
          this.items = response.data;

        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
    handleScroll() {
      // Get the scroll position

      const { scrollY, pageYOffset } = window;
      const scrollPosition = scrollY || pageYOffset;

      // Get the top position of the title__card
      const servicsList = document.querySelectorAll('.servics_about');
      servicsList.forEach(e => {
        // Check if the scroll position is equal to or greater than the current servics element's top position
        e.classList.toggle('scroll-animation', scrollPosition >= e.offsetTop);
      });



    },
  },
  created() {
    this.fetchData();

  }

}
</script>
<style lang="scss" scoped>
.servics_about {
  background-color: #ffffff;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1) !important;
  min-height: 500px;
  padding: 0 30px 30px 30px;
  border-radius: 20px;
  max-width: 350px;
  transform: translateZ(20px);

  img {
    transform: translateZ(20px)
  }


  .img__title {
    transition: .5s;
    border-radius: 20px;
    margin-bottom: -50px;
    z-index: 1200;
    margin-top: 30px;


  }

  .bg__img {
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.5;
  }

  .p__h {
    padding-top: 50px;
    padding-bottom: 20px;
    background-color: white;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.341) !important;
    min-width: 100%;
    max-width: 100%;
    overflow: hidden;
  }

  h2,
  p {
    background-color: rgb(255, 255, 255);
    padding: 5px 20px;


  }

  p {
    padding: 5px 20px 50px !important;
    min-width: 100%;
    min-height: 100px;
    max-height: 100px;
    max-width: 100px;
    overflow-x: hidden;
    overflow-y: auto;
    scrollbar-width: none;


  }

}

@media only screen and (max-width: 600px) {
  p {
    font-size: 10px;

  }
}


@keyframes animation-opacty {

  0% {
    opacity: 0;
    transform: translateX(-300px);
  }

  100% {
    opacity: 1;
    transform: translateX(0px);

  }

}

.servics_about.scroll-animation {
  animation: animation-opacty 2s ease-in-out;
}
</style>
