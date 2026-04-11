<template>
  <div class="text-center py-10">
    <v-progress-circular indeterminate size="56" width="5" color="primary" />
    <p class="mt-4 text-body-1">{{ $t("messages.loading") }}</p>
  </div>
</template>

<script>
export default {
  name: "LoadingState",
};
</script>