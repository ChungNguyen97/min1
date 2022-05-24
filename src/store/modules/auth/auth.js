const account = {
  state: {
    accessToken: null,
    user: {
      email: '',
      password: ''
    }
  },
  getters: {
    getAccessToken(state) {
      return state.accessToken
    }
  },

  mutations: {
    SET_TOKEN(state, { token, data }) {
      state.accessToken = token,
        state.user = data
    },
  }
}
export default account