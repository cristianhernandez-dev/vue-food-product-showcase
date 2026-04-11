<template>
  <v-container class="py-6">
    <h1 class="text-h4 mb-4">{{ $t("nav.favorites") }}</h1>

    <v-row v-if="favorites.length">
      <v-col
        v-for="product in favorites"
        :key="product.idMeal"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <ProductCard :product="product" />
      </v-col>
    </v-row>

    <EmptyState v-else />
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import ProductCard from "../components/ProductCard.vue";
import EmptyState from "../components/EmptyState.vue";

export default {
  name: "FavoritesView",
  components: {
    ProductCard,
    EmptyState,
  },

  computed: {
    ...mapGetters("favorites", ["favoriteItems"]),
    favorites() {
      return this.favoriteItems;
    },
  },
};
</script>