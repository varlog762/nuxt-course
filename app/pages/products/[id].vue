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
  <div>
    <h2>Product {{ id }}</h2>
    <div>
      <h3>{{ product?.title }}</h3>
      <p>{{ product?.price }}</p>
      <div>
        <img :src="product?.image" alt="Product photo" />
      </div>
      <div>{{ product?.description }}</div>
    </div>
  </div>
</template>

<style scoped></style>
