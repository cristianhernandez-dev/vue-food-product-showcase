<template>
  <div class="mb-6">
    <v-select
      :label="$t('catalog.filter')"
      :items="translatedCategories"
      item-title="label"
      item-value="value"
      v-model="selected"
      variant="outlined"
      density="comfortable"
      prepend-inner-icon="mdi-filter-variant"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CategoryFilter",

  computed: {
    ...mapGetters("products", ["allCategories"]),

    translatedCategories() {
      return this.allCategories.map((category) => ({
        value: category,
        label: this.translateCategory(category),
      }));
    },

    selected: {
      get() {
        return this.$store.getters["filters/selectedCategory"];
      },
      set(value) {
        this.$store.dispatch("filters/setCategory", value);
      },
    },
  },

  mounted() {
    this.$store.dispatch("products/fetchCategories");
  },

  methods: {
    translateCategory(category) {
      if (category === "Todas") return this.$t("categories.All");
      return this.$t(`categories.${category}`);
    },
  },
};
</script>