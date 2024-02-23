<template>
  <v-layout>
    <v-row>
      <v-col style="" class="home-parent position-relative">
        <!-- carousel for images home page  -->
        <v-carousel cycle interval="2000" :show-arrows="false" :hide-delimiters="false" class="carousel__height">
          <v-carousel-item v-for="(item, i) in items" :key="i">
            <v-parallax :src="item.image" class="parallax"></v-parallax>
          </v-carousel-item>
        </v-carousel>
        <!--  carousel for text -->

        <v-card class=" carousel-text">
          <v-col>
            <v-carousel cycle interval="2000" :show-arrows="false" :hide-delimiters="true" style="height: 650px;">
              <v-carousel-item transition="scroll-y-transition" v-for="(item, i) in items2" :key="i">
                <h2>
                  {{ item.title }}
                </h2>

                <p class="carousel__p">
                  {{ item.description }}
                </p>

              </v-carousel-item>
            </v-carousel>

          </v-col>
        </v-card>

        <!-- social media section -->
        <v-card class="socail-section d-flex flex-column col-2 position-absolute">
          <a :href="facebook">
            <v-icon icon="mdi-facebook"></v-icon>
          </a>
          <a :href="instagram">
            <v-icon icon="mdi-instagram"></v-icon>
          </a>
          <a :href="linkedin">
            <v-icon icon="mdi-linkedin"></v-icon>
          </a>
        </v-card>
      </v-col>
    </v-row>
  </v-layout>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      items: [

      ],
      items2: [
      ],

      facebook: '',
      instagram: '',
      linkedin: '',
    }
  },

  methods: {
    fetchData() {
      axios.get('GetAllGallery') // Relative URL, will be appended to the base URL
        .then(response => {
          this.items = response.data;

        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
      axios.get('GetAllSocailMedia') // Relative URL, will be appended to the base URL
        .then(response => {
          const mydata = response.data;
          console.log(mydata);
          mydata.forEach(e => {

            this.facebook = e.title == "Facebook" ? 'www.facebook.com' : e.image;
            this.instagram = e.title == "Instagram" ? 'www.instagram.com' : e.image;
            this.linkedin = e.title == "Linkedin" ? 'www.linkedin.com' : e.image;
          });


        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });

      axios.get('GetContents') // Relative URL, will be appended to the base URL
        .then(response => {
          this.items2 = response.data;

        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  },

  created() {
    this.fetchData();

  }


}
</script>
<style lang="scss" scoped>
.home-parent {
  width: fit-content;
  height: fit-content;
  position: relative;
}

.home-parent::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  clip-path: polygon(47% 1%, 101% 0px, 100% 35%, 100% 87%, 79% 87%, 41% 82%, 0px 100%, 0% 72%, 0px 12%, 15% 18%);

  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 60%);

}

.parallax {
  clip-path: polygon(47% 1%, 101% 0px, 100% 35%, 100% 87%, 79% 87%, 41% 82%, 0px 100%, 0% 72%, 0px 12%, 14% 18%);
  height: 100%;


}

.carousel-text {
  position: absolute;
  top: 230px;
  left: 0px;
  padding: 30px 30px 0 50px;
  width: 50%;
  height: 40%;
  z-index: 1200;
  background-color: rgba(255, 255, 255, 0.32) !important;
  border-radius: 16px;
  color: white;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1) !important;
  backdrop-filter: blur(9.1px);
  -webkit-backdrop-filter: blur(9.1px);
  border: 1px solid rgba(255, 255, 255, 0.41);

  h2 {
    font-size: 40px;
  }
}

.socail-section {
  z-index: 1200;
  top: 37%;
  right: 3%;
  background-color: transparent !important;
  overflow: visible !important;

}

.carousel__height {
  height: 750px !important;
}

.socail-section i {
  color: rgb(255, 255, 255);
  margin: 10px 0;
}

.socail-section::after {
  content: "";
  position: absolute;
  width: 2px;
  top: -60px;
  right: 11px;
  height: 60px;
  background-color: rgb(255, 255, 255);
}

.socail-section::before {
  content: "";
  position: absolute;
  width: 2px;
  bottom: -60px;
  right: 11px;
  height: 60px;
  background-color: rgb(255, 255, 255);
}

.v-carousel__controls {
  background-color: rgb(255, 255, 255) !important;
  background: rgb(255, 255, 255) !important;
}


// media section
@media (min-width: 1200px) and (max-width: 1600px) {

  .home-parent::after {
    clip-path: polygon(31% 1%, 101% 0px, 100% 35%, 100% 87%, 79% 87%, 41% 82%, 0px 100%, 0% 72%, 0px 13%, 10% 18%) !important;
  }

  .parallax {
    clip-path: polygon(31% 1%, 101% 0px, 100% 35%, 100% 87%, 79% 87%, 41% 82%, 0px 100%, 0% 72%, 0px 13%, 10% 18%) !important;

  }

  .socail-section {
    right: 5% !important;
  }


}

@media (min-width: 650px) and (max-width: 775px) {

  .home-parent::after {
    clip-path: polygon(46% 0%, 101% 0px, 100% 35%, 100% 87%, 79% 87%, 41% 82%, 0px 100%, 0% 72%, 0px 13%, 18% 18%) !important
  }

  .parallax {
    clip-path: polygon(46% 0%, 101% 0px, 100% 35%, 100% 87%, 79% 87%, 41% 82%, 0px 100%, 0% 72%, 0px 13%, 18% 18%) !important;
  }

  .socail-section {
    right: 5% !important;
  }

  .carousel-text {
    width: 80% !important;
  }

  .carousel__height {
    height: 650px !important;
  }

  .carousel__p {
    font-size: 14px;
  }



}

@media (min-width: 450px) and (max-width: 650px) {

  .home-parent::after {
    clip-path: polygon(56% 0%, 101% 0px, 100% 35%, 100% 87%, 79% 87%, 41% 82%, 0px 100%, 0% 72%, 0px 13%, 21% 17%) !important;
  }

  .parallax {
    clip-path: polygon(56% 0%, 101% 0px, 100% 35%, 100% 87%, 79% 87%, 41% 82%, 0px 100%, 0% 72%, 0px 13%, 21% 17%) !important;
  }

  .carousel-text {
    width: 80% !important;
  }

  .socail-section {
    right: 5% !important;
  }

  .carousel__height {
    height: 650px !important;
  }

  .carousel__p {
    font-size: 14px;
  }





}

@media (max-width: 450px) {

  .home-parent::after {
    clip-path: polygon(63% -1%, 101% 0px, 100% 35%, 100% 87%, 79% 87%, 41% 82%, 0px 100%, 0% 72%, 0px 10%, 24% 13%) !important;
  }

  .parallax {
    clip-path: polygon(63% -1%, 101% 0px, 100% 35%, 100% 87%, 79% 87%, 41% 82%, 0px 100%, 0% 72%, 0px 10%, 24% 13%) !important;
  }

  .carousel-text {
    width: 80% !important;
    padding: 10px !important;
  }

  .socail-section {
    right: 5% !important;
  }

  .carousel__height {
    height: 650px !important;
  }

  .carousel__p {
    font-size: 14px;
  }




}
</style>
