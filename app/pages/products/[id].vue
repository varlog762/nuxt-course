<script setup lang="ts">
definePageMeta({
  layout: 'products',
});
const { id } = useRoute().params;
</script>

<template>
  <div>
    <h2>Product {{ id }}</h2>
  </div>
</template>

<style scoped></style>
