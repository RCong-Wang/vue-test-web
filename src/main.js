

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axiosInstance from './api/index'; // 导入 axios 实例


// app.provide('axios', axiosInstance)
const fix_data = {
    data() {
        return {
            local_http: 'https://b4a8-2401-e180-8850-ae-c03b-534a-dcee-f333.ngrok-free.app',
            local_ws:'wss://b4a8-2401-e180-8850-ae-c03b-534a-dcee-f333.ngrok-free.app'
        };
    },
};

createApp(App).mixin(fix_data).use(store).use(router).provide('axios', axiosInstance).mount("#app");




  