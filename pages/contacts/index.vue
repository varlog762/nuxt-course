<script setup lang="ts">
definePageMeta({
  layout: 'custom',
});
useSeoMeta({
  // Заголовок страницы (title в браузере и сниппете Google)
  title: 'Contacts - Nuxt Course',

  // Мета-описание страницы (для SEO и сниппета в Google)
  description:
    'Get in touch with us through our contact page. We would love to hear from you.',

  // Open Graph заголовок (для предпросмотра в соцсетях, например Facebook)
  ogTitle: 'Contacts - Nuxt Course',

  // Open Graph описание (отображается при публикации ссылки в соцсетях)
  ogDescription:
    'Find out how to contact our team and ask your questions about the Nuxt course.',

  // Open Graph URL (обычно соответствует URL страницы)
  ogUrl: 'https://yourdomain.com/contacts',

  // Open Graph изображение (превьюшная картинка при расшаривании страницы)
  ogImage: 'https://yourdomain.com/images/contacts-preview.png',

  // Twitter Card тип (для предпросмотра в Twitter)
  twitterCard: 'summary_large_image',

  // Twitter заголовок
  twitterTitle: 'Contacts - Nuxt Course',

  // Twitter описание
  twitterDescription:
    'Reach out to us with your inquiries about the Nuxt Course.',

  // Twitter изображение
  twitterImage: 'https://yourdomain.com/images/contacts-twitter.png',
});
</script>

<template>
  <div>Contacts</div>
</template>

<style scoped>
a {
  padding-bottom: 0 10px;
}
</style>
