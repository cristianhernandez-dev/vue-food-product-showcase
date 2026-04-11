<template>
  <v-app-bar app elevation="2">
    <v-container class="d-flex align-center justify-space-between">
      <h2 class="text-h6 text-sm-h5">Vue Food Product Showcase</h2>

      <div class="d-flex align-center ga-4">
        <router-link to="/" class="nav-link">
          {{ $t("nav.home") }}
        </router-link>

        <router-link to="/favorites" class="nav-link">
          {{ $t("nav.favorites") }}
        </router-link>

        <div class="d-flex ga-2">
          <v-btn
            size="small"
            :variant="$i18n.locale === 'es' ? 'flat' : 'outlined'"
            @click="changeLanguage('es')"
          >
            ES
          </v-btn>

          <v-btn
            size="small"
            :variant="$i18n.locale === 'en' ? 'flat' : 'outlined'"
            @click="changeLanguage('en')"
          >
            EN
          </v-btn>
        </div>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppHeader",
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
      localStorage.setItem("lang", lang);
    },
  },
};
</script>

<style scoped>
.nav-link {
  text-decoration: none;
  color: inherit;
  font-weight: 600;
}
</style>