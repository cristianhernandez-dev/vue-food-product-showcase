<template>
  <v-card class="h-100 product-card" elevation="4">
    <v-img :src="product.strMealThumb" height="220" cover />

    <v-card-title class="text-wrap">
      {{ product.strMeal }}
    </v-card-title>

    <v-card-subtitle>
      {{ translatedCategory }}
    </v-card-subtitle>

    <v-card-actions class="px-4 pb-4">
      <v-btn color="primary" variant="text" @click="goToDetail">
        {{ $t("buttons.detail") }}
      </v-btn>

      <v-btn
        :prepend-icon="isFav ? 'mdi-heart' : 'mdi-heart-outline'"
        :color="isFav ? 'red' : 'grey'"
        variant="tonal"
        @click="toggleFavorite"
      >
        {{ isFav ? $t("buttons.saved") : $t("buttons.favorite") }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "ProductCard",

  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  computed: {
    isFav() {
      return this.$store.getters["favorites/isFavorite"](this.product.idMeal);
    },

    translatedCategory() {
      return this.$t(`categories.${this.product.strCategory}`);
    },
  },

  methods: {
    goToDetail() {
      this.$router.push(`/product/${this.product.idMeal}`);
    },
    toggleFavorite() {
      this.$store.dispatch("favorites/toggleFavorite", this.product);
    },
  },
};
</script>

<style scoped>
.product-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.product-card:hover {
  transform: translateY(-4px);
}
</style>