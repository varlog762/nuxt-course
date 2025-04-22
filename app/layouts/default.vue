<script setup lang="ts"></script>

<template>
  <div>
    <header class="p-5 min-h-[50px]">
      <nav>
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <main class="p-5">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
