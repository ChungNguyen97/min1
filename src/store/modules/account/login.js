import axiosClient from "@/core/api";
const login = {
  namespaced: true,
  state: {
    isLogin: false,
  },
  getters: {
    getStatusLogin(state) {
      return state.isLogin
    }
  },
  actions: {
    async LoginAction({ commit }, data) {
      try {
        const res = await axiosClient.post('/login', data)
        this.commit('auth/SET_TOKEN', { token: res.token })
        commit('SET_LOGIN')
      } catch (error) {
        console.log(error);
      }
    }
  },

  mutations: {
    SET_LOGIN(state) {
      return state.isLogin = !state.isLogin
    },
    CHECK_STATUS_BEGIN(state, payload) {
      return state.isLogin = payload
    }
  },
}

export default login
