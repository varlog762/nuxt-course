// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  modules: [
    // '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'dayjs-nuxt',
    'nuxt-typed-router',
  ],

  fonts: {
    families: [{ name: 'montserrat', provider: 'google' }],
  },
  css: ['/assets/scss/global.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "/assets/scss/_vars.scss" as *;
          @use "/assets/scss/_mixins.scss" as *;
          `,
        },
      },
    },
  },
});
