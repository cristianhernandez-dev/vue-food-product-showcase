<template>
  <v-app-bar app density="comfortable" elevation="2">
    <v-container class="d-flex align-center justify-space-between flex-wrap ga-3">
      <v-toolbar-title class="title-text">
        Vue Food Product Showcase
      </v-toolbar-title>

      <div class="d-flex align-center flex-wrap ga-2 nav-actions">
        <router-link to="/" class="nav-link">
          {{ $t("nav.home") }}
        </router-link>

        <router-link to="/favorites" class="nav-link">
          {{ $t("nav.favorites") }}
        </router-link>

        <span class="lang-label">ES</span>

        <v-btn
          size="small"
          :variant="$i18n.locale === 'en' ? 'flat' : 'outlined'"
          @click="changeLanguage('en')"
        >
          EN
        </v-btn>
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
.title-text {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 700;
}

.nav-actions {
  min-width: 0;
}

.nav-link {
  text-decoration: none;
  color: inherit;
  font-weight: 600;
  padding: 4px 8px;
}

.lang-label {
  font-weight: 500;
}

@media (max-width: 600px) {
  .title-text {
    font-size: 1.1rem;
    max-width: 180px;
  }

  .nav-actions {
    width: 100%;
    justify-content: flex-end;
  }
}
</style>