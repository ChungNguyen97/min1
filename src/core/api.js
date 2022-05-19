import axios from "axios";
import Vue from 'vue';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios)

const axiosClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },

})
axiosClient.interceptors.request.use(function (config) {
  config.headers.Authorization = 'Bearer ' + 'sGCSOzJJwiKLOxHT5dqJSOEnhh7Cgtrr0aUYircuOm6pQDyoSlDdj7r9g3AD'
  return config;
}, function (error) {
  console.log(error);
  return Promise.reject(error);
});

axiosClient.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});

export default axiosClient