import { i18n } from "../../i18n";

export default {
  namespaced: true,

  state: () => ({
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
    snackbar: {
      show: false,
      text: "",
    },
  }),

  getters: {
    favoriteItems: (state) => state.favorites,
    isFavorite: (state) => (id) =>
      state.favorites.some((item) => item.idMeal === id),
  },

  mutations: {
    ADD_FAVORITE(state, product) {
      state.favorites.push(product);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },

    REMOVE_FAVORITE(state, id) {
      state.favorites = state.favorites.filter((item) => item.idMeal !== id);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },

    SHOW_SNACKBAR(state, text) {
      state.snackbar.text = text;
      state.snackbar.show = true;
    },

    HIDE_SNACKBAR(state) {
      state.snackbar.show = false;
    },
  },

  actions: {
    toggleFavorite({ state, commit }, product) {
      const exists = state.favorites.some((item) => item.idMeal === product.idMeal);

      if (exists) {
        commit("REMOVE_FAVORITE", product.idMeal);
        commit("SHOW_SNACKBAR", i18n.global.t("messages.removed"));
      } else {
        commit("ADD_FAVORITE", product);
        commit("SHOW_SNACKBAR", i18n.global.t("messages.added"));
      }

      setTimeout(() => {
        commit("HIDE_SNACKBAR");
      }, 2000);
    },
  },
};