<script setup lang="ts"></script>

<template>
  <div>
    <header>
      <NuxtLink to="/about" />
      <NuxtLink to="/contacts" />
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<style lang="scss" scoped></style>
