<template>
  <v-container class="py-8 px-4">
    <h1 class="text-h5 text-md-h4 font-weight-bold mb-4">
      {{ $t("catalog.title") }}
    </h1>
<CategoryFilter class="mb-4" />
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