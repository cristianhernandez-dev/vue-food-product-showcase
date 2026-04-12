<template>
  <v-app-bar app density="comfortable" elevation="2" class="px-2">
    <v-container class="d-flex align-center justify-space-between">
      <v-toolbar-title class="title-text">
        <span class="d-none d-sm-inline">Vue Food Product Showcase</span>
        <span class="d-sm-none">Vue Food</span>
      </v-toolbar-title>

      <!-- Desktop -->
      <div class="d-none d-sm-flex align-center ga-2 nav-actions">
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

      <!-- Mobile -->
      <div class="d-flex d-sm-none">
        <v-menu location="bottom end">
          <template #activator="{ props }">
            <v-btn
              icon="mdi-menu"
              variant="text"
              v-bind="props"
            />
          </template>

          <v-list min-width="180">
            <v-list-item @click="goTo('/')">
              <v-list-item-title>{{ $t("nav.home") }}</v-list-item-title>
            </v-list-item>

            <v-list-item @click="goTo('/favorites')">
              <v-list-item-title>{{ $t("nav.favorites") }}</v-list-item-title>
            </v-list-item>

            <v-divider />

            <v-list-item @click="changeLanguage('es')">
              <v-list-item-title>Español</v-list-item-title>
            </v-list-item>

            <v-list-item @click="changeLanguage('en')">
              <v-list-item-title>English</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
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
    goTo(path) {
      this.$router.push(path);
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

.nav-link {
  text-decoration: none;
  color: inherit;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 2px 6px;
}

.lang-label {
  font-size: 0.8rem;
  opacity: 0.7;
}
</style>