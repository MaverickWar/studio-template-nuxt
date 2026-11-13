<script setup lang="ts">
// Colours, fonts and corners come from design/tokens.json (Universal App Studio writes it).
import { fontsHref, projectName, themeCss } from '../design/adapters/web/studio-theme'

useHead({
  title: projectName,
  htmlAttrs: { lang: 'en' },
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'stylesheet', href: fontsHref },
  ],
  style: [{ innerHTML: themeCss }],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
