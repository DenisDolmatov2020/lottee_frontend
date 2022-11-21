export const state = () => ({
  tracker: {}
})

export const mutations = {
  SET_TRACKER (state, payload) {
    state.tracker = payload.data
  }
}

export const actions = {
  async fetchTracker ({ commit }) {
    try {
      const response = await this.$axios.get('/api/tracker')
      commit('SET_TRACKER', response)

      if (response.status === 201) {
        this.$auth.fetchUser()
      }
    } catch (error) {
      console.error('Error fetch tracker', error)
    }
  }
}

