<template>
  <v-container class="py-8">
    <LoadingState v-if="loading" />
    <ErrorState v-else-if="error" :message="error" />

    <v-row v-else-if="product" class="align-start">
      <v-col cols="12" md="6">
        <v-card elevation="4" rounded="lg">
          <v-img :src="product.strMealThumb" height="420" cover />
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <div class="d-flex align-center justify-space-between mb-4">
          <h1 class="text-h4 font-weight-bold">{{ product.strMeal }}</h1>

          <v-btn
            :prepend-icon="isFav ? 'mdi-heart' : 'mdi-heart-outline'"
            :color="isFav ? 'red' : 'grey'"
            variant="tonal"
            @click="toggleFavorite"
          >
            {{ isFav ? $t("buttons.saved") : $t("buttons.favorite") }}
          </v-btn>
        </div>

        <v-chip class="mr-2 mb-2" color="primary" variant="outlined">
          {{ translatedCategory }}
        </v-chip>

        <v-chip class="mb-2" color="secondary" variant="outlined">
          {{ translatedArea }}
        </v-chip>

        <v-card class="mt-4 pa-4" elevation="2" rounded="lg">
          <h2 class="text-h6 mb-3">{{ $t("catalog.description") }}</h2>
          <p class="text-body-1 description-text">
            {{ product.strInstructions }}
          </p>
        </v-card>

        <div class="mt-6 d-flex ga-3">
          <v-btn color="primary" @click="$router.push('/')">
            {{ $t("buttons.back") }}
          </v-btn>

          <v-btn
            v-if="product.strYoutube"
            color="red-darken-1"
            variant="outlined"
            :href="product.strYoutube"
            target="_blank"
          >
            {{ $t("buttons.video") }}
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import LoadingState from "../components/LoadingState.vue";
import ErrorState from "../components/ErrorState.vue";

export default {
  name: "ProductDetailView",
  components: {
    LoadingState,
    ErrorState,
  },

  computed: {
    ...mapGetters("products", ["selectedProduct", "isLoading", "errorMessage"]),

    product() {
      return this.selectedProduct;
    },

    loading() {
      return this.isLoading;
    },

    error() {
      return this.errorMessage;
    },

    isFav() {
      if (!this.product) return false;
      return this.$store.getters["favorites/isFavorite"](this.product.idMeal);
    },

    translatedCategory() {
      if (!this.product) return "";
      return this.$t(`categories.${this.product.strCategory}`);
    },

    translatedArea() {
      if (!this.product) return "";
      return this.$t(`areas.${this.product.strArea}`);
    },
  },

  mounted() {
    this.$store.dispatch("products/fetchProductById", this.$route.params.id);
  },

  methods: {
    toggleFavorite() {
      this.$store.dispatch("favorites/toggleFavorite", this.product);
    },
  },
};
</script>

<style scoped>
.description-text {
  line-height: 1.7;
}
</style>