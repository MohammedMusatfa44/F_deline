<template>
  <v-app style="scroll-behavior: smooth;">
    <!-- app bar / navbar -->
    <v-app-bar class="header">
      <v-row class="d-flex justify-space-evenly align-center  header">
        <!-- logo iamge or name for caompany  -->
        <v-col lg="3" class="" md="3" sm="3">
          <v-card class="ml-lg-0 ml-md-0 ml-sm-0 ml-5 img-card">
            <img class="pa-3" src="../../assets/image/logo.png" width="150" height="100" />
          </v-card>
        </v-col>
        <!--  list that content the links fo pages on website  -->
        <v-col lg="8" class=" text-center d-flex justify-end align-center ma-1" md="8" sm="8">
          <v-card class="d-lg-flex d-md-flex  w-100  d-none justify-space-between align-center menu"
            :class="open ? 'd-flex' : 'd-none'">
            <v-card class="w-75 child1">
              <ul class="d-lg-flex d-md-flex  d-none  justify-center menu_ul align-center"
                :class="open ? 'd-flex' : 'd-none'">
                <li class=""><a href="#1" :class="scro ? 'menu__scroll' : ''"> Home </a></li>
                <li class=""> <a href="#2" :class="scro ? 'menu__scroll' : ''"> About Us</a></li>
                <li class=""> <a href="#3" :class="scro ? 'menu__scroll' : ''"> Services</a></li>
                <li class=""> <a href="#4" :class="scro ? 'menu__scroll' : ''">Partner</a></li>
                <li class=""><a href="#5" :class="scro ? 'menu__scroll' : ''"> Contact Us </a></li>
              </ul>
            </v-card>
            <v-btn class="child2" :class="scro ? 'scroll_bottun' : ''">
              <a href="#5">
                Contact
              </a>
            </v-btn>
          </v-card>
          <v-btn class="d-block d-lg-none d-md-none d-sm-block burger__menu" icon="mdi-menu" @click="openmenu">

          </v-btn>
        </v-col>
      </v-row>
    </v-app-bar>
    <loder-page :dataFetched="dataFetched">

    </loder-page>
    <home-page id="1" @data-fetched="dataFetched = true" />
    <about-page id="2" @data-fetched="handleDataFetched" />
    <services-page id="3" />
    <partners-page id="4" />
    <contact-page id="5" />
    <footer-page :item="this.items" />
    <default-view />
  </v-app>
</template>
<script >
import loderPage from '../../model/loderPage.vue'
import DefaultView from './View.vue';
import HomePage from '../../components/HomePage.vue'
import AboutPage from '../../components/AboutPage.vue'
import ServicesPage from '@/components/ServicesPage.vue';
import PartnersPage from '@/components/PartnersPage.vue';
import ContactPage from '@/components/ContactPage.vue';
import FooterPage from '@/components/FooterPage.vue';

export default {

  data() {
    return {
      open: false,
      scro: false,
      dataFetched: false,
      items: [],
    }

  }
  ,
  components: {
    DefaultView,
    loderPage,
    HomePage,
    AboutPage,
    ServicesPage,
    PartnersPage,
    ContactPage,
    FooterPage,

  },
  methods: {
    openmenu() {
      this.open = !this.open

    },
    handleScroll() {
      // logic to determine if the page is scrolled
      this.scro = window.scrollY > 200; // Change the condition based on your requirement
      if (window.innerWidth < 945) {
        this.scro = false
      }

    },
    handleDataFetched(data) {
      // 'data' contains the data passed from the HomePage component
      this.items = data
      // You can now use the data here
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);

  }

  ,
  created() {
  }
}


</script>
<style scoped lang="scss">
ul {
  li {
    width: fit-content;
    min-width: 110px;
    text-align: center;

    a {
      color: white;
      transition: .5s;

      &:hover {
        color: var(--secondColor);
      }
    }
  }

  list-style: none;
}

.header {
  animation: chang 4s ease-in both;
  animation-timeline: scroll();


}

.burger__menu {
  width: 50px !important;
  height: 50px !important;
  border-radius: 10px;
}




.menu__scroll {
  color: var(--secondColor) !important;
  font-weight: bold;
}

.menu {
  background-color: transparent !important;
}

.child1,
.menu_ul,
.menu {
  background-color: transparent !important;
}



.header img {
  background-color: transparent;
}

.img-card {
  background-color: transparent !important;
}

.child2 {
  transition: 0.5s;

  &:hover {
    background-color: var(--secondColor);

    a {
      color: white !important;

    }
  }

  a {
    color: var(--secondColor) !important;
  }
}

button {
  background-color: #ffffff;
  color: var(--secondColor);
  font-weight: bold;
  transition: all 1s;
  margin-left: 30px;

}

.scroll_bottun {
  background-color: var(--secondColor);
  color: white;

  a {
    color: white !important;
  }
}

@keyframes chang {

  0% {
    background-color: transparent;
    color: white;
  }

  10% {
    background-color: white;
    color: white;
    box-shadow: 0 4px 30px rgb(0 0 0 / 85%);


  }

  100% {
    background-color: white;
    color: white;
    box-shadow: 0 4px 30px rgb(0 0 0 / 85%);



  }

}



@keyframes menuAnimayion {

  0% {
    opacity: 0;
    transform: translateX(50px);
  }

  100% {
    opacity: 1;
    transform: translateX(0px);

  }

}


@media (max-width: 500px) {
  img {
    width: 75px !important;
    height: 70px !important;
    padding: 10px 0 !important;
  }
}

@media only screen and (max-width: 954px) {
  .menu {
    position: absolute;
    flex-direction: column;
    top: -5px;
    left: 0px;
    padding-top: 100px !important;
    width: 100%;
    justify-content: end !important;
    align-items: start !important;
    padding: 15px;
    text-align: start !important;
    transition: 0.5s;
    animation: menuAnimayion 1s both alternate;
    background-color: rgb(66 66 66 / 55%) !important;
    color: white !important;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1) !important;
    backdrop-filter: blur(9.1px);
    -webkit-backdrop-filter: blur(9.1px);
    border: 1px solid rgba(255, 255, 255, 0.41);

  }

  .menu_ul {
    flex-direction: column;

  }

  .child1 {
    width: 150px !important;
    background-color: transparent !important;


  }

  .child2 {
    background-color: transparent !important;
    padding: 0px 20px !important;


  }

  ul {
    align-items: end !important;

    li {
      width: fit-content;
      min-width: 200px;
      text-align: start;
      padding: 5px;
      color: rgb(255, 255, 255);
      padding-left: 60px;
      transition: .5s;
      border-radius: 20px;


      &:hover {
        width: fit-content;
        min-width: 200px;
        text-align: start;
        padding: 5px;
        padding-left: 80px !important;
        color: rgb(241, 241, 241);
        background-color: var(--secondColor) !important;
        padding-left: 10px;

      }
    }

    list-style: none;
  }

  .child2 {
    text-align: end;
    color: rgb(255, 255, 255);
    transition: 0.6s;
    margin: 0 !important;



    &:hover {
      width: fit-content;
      text-align: end;
      margin-right: 10px !important;
      padding: 5px;
      color: rgb(241, 241, 241);
      background-color: var(--secondColor) !important;
      padding-left: 10px;

    }

    button {
      padding: 0 !important;
    }


  }
}
</style>
