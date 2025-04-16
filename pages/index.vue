<script setup lang="ts">
useSeoMeta({
  // Заголовок страницы (title в браузере и сниппете Google)
  title: 'Home - Nuxt Course',

  // Мета-описание страницы (для SEO и сниппета в Google)
  description:
    'Welcome to our Nuxt course homepage. Learn everything about building modern web apps with Nuxt.',

  // Open Graph заголовок (для предпросмотра в соцсетях, например Facebook)
  ogTitle: 'Home - Nuxt Course',

  // Open Graph описание (отображается при публикации ссылки в соцсетях)
  ogDescription:
    'Explore our Nuxt course and take your frontend skills to the next level.',

  // Open Graph URL (обычно соответствует URL страницы)
  ogUrl: 'https://yourdomain.com/',

  // Open Graph изображение (превьюшная картинка при расшаривании страницы)
  ogImage: 'https://yourdomain.com/images/home-preview.png',

  // Twitter Card тип (для предпросмотра в Twitter)
  twitterCard: 'summary_large_image',

  // Twitter заголовок
  twitterTitle: 'Home - Nuxt Course',

  // Twitter описание
  twitterDescription:
    'Join our Nuxt course and start building full-featured web apps.',

  // Twitter изображение
  twitterImage: 'https://yourdomain.com/images/home-twitter.png',
});
</script>

<template>
  <div>
    <div>Main page</div>
    <h1>Hello world</h1>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  @include Title;
  color: $primary;
}
</style>
