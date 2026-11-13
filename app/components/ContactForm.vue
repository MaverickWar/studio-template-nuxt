<script setup lang="ts">
// Sends the form to server/api/contact.post.ts, which checks it again on the server.
type Field = 'name' | 'email' | 'message'
const form = reactive({ name: '', email: '', message: '' })
const errors = ref<Partial<Record<Field, string>>>({})
const status = ref<'idle' | 'sending' | 'sent' | 'failed'>('idle')

const rules: Record<Field, (v: string) => string | undefined> = {
  name: (v) => (v.trim() ? undefined : 'Please add your name.'),
  email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? undefined : 'Please add an email address we can reply to.'),
  message: (v) => (v.trim() ? undefined : 'Please tell us a little about what you need.'),
}
// Clear a field's message as soon as it is fixed (while typing), so nothing jumps when Send is pressed.
function recheck(f: Field) {
  if (errors.value[f]) errors.value = { ...errors.value, [f]: rules[f](form[f]) }
}

async function send() {
  const found = Object.fromEntries((Object.keys(rules) as Field[]).map((f) => [f, rules[f](form[f])]).filter(([, e]) => e))
  errors.value = found
  if (Object.keys(found).length) {
    document.getElementById(Object.keys(found)[0]!)?.focus()
    return
  }
  status.value = 'sending'
  try {
    await $fetch('/api/contact', { method: 'POST', body: form })
    Object.assign(form, { name: '', email: '', message: '' })
    status.value = 'sent'
  } catch {
    status.value = 'failed'
  }
}
</script>

<template>
  <div class="card">
    <form id="contact-form" novalidate @submit.prevent="send">
      <div class="two">
        <div class="field">
          <label for="name">Your name</label>
          <input id="name" v-model="form.name" class="input" type="text" autocomplete="name" :aria-invalid="!!errors.name" aria-describedby="name-error" @input="recheck('name')">
          <span v-if="errors.name" id="name-error" class="error">{{ errors.name }}</span>
        </div>
        <div class="field">
          <label for="email">Email</label>
          <input id="email" v-model="form.email" class="input" type="email" autocomplete="email" :aria-invalid="!!errors.email" aria-describedby="email-error" @input="recheck('email')">
          <span v-if="errors.email" id="email-error" class="error">{{ errors.email }}</span>
        </div>
      </div>
      <div class="field">
        <label for="message">Message</label>
        <textarea id="message" v-model="form.message" class="input" :aria-invalid="!!errors.message" aria-describedby="message-error" @input="recheck('message')" />
        <span v-if="errors.message" id="message-error" class="error">{{ errors.message }}</span>
      </div>
      <div><button class="btn btn-primary" type="submit" :disabled="status === 'sending'">{{ status === 'sending' ? 'Sending…' : 'Send message' }}</button></div>
      <div v-if="status === 'sent'" id="form-sent" class="notice" role="status">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" /></svg>
        <p><strong>Thanks, that's sent.</strong> <span class="muted">It reached server/api/contact.post.ts. Send it on to your inbox from there.</span></p>
      </div>
      <p v-if="status === 'failed'" class="error" role="alert">That didn't send. Please try again in a moment.</p>
    </form>
  </div>
</template>
