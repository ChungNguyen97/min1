import axiosClient from "@/core/api"

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
    async loginAction({ commit }, data = {}) {
      try {
        const res = await axiosClient.post('/login', data)
        this.commit('auth/SET_TOKEN', { token: res.token })
        commit('SET_LOGIN', true)
      } catch (error) {
        console.log(error);
      }
    },
    async logoutAction({ commit }) {
      try {
        const res = await axiosClient.post('/logout')
        if (res.message === 'Logout successfully') {
          this.commit('auth/SET_TOKEN', { token: '' })
          commit('SET_LOGIN', false)
        }
      } catch (error) {
        console.log(error);
      }
    }
  },

  mutations: {
    SET_LOGIN(state, data) {
      state.isLogin = data
    },
    CHECK_STATUS_BEGIN(state, payload) {
      return state.isLogin = payload
    },

  },
}

export default login
