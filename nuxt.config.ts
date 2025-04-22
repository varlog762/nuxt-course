// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'dayjs-nuxt',
    'nuxt-typed-router',
  ],
  future: {
    compatibilityVersion: 4,
  },
  fonts: {
    families: [{ name: 'montserrat', provider: 'google' }],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
