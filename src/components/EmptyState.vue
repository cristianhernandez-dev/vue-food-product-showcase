<template>
  <v-alert type="info" variant="tonal">
    {{ $t("messages.empty") }}
  </v-alert>
</template>

<script>
export default {
  name: "EmptyState",
};
</script>