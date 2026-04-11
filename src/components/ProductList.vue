<template>
  <div>
    <LoadingState v-if="loading" />
    <ErrorState v-else-if="error" :message="error" />
    <EmptyState v-else-if="filteredProducts.length === 0" />

    <v-row v-else>
      <v-col
        v-for="product in filteredProducts"
        :key="product.idMeal"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <ProductCard :product="product" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductCard from "./ProductCard.vue";
import LoadingState from "./LoadingState.vue";
import ErrorState from "./ErrorState.vue";
import EmptyState from "./EmptyState.vue";

export default {
  name: "ProductList",
  components: {
    ProductCard,
    LoadingState,
    ErrorState,
    EmptyState,
  },

  computed: {
    ...mapGetters("products", ["allProducts", "isLoading", "errorMessage"]),
    ...mapGetters("filters", ["selectedCategory"]),

    loading() {
      return this.isLoading;
    },

    error() {
      return this.errorMessage;
    },

    filteredProducts() {
      if (this.selectedCategory === "Todas") return this.allProducts;

      return this.allProducts.filter(
        (product) => product.strCategory === this.selectedCategory
      );
    },
  },

  mounted() {
    this.$store.dispatch("products/fetchProducts");
  },
};
</script>