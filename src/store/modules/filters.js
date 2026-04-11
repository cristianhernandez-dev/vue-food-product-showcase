export default {
  namespaced: true,

  state: () => ({
    selectedCategory: "Todas",
  }),

  getters: {
    selectedCategory: (state) => state.selectedCategory,
  },

  mutations: {
    SET_CATEGORY(state, category) {
      state.selectedCategory = category;
    },
  },

  actions: {
    setCategory({ commit }, category) {
      commit("SET_CATEGORY", category);
    },
  },
};