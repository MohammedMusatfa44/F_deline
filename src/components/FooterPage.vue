<template>
  <v-layout class="footer">
    <v-row class="d-flex justify-center align-start ">
      <v-col lg="4" sm="10" md="4" class="v-col-10 section  d-flex justify-start align-center flex-column ">
        <h2 class="mb-10 text-white "> Follow and contact us</h2>

        <ul class="d-flex justify-end align-center flex-wrap flex-row-reverse">
          <v-card v-for="item in items" :key="item" class="v-col-3 text-center bg-transparent pa-5">
            <a :href="item.image">
              <v-icon :icon="'mdi-' + item.icon" class="text-h3"></v-icon>
              <h2 class="socail__title">{{ item.title }}</h2>
            </a>

          </v-card>
        </ul>

      </v-col>

      <v-col lg="4" sm="10" md="4" class="v-col-10   d-flex justify-start align-center flex-column  ">
        <h2 class="mb-10 text-white "> Important links</h2>

        <ul class="d-flex justify-end align-center flex-wrap flex-row-reverse">
          <v-card v-for="(item) in items2" :key="item" class="v-col-6 text-center bg-transparent pa-2 ">
            <a :href="item.link" class="d-flex justify-end  align-center">
              <h4>{{ item.title }}</h4>
            </a>
            <!-- <h2>{{ item.title }}</h2> -->
          </v-card>
        </ul>

      </v-col>
      <v-col lg="4" sm="10" md="3" class="v-col-10 section ">
        <ul class="d-flex justify-center align-center flex-wrap flex-row-reverse">
          <v-card
            class="v-col-12 text-center bg-transparent pa-5 d d-flex justify-end align-start flex-column  text-left">
            <h6 class="text-lg-h6 text-md-caption text-body-1 text-start">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut ipsa, possimus at nesciunt fuga, fugit aperiam
              id
            </h6>
            <v-img src="../assets/image/logo.png" class="footer__img" width="200" height="200"></v-img>


          </v-card>
        </ul>

      </v-col>
    </v-row>
  </v-layout>
</template>
<script>
import axios from 'axios';

export default {
  data: () => ({
    items: [


    ],
    items2: [


    ]



  }),
  methods: {
    fetchData() {
      axios.get('GetAllSocailMedia') // Relative URL, will be appended to the base URL
        .then(response => {
          this.items = response.data;

        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });

      axios.get('getmportantLink') // Relative URL, will be appended to the base URL
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
.footer {
  background-color: var(--secondColor);
  padding: 20px 20px 0px;
  margin-top: 50px;

}

.socail__title {
  width: fit-content;
}

h2 {
  font-family: 'Cairo' !important;
  font-weight: normal;


}

.footer__img {
  filter: brightness(105%) saturate(0%) invert(100%)
}

a {
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;


}

h6,
h4 {
  color: white;
  font-family: 'Cairo' !important;
  font-weight: normal !important;

}

@media only screen and (min-width: 965px) {
  .section {
    height: 100% !important;
  }

  .socail__title {
    font-size: 14px !important;
  }

  .v-icon {
    font-size: 40px !important;
    transition: .5s;

    &:hover {
      font-size: 45px !important;

    }
  }
}

@media only screen and (max-width: 700px) {
  .socail__title {
    font-size: 12px !important;

    &:hover {
      font-size: 14px !important;

    }
  }

  a {
    &:hover {
      .socail__title {
        font-size: 14px !important;


      }

      .v-icon {
        font-size: 55px !important;

      }

    }

  }

  .v-icon {
    font-size: 50px !important;
    transition: .5s;
  }
}
</style>
