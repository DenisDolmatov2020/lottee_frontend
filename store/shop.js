export const state = () => ({
  shops: [],
});

export const mutations = {
  SET_SHOPS (state, shops) {
    state.shops = shops
  },
};

export const actions = {
  async fetchShops ({ commit }) {
    try {
      const { data } = await this.$axios.get('/api/shop/')
      commit('SET_SHOPS', data)
    } catch (error) {
      console.error(error)
    }
  },
}
