<script setup lang="ts"></script>

<template>
  <div>
    <header>
      <nav>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped></style>
