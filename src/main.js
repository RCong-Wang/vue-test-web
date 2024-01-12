

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axiosInstance from './api/index'; // 导入 axios 实例


// app.provide('axios', axiosInstance)
// const fix_data = {
//     data() {
//         return {
//             local_http: 'https://aa0e-2401-e180-8850-ae-c03b-534a-dcee-f333.ngrok-free.app',
//             local_ws:'wss://aa0e-2401-e180-8850-ae-c03b-534a-dcee-f333.ngrok-free.app'
//         };
//     },
// };

createApp(App).use(store).use(router).provide('axios', axiosInstance).mount("#app");




  