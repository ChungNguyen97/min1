import axiosClient from "@/core/api";
const collection = {
  state: {
    isLogin: false,
  },
  getters: {
    getStatusLogin(state){
      return  state.isLogin
    }
  },
  actions: {
    async LoginAction({ commit }, data) {
      try {
        const res = await axiosClient.post('/login', data)
        commit('SET_TOKEN', { token: res.token, data })
        commit('SET_LOGIN')
      } catch (error) {
        console.log(error);
      }
    }
  },

  mutations: {
    SET_LOGIN(state){
      return state.isLogin = !state.isLogin
    },
    CHECK_STATUS_BEGIN(state,payload){
      return state.isLogin = payload
    }
  },



}

export default collection
