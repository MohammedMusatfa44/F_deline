<template>
  <v-row
    class="mt-10 pt-10 d-flex justify-lg-space-around  justify-md-space-around  justify-sm-center justify-center  align-center text-center flex-wrap">
    <v-col lg="10" md="10" sm="10" class="v-col-10  title__card">
      <h1>
        Partner
      </h1>
    </v-col>
    <Carousel v-bind="settings" :wrapAround="true" :transition="500" class="w-100" :breakpoints="breakpoints">
      <Slide v-for="slide in items" :key="slide"
        class="slide justify-lg-start justify-md-space-around justify-sm-space-between justify-space-between ">
        <img :src="slide.image" alt="" class=" img__title">
        <div class="p__h ">
          <h4 class=" text-left partner__title ml-lg-3 text-lg-body-2  text-md-body-2  text-sm-body-2 text-caption  ">
            {{
              slide.title
            }}
          </h4>
          <!-- <p class="text-lg-body-2  text-md-body-2  text-sm-body-2 text-caption d-none">
            {{ slide.description }}

          </p> -->

        </div>
      </Slide>
      <template #addons>
        <Pagination />
      </template>

      ...
    </Carousel>
  </v-row>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel/dist/carousel.es'


import 'vue3-carousel/dist/carousel.css';
import axios from 'axios';


export default defineComponent({
  name: 'AutoPlay',
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data: () => ({
    items: [],
    settings: {
      autoplay: 2000,
    },
    breakpoints: {
      // 700px and up
      300: {
        itemsToShow: 3,
      },
      // 700px and up
      500: {
        itemsToShow: 3,
      },
      // 700px and up
      700: {
        itemsToShow: 3,
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
      },
    },
  }),


  methods: {
    fetchData() {
      axios.get('GetAllPartners') // Relative URL, will be appended to the base URL
        .then(response => {
          this.items = response.data;

        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  },

  created() {
    this.fetchData();

  }
})
</script>

<style lang="scss" scoped>
.slide {
  background-color: transparent !important;
  color: var(--secondColor);
  width: 200px;
  height: fit-content;
  display: flex;
  align-items: center;
  min-height: 100px;
  max-height: 100px;


  .partner__title {
    min-width: 100px;
    max-width: 200px;
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: none;


  }

  img {
    width: 70px;
    height: 35px;
  }
}

.carousel__slide {
  padding: 20px 10px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active~.carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
  margin-left: 13px !important;
  // transition: 1s;

  // p {
  //   transition: 0.5s;
  //   display: block !important;

  // }


}

@media (max-width: 600px) {
  .slide {
    img {
      width: 35px;
      height: 17px;
    }

    h4 {
      margin-left: 10px;
      margin-right: 10px;
    }

    .partner__title {
      max-width: 70px;
      min-width: 70px;
      overflow-x: auto;
      overflow-y: hidden;
      scrollbar-width: none;



    }
  }
}
</style>
