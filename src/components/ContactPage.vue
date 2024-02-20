<template>
  <v-layout class="mt-16 pt-16">
    <v-row
      class="d-flex justify-lg-space-around  justify-md-space-around  justify-sm-center justify-center  align-center text-center flex-wrap">
      <v-col lg="10" md="10" sm="10" class="v-col-10  title__card">
        <h1>
          Contact Us
        </h1>
      </v-col>
      <v-col lg="12" sm="12" md="5" class="v-col-10 ma-lg-6 d-flex justify-center align-center">
        <v-card class="v-col-12">
          <v-form ref="form" validate-on="submit lazy"
            class="mb-6 mt-6 v-col-lg-12 d-flex justify-center align-center flex-wrap  flex-lg-row-reverse flex-md-column flex-sm-column flex-column">
            <div class="v-col-lg-5">
              <v-text-field label="Name" v-model="name" required :rules="rules">
              </v-text-field>
              <v-text-field label="Email" v-model="email" required :rules="emailRules"></v-text-field>
              <v-text-field label="Phone" v-model="phone" required :rules="rules"></v-text-field>
            </div>
            <div class="v-col-lg-5">
              <v-textarea label="Message" hide-details="auto" v-model="messages" required :rules="rules" class="textarea">
              </v-textarea>
            </div>
            <div class="v-col-lg-5 text-left">
              <p class="text-green ml-2">{{ this.respon }}</p>

            </div>
            <div class="v-col-12">
              <v-btn :disabled="loading" @click.prevent="postData" :loading="loading" type="submit"
                class="me-4 text-capitalize  submit__form">
                Send Messages
              </v-btn>
            </div>


          </v-form>
        </v-card>

      </v-col>


    </v-row>
  </v-layout>
</template>
<script>
import axios from 'axios';

export default {


  data: () => ({
    loading: false,
    name: '',
    email: '',
    phone: '',
    respon: '',
    messages: '',
    rules: [
      value => !!value || 'Required.',
      value => (value && value.length >= 3) || 'Min 3 characters',
    ],
    emailRules: [
      value => {
        if (value) return true

        return 'E-mail is requred.'
      },
      value => {
        if (/.+@.+\..+/.test(value)) return true

        return 'E-mail must be valid.'
      },
    ],

  }),
  watch: {
    loading(val) {
      if (!val) return

      setTimeout(() => (this.loading = false), 2000)
    },
  },
  methods: {
    async postData() {
      // Check if the form is valid
      const isValid = await this.$refs.form.validate();
      if (isValid.valid) {
        const params = new URLSearchParams();
        params.append('name', this.name);
        params.append('email', this.email);
        params.append('messages', this.messages);
        params.append('phone', this.phone);

        axios.post('AddContact', params)
          .then(response => {
            console.log(response.data);
            this.respon = 'The messages send';
            this.name = '';
            this.email = '';
            this.phone = '';
            this.messages = '';
          })
          .catch(error => {
            console.error('Error posting data:', error);
          });
      }

    }
  }
  ,

}
</script>
<style lang="scss" scoped>
.submit__form {
  background-color: var(--secondColor);
  color: white;
}

.textarea {
  height: 225px;
}
</style>

