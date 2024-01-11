import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axiosInstance from './api/index'; // 导入 axios 实例


// app.provide('axios', axiosInstance)

createApp(App).use(store).use(router).provide('axios', axiosInstance).mount("#app");




  