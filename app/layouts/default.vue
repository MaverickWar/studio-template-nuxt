<script setup lang="ts">
import { projectName } from '../../design/adapters/web/studio-theme'

const menuOpen = ref(false)
const year = new Date().getFullYear()
const closeOnEscape = (e: KeyboardEvent) => e.key === 'Escape' && (menuOpen.value = false)
onMounted(() => window.addEventListener('keydown', closeOnEscape))
onUnmounted(() => window.removeEventListener('keydown', closeOnEscape))
</script>

<template>
  <div>
    <a class="skip" href="#main">Skip to content</a>
    <header class="site-header">
      <div class="wrap">
        <a class="brand" href="#top" aria-label="Home"><span class="mark" aria-hidden="true">{{ projectName[0] }}</span><span>{{ projectName }}</span></a>
        <button class="btn btn-ghost btn-sm menu-button" type="button" :aria-expanded="menuOpen" aria-controls="site-nav" @click="menuOpen = !menuOpen">{{ menuOpen ? 'Close' : 'Menu' }}</button>
        <nav id="site-nav" class="site-nav" aria-label="Main" :data-open="menuOpen" @click="menuOpen = false">
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
          <a href="#contact">Contact</a>
          <a class="btn btn-primary btn-sm" href="#contact">Get in touch</a>
        </nav>
      </div>
    </header>
    <main id="main">
      <slot />
    </main>
    <footer class="site-footer">
      <div class="wrap">
        <span class="muted">© {{ year }} {{ projectName }}</span>
        <nav aria-label="Footer"><a href="#features">Features</a><a href="#how">How it works</a><a href="#contact">Contact</a></nav>
      </div>
    </footer>
  </div>
</template>
