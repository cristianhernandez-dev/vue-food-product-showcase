<template>
  <v-app>
    <div class="app-shell">
      <AppHeader />

      <v-main class="main-content">
        <router-view />
      </v-main>

      <AppFooter />

      <v-snackbar v-model="snackbar.show" :timeout="2200" color="success">
        {{ snackbar.text }}
      </v-snackbar>
    </div>
  </v-app>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
  computed: {
    snackbar() {
      return this.$store.state.favorites.snackbar;
    },
  },
};
</script>

<style scoped>
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}
</style>