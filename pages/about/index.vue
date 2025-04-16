<script setup lang="ts">
definePageMeta({
  layout: 'custom',
});

useSeoMeta({
  // Заголовок страницы (title в браузере и сниппете Google)
  title: 'About Us - Nuxt Course',

  // Мета-описание страницы (для SEO и сниппета в Google)
  description: 'Learn more about our Nuxt course and team on this page.',

  // Open Graph заголовок (для предпросмотра в соцсетях, например Facebook)
  ogTitle: 'About Us - Nuxt Course',

  // Open Graph описание (отображается при публикации ссылки в соцсетях)
  ogDescription:
    'Discover what makes our Nuxt course unique and meet our instructors.',

  // Open Graph URL (обычно соответствует URL страницы)
  ogUrl: 'https://yourdomain.com/about',

  // Open Graph изображение (превьюшная картинка при расшаривании страницы)
  ogImage: 'https://yourdomain.com/images/about-preview.png',

  // Twitter Card тип (для предпросмотра в Twitter)
  twitterCard: 'summary_large_image',

  // Twitter заголовок
  twitterTitle: 'About Us - Nuxt Course',

  // Twitter описание
  twitterDescription:
    'Learn more about our Nuxt course and the team behind it.',

  // Twitter изображение
  twitterImage: 'https://yourdomain.com/images/about-twitter.png',
});
</script>

<template>
  <div><h1>About Us</h1></div>
</template>

<style lang="scss" scoped>
h1 {
  @include Title;
  color: $primary;
}
</style>
