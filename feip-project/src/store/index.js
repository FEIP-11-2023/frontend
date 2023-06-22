import { createStore } from 'vuex';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.mrfox131.ru/',
    withCredentials: true,
})

// Create a new store instance.
const store = createStore({
  state () {
    return {
        refreshToken: localStorage.getItem("refreshToken"),
        loggedIn: false
    }
  },
  mutations: {
    setLoggedIn: (state, payload) => {
        state.loggedIn = payload
    }
  },
  actions: {
    register: (context, payload) => {
        let promise = axiosInstance.post('/api/v1/auth/register', payload)
        return promise
    },
    // getallgoods: () => {

    // }
  }
})

export default store;