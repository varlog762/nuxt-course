<script setup lang="ts">
import type { ProductInterface } from '~/types/product.interface';

definePageMeta({
  layout: 'products',
});
const { id } = useRoute().params;
const uri = `${import.meta.env.VITE_API_URL}/products/${id}`;

const { data: product } = await useFetch<ProductInterface>(uri);
</script>

<template>
  <div v-if="product">
    <ProductDetails :product />
  </div>
</template>

<style scoped></style>
