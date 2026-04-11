<template>
  <v-container class="py-6">
    <h1 class="text-h4 mb-4">{{ $t("catalog.title") }}</h1>
    <CategoryFilter />
    <ProductList />
  </v-container>
</template>

<script>
import CategoryFilter from "../components/CategoryFilter.vue";
import ProductList from "../components/ProductList.vue";

export default {
  name: "HomeView",
  components: {
    CategoryFilter,
    ProductList,
  },
};
</script>