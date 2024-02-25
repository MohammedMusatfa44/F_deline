<template>
  <v-layout class="loder__parent v-col-12 position-fixed" :class="{ 'hide__loder': dataFetched }">
    <v-row>
      <v-col class="d-flex justify-center align-center" lg="12" md="12" sm="12">
        <div class="wrapper  text-center position-relative parent__img">
          <div class="d-flex justify-center align-center flex-wrap">
            <img src="../assets/image/logo4.png" class="top__left  col-6">
            <img src="../assets/image/logo3.png" class="top__right  col-6">

            <img src="../assets/image/logo2.png" class="bottom__left  col-6">
            <img src="../assets/image/logo1.png" class="bottom__right col-6" />

          </div>
          <!-- <div class="position-absolute parent_text">
            <h2 class="letter-change-text title__card " data-text-value="DELINE">
              DELINE
            </h2>

          </div> -->
          <div class="position-absolute parent_text w-100">
            <h2 class=" title__card ">
              Deline
            </h2>
          </div>



        </div>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
// import axios from 'axios';

export default {
  props: ['dataFetched'],

  data() {
    return {
      hideLoader: true,
      hideopacty: false,
    }
  },
  created() {
    // this.fetchData();

    this.$nextTick(() => {
      setTimeout(() => {
        // this.changeTextLetter();
        this.hideLoaderAfterTimeout();
      }, 2000);
    });
  },
  mounted() {




  },
  methods: {
    // fetchData() {
    //   axios.get('GetAllGallery') // Relative URL, will be appended to the base URL
    //     .then(response => {
    //       this.hideLoader = false;

    //     })
    //     .catch(error => {
    //       console.error('Error fetching data:', error);
    //     });
    // },
    // changeTextLetter() {
    //   const target = document.querySelector('.letter-change-text');
    //   const originalText = target.innerText;
    //   const targetText = target.dataset.textValue;
    //   let iteration = 0;
    //   const interval = setInterval(() => {
    //     target.innerText = originalText.split("").map((letter, index) => {
    //       if (index < iteration) {
    //         return targetText[index];
    //      }
    //      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    //     }).join("");

    //     if (iteration >= targetText.length) {
    //        clearInterval(interval);
    //      }

    //     iteration += 1 / 20;
    //    }, 50); // Adjust the interval to control the speed (e.g., 200 milliseconds)

    // Add a class to trigger the CSS transition
    //   target.classList.add('changing-letter');
    //  },

    /////////////////////
    hideLoaderAfterTimeout() {

    },
  },
};
</script>

<style lang="scss" scoped>
.loder__parent {
  position: fixed;
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 100vh;
  z-index: 1200000 !important;
  transition: 1s;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 40px;
    transition: color 0.5s ease;
    opacity: 0;
    width: 100%;
    animation: animate 1s 2s linear forwards;

    /* Add a CSS transition for the color change */

    &::first-letter {
      color: white;
    }

    &:nth-child(1) {
      color: white !important;
    }
  }
}

.hide__loder {
  animation: hide-loder 0.5s 5s ease-out forwards, hideLoder 1s 6s linear forwards;
}

.parent__img {
  height: 40%;
  width: 320px;
  margin-bottom: 100px;
}

@media (max-width:600px) {
  .parent__img {
    height: 20% !important;
    width: 245px;
  }

  .top__left {
    top: 2.5px !important;
  }

  .top__right {
    top: 2.5px !important;
  }

  .parent_text {
    top: 180px !important;
  }

  h2 {
    letter-spacing: 25px !important;
  }

}

@media (max-width:600px) {


  .parent_text {
    top: 180px !important;
  }

  h2 {
    letter-spacing: 25px !important;
    margin-right: 20px;
    width: 80% !important;
  }

}


.bottom__right,
.bottom__left,
.top__right,
.top__left {
  position: absolute;
  width: 50%;
  height: 50%;

}

.parent_text {
  top: 300px;
  left: -5px;
}

.bottom__left {
  left: 0;
  bottom: 0;
  opacity: 0;
  animation: bottom-left 1s 0.9s ease-out forwards;
}

.bottom__right {
  right: 0;
  bottom: 0;
  opacity: 0;
  animation: bottom-right 1s .6s ease-out forwards;


}

.top__left {
  left: 0;
  top: 5px;
  opacity: 0;
  animation: top-left 1s ease-out forwards;
}

.top__right {
  right: 0;
  top: 5px;
  opacity: 0;
  animation: top-right 1s .3s ease-out forwards;

}

.letter-change-text {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(3rem, 10vh, 10rem);
  color: black;
  text-transform: uppercase;
  letter-spacing: 40px;
}

.title__card {
  color: white !important;
}

.title__card::before {
  content: '';
  width: 10px;
  transform: rotate(180deg);
  height: 5px;
  background-color: white;
  position: absolute;
  z-index: 1;
  right: 74%;
  transform: translateX(126px);
  top: 20px;
  animation: card-title-animation 1s 2s infinite alternate ease-in-out;
}

.title__card::after {
  content: '';
  width: 150px;
  transform: rotate(180deg);
  height: 5px;
  background-color: var(--secondColor);
  position: absolute;
  right: 62%;
  animation: animate 1s 2s linear forwards;
  opacity: 0;
  transform: translateX(126px);
  top: 20px;
}


.changing-letter {
  color: rgb(164, 164, 164);
  /* Change the color during the transition */
}

@keyframes hide-loder {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }

}

@keyframes animate {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }

}

@keyframes hideLoder {
  0% {
    display: block;

  }

  100% {
    display: none;
  }

}

@keyframes card-title-animation {
  0% {
    right: 63%;
  }

  100% {
    right: 105%;
  }
}

@keyframes top-left {
  0% {
    transform: translate3d(-400px, -400px, 0px);
    opacity: 0;


  }

  100% {
    transform: translate3d(0px, 0px, 0px);
    opacity: 1;


  }
}

@keyframes top-right {
  0% {
    transform: translate3d(400px, -400px, 0px);
    opacity: 0;


  }

  100% {
    transform: translate3d(0px, 0px, 0px);
    opacity: 1;


  }
}

@keyframes bottom-right {
  0% {
    transform: translate3d(400px, 0px, 0px);
    opacity: 0;


  }

  100% {
    transform: translate3d(0px, 0px, 0px);
    opacity: 1;


  }
}

@keyframes bottom-left {
  0% {
    transform: translate3d(-400px, 0px, 0px);
    opacity: 0;
  }

  100% {
    transform: translate3d(0px, 0px, 0px);
    opacity: 1;
  }
}
</style>
