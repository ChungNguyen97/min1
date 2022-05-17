import axios from "axios";
import Vue from 'vue'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
const axiosClient = axios.create({
  baseURL: 'https://shopify-dialga.herokuapp.com/api',
  headers: {
<<<<<<< HEAD
    'Content-Type': 'application/json'
=======
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Bearer sGCSOzJJwiKLOxHT5dqJSOEnhh7Cgtrr0aUYircuOm6pQDyoSlDdj7r9g3AD'
>>>>>>> feature/render-list-product
  },

})
// Add a request interceptor
axiosClient.interceptors.request.use(function (config) {
  // Do something before request is sent
<<<<<<< HEAD
=======
  config.headers.Authorization = 'Bearer ' + 'sGCSOzJJwiKLOxHT5dqJSOEnhh7Cgtrr0aUYircuOm6pQDyoSlDdj7r9g3AD'
>>>>>>> feature/render-list-product
  return config;
}, function (error) {
  // Do something with request error
  console.log(error);
  return Promise.reject(error);
});

// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response.data;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  // console.log(error.response.status, 'có lỗi');
  return Promise.reject(error);
});


export default axiosClient