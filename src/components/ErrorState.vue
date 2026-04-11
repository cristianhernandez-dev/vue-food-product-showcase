<template>
  <v-alert type="error" variant="tonal">
    {{ message }}
  </v-alert>
</template>

<script>
export default {
  name: "ErrorState",
  props: {
    message: {
      type: String,
      default: "Ha ocurrido un error.",
    },
  },
};
</script>