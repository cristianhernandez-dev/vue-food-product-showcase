<template>
  <v-app-bar app density="comfortable" elevation="2" class="px-2">
    
    <v-container class="d-flex align-center justify-space-between flex-nowrap">
      
      <!-- Título responsive -->
      <v-toolbar-title class="title-text">
        <span class="d-none d-sm-inline">
          Vue Food Product Showcase
        </span>
        <span class="d-sm-none">
          Vue Food
        </span>
      </v-toolbar-title>

      <!-- Navegación -->
      <div class="d-flex align-center ga-1 nav-actions">
        
        <router-link to="/" class="nav-link">
          {{ $t("nav.home") }}
        </router-link>

        <router-link to="/favorites" class="nav-link">
          {{ $t("nav.favorites") }}
        </router-link>

        <span class="lang-label">ES</span>

        <v-btn
          size="x-small"
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
  font-weight: 700;
  font-size: 1rem;
  white-space: nowrap;
}

/* Links */
.nav-link {
  text-decoration: none;
  color: inherit;
  font-size: 0.85rem;
  font-weight: 500;
  padding: 2px 6px;
}

/* Idioma */
.lang-label {
  font-size: 0.75rem;
  opacity: 0.7;
}

/* Ajustes móvil */
@media (max-width: 600px) {
  .title-text {
    max-width: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .nav-actions {
    gap: 4px;
  }
}
</style>