<template>
  <v-layout class="mt-lg-10 pt-lg-10 mt-md-10 pt-md-10  mt-4 pt-4">
    <v-row
      class=" about__layout d-flex justify-lg-space-around  justify-md-space-around  justify-sm-center justify-center  align-center text-center flex-wrap">
      <v-col lg="10" md="10" sm="10" class="v-col-10  title__card">
        <h1>
          About Us </h1>
      </v-col>
      <v-col lg="4" md="5" sm="8" class="v-col-8 mt-5 about__card  left__card">
        <div class="bg"></div>
        <h2>{{ items.title }}</h2>
        <p class="text-lg-h6 text-md-h6  text-sm-h6 text-caption ">
          {{ items.description }}

        </p>

      </v-col>
      <v-col lg="5" md="5" sm="10" class="v-col-10 mt-5 right__card">

        <div class="about__img w-100 h-100 position-relative">
          <img :src="items.image" alt="" class="w-50">


        </div>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      items: []

    }
  },


  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {

    fetchData() {
      axios.get('GetAbout') // Relative URL, will be appended to the base URL
        .then(response => {
          console.log(response.data);
          this.items = response.data[0];

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
      const titleCardTop = document.querySelector('.title__card');
      const righttopcard = document.querySelector('.right__card');
      const lefttopcard = document.querySelector('.left__card');
      const background = document.querySelector('.bg');


      // Check if the scroll position is equal to or greater than the title__card top position
      titleCardTop.classList.toggle('scroll-animation', scrollPosition >= titleCardTop.offsetTop);
      righttopcard.classList.toggle('scroll-animation', scrollPosition >= righttopcard.offsetTop);
      lefttopcard.classList.toggle('scroll-animation', scrollPosition >= lefttopcard.offsetTop);
      background.classList.toggle('scroll-animation', scrollPosition >= lefttopcard.offsetTop + 100);

    },
  },
  created() {
    this.fetchData();

  },
};

</script>

<style lang="scss" scoped>
.about__img::after {
  content: "";
  width: 80px;
  height: 80px;
  background-image: linear-gradient(132deg, var(--secondColor), var(--theirdColor), var(--theirdColor), var(--theirdColor));
  position: absolute;
  top: 0;
  clip-path: polygon(0 0, 57% 0, 57% 23%, 24% 23%, 24% 57%, 11% 57%, 0 57%, 0% 30%);
  left: 20px;
  opacity: 0.9;

}

.about__img::before {
  content: "";
  width: 80px;
  transform: rotate(180deg);
  height: 80px;
  background-image: linear-gradient(132deg, var(--secondColor), var(--theirdColor), var(--theirdColor), var(--theirdColor));
  position: absolute;
  clip-path: polygon(0 0, 57% 0, 57% 23%, 24% 23%, 24% 57%, 11% 57%, 0 57%, 0% 30%);
  right: 40px;
  bottom: 0;
  opacity: 0.9;


}







.about__layout {
  margin: 50px 0px;

}

.about__card {
  background-color: rgb(252, 252, 252) !important;
  transition: .5s;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1) !important;
  border-radius: 20px;
  min-height: 250px;
  position: relative;

}

.bg {
  width: 80px;
  height: 130%;
  background-image: linear-gradient(to bottom, var(--secondColor), var(--theirdColor));
  position: absolute;
  top: -37px;
  z-index: -1;
  left: -41px;

}




@keyframes animation-left {

  0% {
    transform: translateX(-300px);
  }

  100% {
    transform: translateX(0px);
  }

}

@keyframes animation-right {

  0% {
    transform: translatex(300px);
  }

  100% {
    transform: translateX(0px);
  }

}

@keyframes animation-opacty {

  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }

}

@keyframes about-title-animation {

  0% {
    right: 55%;
  }

  100% {

    right: 70%;

  }

}

@media (max-width: 960px) {


  .about__img {
    margin-top: 200px !important;
  }

  .about__img::before {
    right: 60px !important;


  }

  .about__layout {
    margin: 50px 0px;
  }

  .title__card {
    margin-bottom: 100px;
    color: var(--secondColor);
    font-size: 40px;
    position: relative;

  }

  @keyframes about-title-animation {

    0% {
      right: 55%;
    }

    100% {

      right: 85%;

    }

  }




}

@media (max-width: 500px) {

  @keyframes about-title-animation {

    0% {
      right: 55%;
    }

    100% {

      right: 120%;

    }

  }

  .about__img {
    margin-top: 100px !important;
  }

  .about__img::before {
    right: 10px !important;


  }

  .about__img::after {
    left: -10px !important;


  }
}

.title__card.scroll-animation {
  animation: animation-opacty 2s ease-out;
}

.right__card.scroll-animation {
  animation: animation-right 2s ease-out;
}

.left__card.scroll-animation {
  animation: animation-left 2s ease-out;
}



.bg.scroll-animation {
  animation: animation-left 4s ease-out;


}
</style>
