export const state = () => ({
  prizes: [],
});

export const mutations = {
  SET_PRIZES (state, prizes) {
    state.prizes = prizes
  },
};

export const actions = {
  async fetchPrizes ({ commit }) {
    if (this.$auth.loggedIn) {
      try {
        const prizes = await this.$axios.$get('/api/prize')
        commit('SET_PRIZES', prizes)
      } catch (error) {
        console.error(error)
      }
    }
  }
}

