<script setup lang="ts">
import type { ProductInterface } from '~/types/product.interface';

definePageMeta({
  layout: 'products',
});

const { data: products } = await useFetch<ProductInterface[]>(
  `${import.meta.env.VITE_API_URL}/products`
);
</script>

<template>
  <div>
    <div v-if="products" class="grid grid-cols-4 gap-5">
      <div v-for="product in products" :key="product.id">
        {{ product.id }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
