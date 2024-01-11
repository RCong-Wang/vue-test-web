import { createApp, provide } from 'vue'
import App from '../App.vue';
import axios from 'axios'
        
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.withCredentials = true

const axiosInstance = axios.create({
    withCredentials: true
})

// axiosInstance.interceptors.request.use((config) => {
//     config.headers['X-Requested-With'] = 'XMLHttpRequest'
//     const regex = /.*csrftoken=([^;.]*).*$/
//     config.headers['X-CSRFToken'] = document.cookie.match(regex) === null ? null : document.cookie.match(regex)[1]
//     console.log(config.headers['X-CSRFToken'])
//     return config
// }) 

axiosInstance.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return Promise.reject(error)
    }
)
export default axiosInstance;

// const app = createApp(App)

// app.provide('axios', axiosInstance)

// app.mount('#app')
