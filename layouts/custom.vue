<script setup lang="ts">
definePageMeta({
  layout: 'custom',
});
</script>

<template>
  <div>
    <header>
      <NuxtLink to="/">Back to main</NuxtLink>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<style lang="scss" scoped></style>
