const account = {
  namespaced: true,
  state: {
    accessToken: null,
    user: {
    }
  },
  getters: {
    getAccessToken(state) {
      return state.accessToken
    }
  },

  mutations: {
    SET_TOKEN(state, { token }) {
      state.accessToken = token
    },
  }
}
export default account