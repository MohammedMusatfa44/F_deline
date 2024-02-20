/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
// import Vue from "vue";

import App from "./App.vue";

//import global style
import "./assets/deline.css";
//import sass
import "sass";
// Set up Axios as a property on the Vue instance

import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api";
// Vue.prototype.$http = axios;

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";

const app = createApp(App);

registerPlugins(app);

app.mount("#app");

export default axiosInstance;
