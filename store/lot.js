export const state = () => ({
  lots: [],
});

export const mutations = {
  SET_LOTS (state, lots) {
    state.lots = lots
  },
};

export const actions = {
  async fetchLots ({ commit }) {
    try {
      const { data } = await this.$axios.get('/api/lot/')
      commit('SET_LOTS', data)
    } catch (error) {
      console.error(error)
    }
  },
}

