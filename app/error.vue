<script setup lang="ts">
defineProps<{
  error: {
    statusCode: string;
    message: string;
  };
}>();
</script>

<template>
  <div class="mt-7 max-w-sm mx-auto text-center card">
    <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
    <p class="mt-7 text-6xl">Ooops...</p>
    <p class="mt-7">{{ error.message }}</p>
  </div>
</template>

<style scoped></style>
