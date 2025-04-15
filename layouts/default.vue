<script setup lang="ts"></script>

<template>
  <div>
    <header>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/contacts">Contacts</NuxtLink>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
header {
  margin-bottom: 10px;
}

a {
  padding-right: 10px;
}
</style>
