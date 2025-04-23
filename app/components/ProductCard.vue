<script setup lang="ts">
import type { ProductInterface } from '~/types/product.interface';

defineProps<{
  product: ProductInterface;
}>();
</script>

<template>
  <div class="card text-center">
    <img :src="product.image" alt="Product photo" class="thumb" />
    <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
    <NuxtLink :to="`/products/${product.id}`">
      <p class="btn my-4">View Details</p>
    </NuxtLink>
  </div>
</template>

<style scoped>
.thumb {
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}
</style>
