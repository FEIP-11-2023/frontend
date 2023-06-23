import {createStore} from 'vuex';
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
        loggedIn: false,
        accessToken: null
    }
  },
  mutations: {
    setLoggedIn: (state, payload) => {
        state.loggedIn = payload
    },
    setAccessToken: (state, payload) => {
        state.accessToken = payload
    },
    setRefreshToken: (state, payload) => {
        localStorage.setItem("refreshToken", payload)
        state.refreshToken = payload
    }

  },
  actions: {
    register: (context, payload) => {
        return axiosInstance.post('/api/v1/auth/register', payload)
    },
    login: (context, payload) => {
        let formdata = new FormData()

        formdata.set("username", payload["username"])
        formdata.set("password", payload["password"])

        return axiosInstance.post('/api/v1/auth/token', formdata).then((data) => {
            context.commit("setAccessToken", data.data["access_token"])
            context.commit("setRefreshToken", data.data["refresh_token"])
            context.commit("setLoggedIn", true)
        })
    },
    getCategories: (context, payload) => {
        return axiosInstance.get("/api/v1/goods/category")
    },
    getGoodsByCategory: (context, payload) => {
        return axiosInstance.get("https://api.mrfox131.ru/api/v1/goods/good/search", {
            params: {
                name: payload.name,
                category_ids: payload.category_id,
            }
        })
    },
  }
})

export default store;