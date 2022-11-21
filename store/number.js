export const state = () => ({
  numbers: [],
});

export const mutations = {
  SET_NUMBERS (state, numbers) {
    state.numbers = numbers
  },
};

export const actions = {
  async fetchNumbers ({ commit }) {
    if (this.$auth.loggedIn) {
      try {
        const { data } = await this.$axios.get('/api/number/')
        commit('SET_NUMBERS', data)
      } catch (error) {
        console.error(error)
      }
    }
  },
}

