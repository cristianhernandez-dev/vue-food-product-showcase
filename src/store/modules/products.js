import api from "../../services/api";

export default {
  namespaced: true,

  state: () => ({
    products: [],
    categories: [],
    selectedProduct: null,
    loading: false,
    error: null,
  }),

  getters: {
    allProducts: (state) => state.products,
    allCategories: (state) => state.categories,
    selectedProduct: (state) => state.selectedProduct,
    isLoading: (state) => state.loading,
    errorMessage: (state) => state.error,
  },

  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    SET_SELECTED_PRODUCT(state, product) {
      state.selectedProduct = product;
    },
    SET_LOADING(state, value) {
      state.loading = value;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
  },

  actions: {
    async fetchProducts({ commit }) {
      commit("SET_LOADING", true);
      commit("SET_ERROR", null);

      try {
        const response = await api.get("/search.php?s=");
        commit("SET_PRODUCTS", response.data.meals || []);
      } catch (error) {
        commit("SET_ERROR", "No se pudieron cargar los productos.");
        commit("SET_PRODUCTS", []);
      } finally {
        commit("SET_LOADING", false);
      }
    },

    async fetchCategories({ commit }) {
      try {
        const response = await api.get("/list.php?c=list");
        const categories = response.data.meals
          ? response.data.meals.map((item) => item.strCategory)
          : [];
        commit("SET_CATEGORIES", ["Todas", ...categories]);
      } catch (error) {
        commit("SET_CATEGORIES", ["Todas"]);
      }
    },

    async fetchProductById({ commit }, id) {
      commit("SET_LOADING", true);
      commit("SET_ERROR", null);

      try {
        const response = await api.get(`/lookup.php?i=${id}`);
        const product = response.data.meals ? response.data.meals[0] : null;
        commit("SET_SELECTED_PRODUCT", product);
      } catch (error) {
        commit("SET_ERROR", "No se pudo cargar el detalle del producto.");
        commit("SET_SELECTED_PRODUCT", null);
      } finally {
        commit("SET_LOADING", false);
      }
    },
  },
};